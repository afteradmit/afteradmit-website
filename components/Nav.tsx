const navLinks = [
  { href: '/#services', label: 'Our Solution' },
  { href: '/#how', label: 'How it works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/about', label: 'About us' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Nav() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        background: 'rgba(250,248,244,.82)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <nav
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <a
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', color: 'var(--ink)' }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: 'var(--accent)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 700,
              transform: 'rotate(-6deg)',
            }}
          >
            ↗
          </span>
          <span style={{ fontWeight: 700, fontSize: 19, letterSpacing: '-.02em' }}>AfterAdmit</span>
        </a>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{ textDecoration: 'none', color: 'var(--muted)', fontSize: 15, fontWeight: 500 }}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="#signin"
            style={{
              textDecoration: 'none',
              color: 'var(--muted)',
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Sign in
          </a>
          <a
            href="#waitlist"
            className="nav-cta"
            style={{
              textDecoration: 'none',
              background: 'var(--ink)',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Join now
          </a>
        </div>
      </nav>
    </header>
  )
}
