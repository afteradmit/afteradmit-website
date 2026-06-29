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

export default function Services() {
  return (
    <section id="services" style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 24px' }}>
      <div style={{ maxWidth: 640, marginBottom: 48 }}>
        <span
          style={{
            fontSize: 13,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            fontWeight: 600,
          }}
        >
          Our Solution
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
            fontWeight: 400,
            fontSize: 'clamp(2rem,4.4vw,3rem)',
            lineHeight: 1.1,
            letterSpacing: '-.02em',
            margin: '16px 0 14px',
          }}
        >
          One checklist for the whole journey.
        </h2>
        <p style={{ fontSize: '1.08rem', lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>
          Every category, sequenced in the right order with the right deadlines — tailored to your
          school, country and program.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 18,
        }}
      >
        {services.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="service-card"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: 18,
              padding: 26,
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                width: 42,
                height: 42,
                borderRadius: 11,
                background: 'var(--accent-soft)',
                color: 'var(--accent-ink)',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                marginBottom: 16,
              }}
            >
              {icon}
            </span>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>{title}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
