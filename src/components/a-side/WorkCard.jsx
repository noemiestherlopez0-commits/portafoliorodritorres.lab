const jobs = [
  {
    org: 'ICES',
    full: 'Instituto Cultural y Educativo del Sur',
    roles: ['Director TIC', 'Dev'],
    accent: '#8fba74',
    note: 'Sistema de notas propio — Next.js + Supabase',
  },
  {
    org: 'ICVL',
    full: 'Instituto Cristiano Vicente López',
    roles: ['Líder TIC', 'Docente'],
    accent: '#8fba74',
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
    accent: '#8fba74',
    note: null,
  },
]

export default function WorkCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-5 animate-fade-in-up border border-border"
      style={{ animationDelay: '70ms' }}
    >
      <p className="font-sans text-xs uppercase tracking-widest text-muted">
        D&oacute;nde trabajo
      </p>

      <ul className="flex flex-col gap-3">
        {jobs.map((job) => (
          <li key={job.org} className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-sans font-semibold text-xs mt-0.5"
              style={{
                backgroundColor: `${job.accent}12`,
                border: `1px solid ${job.accent}35`,
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
                    style={{ backgroundColor: `${job.accent}10`, color: job.accent }}
                  >
                    {r}
                  </span>
                ))}
              </div>
              {job.note && (
                <span className="text-xs font-sans" style={{ color: '#5a5245' }}>
                  {job.note}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-border" />

      <p className="font-sans text-xs uppercase tracking-widest text-muted">Formaci&oacute;n</p>

      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-sans font-semibold text-xs mt-0.5"
          style={{ backgroundColor: '#8fba7412', border: '1px solid #8fba7435', color: '#8fba74' }}
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
