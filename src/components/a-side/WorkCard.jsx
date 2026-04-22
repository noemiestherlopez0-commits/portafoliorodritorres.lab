import { Briefcase, GraduationCap } from 'lucide-react'

const jobs = [
  {
    org: 'Instituto Cristiano Vicente López',
    abbrev: 'ICVL',
    roles: ['Líder TIC', 'Docente'],
    color: '#7da866',
  },
  {
    org: 'Colegio Jesús en el Huerto',
    abbrev: 'CJH',
    roles: ['Docente Informática'],
    color: '#e08246',
  },
  {
    org: 'Espacio Cultural Despacio',
    abbrev: 'ECD',
    roles: ['Taller Robótica'],
    color: '#7da866',
  },
]

export default function WorkCard() {
  return (
    <div
      className="card-glow bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 animate-fade-in-up"
      style={{ animationDelay: '80ms' }}
    >
      {/* Title */}
      <div className="flex items-center gap-2">
        <Briefcase size={14} className="text-forest" />
        <span className="font-heading font-bold text-white text-sm tracking-wide">
          Dónde Trabajo
        </span>
      </div>

      {/* Jobs */}
      <ul className="flex flex-col gap-3">
        {jobs.map((job) => (
          <li key={job.org} className="flex items-center gap-3">
            {/* Logo placeholder */}
            <div
              className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-heading font-bold"
              style={{
                backgroundColor: `${job.color}14`,
                border: `1.5px solid ${job.color}40`,
                color: job.color,
              }}
              aria-hidden="true"
            >
              {job.abbrev.slice(0, 2)}
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-xs text-white/80 font-sans leading-tight truncate">{job.org}</span>
              <div className="flex gap-1.5 flex-wrap">
                {job.roles.map((r) => (
                  <span
                    key={r}
                    className="text-xs px-1.5 py-0.5 rounded border font-sans"
                    style={{ borderColor: `${job.color}35`, color: job.color }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <hr className="border-border" />

      {/* Education */}
      <div className="flex items-center gap-2">
        <GraduationCap size={14} className="text-forest" />
        <span className="font-heading font-bold text-white text-sm tracking-wide">
          Educación
        </span>
      </div>

      <div className="flex items-center gap-3">
        {/* Logo placeholder */}
        <div
          className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-heading font-bold"
          style={{ backgroundColor: '#7da86614', border: '1.5px solid #7da86640', color: '#7da866' }}
          aria-hidden="true"
        >
          CO
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-xs text-white/80 font-sans leading-tight">
            Profesorado de Informática CONSUDEC V-5
          </span>
          <span className="text-xs text-forest font-sans">2do año en curso</span>
        </div>
      </div>

      {/* Photo placeholder */}
      <div
        className="mt-auto w-full h-20 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: '#7da86608', border: '1.5px dashed #1e3a1e', color: '#7da86640' }}
        aria-label="Foto institucional"
      >
        <span className="text-xs font-sans">foto</span>
      </div>
    </div>
  )
}
