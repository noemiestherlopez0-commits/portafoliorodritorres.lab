import { Zap } from 'lucide-react'

const badges = [
  { label: 'Next.js',           category: 'dev' },
  { label: 'React',             category: 'dev' },
  { label: 'Tailwind CSS',      category: 'dev' },
  { label: 'Supabase',          category: 'dev' },
  { label: 'Vercel',            category: 'dev' },
  { label: 'GitHub',            category: 'dev' },
  { label: 'Google Workspace',  category: 'edu' },
  { label: 'Arduino',           category: 'edu' },
  { label: 'Scratch',           category: 'edu' },
]

const categoryStyle = {
  dev: { borderColor: '#7da86650', color: '#7da866' },
  edu: { borderColor: '#e0824650', color: '#e08246' },
}

export default function StackCard() {
  return (
    <div
      className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-5 animate-fade-in-up col-span-3"
      style={{ animationDelay: '320ms' }}
    >
      <div className="flex items-center gap-2">
        <Zap size={14} className="text-forest" />
        <span className="font-heading font-bold text-white text-sm tracking-wide">Stack</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {badges.map(({ label, category }) => (
          <span
            key={label}
            className="text-xs px-3 py-1.5 rounded-lg border font-sans transition-colors hover:bg-white/5"
            style={categoryStyle[category]}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
