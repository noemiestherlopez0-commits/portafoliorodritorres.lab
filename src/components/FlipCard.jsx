export default function FlipCard({ front, back, flipped, onClick, className = '' }) {
  return (
    <div
      className={`perspective-1000 cursor-pointer ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
      aria-pressed={flipped}
      aria-label="Voltear tarjeta"
    >
      <div className={`card-flip relative w-full h-full ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="card-face absolute inset-0">
          {front}
        </div>
        {/* Back */}
        <div className="card-face card-back absolute inset-0">
          {back}
        </div>
      </div>
    </div>
  )
}
