const items = [
  {
    icon: '🏫',
    title: 'Coordinación TIC',
    desc: 'En instituciones educativas de todos los niveles.',
  },
  {
    icon: '💻',
    title: 'Desarrollo a medida',
    desc: 'ERPs, plataformas educativas y apps web.',
  },
  {
    icon: '🎓',
    title: 'Capacitación docente',
    desc: 'Tecnología aplicada al aula real.',
  },
]

export default function DisponibleCard() {
  return (
    <div
      className="rounded-2xl p-7 flex flex-col gap-6 animate-fade-in-up border"
      style={{
        backgroundColor: '#1b1a14',
        borderColor: '#8fba7430',
        borderStyle: 'dashed',
        animationDelay: '390ms',
      }}
    >
      <p className="font-sans text-xs uppercase tracking-widest text-muted">
        Disponible para
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {items.map(({ icon, title, desc }) => (
          <div key={title} className="flex flex-col gap-2">
            <span className="text-2xl" role="img" aria-label={title}>{icon}</span>
            <span className="font-heading text-base text-warm leading-snug">{title}</span>
            <p className="font-sans text-xs leading-relaxed" style={{ color: '#7a7060' }}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-1">
        <a
          href="mailto:rodrigo@rodritorres.lab"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#8fba74', color: '#13120e' }}
        >
          Escribime
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  )
}
