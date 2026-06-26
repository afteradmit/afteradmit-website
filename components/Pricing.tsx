const freeFeatures = ['Tailored task list & deadlines', 'Document templates & guides', 'Deadline reminders']

const conciergeFeatures = [
  'Everything in Roadmap',
  '1:1 human advisor over chat',
  'Document & lease review',
  'Visa interview mock prep',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,6vw,72px) 24px clamp(64px,8vw,104px)' }}
    >
      <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
        <span
          style={{
            fontSize: 13,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            fontWeight: 600,
          }}
        >
          Pricing
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
            fontWeight: 400,
            fontSize: 'clamp(2rem,4.4vw,3rem)',
            lineHeight: 1.1,
            letterSpacing: '-.02em',
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
            border: '1px solid var(--line)',
            borderRadius: 20,
            padding: 32,
          }}
        >
          <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 6px' }}>Roadmap</h3>
          <div
            style={{ fontFamily: 'var(--font-newsreader, "Newsreader", serif)', fontSize: '2.6rem', margin: '0 0 4px' }}
          >
            Free
          </div>
          <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 22px' }}>
            Your full personalized checklist.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {freeFeatures.map((f) => (
              <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14.5 }}>
                <span style={{ color: 'var(--accent)' }}>✓</span>
                {f}
              </div>
            ))}
          </div>
          <a
            href="#waitlist"
            style={{
              display: 'block',
              textAlign: 'center',
              marginTop: 26,
              padding: 13,
              borderRadius: 12,
              border: '1px solid var(--ink)',
              color: 'var(--ink)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14.5,
            }}
          >
            Join free
          </a>
        </div>

        {/* Paid — Concierge */}
        <div
          style={{
            background: 'var(--ink)',
            color: '#fff',
            borderRadius: 20,
            padding: 32,
            position: 'relative',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              background: 'var(--accent)',
              color: '#fff',
              fontSize: 12,
              fontWeight: 600,
              padding: '4px 11px',
              borderRadius: 999,
            }}
          >
            Most chosen
          </span>
          <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 6px' }}>Concierge</h3>
          <div
            style={{ fontFamily: 'var(--font-newsreader, "Newsreader", serif)', fontSize: '2.6rem', margin: '0 0 4px' }}
          >
            $149
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', margin: '0 0 22px' }}>
            One-time, for the whole journey.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {conciergeFeatures.map((f) => (
              <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14.5 }}>
                <span style={{ color: 'var(--accent-soft)' }}>✓</span>
                {f}
              </div>
            ))}
          </div>
          <a
            href="#waitlist"
            style={{
              display: 'block',
              textAlign: 'center',
              marginTop: 26,
              padding: 13,
              borderRadius: 12,
              background: 'var(--accent)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14.5,
            }}
          >
            Get concierge
          </a>
        </div>
      </div>
    </section>
  )
}
