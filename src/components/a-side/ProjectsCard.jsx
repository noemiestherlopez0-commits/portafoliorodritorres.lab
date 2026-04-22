import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Gestión de Notas ICES',
    desc: 'Sistema de calificaciones para instituciones educativas.',
    tech: ['Next.js', 'Supabase'],
    status: 'En producción',
    statusColor: '#8fba74',
    href: null,
  },
  {
    name: 'ERP Jazmines',
    desc: 'Gestión interna para organización comunitaria.',
    tech: ['React', 'Supabase'],
    status: 'En desarrollo',
    statusColor: '#d97b46',
    href: null,
  },
  {
    name: 'Classroom ×86',
    desc: '86 aulas virtuales activas, administradas desde cero.',
    tech: ['Google Workspace'],
    status: 'Activo',
    statusColor: '#8fba74',
    href: null,
  },
  {
    name: 'El Colectivo',
    desc: 'Plataforma colaborativa de proyectos escolares.',
    tech: ['React', 'Vite', 'Canvas'],
    status: 'Prototipo',
    statusColor: '#a89b84',
    href: null,
  },
]

export default function ProjectsCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-6 animate-fade-in-up border border-border"
      style={{ animationDelay: '230ms' }}
    >
      <p className="font-sans text-xs uppercase tracking-widest text-muted">Proyectos</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="card-hover group relative flex flex-col gap-3 p-4 rounded-xl border border-border cursor-default"
          >
            {/* Status */}
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: p.statusColor }}
                aria-hidden="true"
              />
              <span className="font-sans text-xs" style={{ color: p.statusColor }}>
                {p.status}
              </span>
            </div>

            {/* Name */}
            <span className="font-heading text-base text-warm leading-snug">{p.name}</span>

            {/* Description */}
            <p className="font-sans text-xs leading-relaxed text-muted">{p.desc}</p>

            {/* Tech */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="font-sans text-xs px-2 py-0.5 rounded-md border border-border text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Arrow */}
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-forest"
                aria-label={`Ver ${p.name}`}
              >
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <span
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-40 transition-opacity text-muted"
                aria-hidden="true"
              >
                <ArrowUpRight size={15} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
