export default function Footer({ isBSide }) {
  return (
    <footer
      className="w-full py-6 flex flex-col sm:flex-row items-center justify-between gap-2 px-4 transition-colors duration-500"
      style={{
        borderTop: isBSide ? '1.5px dashed #7da866' : '1px solid #2a3a2a',
      }}
    >
      <span
        className={`text-xs transition-colors duration-500 ${isBSide ? 'font-hand text-base' : 'font-sans text-white/40'}`}
        style={isBSide ? { color: '#4a6b3a' } : {}}
      >
        &copy; rodritorres.lab
      </span>
      <span
        className={`text-xs transition-colors duration-500 ${isBSide ? 'font-hand text-base font-bold' : 'font-sans text-white/30 italic'}`}
        style={isBSide ? { color: '#e08246' } : {}}
      >
        Filip. 4:13
      </span>
    </footer>
  )
}
