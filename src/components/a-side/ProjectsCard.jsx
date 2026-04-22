import { ExternalLink, Circle } from 'lucide-react'

const projects = [
  {
    name: 'Gestión Notas ICES',
    stack: 'Next.js · Supabase',
    status: 'Producción',
    statusColor: '#7da866',
    href: null,
  },
  {
    name: 'ERP Jazmines',
    stack: 'React · Supabase',
    status: 'En desarrollo',
    statusColor: '#e08246',
    href: null,
  },
  {
    name: 'Classroom ×86',
    stack: 'Google Workspace',
    status: 'Activo',
    statusColor: '#7da866',
    href: null,
  },
  {
    name: 'El Colectivo',
    stack: 'React · Vite · Canvas',
    status: 'Prototipo',
    statusColor: '#e08246',
    href: null,
  },
]

export default function ProjectsCard() {
  return (
    <div
      className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col gap-4 animate-fade-in-up"
      style={{ animationDelay: '240ms' }}
    >
      <div className="text-white/40 text-xs uppercase tracking-widest">Proyectos</div>

      <ul className="flex flex-col gap-2">
        {projects.map((p) => (
          <li
            key={p.name}
            className="flex items-center justify-between gap-3 p-3 rounded-xl border border-dark-border hover:border-forest/40 transition-colors"
          >
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-sm text-white font-sans font-bold truncate">{p.name}</span>
              <span className="text-xs text-white/40 truncate">{p.stack}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Circle
                size={7}
                style={{ fill: p.statusColor, color: p.statusColor }}
              />
              <span className="text-xs" style={{ color: p.statusColor }}>
                {p.status}
              </span>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-white transition-colors"
                  aria-label={`Ver ${p.name}`}
                >
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
