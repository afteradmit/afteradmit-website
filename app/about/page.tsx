import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us — AfterAdmit',
  description:
    'AfterAdmit was built by international students who lived the chaos of moving abroad for university. Learn our story and what drives us.',
}

const stats = [
  { value: '2K+', label: 'admits guided to arrival' },
  { value: '25+', label: 'home countries supported' },
  { value: '40+', label: 'partner universities' },
  { value: '100%', label: 'been-there team' },
]

const principles = [
  {
    title: 'Clarity over noise',
    body: 'One ordered list beats a hundred forum threads. We tell you what to do next — and why.',
  },
  {
    title: 'Right info, right time',
    body: 'Guidance tuned to your school, country and deadlines — never generic, never too late.',
  },
  {
    title: 'Real humans behind it',
    body: 'When the stakes are high, a checklist isn\'t enough. We\'re here when you need a person.',
  },
]

export default function About() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          style={{
            maxWidth: 780,
            margin: '0 auto',
            padding: 'clamp(56px,8vw,100px) 24px clamp(48px,6vw,80px)',
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
            style={{
              fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
              fontWeight: 500,
              fontSize: 'clamp(2.4rem,5.5vw,4rem)',
              lineHeight: 1.06,
              letterSpacing: '-.02em',
              margin: '0 0 22px',
            }}
          >
            Built by students who{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>made the move.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem,1.6vw,1.2rem)',
              lineHeight: 1.6,
              color: 'var(--muted)',
              maxWidth: '38em',
              margin: '0 auto',
            }}
          >
            We&apos;re turning the most stressful months of a student&apos;s journey into a path
            anyone can follow with confidence.
          </p>
        </section>

        {/* Story */}
        <section
          style={{
            maxWidth: 680,
            margin: '0 auto',
            padding: '0 24px clamp(56px,7vw,96px)',
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
            {[
              'AfterAdmit started with a simple frustration: getting admitted was the celebration, but the months that followed were a blur of forms, deadlines, consulate rules and second-guessing — with no single place to turn.',
              'We\'d been through it ourselves. We knew the panic of a visa appointment that wouldn\'t open, the housing lease signed sight unseen, the bank account that took three tries. And we knew almost all of it was avoidable with the right information at the right time.',
              'So we built the guide we wished we\'d had — a clear, calm, personalized path that any admit can follow, from the acceptance email all the way to move-in day.',
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: '1.08rem',
                  lineHeight: 1.7,
                  color: i === 0 ? 'var(--ink)' : 'var(--muted)',
                  margin: 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section
          style={{
            background: 'var(--accent-soft)',
            padding: 'clamp(48px,6vw,80px) 24px',
          }}
        >
          <div
            style={{
              maxWidth: 1180,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 'clamp(24px,4vw,48px)',
              textAlign: 'center',
            }}
          >
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
                    fontSize: 'clamp(2.2rem,4vw,3rem)',
                    fontWeight: 500,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {value}
                </div>
                <div style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What we believe */}
        <section
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: 'clamp(56px,8vw,100px) 24px',
          }}
        >
          <div style={{ marginBottom: 48 }}>
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
              What we believe
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
                fontWeight: 400,
                fontSize: 'clamp(1.9rem,3.8vw,2.8rem)',
                lineHeight: 1.1,
                letterSpacing: '-.02em',
                margin: 0,
                maxWidth: '18em',
              }}
            >
              The principles behind every roadmap.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {principles.map(({ title, body }) => (
              <div
                key={title}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  borderRadius: 18,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: 'var(--accent-soft)',
                    marginBottom: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)', display: 'block' }} />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    margin: '0 0 10px',
                    letterSpacing: '-.01em',
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px clamp(72px,9vw,120px)' }}>
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
                  fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
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
