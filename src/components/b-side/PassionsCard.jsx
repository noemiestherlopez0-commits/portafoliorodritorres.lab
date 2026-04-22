const passions = [
  { label: 'Piano', color: '#e08246' },
  { label: 'Guitarra', color: '#7da866' },
  { label: 'Canto', color: '#e08246' },
  { label: 'Futbol', color: '#7da866' },
  { label: 'Ajedrez', color: '#e08246' },
]

export default function PassionsCard() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        backgroundColor: '#fff8ee',
        border: '2.5px solid #e08246',
        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        animation: 'wobble 10s ease-in-out infinite reverse',
      }}
    >
      <h2
        className="font-hand text-3xl font-bold"
        style={{ color: '#0c120c' }}
      >
        Pasiones
      </h2>

      <div className="flex flex-wrap gap-2">
        {passions.map(({ label, color }) => (
          <span
            key={label}
            className="font-hand text-base px-3 py-1 rounded-full border-2 font-bold"
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
