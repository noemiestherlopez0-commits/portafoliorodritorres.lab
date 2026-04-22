import { Instagram, Linkedin, MapPin } from 'lucide-react'

export default function HeroCard() {
  return (
    <div
      className="bg-card rounded-2xl p-7 flex flex-col gap-6 animate-fade-in-up border border-border"
      style={{ animationDelay: '0ms' }}
    >
      {/* Top: name block + photo */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-4xl text-warm leading-tight">
            Rodrigo Torres
          </h1>
          <p className="font-sans text-sm text-muted leading-relaxed">
            Referente TIC · Diseñador Tech Escolar · Docente
          </p>
          <span className="flex items-center gap-1.5 text-xs text-muted mt-1">
            <MapPin size={11} className="text-forest" />
            Vicente L&oacute;pez, Buenos Aires
          </span>
        </div>

        {/* Avatar placeholder */}
        <div
          className="w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center font-heading text-xl"
          style={{ backgroundColor: '#8fba7412', border: '1.5px solid #2c2a1f', color: '#8fba7470' }}
          aria-label="Foto de perfil"
        >
          RT
        </div>
      </div>

      {/* Bio */}
      <p className="font-sans text-sm leading-relaxed" style={{ color: '#b0a99a' }}>
        Dise&ntilde;o e implemento soluciones tecnol&oacute;gicas en contextos educativos reales.
        Creo en la tecnolog&iacute;a al servicio de las personas, no al rev&eacute;s.
      </p>

      {/* Availability + social */}
      <div className="flex items-center justify-between flex-wrap gap-3 mt-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-forest animate-pulse flex-shrink-0" aria-hidden="true" />
          <span className="text-xs text-muted">Disponible para proyectos</span>
        </div>

        <div className="flex gap-2">
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
        </div>
      </div>
    </div>
  )
}
