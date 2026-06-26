const logoWidths = [120, 104, 130, 96, 116]

export default function TrustBar() {
  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: '8px 24px 64px' }}>
      <p
        style={{
          textAlign: 'center',
          fontSize: 13,
          letterSpacing: '.08em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          margin: '0 0 22px',
        }}
      >
        Helping admits headed to 40+ universities
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '14px 40px',
          alignItems: 'center',
          opacity: 0.7,
        }}
      >
        {logoWidths.map((w, i) => (
          <div
            key={i}
            className={i === 2 || i === 3 ? 'hide-sm' : undefined}
            style={{
              width: w,
              height: 26,
              background: 'repeating-linear-gradient(45deg,#ECE7DD 0 8px,#F4F0E8 8px 16px)',
              borderRadius: 5,
            }}
          />
        ))}
      </div>
    </section>
  )
}
