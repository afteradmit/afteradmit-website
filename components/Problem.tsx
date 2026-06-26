const stats = [
  {
    value: '40+',
    label: 'separate tasks across visa, housing, money, health and travel — each with its own deadline.',
  },
  {
    value: '5 mo',
    label: 'of scattered forums, group chats and conflicting advice from people who guessed.',
  },
  {
    value: '1',
    label: 'missed deadline can delay your visa, your housing, or your entire start date.',
  },
]

export default function Problem() {
  return (
    <section style={{ background: 'var(--ink)', color: '#fff' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 24px' }}>
        <div style={{ maxWidth: 760 }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              color: 'var(--accent-soft)',
              fontWeight: 600,
            }}
          >
            The gap nobody warns you about
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
              fontWeight: 400,
              fontSize: 'clamp(2rem,4.4vw,3.1rem)',
              lineHeight: 1.12,
              letterSpacing: '-.02em',
              margin: '18px 0 0',
            }}
          >
            The hard part isn&apos;t getting in. It&apos;s everything between the acceptance email
            and your first day on campus.
          </h2>
        </div>

        <div
          style={{
            marginTop: 52,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: 28,
          }}
        >
          {stats.map(({ value, label }) => (
            <div key={value}>
              <div
                style={{
                  fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
                  fontSize: '2.6rem',
                  color: 'var(--accent-soft)',
                }}
              >
                {value}
              </div>
              <p style={{ color: 'rgba(255,255,255,.66)', fontSize: 15, lineHeight: 1.5, margin: '6px 0 0' }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
