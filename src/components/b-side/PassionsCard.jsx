const passions = [
  { label: 'Piano', color: '#d97b46' },
  { label: 'Guitarra', color: '#a8d48a' },
  { label: 'Canto', color: '#d97b46' },
  { label: 'Fútbol', color: '#a8d48a' },
  { label: 'Ajedrez', color: '#d97b46' },
  { label: 'Marvel', color: '#a8d48a' },
  { label: 'Parques temáticos', color: '#d97b46' },
  { label: 'Música', color: '#a8d48a' },
]

export default function PassionsCard() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        backgroundColor: '#fff8ee',
        border: '2.5px solid #d97b46',
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        animation: 'wobble 10s ease-in-out infinite reverse',
      }}
    >
      <h2 className="font-hand text-3xl font-bold" style={{ color: '#1a2e18' }}>
        Pasiones
      </h2>

      <div className="flex flex-wrap gap-2">
        {passions.map(({ label, color }) => (
          <span
            key={label}
            className="font-hand text-base px-3 py-1 rounded-full border-2 font-bold transition-transform duration-200 hover:scale-110 cursor-default"
            style={{
              borderColor: color,
              color,
              backgroundColor: `${color}18`,
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
