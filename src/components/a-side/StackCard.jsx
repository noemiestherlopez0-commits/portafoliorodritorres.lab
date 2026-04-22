const badges = [
  { label: 'Next.js', category: 'dev' },
  { label: 'React', category: 'dev' },
  { label: 'Tailwind CSS', category: 'dev' },
  { label: 'Supabase', category: 'dev' },
  { label: 'Vercel', category: 'dev' },
  { label: 'GitHub', category: 'dev' },
  { label: 'Google Workspace', category: 'edu' },
  { label: 'Arduino', category: 'edu' },
  { label: 'Scratch', category: 'edu' },
]

const categoryStyle = {
  dev: 'border-forest/40 text-forest',
  edu: 'border-orange/40 text-orange',
}

export default function StackCard() {
  return (
    <div
      className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col gap-4 animate-fade-in-up"
      style={{ animationDelay: '320ms' }}
    >
      <div className="text-white/40 text-xs uppercase tracking-widest">Stack</div>

      <div className="flex flex-wrap gap-2">
        {badges.map(({ label, category }) => (
          <span
            key={label}
            className={`text-xs px-2.5 py-1 rounded-lg border font-sans ${categoryStyle[category]}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
