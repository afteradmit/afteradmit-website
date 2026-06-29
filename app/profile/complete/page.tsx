import Link from 'next/link'
import Nav from '@/components/Nav'

export default function CompleteProfile() {
  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: 'calc(100vh - 65px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 420 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: 'var(--accent-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: 22,
            }}
          >
            🗂️
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
              fontWeight: 500,
              fontSize: '1.9rem',
              letterSpacing: '-.02em',
              margin: '0 0 12px',
            }}
          >
            Complete your profile
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 32px' }}>
            This is where you&apos;ll add your school, country, program and start date so we can
            build your personalised roadmap. Coming soon.
          </p>
          <Link
            href="/dashboard"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              color: 'var(--accent)',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            ← Back to dashboard
          </Link>
        </div>
      </main>
    </>
  )
}
