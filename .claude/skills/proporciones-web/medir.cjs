#!/usr/bin/env node
// Mide una web en varias pantallas y avisa qué queda cortado o mal proporcionado.
//
// Uso:
//   node medir.cjs <url> [--hero "selector1,selector2"] [--capturas carpeta]
//
// Ejemplo:
//   node medir.cjs http://localhost:4173 --hero ".presentacion .acciones,.estado-linea" --capturas /tmp/medidas
//
// Necesita Playwright (npm i -D playwright && npx playwright install chromium).

const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')

const MEDIDAS = [
  { nombre: 'celular-chico', width: 360, height: 740, dpr: 2, movil: true },
  { nombre: 'celular', width: 390, height: 844, dpr: 3, movil: true },
  { nombre: 'tablet', width: 820, height: 1180, dpr: 2, movil: true },
  { nombre: 'notebook-baja', width: 1366, height: 650, dpr: 1, movil: false },
  { nombre: 'pc-zoom-150', width: 1280, height: 547, dpr: 1.5, movil: false },
  { nombre: 'pc-zoom-125', width: 1536, height: 700, dpr: 1.25, movil: false },
  { nombre: 'monitor', width: 1920, height: 950, dpr: 1, movil: false },
]

function leerArgs() {
  const args = process.argv.slice(2)
  const opciones = { url: null, hero: [], capturas: null }
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--hero') opciones.hero = args[++i].split(',').map((s) => s.trim()).filter(Boolean)
    else if (args[i] === '--capturas') opciones.capturas = args[++i]
    else if (!opciones.url) opciones.url = args[i]
  }
  if (!opciones.url) {
    console.error('Falta la dirección. Ejemplo: node medir.cjs http://localhost:4173 --hero ".acciones"')
    process.exit(2)
  }
  return opciones
}

async function medirUna(navegador, medida, opciones) {
  const contexto = await navegador.newContext({
    viewport: { width: medida.width, height: medida.height },
    deviceScaleFactor: medida.dpr,
    isMobile: medida.movil,
    hasTouch: medida.movil,
    reducedMotion: 'reduce', // muestra el estado final, sin animaciones a medias
  })
  const pagina = await contexto.newPage()
  const errores = []
  pagina.on('pageerror', (e) => errores.push(e.message))
  pagina.on('console', (m) => m.type() === 'error' && errores.push(m.text()))

  await pagina.goto(opciones.url, { waitUntil: 'networkidle' })
  await pagina.waitForTimeout(500)

  // Bajar por toda la página para que carguen las imágenes diferidas
  const alto = await pagina.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y < alto; y += 500) {
    await pagina.evaluate((v) => window.scrollTo(0, v), y)
    await pagina.waitForTimeout(40)
  }
  await pagina.evaluate(() => window.scrollTo(0, 0))
  await pagina.waitForTimeout(400)

  const datos = await pagina.evaluate(
    ({ hero, movil }) => {
      const resultado = {}
      resultado.scrollLateral = document.documentElement.scrollWidth > window.innerWidth + 1

      resultado.heroCortado = []
      for (const sel of hero) {
        const el = document.querySelector(sel)
        if (!el) {
          resultado.heroCortado.push(`${sel} (no existe)`)
          continue
        }
        const r = el.getBoundingClientRect()
        if (r.bottom > window.innerHeight) resultado.heroCortado.push(`${sel} (termina en ${Math.round(r.bottom)}px)`)
      }

      // Imágenes visibles que no cargaron (las copias decorativas ocultas no cuentan)
      resultado.imagenesRotas = [...document.images]
        .filter((i) => !i.closest('[aria-hidden="true"]'))
        .filter((i) => !(i.complete && i.naturalWidth > 0))
        .map((i) => i.currentSrc || i.src)

      // Áreas táctiles chicas (solo celular/tablet)
      resultado.tactilesChicos = []
      if (movil) {
        for (const el of document.querySelectorAll('a, button')) {
          const r = el.getBoundingClientRect()
          const visible = r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden'
          if (!visible || el.classList.contains('saltar') || el.closest('[aria-hidden="true"]')) continue
          if (r.height < 40 || r.width < 40) {
            const texto = (el.innerText || el.getAttribute('aria-label') || '').trim().slice(0, 30)
            resultado.tactilesChicos.push(`${texto || el.tagName} ${Math.round(r.width)}x${Math.round(r.height)}`)
          }
        }
      }
      return resultado
    },
    { hero: opciones.hero, movil: medida.movil },
  )

  if (opciones.capturas) {
    fs.mkdirSync(opciones.capturas, { recursive: true })
    await pagina.screenshot({ path: path.join(opciones.capturas, `${medida.nombre}.png`) })
  }
  await contexto.close()
  return { ...datos, errores }
}

;(async () => {
  const opciones = leerArgs()
  const navegador = await chromium.launch()
  let fallas = 0
  console.log(`Midiendo ${opciones.url}\n`)
  for (const medida of MEDIDAS) {
    const d = await medirUna(navegador, medida, opciones)
    const problemas = []
    if (d.scrollLateral) problemas.push('se desplaza hacia los costados')
    if (d.heroCortado.length) problemas.push(`inicio cortado: ${d.heroCortado.join(', ')}`)
    if (d.imagenesRotas.length) problemas.push(`${d.imagenesRotas.length} imagen(es) sin cargar`)
    if (d.tactilesChicos.length) problemas.push(`táctiles chicos: ${d.tactilesChicos.join(' | ')}`)
    if (d.errores.length) problemas.push(`errores: ${d.errores.slice(0, 3).join(' | ')}`)
    const ok = problemas.length === 0
    if (!ok) fallas++
    const etiqueta = `${medida.nombre} (${medida.width}x${medida.height})`.padEnd(30)
    console.log(`${ok ? '✅' : '❌'} ${etiqueta} ${ok ? 'OK' : problemas.join(' · ')}`)
  }
  await navegador.close()
  console.log(`\n${fallas === 0 ? 'Todo encaja en todas las pantallas.' : `${fallas} pantalla(s) con problemas.`}`)
  if (opciones.capturas) console.log(`Capturas en: ${opciones.capturas}`)
  process.exit(fallas === 0 ? 0 : 1)
})()
