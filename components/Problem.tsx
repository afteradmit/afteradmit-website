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

const services = [
  {
    icon: '🛂',
    title: 'Visa & I-20',
    desc: 'DS-160, SEVIS, document checklists and interview prep tailored to your consulate.',
  },
  {
    icon: '🏠',
    title: 'Housing',
    desc: 'On-campus vs off-campus, verified listings, roommate matching and lease review.',
  },
  {
    icon: '✈️',
    title: 'Flights & arrival',
    desc: 'When to book, baggage rules, airport pickup and first-night logistics sorted.',
  },
  {
    icon: '💳',
    title: 'Banking & phone',
    desc: 'Open a US account before you land, get a SIM and start building credit early.',
  },
  {
    icon: '🩺',
    title: 'Insurance & health',
    desc: "Meet your school's waiver requirements without overpaying for coverage.",
  },
  {
    icon: '🧳',
    title: 'Settling in',
    desc: 'SSN, campus setup, climate-aware packing, and what to buy here vs bring.',
  },
]

export default function Problem() {
  return (
    <section id="how-it-works" style={{ background: 'var(--sand)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 24px clamp(64px,8vw,104px)' }}>
        <div style={{ maxWidth: 640, marginBottom: 48 }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              fontWeight: 800,
              color: 'var(--terracotta)',
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
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))',
            gap: 22,
          }}
        >
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              style={{
                background: 'var(--surface)',
                borderRadius: 'var(--radius-card)',
                boxShadow: 'var(--shadow-card)',
                padding: 30,
              }}
            >
              <div
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--terracotta)',
                  marginBottom: 16,
                }}
              >
                {num}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.01em', margin: '0 0 8px', color: 'var(--ink)' }}>{title}</h3>
              <p style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div id="services" style={{ maxWidth: 640, margin: 'clamp(48px,6vw,72px) 0 48px' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(2rem,4.4vw,3rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              margin: '0 0 16px',
              color: 'var(--ink)',
            }}
          >
            One checklist for the whole journey.
          </h2>
          <p style={{ fontSize: 'clamp(1.06rem,1.6vw,1.24rem)', fontWeight: 500, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
            Every category, sequenced in the right order with the right deadlines — tailored to your
            school, country and program.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
            gap: 22,
          }}
        >
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="service-card"
              style={{
                background: 'var(--surface)',
                borderRadius: 'var(--radius-card)',
                boxShadow: 'var(--shadow-card)',
                padding: 26,
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: 'var(--peach)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  marginBottom: 16,
                }}
              >
                {icon}
              </span>
              <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.01em', margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
