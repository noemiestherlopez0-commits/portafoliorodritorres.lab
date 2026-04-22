export default function PersonalCard() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        backgroundColor: '#fffdf5',
        border: '2.5px solid #7da866',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        animation: 'wobble 8s ease-in-out infinite',
      }}
    >
      <h2
        className="font-hand text-3xl font-bold leading-tight"
        style={{ color: '#0c120c' }}
      >
        Vida personal
      </h2>
      <ul
        className="flex flex-col gap-2 font-hand text-lg"
        style={{ color: '#2a3a2a' }}
      >
        <li className="flex items-start gap-2">
          <span style={{ color: '#e08246' }}>&#9829;</span>
          <span>Casado con Cami, mi favorita</span>
        </li>
        <li className="flex items-start gap-2">
          <span style={{ color: '#7da866' }}>&#10022;</span>
          <span>Ministerio y comunidad de fe</span>
        </li>
        <li className="flex items-start gap-2">
          <span style={{ color: '#e08246' }}>&#9835;</span>
          <span>La música es mi idioma extra</span>
        </li>
      </ul>
    </div>
  )
}
