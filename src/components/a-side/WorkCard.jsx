const jobs = [
  {
    org: 'ICES',
    full: 'Instituto Cultural y Educativo del Sur',
    roles: ['Director TIC', 'Dev'],
    accent: '#a8d48a',
    note: 'Sistema de notas propio — Next.js + Supabase',
  },
  {
    org: 'ICVL',
    full: 'Instituto Cristiano Vicente López',
    roles: ['Líder TIC', 'Docente'],
    accent: '#a8d48a',
    note: null,
  },
  {
    org: 'CJH',
    full: 'Colegio Jesús en el Huerto',
    roles: ['Docente Informática'],
    accent: '#d97b46',
    note: null,
  },
  {
    org: 'PD',
    full: 'Potrero Digital',
    roles: ['Tutor'],
    accent: '#d97b46',
    note: 'Capacitación docente TIC',
  },
  {
    org: 'ECD',
    full: 'Espacio Cultural Despacio',
    roles: ['Taller Robótica'],
    accent: '#a8d48a',
    note: null,
  },
]

export default function WorkCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-5 border border-border animate-slide-in-right"
      style={{ animationDelay: '60ms' }}
    >
      <p className="font-sans text-xs uppercase tracking-widest text-muted">
        D&oacute;nde trabajo
      </p>

      <ul className="flex flex-col gap-3">
        {jobs.map((job, i) => (
          <li
            key={job.org}
            className="flex items-start gap-3 animate-fade-in-up"
            style={{ animationDelay: `${100 + i * 60}ms` }}
          >
            <div
              className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-sans font-semibold text-xs mt-0.5 transition-transform duration-200 hover:scale-110"
              style={{
                backgroundColor: `${job.accent}18`,
                border: `1px solid ${job.accent}40`,
                color: job.accent,
              }}
              aria-hidden="true"
            >
              {job.org.slice(0, 2)}
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-xs font-sans text-warm leading-snug">{job.full}</span>
              <div className="flex gap-1.5 flex-wrap">
                {job.roles.map((r) => (
                  <span
                    key={r}
                    className="text-xs font-sans px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: `${job.accent}15`, color: job.accent }}
                  >
                    {r}
                  </span>
                ))}
              </div>
              {job.note && (
                <span className="text-xs font-sans" style={{ color: '#6a8060' }}>
                  {job.note}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-border" />

      <p className="font-sans text-xs uppercase tracking-widest text-muted">Formaci&oacute;n</p>

      <div className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: '420ms' }}>
        <div
          className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-sans font-semibold text-xs mt-0.5"
          style={{ backgroundColor: '#a8d48a18', border: '1px solid #a8d48a40', color: '#a8d48a' }}
          aria-hidden="true"
        >
          CO
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-sans text-warm leading-snug">
            Prof. de Inform&aacute;tica — CONSUDEC V-5
          </span>
          <span className="text-xs font-sans text-forest">2do a&ntilde;o en curso</span>
        </div>
      </div>
    </div>
  )
}
