const FOREST = '#5ec46a'
const ORANGE = '#e8894e'

const jobs = [
  {
    org: 'ICES',
    full: 'Instituto Cultural y Educativo del Sur',
    roles: ['Director TIC', 'Dev'],
    accent: FOREST,
    note: 'Sistema de notas propio — Next.js + Supabase',
  },
  {
    org: 'ICVL',
    full: 'Instituto Cristiano Vicente López',
    roles: ['Líder TIC', 'Docente'],
    accent: FOREST,
    note: null,
  },
  {
    org: 'CJH',
    full: 'Colegio Jesús en el Huerto',
    roles: ['Docente Informática'],
    accent: ORANGE,
    note: null,
  },
  {
    org: 'PD',
    full: 'Potrero Digital',
    roles: ['Tutor'],
    accent: ORANGE,
    note: 'Capacitación docente TIC',
  },
  {
    org: 'ECD',
    full: 'Espacio Cultural Despacio',
    roles: ['Taller Robótica'],
    accent: FOREST,
    note: null,
  },
]

export default function WorkCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-5 border border-border animate-slide-in-right"
      style={{ animationDelay: '60ms' }}
    >
      <p className="font-sans text-xs uppercase tracking-widest text-muted font-bold">
        Dónde trabajo
      </p>

      <ul className="flex flex-col gap-3">
        {jobs.map((job, i) => (
          <li
            key={job.org}
            className="flex items-start gap-3 animate-fade-in-up"
            style={{ animationDelay: `${100 + i * 60}ms` }}
          >
            <div
              className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-sans font-bold text-xs mt-0.5 transition-transform duration-200 hover:scale-110"
              style={{
                backgroundColor: `${job.accent}20`,
                border: `1px solid ${job.accent}50`,
                color: job.accent,
              }}
              aria-hidden="true"
            >
              {job.org.slice(0, 2)}
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-xs font-sans text-warm leading-snug font-semibold">{job.full}</span>
              <div className="flex gap-1.5 flex-wrap">
                {job.roles.map((r) => (
                  <span
                    key={r}
                    className="text-xs font-sans px-2 py-0.5 rounded-md font-bold"
                    style={{ backgroundColor: `${job.accent}18`, color: job.accent }}
                  >
                    {r}
                  </span>
                ))}
              </div>
              {job.note && (
                <span className="text-xs font-sans text-muted">
                  {job.note}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-border" />

      <p className="font-sans text-xs uppercase tracking-widest text-muted font-bold">Formación</p>

      <div className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '420ms' }}>
        <div
          className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-sans font-bold text-xs mt-0.5"
          style={{ backgroundColor: `${FOREST}20`, border: `1px solid ${FOREST}50`, color: FOREST }}
          aria-hidden="true"
        >
          CO
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-sans text-warm leading-snug font-semibold">
            Prof. de Informática — CONSUDEC V-5
          </span>
          <span className="text-xs font-sans font-bold" style={{ color: FOREST }}>
            2do año en curso
          </span>
        </div>
      </div>
    </div>
  )
}
