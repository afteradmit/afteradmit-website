const testimonials = [
  {
    quote:
      '"This is exactly what I wish I had before moving to the US. It would\'ve saved me countless hours searching through forums and group chats."',
    name: 'MBA Student',
    origin: 'UCLA Anderson',
  },
  {
    quote:
      '"The personalized roadmap makes an overwhelming process finally feel manageable. Everything is organized in one place."',
    name: 'Incoming Graduate Student',
    origin: '',
  },
  {
    quote:
      '"Having trusted recommendations instead of ten conflicting opinions would have made every decision so much easier."',
    name: 'International Student',
    origin: '',
  },
]

export default function StudentVoices() {
  return (
    <section style={{ background: 'var(--sand)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 24px clamp(64px,8vw,104px)' }}>
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
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
            Student Voices
          </span>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.9rem,3.8vw,2.8rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: 0,
            }}
          >
            What admits are saying.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
            gap: 22,
          }}
        >
          {testimonials.map(({ quote, name, origin }) => (
            <div
              key={name + origin}
              style={{
                background: 'var(--surface)',
                borderRadius: 'var(--radius-card)',
                boxShadow: 'var(--shadow-card)',
                padding: 30,
              }}
            >
              <p
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: 'var(--ink)',
                  margin: '0 0 20px',
                }}
              >
                {quote}
              </p>
              <div style={{ fontWeight: 700, fontSize: 14.5 }}>{name}</div>
              {origin && <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted)' }}>{origin}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
