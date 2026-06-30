const freeFeatures = ['Tailored task list & deadlines', 'Document templates & guides', 'Deadline reminders']

const conciergeFeatures = [
  'Everything in Roadmap',
  '1:1 human advisor over chat',
  'Document & lease review',
  'Visa interview mock prep',
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,6vw,72px) 24px clamp(64px,8vw,104px)' }}>
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              fontWeight: 800,
              color: 'var(--terracotta)',
            }}
          >
            Pricing
          </span>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(2rem,4.4vw,3rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: '16px 0 0',
            }}
          >
            Start free. Upgrade when it gets real.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 22,
            maxWidth: 760,
            margin: '0 auto',
          }}
        >
          {/* Free — Roadmap */}
          <div
            style={{
              background: 'var(--surface)',
              borderRadius: 'var(--radius-card)',
              boxShadow: 'var(--shadow-card)',
              padding: 32,
            }}
          >
            <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.01em', margin: '0 0 6px' }}>Roadmap</h3>
            <div style={{ fontSize: 'clamp(2.6rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 4px' }}>
              Free
            </div>
            <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--muted)', margin: '0 0 22px' }}>
              Your full personalized checklist.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {freeFeatures.map((f) => (
                <div key={f} style={{ display: 'flex', gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <span style={{ color: 'var(--terracotta)', fontWeight: 700 }}>✓</span>
                  {f}
                </div>
              ))}
            </div>
            <a
              href="#waitlist"
              className="btn-secondary"
              style={{
                display: 'block',
                textAlign: 'center',
                marginTop: 26,
                padding: 13,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 15,
                color: 'var(--ink)',
              }}
            >
              Join free
            </a>
          </div>

          {/* Paid — Concierge */}
          <div
            style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              borderRadius: 'var(--radius-card)',
              boxShadow: 'var(--shadow-card)',
              padding: 32,
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'var(--terracotta)',
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
              }}
            >
              Most chosen
            </span>
            <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.01em', margin: '0 0 6px' }}>Concierge</h3>
            <div style={{ fontSize: 'clamp(2.6rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--apricot)', margin: '0 0 4px' }}>
              $149
            </div>
            <p style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,252,247,.6)', margin: '0 0 22px' }}>
              One-time, for the whole journey.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {conciergeFeatures.map((f) => (
                <div key={f} style={{ display: 'flex', gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <span style={{ color: 'var(--apricot)', fontWeight: 700 }}>✓</span>
                  {f}
                </div>
              ))}
            </div>
            <a
              href="#waitlist"
              className="btn-accent"
              style={{
                display: 'block',
                textAlign: 'center',
                marginTop: 26,
                padding: 13,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 15,
                color: '#fff',
              }}
            >
              Get concierge
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
