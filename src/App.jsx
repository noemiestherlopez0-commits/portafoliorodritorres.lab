import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  GraduationCap,
  Instagram,
  Linkedin,
  MapPin,
  Moon,
  School,
  Sun,
} from 'lucide-react'
import {
  perfil,
  cifras,
  redes,
  queHago,
  proyectos,
  experiencia,
  formacion,
  herramientas,
  disponible,
  personal,
} from './data.js'

const iconosQueHago = [GraduationCap, Code2, School]
const iconosRedes = { LinkedIn: Linkedin, Instagram }

/* ── Tema claro / oscuro ─────────────────────────────── */
function useTema() {
  const leer = () => {
    try {
      return localStorage.getItem('tema')
    } catch {
      return null
    }
  }
  const sistemaOscuro = () => window.matchMedia('(prefers-color-scheme: dark)').matches
  const [oscuro, setOscuro] = useState(() => {
    const t = leer()
    return t ? t === 'dark' : sistemaOscuro()
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', oscuro ? 'dark' : 'light')
  }, [oscuro])

  const alternar = () => {
    const nuevo = !oscuro
    setOscuro(nuevo)
    try {
      localStorage.setItem('tema', nuevo ? 'dark' : 'light')
    } catch {
      /* sin almacenamiento: no pasa nada */
    }
  }
  return [oscuro, alternar]
}

/* ── Aparición suave al hacer scroll ─────────────────── */
function useRevelar() {
  useEffect(() => {
    const elementos = document.querySelectorAll('.revelar')
    if (!('IntersectionObserver' in window)) {
      elementos.forEach((e) => e.classList.add('visible'))
      return
    }
    const obs = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('visible')
            obs.unobserve(en.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    elementos.forEach((e) => obs.observe(e))
    return () => obs.disconnect()
  }, [])
}

/* ── Piezas chicas ───────────────────────────────────── */
function Seccion({ id, etiqueta, titulo, children }) {
  return (
    <section id={id} className="seccion" aria-labelledby={`${id}-titulo`}>
      <div className="seccion-cabecera revelar">
        <p className="eyebrow">{etiqueta}</p>
        <h2 id={`${id}-titulo`}>{titulo}</h2>
      </div>
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

/* Pequeños dibujos que ilustran cada proyecto */
function Visual({ tipo }) {
  if (tipo === 'notas') {
    const filas = [
      ['Matemática', '8', '9'],
      ['Lengua', '7', '8'],
      ['Informática', '10', '10'],
      ['Historia', '9', '7'],
    ]
    return (
      <div className="vis vis-notas" aria-hidden="true">
        <div className="vis-barra">
          <span />
          <span />
          <span />
        </div>
        {filas.map(([m, a, b]) => (
          <div key={m} className="vis-fila">
            <span className="vis-texto">{m}</span>
            <span className="vis-nota">{a}</span>
            <span className="vis-nota">{b}</span>
          </div>
        ))}
      </div>
    )
  }
  if (tipo === 'agenda') {
    const ocupados = new Set([3, 4, 9, 11, 12, 17, 18, 19, 24, 26])
    return (
      <div className="vis vis-agenda" aria-hidden="true">
        {Array.from({ length: 28 }, (_, i) => (
          <span key={i} className={ocupados.has(i) ? 'ocupado' : ''} />
        ))}
      </div>
    )
  }
  if (tipo === 'aulas') {
    return (
      <div className="vis vis-aulas" aria-hidden="true">
        {Array.from({ length: 86 }, (_, i) => (
          <span key={i} style={{ animationDelay: `${(i % 22) * 70}ms` }} />
        ))}
      </div>
    )
  }
  return (
    <div className="vis vis-colectivo" aria-hidden="true">
      <div className="calle" />
      <div className="bondi">
        <span />
        <span />
        <span />
      </div>
      <div className="paradas">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

/* ── Página ──────────────────────────────────────────── */
export default function App() {
  const [oscuro, alternarTema] = useTema()
  useRevelar()
  const linkedin = redes.find((r) => r.nombre === 'LinkedIn')
  const iniciales = perfil.nombre
    .split(' ')
    .map((p) => p[0])
    .join('')

  return (
    <>
      <a href="#contenido" className="saltar">
        Saltar al contenido
      </a>

      <header className="barra">
        <div className="contenedor barra-interior">
          <a href="#inicio" className="marca">
            <span className="marca-chip" aria-hidden="true">
              {iniciales}
            </span>
            {perfil.marca}
          </a>
          <nav aria-label="Secciones">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#experiencia">Experiencia</a>
          </nav>
          <a href="#contacto" className="boton boton-chico boton-principal ocultar-movil">
            Contacto
          </a>
          <button
            type="button"
            className="boton-icono"
            onClick={alternarTema}
            aria-label={oscuro ? 'Pasar a modo claro' : 'Pasar a modo oscuro'}
          >
            {oscuro ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>

      <main id="contenido">
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="hero-fondo" aria-hidden="true" />
          <div className="contenedor hero-grilla">
            <div className="hero-texto">
              <p className="pastilla aparecer">
                <span className="led" aria-hidden="true" />
                {perfil.estado}
              </p>
              <h1 className="aparecer" style={{ animationDelay: '80ms' }}>
                {perfil.nombre}
              </h1>
              <p className="lema aparecer" style={{ animationDelay: '160ms' }}>
                Construyo tecnología educativa que funciona en el{' '}
                <span className="resaltado">aula real</span>.
              </p>
              <p className="bajada aparecer" style={{ animationDelay: '240ms' }}>
                {perfil.bajada}
              </p>
              <div className="acciones aparecer" style={{ animationDelay: '320ms' }}>
                <a href="#proyectos" className="boton boton-principal">
                  Ver proyectos <ArrowDown size={16} />
                </a>
                {linkedin && (
                  <a href={linkedin.url} className="boton" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                )}
              </div>
            </div>

            <aside className="credencial aparecer" style={{ animationDelay: '200ms' }} aria-label="Resumen">
              <div className="credencial-cabeza">
                <div className="avatar" aria-hidden="true">
                  {iniciales}
                </div>
                <div>
                  <p className="credencial-nombre">{perfil.nombre}</p>
                  <p className="credencial-lugar">
                    <MapPin size={13} /> {perfil.ubicacion}
                  </p>
                </div>
              </div>
              <ul className="credencial-roles">
                {perfil.roles.map((r, i) => {
                  const Icono = iconosQueHago[i] || Code2
                  return (
                    <li key={r}>
                      <Icono size={16} />
                      {r}
                    </li>
                  )
                })}
              </ul>
              <dl className="cifras">
                {cifras.map((c) => (
                  <div key={c.texto}>
                    <dt>{c.valor}</dt>
                    <dd>{c.texto}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <div className="contenedor">
          {/* SERVICIOS */}
          <Seccion id="servicios" etiqueta="Lo que hago" titulo="Educación y software, en el mismo lugar">
            <div className="grilla-3">
              {queHago.map((q, i) => {
                const Icono = iconosQueHago[i] || Code2
                return (
                  <article key={q.titulo} className="tarjeta revelar" style={{ transitionDelay: `${i * 80}ms` }}>
                    <span className="icono-caja">
                      <Icono size={20} />
                    </span>
                    <h3>{q.titulo}</h3>
                    <p>{q.texto}</p>
                    <Etiquetas items={q.detalle} />
                  </article>
                )
              })}
            </div>
          </Seccion>

          {/* PROYECTOS */}
          <Seccion id="proyectos" etiqueta="Proyectos" titulo="Sistemas que se usan todos los días">
            <div className="grilla-2">
              {proyectos.map((p, i) => (
                <article
                  key={p.nombre}
                  className="tarjeta proyecto revelar"
                  style={{ transitionDelay: `${(i % 2) * 80}ms` }}
                >
                  <Visual tipo={p.visual} />
                  <div className="proyecto-cuerpo">
                    <span className={`estado ${p.estado === 'Prototipo' ? 'estado-proto' : ''}`}>
                      <span className="led" aria-hidden="true" />
                      {p.estado}
                    </span>
                    <h3>{p.nombre}</h3>
                    <p>{p.texto}</p>
                    <Etiquetas items={p.tecnologias} />
                  </div>
                </article>
              ))}
            </div>
          </Seccion>

          {/* EXPERIENCIA */}
          <Seccion id="experiencia" etiqueta="Trayectoria" titulo="Experiencia y formación">
            <div className="experiencia">
              <ol className="linea revelar">
                {experiencia.map((e) => (
                  <li key={e.lugar}>
                    <div className="linea-cabeza">
                      <h3>{e.lugar}</h3>
                      <p className="cargos">{e.roles.join(' · ')}</p>
                    </div>
                    {e.nota && <p className="nota">{e.nota}</p>}
                  </li>
                ))}
              </ol>
              <div className="columna-lateral">
                <aside className="tarjeta revelar" aria-label="Formación">
                  <p className="eyebrow">Formación</p>
                  {formacion.map((f) => (
                    <div key={f.titulo} className="formacion">
                      <h3>{f.titulo}</h3>
                      <p>{f.lugar}</p>
                      <span className="estado">
                        <span className="led" aria-hidden="true" />
                        {f.estado}
                      </span>
                    </div>
                  ))}
                </aside>
                <aside className="tarjeta revelar" aria-label="Herramientas">
                  <p className="eyebrow">Herramientas</p>
                  {herramientas.map((h) => (
                    <div key={h.grupo} className="herramientas-grupo">
                      <p className="grupo-titulo">{h.grupo}</p>
                      <Etiquetas items={h.items} />
                    </div>
                  ))}
                </aside>
              </div>
            </div>
          </Seccion>

          {/* PERSONAL */}
          <Seccion id="fuera-del-aula" etiqueta="Fuera del aula" titulo="Lo que me mueve">
            <div className="personal revelar">
              <ul className="personal-texto">
                {personal.texto.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div>
                <Etiquetas items={personal.pasiones} />
                <p className="cosas">{personal.cosasQueAmo.join(' · ')}</p>
              </div>
            </div>
          </Seccion>

          {/* CONTACTO */}
          <section id="contacto" className="contacto revelar" aria-labelledby="contacto-titulo">
            <div className="contacto-brillo" aria-hidden="true" />
            <p className="eyebrow">Contacto</p>
            <h2 id="contacto-titulo">¿Trabajamos juntos?</h2>
            <p className="contacto-bajada">Estoy disponible para proyectos y colaboraciones en:</p>
            <ul className="grilla-3 disponible">
              {disponible.map((d) => (
                <li key={d.titulo}>
                  <h3>{d.titulo}</h3>
                  <p>{d.texto}</p>
                </li>
              ))}
            </ul>
            <div className="acciones">
              {redes.map((r, i) => {
                const Icono = iconosRedes[r.nombre] || ArrowUpRight
                return (
                  <a
                    key={r.nombre}
                    href={r.url}
                    className={`boton ${i === 0 ? 'boton-principal' : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icono size={16} /> Escribime por {r.nombre}
                  </a>
                )
              })}
            </div>
          </section>
        </div>
      </main>

      <footer className="pie">
        <div className="contenedor pie-interior">
          <span>
            © {new Date().getFullYear()} {perfil.nombre} · {perfil.marca}
          </span>
          <span>{personal.versiculo}</span>
        </div>
      </footer>
    </>
  )
}
