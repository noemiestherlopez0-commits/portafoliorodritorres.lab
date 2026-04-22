import { Repeat2 } from 'lucide-react'

export default function SideToggleButton({ isBSide, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full font-sans text-sm font-bold shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={
        isBSide
          ? {
              backgroundColor: '#0a0f0a',
              color: '#7da866',
              border: '2px solid #7da866',
              focusRingColor: '#7da866',
            }
          : {
              backgroundColor: '#7da866',
              color: '#0c120c',
              border: '2px solid #7da866',
            }
      }
      aria-label={isBSide ? 'Ver lado profesional (A Side)' : 'Ver lado personal (B Side)'}
    >
      <Repeat2 size={16} />
      <span>{isBSide ? 'A SIDE' : 'B SIDE'}</span>
    </button>
  )
}
