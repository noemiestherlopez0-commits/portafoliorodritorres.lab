const items = [
  {
    emoji: '🏫',
    title: 'Coordinación TIC',
    desc: 'En instituciones educativas de todos los niveles.',
    delay: '0ms',
  },
  {
    emoji: '💻',
    title: 'Desarrollo a medida',
    desc: 'ERPs, plataformas educativas y apps web.',
    delay: '80ms',
  },
  {
    emoji: '🎓',
    title: 'Capacitación docente',
    desc: 'Tecnología aplicada al aula real.',
    delay: '160ms',
  },
]

export default function DisponibleCard() {
  return (
    <div
      className="rounded-2xl p-7 flex flex-col gap-6 border animate-fade-in-up"
      style={{
        backgroundColor: '#0f1f11',
        borderColor: '#5ec46a40',
        animationDelay: '390ms',
      }}
    >
      <p className="font-sans text-xs uppercase tracking-widest font-bold" style={{ color: '#5ec46a' }}>
        Disponible para
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {items.map(({ emoji, title, desc, delay }) => (
          <div
            key={title}
            className="flex flex-col gap-2 animate-scale-in group"
            style={{ animationDelay: delay }}
          >
            <span
              className="text-2xl w-fit transition-transform duration-300 group-hover:scale-125"
              role="img"
              aria-label={title}
            >
              {emoji}
            </span>
            <span className="font-heading text-base font-extrabold leading-snug" style={{ color: '#e8f2e8' }}>
              {title}
            </span>
            <p className="font-sans text-xs leading-relaxed" style={{ color: '#8aab8c' }}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-1 animate-fade-in-up" style={{ animationDelay: '480ms' }}>
        <a
          href="mailto:rodrigo@rodritorres.lab"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans text-sm font-extrabold transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
          style={{ backgroundColor: '#5ec46a', color: '#0f1f11' }}
        >
          Escribime
          <span aria-hidden="true">&#8594;</span>
        </a>
      </div>
    </div>
  )
}
