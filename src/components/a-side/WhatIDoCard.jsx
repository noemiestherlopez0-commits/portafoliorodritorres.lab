const items = [
  {
    emoji: '🎓',
    title: 'Docencia',
    desc: 'Robótica, programación con Scratch y Arduino, pensamiento computacional en todos los niveles.',
    detail: 'Arduino, ZUM Core 2.0, Rasti, Scratch — robótica desde primaria hasta secundaria.',
    accent: '#3d9e50',
    delay: '0ms',
  },
  {
    emoji: '💻',
    title: 'Desarrollo web',
    desc: 'Apps con Next.js, React y Supabase. Del prototipo al deploy, pensando siempre en el usuario.',
    detail: 'Drizzle ORM, v0.dev, Claude AI — prototipo a producción en días.',
    accent: '#e07b45',
    delay: '80ms',
  },
  {
    emoji: '🏫',
    title: 'Coordinación TIC',
    desc: 'Soporte pedagógico-tecnológico de toda la institución.',
    detail: 'Google Workspace for Education · 86 aulas activas · soporte institucional completo.',
    accent: '#3d9e50',
    delay: '160ms',
  },
]

export default function WhatIDoCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-6 border border-border animate-fade-in-up"
      style={{ animationDelay: '140ms' }}
    >
      <p className="font-sans text-xs uppercase tracking-widest text-muted">Lo que hago</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {items.map(({ emoji, title, desc, detail, accent, delay }) => (
          <div
            key={title}
            className="flex flex-col gap-2 animate-scale-in group"
            style={{ animationDelay: delay }}
          >
            <span
              className="text-2xl transition-transform duration-300 group-hover:scale-125 w-fit"
              role="img"
              aria-label={title}
            >
              {emoji}
            </span>
            <span className="font-heading text-lg text-warm leading-snug">
              {title}
            </span>
            <p className="font-sans text-sm leading-relaxed text-muted">
              {desc}
            </p>
            <p
              className="font-sans text-xs leading-relaxed mt-1 font-medium"
              style={{ color: accent }}
            >
              {detail}
            </p>
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
