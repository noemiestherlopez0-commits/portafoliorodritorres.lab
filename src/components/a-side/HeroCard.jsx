import { Instagram, Linkedin, Github, MapPin } from 'lucide-react'

export default function HeroCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-6 border border-border animate-slide-in-left"
      style={{ animationDelay: '0ms' }}
    >
      {/* Top: name block + animated blob avatar */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-4xl text-warm leading-tight animate-fade-in-down" style={{ animationDelay: '80ms' }}>
            Rodrigo Torres
          </h1>
          <p className="font-sans text-sm text-muted leading-snug animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            Docente · Dev Fullstack · Coordinador TIC
          </p>
          <p className="font-sans text-sm leading-snug animate-fade-in-up" style={{ color: '#a8d48a', animationDelay: '220ms' }}>
            Construyo tecnolog&iacute;a educativa que funciona en el aula real.
          </p>
          <span className="flex items-center gap-1.5 text-xs text-muted mt-1 animate-fade-in-up" style={{ animationDelay: '280ms' }}>
            <MapPin size={11} className="text-forest" />
            Vicente L&oacute;pez, Buenos Aires
          </span>
        </div>

        {/* Animated blob avatar */}
        <div
          className="w-20 h-20 flex-shrink-0 flex items-center justify-center font-heading text-xl select-none animate-float"
          style={{
            background: 'linear-gradient(135deg, #a8d48a 0%, #d97b46 100%)',
            borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
            animation: 'wobble 8s ease-in-out infinite, float 4s ease-in-out infinite',
            color: '#1f2e1c',
            fontSize: '1.2rem',
            fontWeight: 700,
          }}
          aria-label="Iniciales RT"
        >
          RT
        </div>
      </div>

      {/* Availability + social */}
      <div className="flex items-center justify-between flex-wrap gap-3 mt-auto animate-fade-in-up" style={{ animationDelay: '340ms' }}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse-dot" style={{ backgroundColor: '#a8d48a' }} aria-hidden="true" />
          <span className="text-xs text-muted">Abierto a oportunidades remotas</span>
        </div>

        <div className="flex gap-2 flex-wrap">
          {[
            { href: 'https://www.instagram.com/rodritorres.lab', icon: <Instagram size={12} />, label: 'Instagram' },
            { href: 'https://www.linkedin.com/in/rodrigotorreslabor', icon: <Linkedin size={12} />, label: 'LinkedIn' },
            { href: 'https://github.com/rodritorres', icon: <Github size={12} />, label: 'GitHub' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-muted border border-border hover:text-warm hover:border-forest transition-all duration-200 hover:scale-105"
              aria-label={`${label} de Rodrigo Torres`}
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
