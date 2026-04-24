const items = [
  {
    emoji: '🎓',
    title: 'Docencia',
    desc: 'Rob&oacute;tica, programaci&oacute;n con Scratch y Arduino, pensamiento computacional en todos los niveles.',
    detail: 'Arduino, ZUM Core 2.0, Rasti, Scratch &mdash; rob&oacute;tica desde primaria hasta secundaria.',
    accent: '#8fba74',
    delay: '0ms',
  },
  {
    emoji: '💻',
    title: 'Desarrollo web',
    desc: 'Apps con Next.js, React y Supabase. Del prototipo al deploy, pensando siempre en el usuario.',
    detail: 'Drizzle ORM, v0.dev, Claude AI &mdash; prototipo a producci&oacute;n en d&iacute;as.',
    accent: '#d97b46',
    delay: '60ms',
  },
  {
    emoji: '🏫',
    title: 'Coordinaci&oacute;n TIC',
    desc: 'Soporte pedag&oacute;gico-tecnol&oacute;gico de toda la instituci&oacute;n.',
    detail: 'Implementaci&oacute;n Google Workspace for Education &middot; 86 aulas activas &middot; soporte institucional completo.',
    accent: '#a89b84',
    delay: '120ms',
  },
]

export default function WhatIDoCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-6 animate-fade-in-up border border-border"
      style={{ animationDelay: '150ms' }}
    >
      <p className="font-sans text-xs uppercase tracking-widest text-muted">Lo que hago</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {items.map(({ emoji, title, desc, detail, accent, delay }) => (
          <div
            key={title}
            className="flex flex-col gap-2 animate-fade-in-up"
            style={{ animationDelay: delay }}
          >
            <span className="text-2xl" role="img" aria-label={title}>{emoji}</span>
            <span className="font-heading text-lg text-warm leading-snug" dangerouslySetInnerHTML={{ __html: title }} />
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: '#9e9588' }}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
            <p
              className="font-sans text-xs leading-relaxed mt-1"
              style={{ color: accent, opacity: 0.85 }}
              dangerouslySetInnerHTML={{ __html: detail }}
            />
            <div
              className="h-px mt-auto"
              style={{ backgroundColor: `${accent}30` }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
