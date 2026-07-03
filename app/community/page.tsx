import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Community',
  description: 'A place to connect with other admits, ask questions, and share what you learn. Coming soon.',
}

export default function CommunityPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--sand)' }}>
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
            padding: '48px 24px 72px',
            minHeight: 'calc(100vh - 65px - 120px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: 'var(--terracotta)',
              display: 'block',
              marginBottom: 20,
            }}
          >
            COMMUNITY
          </span>
          <h1
            style={{
              fontWeight: 800,
              fontSize: 'clamp(2rem,4.5vw,3rem)',
              letterSpacing: '-.025em',
              lineHeight: 1.08,
              margin: '0 0 16px',
            }}
          >
            We&apos;re coming soon.
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 32px', maxWidth: 440 }}>
            A place to connect with other admits, ask questions without judgment, and share what
            you learn along the way. We&apos;re building it now, so check back soon.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--terracotta)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
