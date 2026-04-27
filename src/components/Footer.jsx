export default function Footer({ isBSide }) {
  return (
    <footer
      className="w-full py-5 flex flex-col sm:flex-row items-center justify-between gap-2 px-8 transition-colors duration-500"
      style={{
        borderTop: '1px solid #2e4a31',
        backgroundColor: 'transparent',
      }}
    >
      <span className="font-sans text-xs text-muted font-semibold">
        &copy; 2026 rodritorres.lab
      </span>
      <span
        className="font-sans text-sm font-bold"
        style={{ color: '#5ec46a' }}
      >
        Filip. 4:13
      </span>
    </footer>
  )
}
