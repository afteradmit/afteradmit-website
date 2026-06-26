interface FinalCTAProps {
  email: string
  onEmail: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  ctaLabel: string
}

export default function FinalCTA({ email, onEmail, onSubmit, ctaLabel }: FinalCTAProps) {
  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px clamp(72px,9vw,120px)' }}>
      <div
        style={{
          background: 'var(--ink)',
          borderRadius: 28,
          padding: 'clamp(44px,6vw,80px) clamp(28px,5vw,64px)',
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative blur blob */}
        <div
          style={{
            position: 'absolute',
            top: '-30%',
            right: '-10%',
            width: 300,
            height: 300,
            background: 'var(--accent)',
            opacity: 0.18,
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />

        <div style={{ position: 'relative' }}>
          <h2
            style={{
              fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
              fontWeight: 400,
              fontSize: 'clamp(2.1rem,4.6vw,3.2rem)',
              lineHeight: 1.08,
              letterSpacing: '-.02em',
              margin: '0 0 16px',
            }}
          >
            You handled the hard part.
            <br />
            Let us handle the rest.
          </h2>
          <p
            style={{
              fontSize: '1.08rem',
              color: 'rgba(255,255,255,.66)',
              maxWidth: '34em',
              margin: '0 auto 32px',
            }}
          >
            Join the waitlist and we&apos;ll build your roadmap the moment we open in your region.
          </p>

          <form
            onSubmit={onSubmit}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              maxWidth: 460,
              margin: '0 auto',
              justifyContent: 'center',
            }}
          >
            <input
              value={email}
              onChange={(e) => onEmail(e.target.value)}
              type="email"
              placeholder="you@university.edu"
              className="input-field"
              style={{
                flex: '1 1 220px',
                minWidth: 0,
                padding: '14px 16px',
                border: '1px solid rgba(255,255,255,.18)',
                borderRadius: 12,
                fontSize: 15,
                fontFamily: 'inherit',
                background: 'rgba(255,255,255,.06)',
                color: '#fff',
              }}
            />
            <button
              type="submit"
              className="btn-accent"
              style={{
                padding: '14px 24px',
                border: 'none',
                borderRadius: 12,
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                fontFamily: 'inherit',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {ctaLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
