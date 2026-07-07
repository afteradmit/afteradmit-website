type Row = {
  feature: string
  basic: boolean
  premium: boolean
  premiumText?: string
}

const rows: Row[] = [
  { feature: 'Tailored task list & deadlines', basic: true, premium: true },
  { feature: 'Document templates & guides', basic: true, premium: true },
  { feature: 'Deadline reminders', basic: true, premium: true },
  { feature: 'Access to community hub', basic: true, premium: true },
  { feature: '1:1 Chat Support', basic: false, premium: true, premiumText: 'Unlimited chat with an Advisor until arrival' },
  { feature: 'Visa Interview Prep', basic: false, premium: true, premiumText: 'Dedicated 30-min mock session' },
  { feature: '1:1 Advisor Calling Time', basic: false, premium: true, premiumText: 'Up to 4 hours (Max 8 sessions)' },
]

const cellBase: React.CSSProperties = {
  padding: '18px 20px',
  fontSize: 14,
  fontWeight: 500,
  borderTop: '1px solid var(--line)',
}

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 24px clamp(64px,8vw,104px)' }}>
        <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto 48px' }}>
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
            className="whitespace-nowrap max-[560px]:whitespace-normal"
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.4rem,2.8vw,2.2rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: '16px 0 0',
            }}
          >
            Find the Right Level of Support
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', margin: '16px 0 0', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
            Start managing your relocation for free, or secure full 1:1 advisor guidance from day one.
            You can also easily upgrade to Concierge from your dashboard at any point during your journey.
          </p>
        </div>

        <p
          className="hidden max-[700px]:block"
          style={{
            textAlign: 'center',
            fontSize: 13,
            fontWeight: 700,
            color: 'var(--terracotta)',
            margin: '0 auto 10px',
            maxWidth: 860,
          }}
        >
          &larr; Swipe to compare Premium Concierge &rarr;
        </p>
        <div
          style={{
            maxWidth: 860,
            margin: '0 auto',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-card)',
            overflow: 'auto',
          }}
        >
          <table style={{ width: '100%', minWidth: 640, borderCollapse: 'collapse', background: 'var(--surface)' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '24px 20px', verticalAlign: 'bottom' }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)' }}>Features</span>
                </th>
                <th style={{ padding: '24px 20px', textAlign: 'center', verticalAlign: 'bottom' }}>
                  <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-0.01em', marginBottom: 4 }}>Basic</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)' }}>Free</div>
                </th>
                <th
                  style={{
                    padding: '24px 20px',
                    textAlign: 'center',
                    verticalAlign: 'bottom',
                    background: 'var(--ink)',
                    color: 'var(--paper)',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    minWidth: 260,
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-0.01em', marginBottom: 4 }}>
                    Premium Concierge
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--apricot)' }}>$449</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const isLast = i === rows.length - 1
                return (
                  <tr key={row.feature}>
                    <td style={{ ...cellBase, color: 'var(--ink)', fontWeight: 600 }}>{row.feature}</td>
                    <td style={{ ...cellBase, textAlign: 'center' }}>
                      {row.basic ? (
                        <span style={{ color: 'var(--terracotta)', fontWeight: 700 }}>✓</span>
                      ) : (
                        <span style={{ color: 'var(--muted)' }}>—</span>
                      )}
                    </td>
                    <td
                      style={{
                        ...cellBase,
                        textAlign: 'center',
                        background: 'var(--ink)',
                        color: 'var(--paper)',
                        borderTop: '1px solid rgba(255,252,247,.12)',
                        borderBottomLeftRadius: isLast ? 16 : 0,
                        borderBottomRightRadius: isLast ? 16 : 0,
                        fontWeight: row.premiumText ? 700 : 500,
                        fontSize: row.premiumText ? 13 : 14,
                        lineHeight: 1.5,
                        minWidth: 260,
                        whiteSpace: 'normal',
                      }}
                    >
                      {row.premiumText ?? (
                        <span style={{ color: 'var(--apricot)', fontWeight: 700 }}>✓</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
          <a
            href="#waitlist"
            className="btn-secondary"
            style={{
              padding: '13px 28px',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: 15,
              color: 'var(--ink)',
            }}
          >
            Get Started Free
          </a>
          <a
            href="#waitlist"
            className="btn-accent"
            style={{
              padding: '13px 28px',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: 15,
              color: '#fff',
            }}
          >
            Purchase Concierge
          </a>
        </div>
      </div>
    </section>
  )
}
