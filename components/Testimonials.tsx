const testimonials = [
  {
    quote:
      '"I was drowning in browser tabs. AfterAdmit handed me a single ordered list and I just… followed it. Visa approved, housing locked, zero panic."',
    name: 'Priya R.',
    origin: 'India → Boston University',
  },
  {
    quote:
      '"My parents finally stopped worrying because they could see exactly what was done and what was next. That peace of mind was worth everything."',
    name: 'Daniel O.',
    origin: 'Nigeria → Purdue',
  },
]

export default function Testimonials() {
  return (
    <section style={{ background: 'var(--sand)' }}>
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: 'clamp(64px,8vw,104px) 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 22,
        }}
      >
        {testimonials.map(({ quote, name, origin }) => (
          <div
            key={name}
            style={{
              background: 'var(--surface)',
              borderRadius: 'var(--radius-card)',
              boxShadow: 'var(--shadow-card)',
              padding: 34,
            }}
          >
            <p
              style={{
                fontSize: '1.18rem',
                fontWeight: 500,
                lineHeight: 1.6,
                color: 'var(--ink)',
                margin: '0 0 24px',
              }}
            >
              {quote}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'var(--peach)',
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5 }}>{name}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted)' }}>{origin}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
