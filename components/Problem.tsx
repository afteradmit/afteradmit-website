const steps = [
  {
    num: '01',
    title: "Tell us where you're headed",
    desc: 'Your school, program, home country and start date. Takes two minutes.',
  },
  {
    num: '02',
    title: 'Get your personal roadmap',
    desc: 'Every task, deadline and document laid out in the exact order to do them.',
  },
  {
    num: '03',
    title: 'Move in with nothing forgotten',
    desc: 'Check things off with guidance and real support at every step of the way.',
  },
]

export default function Problem() {
  return (
    <section id="how-it-works" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 24px' }}>
        <div style={{ maxWidth: 640, marginBottom: 52 }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              fontWeight: 800,
              color: 'var(--peach)',
            }}
          >
            How it works
          </span>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(2rem,4.4vw,3rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: '18px 0 0',
              color: 'var(--paper)',
            }}
          >
            Three steps to a calm move-in.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 22,
          }}
        >
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              style={{
                background: 'rgba(255,252,247,.06)',
                borderRadius: 'var(--radius-card)',
                padding: 30,
              }}
            >
              <div
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--apricot)',
                  marginBottom: 16,
                }}
              >
                {num}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.01em', margin: '0 0 8px', color: 'var(--paper)' }}>{title}</h3>
              <p style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.6, color: 'rgba(255,252,247,.6)', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
