import { Instagram, Linkedin, MapPin, Cpu, Leaf } from 'lucide-react'

export default function HeroCard() {
  return (
    <div
      className="card-glow relative bg-card border border-border rounded-2xl p-6 flex flex-col gap-5 animate-fade-in-up col-span-2"
      style={{ animationDelay: '0ms' }}
    >
      {/* Top row: identity + photo placeholder */}
      <div className="flex items-start justify-between gap-4">
        {/* Left: icon + name + tags */}
        <div className="flex flex-col gap-3">
          {/* Logo mark */}
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center relative"
              style={{ backgroundColor: '#7da86618', border: '1.5px solid #7da866' }}
              aria-hidden="true"
            >
              <Leaf size={14} className="text-forest absolute top-1.5 left-1.5" />
              <Cpu size={11} className="text-forest absolute bottom-1 right-1" />
            </div>
            <h1 className="font-heading text-2xl font-extrabold text-white tracking-tight leading-none">
              rodritorres.lab
            </h1>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-sans px-2.5 py-1 rounded-md border border-border text-white/60">
              Portafolio Laboral
            </span>
            <span className="flex items-center gap-1 text-xs font-sans px-2.5 py-1 rounded-md border border-border text-white/60">
              <MapPin size={11} className="text-forest" />
              Vicente López 🇦🇷
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-white/55 font-sans leading-relaxed max-w-xs">
            Referente TIC y Diseñador Tech Escolar: Diseño e implemento soluciones tecnológicas en contextos educativos reales.
          </p>
        </div>

        {/* Photo placeholder */}
        <div
          className="w-24 h-24 rounded-xl flex-shrink-0 flex items-center justify-center font-heading font-extrabold text-2xl"
          style={{ backgroundColor: '#7da86615', border: '1.5px dashed #1e3a1e', color: '#7da86660' }}
          aria-label="Foto de perfil"
        >
          RT
        </div>
      </div>

      {/* Green dot + availability */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-forest animate-pulse flex-shrink-0" aria-hidden="true" />
        <span className="text-xs text-white/40 font-sans">Disponible para proyectos freelance</span>
      </div>

      {/* Social buttons */}
      <div className="flex gap-2 flex-wrap">
        <a
          href="https://www.instagram.com/rodritorres.lab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-sans text-white/70 border border-border hover:border-forest hover:text-white transition-colors"
          aria-label="Instagram de Rodrigo Torres"
        >
          <Instagram size={13} />
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigotorreslabor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-sans text-white/70 border border-border hover:border-forest hover:text-white transition-colors"
          aria-label="LinkedIn de Rodrigo Torres"
        >
          <Linkedin size={13} />
          LinkedIn
        </a>
      </div>
    </div>
  )
}
