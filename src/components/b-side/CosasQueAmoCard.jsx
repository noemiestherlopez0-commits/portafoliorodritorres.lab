const cosas = [
  'el mate amargo',
  'los viernes de fútbol',
  'programar de noche',
  'la lluvia en la ventana',
  'una buena armonía',
  'el silencio antes de jugar',
  'enseñar y aprender',
  'Filipenses 4:13',
]

const colors = ['#7da866', '#e08246', '#4a6b3a', '#c06a30', '#9dc27e', '#e8a060']

export default function CosasQueAmoCard() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        backgroundColor: '#fffbf2',
        border: '2.5px solid #e08246',
        borderRadius: '50% 50% 30% 70% / 50% 70% 30% 50%',
        animation: 'wobble 9s ease-in-out infinite reverse',
      }}
    >
      <h2
        className="font-hand text-3xl font-bold"
        style={{ color: '#0c120c' }}
      >
        Cosas que amo
      </h2>

      <div className="flex flex-wrap gap-2">
        {cosas.map((cosa, i) => (
          <span
            key={cosa}
            className="font-hand text-base px-3 py-1 rounded-full font-bold"
            style={{
              backgroundColor: `${colors[i % colors.length]}20`,
              color: colors[i % colors.length],
              border: `2px solid ${colors[i % colors.length]}60`,
            }}
          >
            {cosa}
          </span>
        ))}
      </div>
    </div>
  )
}
