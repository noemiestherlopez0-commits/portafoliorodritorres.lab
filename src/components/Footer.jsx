export default function Footer({ isBSide }) {
  return (
    <footer
      className="w-full py-5 flex flex-col sm:flex-row items-center justify-between gap-2 px-8 transition-colors duration-500"
      style={{
        borderTop: isBSide ? '1.5px dashed #a8d48a60' : '1px solid #3a5434',
        backgroundColor: 'transparent',
      }}
    >
      <span
        className="transition-colors duration-500"
        style={
          isBSide
            ? { fontFamily: 'Caveat, cursive', fontSize: '1.1rem', color: '#6b7c5a' }
            : { fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#4a4539' }
        }
      >
        &copy; 2026 rodritorres.lab
      </span>
      <span
        className="transition-colors duration-500"
        style={
          isBSide
            ? { fontFamily: 'Caveat, cursive', fontSize: '1.1rem', fontWeight: 700, color: '#d97b46' }
            : { fontFamily: '"DM Serif Display", serif', fontSize: '0.8rem', fontStyle: 'italic', color: '#4a4539' }
        }
      >
        Filip. 4:13
      </span>
    </footer>
  )
}
