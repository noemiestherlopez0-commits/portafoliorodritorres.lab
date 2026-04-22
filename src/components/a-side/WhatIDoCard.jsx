import { BookOpen, Code2, Network } from 'lucide-react'

const items = [
  {
    icon: BookOpen,
    title: 'Docencia',
    desc: 'Robótica, programación con Scratch y Arduino, pensamiento computacional para todos los niveles.',
    delay: '0ms',
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    desc: 'Apps web con Next.js, React y Supabase. Del prototipo al deploy en producción.',
    delay: '60ms',
  },
  {
    icon: Network,
    title: 'Coordinación TIC',
    desc: '86 Google Classrooms administradas, soporte pedagógico-tecnológico institucional.',
    delay: '120ms',
  },
]

export default function WhatIDoCard() {
  return (
    <div
      className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col gap-4 animate-fade-in-up"
      style={{ animationDelay: '160ms' }}
    >
      <div className="text-white/40 text-xs uppercase tracking-widest">Lo que hago</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map(({ icon: Icon, title, desc, delay }) => (
          <div
            key={title}
            className="flex flex-col gap-2 p-4 rounded-xl border border-dark-border hover:border-forest/50 transition-colors animate-fade-in-up"
            style={{ animationDelay: delay }}
          >
            <div className="w-8 h-8 rounded-lg bg-dark flex items-center justify-center border border-dark-border">
              <Icon size={16} className="text-forest" />
            </div>
            <span className="font-heading font-bold text-white text-sm">{title}</span>
            <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
