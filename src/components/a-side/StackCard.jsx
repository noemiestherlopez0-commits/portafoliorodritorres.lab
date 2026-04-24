const groups = [
  {
    label: 'Desarrollo',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Drizzle ORM', 'TypeScript', 'Vercel', 'GitHub', 'v0.dev'],
    accent: '#a8d48a',
    delay: '0ms',
  },
  {
    label: 'Educación',
    items: ['Google Workspace', 'Arduino', 'ZUM Core 2.0', 'Scratch', 'Rasti', 'Potrero Digital'],
    accent: '#d97b46',
    delay: '80ms',
  },
  {
    label: 'IA & Productividad',
    items: ['Claude AI', 'Cursor', 'Vercel AI SDK'],
    accent: '#9ab889',
    delay: '160ms',
  },
]

export default function StackCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-6 border border-border animate-fade-in-up"
      style={{ animationDelay: '310ms' }}
    >
      <p className="font-sans text-xs uppercase tracking-widest text-muted">Herramientas</p>

      <div className="flex flex-col gap-5">
        {groups.map(({ label, items, accent, delay }) => (
          <div key={label} className="flex flex-col gap-3 animate-slide-in-left" style={{ animationDelay: delay }}>
            <span className="font-sans text-xs font-semibold" style={{ color: accent }}>
              {label}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <span
                  key={item}
                  className="font-sans text-sm px-3 py-1.5 rounded-lg border border-border text-muted hover:text-warm hover:border-forest hover:-translate-y-0.5 transition-all duration-200 cursor-default animate-scale-in"
                  style={{ animationDelay: `${parseInt(delay) + i * 30}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
