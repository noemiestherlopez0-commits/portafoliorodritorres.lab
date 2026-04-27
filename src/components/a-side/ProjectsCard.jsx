import { ArrowUpRight } from 'lucide-react'

const FOREST = '#5ec46a'
const ORANGE = '#e8894e'
const GOLD   = '#d4a83a'

const projects = [
  {
    name: 'Gestión de Notas ICES',
    desc: 'Sistema completo con login por PIN, boletines, autosave. 5 cursos, 2 cuatrimestres.',
    tech: ['Next.js', 'Supabase'],
    status: 'En producción',
    statusColor: FOREST,
    delay: '0ms',
  },
  {
    name: 'El Colectivo',
    desc: 'PWA gamificada con temática de colectivo porteño. React + Vite + Canvas + Tailwind.',
    tech: ['React', 'Vite', 'Canvas'],
    status: 'Prototipo',
    statusColor: GOLD,
    delay: '70ms',
  },
  {
    name: 'ERP Los Jazmines',
    desc: 'Sistema de gestión para salón de eventos. React + Supabase. En producción.',
    tech: ['React', 'Supabase'],
    status: 'En producción',
    statusColor: FOREST,
    delay: '140ms',
  },
  {
    name: 'Classroom ×86',
    desc: 'Arquitectura y administración completa de Google Classroom institucional desde cero.',
    tech: ['Google Workspace'],
    status: 'Activo',
    statusColor: FOREST,
    delay: '210ms',
  },
]

export default function ProjectsCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-6 border border-border animate-fade-in-up"
      style={{ animationDelay: '220ms' }}
    >
      <p className="font-sans text-xs uppercase tracking-widest text-muted font-bold">Proyectos</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="group relative flex flex-col gap-3 p-4 rounded-xl border border-border cursor-default animate-scale-in transition-all duration-250 hover:-translate-y-1 hover:shadow-lg"
            style={{ animationDelay: p.delay, backgroundColor: '#1e3220' }}
          >
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse-dot"
                style={{ backgroundColor: p.statusColor }}
                aria-hidden="true"
              />
              <span className="font-sans text-xs font-bold" style={{ color: p.statusColor }}>
                {p.status}
              </span>
            </div>

            <span className="font-heading text-base text-warm leading-snug font-bold">{p.name}</span>
            <p className="font-sans text-xs leading-relaxed text-muted">{p.desc}</p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="font-sans text-xs px-2 py-0.5 rounded-md border border-border text-muted font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>

            <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-40 transition-opacity text-muted" aria-hidden="true">
              <ArrowUpRight size={15} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
