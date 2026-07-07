interface FinalCTAProps {
  email: string
  onEmail: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  ctaLabel: string
}

export default function FinalCTA({ email, onEmail, onSubmit, ctaLabel }: FinalCTAProps) {
  return (
    <section style={{ background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 24px clamp(48px,6vw,72px)' }}>
        <div
          style={{
            background: 'var(--ink)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(44px,6vw,80px) clamp(28px,5vw,64px)',
            textAlign: 'center',
            color: 'var(--paper)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative glow blobs */}
          <div
            style={{
              position: 'absolute', top: '-30%', right: '-10%',
              width: 300, height: 300,
              background: 'var(--terracotta)',
              opacity: 0.15, borderRadius: '50%', filter: 'blur(50px)',
            }}
          />
          <div
            style={{
              position: 'absolute', bottom: '-20%', left: '-8%',
              width: 240, height: 240,
              background: 'var(--apricot)',
              opacity: 0.12, borderRadius: '50%', filter: 'blur(50px)',
            }}
          />

          <div style={{ position: 'relative' }}>
            <h2
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2.1rem,4.6vw,3.2rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                margin: '0 0 16px',
                color: 'var(--paper)',
              }}
            >
              You handled the hard part.
              <br />
              Let us handle the rest.
            </h2>
            <p
              className="max-[480px]:[text-wrap:balance]"
              style={{
                fontSize: 'clamp(1.06rem,1.6vw,1.18rem)',
                fontWeight: 500,
                color: 'rgba(255,252,247,.66)',
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
                  padding: '14px 20px',
                  border: '1px solid rgba(255,255,255,.15)',
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: 'inherit',
                  background: 'rgba(255,252,247,.07)',
                  color: 'var(--paper)',
                }}
              />
              <button
                type="submit"
                className="btn-accent"
                style={{
                  padding: '14px 26px',
                  border: 'none',
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 700,
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
      </div>
    </section>
  )
}
