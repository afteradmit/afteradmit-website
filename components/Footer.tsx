const columns = [
  {
    title: 'Product',
    links: [
      { href: '/#how-it-works', label: 'How it works' },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/community', label: 'Community' },
      { href: '/resources', label: 'Resources' },
      { href: '/rewards', label: 'Rewards' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Feedback' },
      { href: '/contact', label: 'Report an issue' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
]

const socials = [
  {
    href: 'https://www.linkedin.com/company/afteradmit',
    label: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/afteradmit/',
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--paper)' }}>
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '56px 24px 48px',
        }}
      >
        <div
          className="max-[860px]:!grid-cols-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(180px,1.4fr) repeat(4, minmax(0,1fr))',
            gap: 32,
            rowGap: 40,
          }}
        >
          <div className="max-[860px]:!col-span-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="/logo.png" alt="AfterAdmit" style={{ width: 28, height: 28, borderRadius: 8, display: 'block' }} />
              <span style={{ fontWeight: 700, fontSize: 16 }}>AfterAdmit</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              {socials.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: 'var(--muted)', display: 'flex' }}
                >
                  {icon}
                </a>
              ))}
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>© 2026 AfterAdmit</div>
          </div>

          {columns.map(({ title, links }) => (
            <div key={title}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  marginBottom: 14,
                }}
              >
                {title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(({ href, label }) => (
                  <a
                    key={href + label}
                    href={href}
                    style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
