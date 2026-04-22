const artworks = [
  {
    title: 'Clase de robótica',
    color: '#7da866',
    pattern: 'M10 80 Q 95 10 180 80 Q 95 150 10 80 Z',
  },
  {
    title: 'Noches de música',
    color: '#e08246',
    pattern: 'M90 10 L170 80 L90 150 L10 80 Z',
  },
  {
    title: 'Tablero y silencio',
    color: '#4a6b3a',
    pattern: 'M50 10 L150 10 L180 90 L100 150 L20 90 Z',
  },
]

export default function GalleryCard() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        backgroundColor: '#fdf5e6',
        border: '2.5px dashed #7da866',
        borderRadius: '30% 70% 50% 50% / 50% 30% 70% 50%',
        animation: 'wobble 12s ease-in-out infinite',
      }}
    >
      <h2
        className="font-hand text-3xl font-bold"
        style={{ color: '#0c120c' }}
      >
        Arte & Momentos
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {artworks.map(({ title, color, pattern }) => (
          <div key={title} className="flex flex-col items-center gap-1.5">
            <div
              className="w-full aspect-square rounded-xl flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: `${color}22`, border: `2px solid ${color}50` }}
            >
              <svg viewBox="0 0 200 160" className="w-3/4 h-3/4" aria-hidden="true">
                <path d={pattern} fill={color} opacity="0.6" />
                <circle cx="100" cy="80" r="12" fill={color} opacity="0.9" />
              </svg>
            </div>
            <span className="font-hand text-xs text-center leading-tight" style={{ color: '#2a3a2a' }}>
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
