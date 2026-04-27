import { Repeat2 } from 'lucide-react'

export default function SideToggleButton({ isBSide, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-bold shadow-lg transition-all duration-500 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
      style={{
        backgroundColor: '#5ec46a',
        color: '#0f1f11',
        border: '2px solid #5ec46a',
      }}
      aria-label={isBSide ? 'Ver lado profesional (A Side)' : 'Ver lado personal (B Side)'}
    >
      <Repeat2 size={15} />
      <span>{isBSide ? 'A Side' : 'B Side'}</span>
    </button>
  )
}
