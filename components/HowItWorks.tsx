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

export default function HowItWorks() {
  return (
    <section id="how" style={{ background: 'var(--accent-soft)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 24px' }}>
        <div style={{ maxWidth: 640, marginBottom: 48 }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              color: 'var(--accent-ink)',
              fontWeight: 600,
            }}
          >
            How it works
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
              fontWeight: 400,
              fontSize: 'clamp(2rem,4.4vw,3rem)',
              lineHeight: 1.1,
              letterSpacing: '-.02em',
              margin: '16px 0 0',
              color: 'var(--ink)',
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
              style={{ background: 'var(--surface)', borderRadius: 18, padding: 30 }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
                  fontSize: '1.6rem',
                  color: 'var(--accent)',
                  marginBottom: 16,
                }}
              >
                {num}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
