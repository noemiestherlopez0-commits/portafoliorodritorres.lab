const jobs = [
  {
    org: 'Instituto Cristiano Vicente López',
    abbrev: 'ICVL',
    roles: ['Líder TIC', 'Docente'],
    accent: '#8fba74',
  },
  {
    org: 'Colegio Jesús en el Huerto',
    abbrev: 'CJH',
    roles: ['Docente Informática'],
    accent: '#d97b46',
  },
  {
    org: 'Espacio Cultural Despacio',
    abbrev: 'ECD',
    roles: ['Taller Robótica'],
    accent: '#8fba74',
  },
]

export default function WorkCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-5 animate-fade-in-up border border-border"
      style={{ animationDelay: '70ms' }}
    >
      {/* Section label */}
      <p className="font-sans text-xs uppercase tracking-widest text-muted">
        D&oacute;nde trabajo
      </p>

      {/* Jobs */}
      <ul className="flex flex-col gap-4">
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
              {job.abbrev.slice(0, 2)}
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-sm font-sans text-warm leading-snug">{job.org}</span>
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
            </div>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Education */}
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
          <span className="text-sm font-sans text-warm leading-snug">
            Prof. de Inform&aacute;tica — CONSUDEC V-5
          </span>
          <span className="text-xs font-sans text-forest">2do a&ntilde;o en curso</span>
        </div>
      </div>
    </div>
  )
}
