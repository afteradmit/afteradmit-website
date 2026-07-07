import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About us',
  description:
    'AfterAdmit started during an MBA at UCLA Anderson, built to make trusted information accessible to every admitted student.',
}

const storyParagraphs = [
  'AfterAdmit started during my MBA at UCLA Anderson.',
  'Like many admitted students, I found myself piecing together information from Reddit threads, WhatsApp groups, university portals, and countless websites. Every answer seemed to live somewhere different, and it was often difficult to know what to trust.',
  'As I spoke with classmates and other admits, I realized I wasn\'t alone. Nearly everyone was asking the same questions, solving the same problems, and repeating the same mistakes.',
  'That\'s when I started building AfterAdmit.',
  'We exist to make trusted information accessible to every admitted student through personalized roadmaps, verified services, and a supportive community.',
]

export default function About() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '48px 24px 0',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: 20,
            }}
          >
            About us
          </span>
          <h1
            className="max-[480px]:!text-[24px]"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.8rem,4vw,2.8rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              margin: '0 0 48px',
            }}
          >
            Built from experience.
            <br />
            <span style={{ color: 'var(--apricot)' }}>Designed for every admit.</span>
          </h1>
        </section>

        {/* Story */}
        <section
          style={{
            maxWidth: 980,
            margin: '0 auto',
            padding: '0 24px 48px',
          }}
        >
          <div
            style={{
              borderLeft: '3px solid var(--accent-soft)',
              paddingLeft: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
            }}
          >
            {storyParagraphs.map((para, i) => (
              <p
                key={i}
                className={i === 3 ? 'max-[480px]:[text-wrap:balance]' : undefined}
                style={{
                  fontSize: '1.08rem',
                  lineHeight: 1.7,
                  color: i === 0 ? 'var(--ink)' : 'var(--muted)',
                  margin: 0,
                  fontWeight: i === 0 || i === 3 ? 700 : 500,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Our Mission */}
        <section style={{ background: 'var(--accent-soft)' }}>
          <div
            style={{
              maxWidth: 980,
              margin: '0 auto',
              padding: '48px 24px 48px',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: 16,
              }}
            >
              Our Mission
            </span>
            <h2
              style={{
                fontWeight: 800,
                fontSize: 'clamp(1.9rem,3.8vw,2.8rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: '0 0 22px',
              }}
            >
              Democratizing access to information for admitted students.
            </h2>
            <p className="max-[480px]:[text-wrap:balance]" style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 16px' }}>
              Every admitted student deserves to begin their journey with confidence.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--muted)', margin: 0 }}>
              AfterAdmit organizes scattered, unreliable information into clear, personalized guidance so
              students can move from acceptance to arrival with clarity instead of confusion.
            </p>
          </div>
        </section>

        {/* Meet the Founder */}
        <section style={{ background: 'var(--paper)' }}>
          <div
            style={{
              maxWidth: 700,
              margin: '0 auto',
              padding: '48px 24px 48px',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: 24,
              }}
            >
              Meet the Founder
            </span>
            <img
              src="/founder.jpg"
              alt="Sayali Dhale"
              style={{
                width: 88,
                height: 88,
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                margin: '0 auto 20px',
              }}
            />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 4px' }}>
              Sayali Dhale
            </h3>
            <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--muted)', margin: '0 0 2px' }}>
              Founder, AfterAdmit
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--muted)', margin: '0 0 20px' }}>
              MBA Candidate, UCLA Anderson
            </p>
            <a
              href="https://www.linkedin.com/in/sayalidhale/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                border: '1.5px solid var(--line)',
                color: 'var(--ink)',
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.11 20.45H3.56V9h3.55v11.45z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 24px 48px' }}>
          <div
            style={{
              background: 'var(--ink)',
              borderRadius: 28,
              padding: 'clamp(44px,6vw,80px) clamp(28px,5vw,64px)',
              textAlign: 'center',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-30%',
                right: '-10%',
                width: 300,
                height: 300,
                background: 'var(--accent)',
                opacity: 0.18,
                borderRadius: '50%',
                filter: 'blur(40px)',
              }}
            />
            <div style={{ position: 'relative' }}>
              <h2
                style={{

                  fontWeight: 400,
                  fontSize: 'clamp(2rem,4vw,3rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-.02em',
                  margin: '0 0 16px',
                }}
              >
                Ready to make your move?
              </h2>
              <p
                className="max-[480px]:[text-wrap:balance]"
                style={{
                  fontSize: '1.08rem',
                  color: 'rgba(255,255,255,.66)',
                  maxWidth: '34em',
                  margin: '0 auto 32px',
                }}
              >
                Join the waitlist and we&apos;ll build your roadmap the moment we open in your region.
              </p>
              <a
                href="/#waitlist"
                className="btn-accent"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  padding: '14px 32px',
                  borderRadius: 12,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: 'inherit',
                }}
              >
                Join now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
