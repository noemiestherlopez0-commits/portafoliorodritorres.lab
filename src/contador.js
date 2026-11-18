// Contadores animados para los números destacados (.cifras).
// Cada número del texto arranca en 0 y sube hasta su valor final.
// Ej.: "+500" → +0 … +500
//
// La cifra de edades ("5 a 75+") tiene su propia animación: el segundo número
// sube de a 1 desde 5 y cambia de letra según la edad (infantil, urbana,
// moderna) hasta llegar a 75 con números negros y un sombrero de tango.

const DURACION = 1800 // milisegundos

// Etapas de la cifra de edades: desde qué edad se usa cada estilo
const ETAPAS = [
  { desde: 75, clase: 'edad-tango' },
  { desde: 20, clase: 'edad-moderna' },
  { desde: 12, clase: 'edad-urbana' },
  { desde: 0, clase: 'edad-nino' },
]
const COLORES_NINO = ['#e63946', '#f08c00', '#2a9d8f', '#3a6fd8']
const FUENTES = ['700 1em Fredoka', '1em "Permanent Marker"', '700 1em Unbounded', '900 1em "Playfair Display"']

const SOMBRERO =
  '<svg class="sombrero" viewBox="0 0 64 34" aria-hidden="true">' +
  '<path class="sombrero-copa" d="M15 26 17.2 9.5C17.7 6 20.4 4 23.5 4c3 0 5.4 2.2 8.5 2.2S37.5 4 40.5 4c3.1 0 5.8 2 6.3 5.5L49 26c-5 2.2-11 3.2-17 3.2S20 28.2 15 26z"/>' +
  '<path class="sombrero-cinta" d="M16 19.5c5 1.7 10.5 2.5 16 2.5s11-.8 16-2.5l.7 5.2c-5 1.8-11 2.7-16.7 2.7s-11.7-.9-16.7-2.7z"/>' +
  '<path class="sombrero-ala" d="M1.5 26.5C1.5 23.6 15 21.6 32 21.6s30.5 2 30.5 4.9c0 3.2-13.6 6.3-30.5 6.3S1.5 29.7 1.5 26.5z"/>' +
  '</svg>'

function animar(el) {
  const final = el.dataset.final
  const partes = final.split(/(\d+)/) // separa números del resto del texto
  const inicio = performance.now()

  const paso = (ahora) => {
    const t = Math.min((ahora - inicio) / DURACION, 1)
    const suave = 1 - Math.pow(1 - t, 3) // arranca rápido y frena al final
    el.textContent = partes
      .map((p) => (/^\d+$/.test(p) ? Math.round(Number(p) * suave) : p))
      .join('')
    if (t < 1) requestAnimationFrame(paso)
  }
  requestAnimationFrame(paso)
}

// ── Cifra de edades ──
function etapa(n) {
  return ETAPAS.find((e) => n >= e.desde).clase
}

function pintarEdad(caja, n, fin) {
  const clase = etapa(n)
  const cambio = caja.dataset.etapa !== clase
  caja.dataset.etapa = clase
  caja.className = `edad ${clase}`
  const texto = fin ? `${n}+` : String(n)
  if (clase === 'edad-nino') {
    caja.innerHTML = [...texto]
      .map((d, i) => `<span style="color:${COLORES_NINO[(n + i) % COLORES_NINO.length]}">${d}</span>`)
      .join('')
  } else if (fin) {
    caja.innerHTML = `${n}<span class="edad-mas">+</span>${SOMBRERO}`
  } else {
    caja.textContent = texto
  }
  if (cambio) {
    caja.classList.remove('edad-salto')
    void caja.offsetWidth // reinicia la animación de "salto"
    caja.classList.add('edad-salto')
  }
}

// Cuánto espera entre un número y el siguiente: lento al principio y al final
function espera(n, hasta) {
  if (n < 12) return 300
  if (n < 20) return 230
  if (n >= hasta - 6) return 110 + (n - (hasta - 6)) * 55
  return 42
}

function prepararEdades(el, desde, hasta, sinMovimiento) {
  el.classList.add('edades')
  el.innerHTML = `<span class="edades-desde">${desde} a </span><span class="edad"></span>`
  const caja = el.querySelector('.edad')
  caja.setAttribute('aria-hidden', 'true')

  if (sinMovimiento) {
    pintarEdad(caja, hasta, true)
    return null
  }
  pintarEdad(caja, desde, false)

  return () => {
    let n = desde
    const siguiente = () => {
      n += 1
      const fin = n >= hasta
      pintarEdad(caja, n, fin)
      if (!fin) setTimeout(siguiente, espera(n, hasta))
    }
    // espera (como mucho 1,5 s) a que carguen las letras de cada etapa
    const fuentes = document.fonts
      ? Promise.race([
          Promise.all(FUENTES.map((f) => document.fonts.load(f, '0123456789+'))),
          new Promise((r) => setTimeout(r, 1500)),
        ])
      : Promise.resolve()
    fuentes.catch(() => {}).then(() => setTimeout(siguiente, espera(desde, hasta)))
  }
}

function preparar(numeros) {
  const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const animaciones = new Map()

  numeros.forEach((el) => {
    const texto = el.textContent.trim()
    el.dataset.final = texto
    el.setAttribute('aria-label', texto) // los lectores de pantalla leen el valor final
    const rango = texto.match(/^(\d+) a (\d+)\+$/)
    if (rango) {
      const inicio = prepararEdades(el, Number(rango[1]), Number(rango[2]), sinMovimiento)
      if (inicio) animaciones.set(el, inicio)
    } else if (!sinMovimiento) {
      el.textContent = texto.replace(/\d+/g, '0')
      animaciones.set(el, () => animar(el))
    }
  })
  if (sinMovimiento) return

  if (!('IntersectionObserver' in window)) {
    animaciones.forEach((iniciar) => iniciar())
    return
  }
  const obs = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((en) => {
        if (en.isIntersecting) {
          animaciones.get(en.target)?.()
          obs.unobserve(en.target)
        }
      }),
    { threshold: 0.6 },
  )
  animaciones.forEach((_, el) => obs.observe(el))
}

export function iniciarContadores() {
  const limite = performance.now() + 5000
  const buscar = () => {
    const numeros = document.querySelectorAll('.cifras dt')
    if (numeros.length) preparar(numeros)
    else if (performance.now() < limite) requestAnimationFrame(buscar)
  }
  requestAnimationFrame(buscar)
}
