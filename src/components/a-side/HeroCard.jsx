import { Instagram, Linkedin, Github, MapPin } from 'lucide-react'

export default function HeroCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-6 animate-fade-in-up border border-border"
      style={{ animationDelay: '0ms' }}
    >
      {/* Top: name block + animated blob avatar */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-4xl text-warm leading-tight">
            Rodrigo Torres
          </h1>
          <p className="font-sans text-sm text-muted leading-snug">
            Docente · Dev Fullstack · Coordinador TIC
          </p>
          <p className="font-sans text-sm leading-snug" style={{ color: '#8fba74' }}>
            Construyo tecnolog&iacute;a educativa que funciona en el aula real.
          </p>
          <span className="flex items-center gap-1.5 text-xs text-muted mt-1">
            <MapPin size={11} className="text-forest" />
            Vicente L&oacute;pez, Buenos Aires
          </span>
        </div>

        {/* Animated blob avatar */}
        <div
          className="w-20 h-20 flex-shrink-0 flex items-center justify-center font-heading text-xl select-none"
          style={{
            background: 'linear-gradient(135deg, #8fba74 0%, #d97b46 100%)',
            borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
            animation: 'wobble 8s ease-in-out infinite',
            color: '#13120e',
            fontSize: '1.2rem',
            fontWeight: 700,
          }}
          aria-label="Iniciales RT"
        >
          RT
        </div>
      </div>

      {/* Availability + social */}
      <div className="flex items-center justify-between flex-wrap gap-3 mt-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-forest animate-pulse flex-shrink-0" aria-hidden="true" />
          <span className="text-xs text-muted">Abierto a oportunidades remotas</span>
        </div>

        <div className="flex gap-2 flex-wrap">
          <a
            href="https://www.instagram.com/rodritorres.lab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-muted border border-border hover:text-warm hover:border-muted transition-colors"
            aria-label="Instagram de Rodrigo Torres"
          >
            <Instagram size={12} />
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigotorreslabor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-muted border border-border hover:text-warm hover:border-muted transition-colors"
            aria-label="LinkedIn de Rodrigo Torres"
          >
            <Linkedin size={12} />
            LinkedIn
          </a>
          <a
            href="https://github.com/rodritorres"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-muted border border-border hover:text-warm hover:border-muted transition-colors"
            aria-label="GitHub de Rodrigo Torres"
          >
            <Github size={12} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
