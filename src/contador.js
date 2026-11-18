// Contadores animados para los números destacados (.cifras).
// Cada número del texto arranca en 0 y sube hasta su valor final.
// Ej.: "+500" → +0 … +500   ·   "5 a 75+" → 0 a 0+ … 5 a 75+

const DURACION = 1800 // milisegundos

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

function preparar(numeros) {
  const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  numeros.forEach((el) => {
    el.dataset.final = el.textContent
    el.setAttribute('aria-label', el.textContent) // los lectores de pantalla leen el valor final
    if (!sinMovimiento) el.textContent = el.textContent.replace(/\d+/g, '0')
  })
  if (sinMovimiento) return

  if (!('IntersectionObserver' in window)) {
    numeros.forEach(animar)
    return
  }
  const obs = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((en) => {
        if (en.isIntersecting) {
          animar(en.target)
          obs.unobserve(en.target)
        }
      }),
    { threshold: 0.6 },
  )
  numeros.forEach((el) => obs.observe(el))
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
