import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Quote,
  School,
  Sun,
} from 'lucide-react'
import {
  perfil,
  sobreMi,
  cifras,
  logos,
  redes,
  experiencia,
  proyectos,
  formacion,
  habilidades,
  servicios,
} from './data.js'

const iconosRedes = { LinkedIn: Linkedin, Instagram }
const iconosServicios = { codigo: Code2, escuela: School, clases: GraduationCap }

/* ── Tema claro / oscuro ─────────────────────────────── */
function useTema() {
  const [oscuro, setOscuro] = useState(() => {
    try {
      const t = localStorage.getItem('tema')
      if (t) return t === 'dark'
    } catch {
      /* sin almacenamiento */
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
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
      /* sin almacenamiento */
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    elementos.forEach((e) => obs.observe(e))
    return () => obs.disconnect()
  }, [])
}

/* ── Piezas chicas ───────────────────────────────────── */
function Seccion({ id, titulo, children }) {
  return (
    <section id={id} className="seccion revelar" aria-labelledby={`${id}-titulo`}>
      <h2 id={`${id}-titulo`} className="seccion-titulo">
        {titulo}
      </h2>
      {children}
    </section>
  )
}

function Etiquetas({ items }) {
  if (!items?.length) return null
  return (
    <ul className="etiquetas">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

/* Fila tipo currículum: logo, nombre, cargo y fechas */
function Fila({ sigla, logo, logoOscuro, titulo, subtitulo, periodo, descripcion, etiquetas }) {
  return (
    <li className="fila">
      <span className={`logo ${logo ? 'logo-imagen' : ''} ${logoOscuro ? 'logo-oscuro' : ''}`} aria-hidden="true">
        {logo ? <img src={logo} alt="" loading="lazy" /> : sigla}
      </span>
      <div className="fila-cuerpo">
        <div className="fila-cabeza">
          <h3>{titulo}</h3>
          {periodo && <span className="periodo">{periodo}</span>}
        </div>
        {subtitulo && <p className="fila-sub">{subtitulo}</p>}
        {descripcion && <p className="fila-texto">{descripcion}</p>}
        <Etiquetas items={etiquetas} />
      </div>
    </li>
  )
}

/* Logos que pasan solos, en loop. Se duplica la lista para que no haya cortes. */
function Carrusel() {
  return (
    <div className="carrusel">
      <ul className="carrusel-pista">
        {[...logos, ...logos].map((l, i) => (
          <li
            key={i}
            className={`carrusel-item ${l.oscuro ? 'carrusel-oscuro' : ''}`}
            aria-hidden={i >= logos.length}
          >
            <img src={l.imagen} alt={i < logos.length ? l.nombre : ''} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  )
}

/* Pequeños dibujos que ilustran cada proyecto */
function Visual({ tipo }) {
  if (tipo === 'notas') {
    const filas = [
      ['Matemática', '8', '9'],
      ['Lengua', '7', '8'],
      ['Informática', '10', '10'],
    ]
    return (
      <div className="vis vis-notas" aria-hidden="true">
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
            {perfil.marca}
          </a>
          <nav aria-label="Secciones">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button
            type="button"
            className="boton-icono"
            onClick={alternarTema}
            aria-label={oscuro ? 'Pasar a modo claro' : 'Pasar a modo oscuro'}
          >
            {oscuro ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      <main id="contenido" className="contenedor">
        {/* 1. PRESENTACIÓN */}
        <section id="inicio" className="presentacion">
          <div className="presentacion-texto">
            <p className="saludo aparecer">Hola, soy {perfil.nombre} 👋</p>
            <h1 className="aparecer" style={{ animationDelay: '60ms' }}>
              {perfil.titular}
            </h1>
            <p className="frase aparecer" style={{ animationDelay: '120ms' }}>
              {perfil.bajada}
            </p>
            <p className="datos aparecer" style={{ animationDelay: '160ms' }}>
              <span>{perfil.titulo}</span>
              <span className="datos-lugar">
                <MapPin size={14} /> {perfil.ubicacion}
              </span>
            </p>
            <div className="acciones aparecer" style={{ animationDelay: '240ms' }}>
              <a href="#contacto" className="boton boton-principal">
                <Mail size={16} /> Contame tu proyecto
              </a>
              {redes.map((r) => {
                const Icono = iconosRedes[r.nombre] || ArrowUpRight
                return (
                  <a
                    key={r.nombre}
                    href={r.url}
                    className="boton boton-icono-grande"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${r.nombre} de ${perfil.nombre}`}
                  >
                    <Icono size={17} />
                  </a>
                )
              })}
            </div>
          </div>
          <div className="avatar-grande aparecer" style={{ animationDelay: '120ms' }}>
            {perfil.foto ? (
              <img src={perfil.foto} alt={`Foto de ${perfil.nombre}`} width="288" height="288" />
            ) : (
              <span aria-hidden="true">{iniciales}</span>
            )}
            <span className="avatar-estado" title={perfil.estado} aria-hidden="true" />
          </div>
        </section>
        <p className="estado-linea aparecer" style={{ animationDelay: '300ms' }}>
          <span className="led" aria-hidden="true" />
          {perfil.estado}
        </p>

        <dl className="cifras aparecer" style={{ animationDelay: '340ms' }}>
          {cifras.map((c) => (
            <div key={c.texto}>
              <dt>{c.valor}</dt>
              <dd>{c.texto}</dd>
            </div>
          ))}
        </dl>

        {/* CARRUSEL DE LOGOS */}
        <section className="carrusel-seccion aparecer" style={{ animationDelay: '360ms' }} aria-labelledby="donde-titulo">
          <p id="donde-titulo" className="carrusel-titulo">
            Instituciones donde trabajé
          </p>
          <Carrusel />
        </section>

        {/* SERVICIOS */}
        <Seccion id="servicios" titulo="Cómo puedo ayudarte">
          <div className="servicios">
            {servicios.map((sv) => {
              const Icono = iconosServicios[sv.icono] || Code2
              return (
                <article key={sv.titulo} className="servicio">
                  <span className="servicio-icono" aria-hidden="true">
                    <Icono size={18} />
                  </span>
                  <h3>{sv.titulo}</h3>
                  <p>{sv.texto}</p>
                  <p className="servicio-ejemplo">{sv.ejemplo}</p>
                </article>
              )
            })}
          </div>
        </Seccion>

        {/* PROYECTOS */}
        <Seccion id="proyectos" titulo="Proyectos">
          <p className="parrafo">
            Sistemas reales, hechos para resolver problemas concretos de instituciones y empresas.
          </p>
          <div className="proyectos">
            {proyectos.map((p) => (
              <article key={p.nombre} className={`proyecto ${p.destacado ? 'destacado' : ''}`}>
                {p.imagen ? (
                  <div className="captura">
                    <img src={p.imagen} alt={`Captura de ${p.nombre}`} loading="lazy" />
                  </div>
                ) : (
                  <Visual tipo={p.visual} />
                )}
                <div className="proyecto-cuerpo">
                  <span className={`estado ${p.estado === 'Prototipo' ? 'estado-proto' : ''}`}>
                    <span className="led" aria-hidden="true" />
                    {p.estado}
                  </span>
                  <h3>{p.nombre}</h3>
                  {p.tipo && <p className="proyecto-tipo">{p.tipo}</p>}
                  <p>{p.texto}</p>
                  {p.caso && (
                    <dl className="caso">
                      <div>
                        <dt>El problema</dt>
                        <dd>{p.caso.problema}</dd>
                      </div>
                      <div>
                        <dt>Qué hice</dt>
                        <dd>{p.caso.solucion}</dd>
                      </div>
                      <div>
                        <dt>Resultado</dt>
                        <dd>{p.caso.resultado}</dd>
                      </div>
                    </dl>
                  )}
                  {p.testimonio && (
                    <figure className="testimonio">
                      <Quote size={18} aria-hidden="true" />
                      <blockquote>“{p.testimonio.texto}”</blockquote>
                      <figcaption>— {p.testimonio.autor}</figcaption>
                    </figure>
                  )}
                  <Etiquetas items={p.tecnologias} />
                  {p.enlace && (
                    <a className="enlace" href={p.enlace} target="_blank" rel="noopener noreferrer">
                      {p.enlaceTexto || 'Ver proyecto'} <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Seccion>

        {/* 3. EXPERIENCIA */}
        <Seccion id="experiencia" titulo="Experiencia">
          <ul className="filas">
            {experiencia.map((e) => (
              <Fila
                key={e.lugar}
                sigla={e.sigla}
                logo={e.logo}
                logoOscuro={e.logoOscuro}
                titulo={e.lugar}
                subtitulo={e.cargo}
                periodo={e.periodo}
                descripcion={e.descripcion}
                etiquetas={e.etiquetas}
              />
            ))}
          </ul>
        </Seccion>

        {/* SOBRE MÍ */}
        <Seccion id="sobre-mi" titulo="Sobre mí">
          {sobreMi.map((p) => (
            <p key={p.slice(0, 20)} className="parrafo">
              {p}
            </p>
          ))}
        </Seccion>

        {/* EDUCACIÓN */}
        <Seccion id="educacion" titulo="Educación">
          <ul className="filas">
            {formacion.map((f) => (
              <Fila key={f.titulo} sigla={f.sigla} titulo={f.lugar} subtitulo={f.titulo} periodo={f.periodo} />
            ))}
          </ul>
        </Seccion>

        {/* 6. HABILIDADES */}
        <Seccion id="habilidades" titulo="Habilidades">
          <div className="habilidades">
            {habilidades.map((h) => (
              <div key={h.grupo}>
                <p className="grupo-titulo">{h.grupo}</p>
                <Etiquetas items={h.items} />
              </div>
            ))}
          </div>
        </Seccion>

        {/* 8. CONTACTO */}
        <section id="contacto" className="contacto revelar" aria-labelledby="contacto-titulo">
          <p className="pastilla">Contacto</p>
          <h2 id="contacto-titulo">Hablemos de tu proyecto</h2>
          <p className="parrafo">
            ¿Tenés un proyecto, una escuela que quiere ordenar su tecnología o un taller para dar? Contame
            qué necesitás y te respondo a la brevedad.
          </p>
          <div className="acciones acciones-centro">
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
                  <Icono size={16} /> {r.nombre}
                </a>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="contenedor pie-interior">
          <span>
            © {new Date().getFullYear()} {perfil.nombre}
          </span>
          <span>{perfil.marca}</span>
        </div>
      </footer>
    </>
  )
}
