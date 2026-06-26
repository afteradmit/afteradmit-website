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
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 24px' }}>
      <div
        style={{
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
              border: '1px solid var(--line)',
              borderRadius: 20,
              padding: 34,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
                fontSize: '1.35rem',
                lineHeight: 1.45,
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
                  background: 'repeating-linear-gradient(45deg,#ECE7DD 0 6px,#F4F0E8 6px 12px)',
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5 }}>{name}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>{origin}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
