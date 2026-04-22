const groups = [
  {
    label: 'Desarrollo',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Vercel', 'GitHub'],
    accent: '#8fba74',
  },
  {
    label: 'Educación',
    items: ['Google Workspace', 'Arduino', 'Scratch'],
    accent: '#d97b46',
  },
]

export default function StackCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-6 animate-fade-in-up border border-border"
      style={{ animationDelay: '310ms' }}
    >
      <p className="font-sans text-xs uppercase tracking-widest text-muted">Herramientas</p>

      <div className="flex flex-col gap-5">
        {groups.map(({ label, items, accent }) => (
          <div key={label} className="flex flex-col gap-3">
            <span
              className="font-sans text-xs font-semibold"
              style={{ color: accent }}
            >
              {label}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="font-sans text-sm px-3 py-1.5 rounded-lg border border-border text-muted hover:text-warm transition-colors cursor-default"
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
