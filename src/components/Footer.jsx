export default function Footer({ isBSide }) {
  return (
    <footer
      className="w-full py-5 flex flex-col sm:flex-row items-center justify-between gap-2 px-6 transition-colors duration-500"
      style={{
        borderTop: isBSide ? '1.5px dashed #7da866' : '1px solid #1e3a1e',
        backgroundColor: isBSide ? 'transparent' : '#0a0f0a',
      }}
    >
      <span
        className="transition-colors duration-500"
        style={
          isBSide
            ? { fontFamily: 'Caveat, cursive', fontSize: '1.1rem', color: '#4a6b3a' }
            : { fontFamily: '"Space Mono", monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }
        }
      >
        &copy; 2026 rodritorres.lab
      </span>
      <span
        className="transition-colors duration-500"
        style={
          isBSide
            ? { fontFamily: 'Caveat, cursive', fontSize: '1.1rem', fontWeight: 700, color: '#e08246' }
            : { fontFamily: '"Space Mono", monospace', fontSize: '0.7rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.2)' }
        }
      >
        Filip. 4:13
      </span>
    </footer>
  )
}
