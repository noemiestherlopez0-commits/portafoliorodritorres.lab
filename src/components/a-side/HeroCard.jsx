import { Instagram, Linkedin, MapPin } from 'lucide-react'

export default function HeroCard() {
  return (
    <div
      className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col gap-5 animate-fade-in-up"
      style={{ animationDelay: '0ms' }}
    >
      {/* Avatar placeholder */}
      <div className="flex items-start gap-4">
        <div
          className="w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl font-heading font-extrabold text-dark border-2 border-forest"
          style={{ backgroundColor: '#7da866' }}
          aria-hidden="true"
        >
          RT
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-heading text-2xl font-extrabold text-white leading-tight">
            rodritorres.lab
          </h1>
          <p className="text-forest text-sm font-sans">
            Profe que también programa
          </p>
          <div className="flex items-center gap-1 text-xs text-white/50 mt-1">
            <MapPin size={12} />
            <span>Vicente López, Buenos Aires</span>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-3 flex-wrap">
        <a
          href="https://www.instagram.com/rodritorres.lab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dark-border text-white/70 hover:text-white hover:border-forest transition-colors text-xs"
          aria-label="Instagram de Rodrigo Torres"
        >
          <Instagram size={14} />
          @rodritorres.lab
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigotorreslabor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dark-border text-white/70 hover:text-white hover:border-forest transition-colors text-xs"
          aria-label="LinkedIn de Rodrigo Torres"
        >
          <Linkedin size={14} />
          rodrigotorreslabor
        </a>
      </div>

      {/* Availability badge */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-forest animate-pulse" aria-hidden="true" />
        <span className="text-xs text-white/50">
          Disponible para proyectos freelance
        </span>
      </div>
    </div>
  )
}
