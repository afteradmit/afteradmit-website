const links = [
  { href: '#services', label: 'What we handle' },
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '36px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'var(--accent)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 15,
              fontWeight: 700,
              transform: 'rotate(-6deg)',
            }}
          >
            ↗
          </span>
          <span style={{ fontWeight: 700, fontSize: 16 }}>AfterAdmit</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, fontSize: 14 }}>
          {links.map(({ href, label }) => (
            <a key={href} href={href} style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              {label}
            </a>
          ))}
        </div>

        <span style={{ fontSize: 13, color: 'var(--muted)' }}>© 2026 AfterAdmit</span>
      </div>
    </footer>
  )
}
