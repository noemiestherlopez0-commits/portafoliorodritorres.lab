import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Gestión Notas ICES',
    tech: ['Next.js', 'Supabase'],
    status: 'Producción',
    statusColor: '#7da866',
    href: null,
  },
  {
    name: 'ERP Jazmines',
    tech: ['React', 'Supabase'],
    status: 'Desarrollo',
    statusColor: '#e08246',
    href: null,
  },
  {
    name: 'Classroom ×86',
    tech: ['Google Workspace'],
    status: 'Activo',
    statusColor: '#7da866',
    href: null,
  },
  {
    name: 'El Colectivo',
    tech: ['React', 'Vite', 'Canvas'],
    status: 'Prototipo',
    statusColor: '#8b9aa8',
    href: null,
  },
]

export default function ProjectsCard() {
  return (
    <div
      className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-5 animate-fade-in-up col-span-3"
      style={{ animationDelay: '240ms' }}
    >
      <span className="font-heading font-bold text-white text-sm tracking-wide">
        Proyectos
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="card-glow group relative flex flex-col gap-3 p-4 rounded-xl border border-border cursor-default"
          >
            {/* Status dot */}
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: p.statusColor }}
                aria-hidden="true"
              />
              <span className="text-xs font-sans" style={{ color: p.statusColor }}>
                {p.status}
              </span>
            </div>

            {/* Name */}
            <span className="font-heading font-bold text-white text-sm leading-snug">
              {p.name}
            </span>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-sans px-2 py-0.5 rounded-md border border-border text-white/40"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Arrow on hover */}
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 text-white/0 group-hover:text-forest transition-colors"
                aria-label={`Ver ${p.name}`}
              >
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <span
                className="absolute top-3 right-3 text-white/0 group-hover:text-white/30 transition-colors"
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
