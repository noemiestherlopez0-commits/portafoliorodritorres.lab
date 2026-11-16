import { useEffect, useState } from 'react'
import {
  perfil,
  redes,
  queHago,
  proyectos,
  experiencia,
  formacion,
  herramientas,
  disponible,
  personal,
} from './data.js'

/* ── Tema claro / oscuro ─────────────────────────────── */
function useTema() {
  const [tema, setTema] = useState(() => {
    try {
      return localStorage.getItem('tema') || null
    } catch {
      return null
    }
  })

  useEffect(() => {
    const raiz = document.documentElement
    if (tema) raiz.setAttribute('data-theme', tema)
    else raiz.removeAttribute('data-theme')
    try {
      if (tema) localStorage.setItem('tema', tema)
    } catch {
      /* sin almacenamiento: no pasa nada */
    }
  }, [tema])

  const alternar = () => {
    const oscuroAhora =
      tema === 'dark' ||
      (!tema && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setTema(oscuroAhora ? 'light' : 'dark')
  }

  return alternar
}

/* ── Piezas chicas ───────────────────────────────────── */
function Seccion({ id, numero, titulo, children }) {
  return (
    <section id={id} className="seccion" aria-labelledby={`${id}-titulo`}>
      <header className="seccion-cabecera">
        <span className="seccion-numero" aria-hidden="true">
          {numero}
        </span>
        <h2 id={`${id}-titulo`}>{titulo}</h2>
      </header>
      {children}
    </section>
  )
}

function Etiquetas({ items }) {
  return (
    <ul className="etiquetas">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

function Estado({ texto }) {
  const tipo = texto === 'Prototipo' ? 'proto' : 'ok'
  return (
    <span className={`estado estado-${tipo}`}>
      <span className="led" aria-hidden="true" />
      {texto}
    </span>
  )
}

/* Dibujo del hero: tres "componentes" (los tres roles)
   conectados por pistas de circuito a un chip central. */
function Circuito() {
  return (
    <figure className="circuito" aria-hidden="true">
      <svg viewBox="0 0 360 300" role="presentation">
        <g className="pistas">
          <path d="M60 60 H130 V120 H150" />
          <path d="M60 150 H150" />
          <path d="M60 240 H130 V180 H150" />
          <path d="M250 150 H310" />
        </g>
        <g className="nodos">
          <circle cx="60" cy="60" r="6" />
          <circle cx="60" cy="150" r="6" />
          <circle cx="60" cy="240" r="6" />
          <circle cx="310" cy="150" r="6" />
        </g>
        <g className="chip">
          <rect x="150" y="100" width="100" height="100" rx="10" />
          {[115, 135, 165, 185].map((y) => (
            <g key={y}>
              <line x1="142" y1={y} x2="150" y2={y} />
              <line x1="250" y1={y} x2="258" y2={y} />
            </g>
          ))}
          {[170, 190, 210, 230].map((x) => (
            <g key={x}>
              <line x1={x} y1="92" x2={x} y2="100" />
              <line x1={x} y1="200" x2={x} y2="208" />
            </g>
          ))}
          <text x="200" y="158" textAnchor="middle" className="chip-texto">
            RT
          </text>
        </g>
        <g className="rotulos">
          <text x="60" y="40" textAnchor="middle">DOCENCIA</text>
          <text x="60" y="130" textAnchor="middle">DESARROLLO</text>
          <text x="60" y="270" textAnchor="middle">COORD. TIC</text>
          <text x="310" y="130" textAnchor="middle">AULA</text>
        </g>
      </svg>
    </figure>
  )
}

/* ── Página ──────────────────────────────────────────── */
export default function App() {
  const alternarTema = useTema()
  const linkedin = redes.find((r) => r.nombre === 'LinkedIn')

  return (
    <>
      <a href="#contenido" className="saltar">
        Saltar al contenido
      </a>

      <header className="barra">
        <div className="contenedor barra-interior">
          <a href="#inicio" className="marca">
            {perfil.marca}
          </a>
          <nav aria-label="Secciones">
            <a href="#proyectos">Proyectos</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button
            type="button"
            className="boton-tema"
            onClick={alternarTema}
            aria-label="Cambiar entre modo claro y oscuro"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 7a5 5 0 0 0 0 10z" className="mitad" />
            </svg>
          </button>
        </div>
      </header>

      <main id="contenido" className="contenedor">
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="hero-texto">
            <p className="disponibilidad">
              <span className="led led-vivo" aria-hidden="true" />
              {perfil.estado}
            </p>
            <h1>{perfil.nombre}</h1>
            <p className="roles">{perfil.roles.join(' · ')}</p>
            <p className="frase">{perfil.frase}</p>
            <p className="bajada">{perfil.bajada}</p>
            <p className="ubicacion">{perfil.ubicacion}</p>
            <div className="acciones">
              <a href="#proyectos" className="boton boton-principal">
                Ver proyectos
              </a>
              {linkedin && (
                <a href={linkedin.url} className="boton" target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>
          <Circuito />
        </section>

        {/* 01 */}
        <Seccion id="que-hago" numero="01" titulo="Lo que hago">
          <div className="grilla-3">
            {queHago.map((q) => (
              <article key={q.titulo} className="tarjeta">
                <h3>{q.titulo}</h3>
                <p>{q.texto}</p>
                <Etiquetas items={q.detalle} />
              </article>
            ))}
          </div>
        </Seccion>

        {/* 02 */}
        <Seccion id="proyectos" numero="02" titulo="Proyectos">
          <div className="grilla-2">
            {proyectos.map((p) => (
              <article key={p.nombre} className="tarjeta proyecto">
                <Estado texto={p.estado} />
                <h3>{p.nombre}</h3>
                <p>{p.texto}</p>
                <Etiquetas items={p.tecnologias} />
              </article>
            ))}
          </div>
        </Seccion>

        {/* 03 */}
        <Seccion id="experiencia" numero="03" titulo="Experiencia y formación">
          <div className="experiencia">
            <ol className="linea">
              {experiencia.map((e) => (
                <li key={e.lugar}>
                  <h3>{e.lugar}</h3>
                  <p className="cargos">{e.roles.join(' · ')}</p>
                  {e.nota && <p className="nota">{e.nota}</p>}
                </li>
              ))}
            </ol>
            <aside className="tarjeta formacion" aria-label="Formación">
              <p className="rotulo">Formación</p>
              {formacion.map((f) => (
                <div key={f.titulo}>
                  <h3>{f.titulo}</h3>
                  <p>{f.lugar}</p>
                  <p className="en-curso">{f.estado}</p>
                </div>
              ))}
            </aside>
          </div>
        </Seccion>

        {/* 04 */}
        <Seccion id="herramientas" numero="04" titulo="Herramientas">
          <div className="grilla-3">
            {herramientas.map((h) => (
              <div key={h.grupo}>
                <p className="rotulo">{h.grupo}</p>
                <Etiquetas items={h.items} />
              </div>
            ))}
          </div>
        </Seccion>

        {/* 05 */}
        <Seccion id="fuera-del-aula" numero="05" titulo="Fuera del aula">
          <div className="personal">
            <ul className="personal-texto">
              {personal.texto.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div>
              <p className="rotulo">Pasiones</p>
              <Etiquetas items={personal.pasiones} />
              <p className="rotulo rotulo-espacio">Cosas que amo</p>
              <p className="cosas">{personal.cosasQueAmo.join(' · ')}</p>
            </div>
          </div>
        </Seccion>

        {/* CONTACTO */}
        <section id="contacto" className="contacto" aria-labelledby="contacto-titulo">
          <h2 id="contacto-titulo">¿Trabajamos juntos?</h2>
          <p className="contacto-bajada">Estoy disponible para:</p>
          <ul className="grilla-3 disponible">
            {disponible.map((d) => (
              <li key={d.titulo}>
                <h3>{d.titulo}</h3>
                <p>{d.texto}</p>
              </li>
            ))}
          </ul>
          <div className="acciones">
            {redes.map((r, i) => (
              <a
                key={r.nombre}
                href={r.url}
                className={`boton ${i === 0 ? 'boton-principal' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribime por {r.nombre} ↗
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="contenedor pie-interior">
          <span>© {new Date().getFullYear()} {perfil.marca}</span>
          <span>{personal.versiculo}</span>
        </div>
      </footer>
    </>
  )
}
