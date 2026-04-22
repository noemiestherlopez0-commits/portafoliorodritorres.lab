import { GraduationCap, Code2, Server } from 'lucide-react'

const items = [
  {
    icon: GraduationCap,
    title: 'Docencia',
    desc: 'Robótica, programación con Scratch y Arduino, pensamiento computacional para todos los niveles.',
    iconColor: '#7da866',
    iconBg: '#7da86618',
    iconBorder: '#7da86640',
    delay: '0ms',
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    desc: 'Apps web con Next.js, React y Supabase. Del prototipo al deploy en producción.',
    iconColor: '#e08246',
    iconBg: '#e0824618',
    iconBorder: '#e0824640',
    delay: '60ms',
  },
  {
    icon: Server,
    title: 'Coordinación TIC',
    desc: '86 Google Classrooms administradas. Soporte pedagógico-tecnológico institucional.',
    iconColor: '#8b9aa8',
    iconBg: '#8b9aa818',
    iconBorder: '#8b9aa840',
    delay: '120ms',
  },
]

export default function WhatIDoCard() {
  return (
    <div
      className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-5 animate-fade-in-up col-span-3"
      style={{ animationDelay: '160ms' }}
    >
      <span className="font-heading font-bold text-white text-sm tracking-wide">
        Lo Que Hago
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map(({ icon: Icon, title, desc, iconColor, iconBg, iconBorder, delay }) => (
          <div
            key={title}
            className="card-glow flex flex-col gap-3 p-4 rounded-xl border border-border animate-fade-in-up"
            style={{ animationDelay: delay }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: iconBg, border: `1.5px solid ${iconBorder}` }}
            >
              <Icon size={17} style={{ color: iconColor }} />
            </div>
            <span className="font-heading font-bold text-white text-sm">{title}</span>
            <p className="text-xs text-white/50 leading-relaxed font-sans">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
