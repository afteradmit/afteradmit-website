interface HeroProps {
  email: string
  onEmail: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  ctaLabel: string
}

const completedTasks = ['Pay enrollment deposit', 'Receive I-20, pay SEVIS fee']
const pendingTasks = ['Confirm housing & deposit', 'Book flights']

export default function Hero({ email, onEmail, onSubmit, ctaLabel }: HeroProps) {
  return (
    <section
      id="top"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: 'clamp(48px,8vw,96px) 24px clamp(40px,6vw,80px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(330px,1fr))',
        gap: 'clamp(40px,6vw,72px)',
        alignItems: 'center',
      }}
    >
      {/* Left column */}
      <div>
        <h1
          style={{
            fontWeight: 800,
            fontSize: 'clamp(2.7rem,6vw,4.5rem)',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            margin: '0 0 22px',
          }}
        >
          <span style={{ fontSize: '0.94em', display: 'block' }}>Congratulations! You got in.</span>
          We&apos;ll handle{' '}
          <span style={{ color: 'var(--terracotta)' }}>what&apos;s next.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.06rem,1.6vw,1.24rem)',
            fontWeight: 500,
            lineHeight: 1.6,
            color: 'var(--muted)',
            maxWidth: '30em',
            margin: '0 0 32px',
          }}
        >
          You got in. Now comes the visa, the housing, the flights, the bank account — a thousand
          small things with hard deadlines. AfterAdmit turns the months between acceptance and
          move-in into one clear, guided checklist, with real humans when you need them.
        </p>

        <form
          onSubmit={onSubmit}
          id="waitlist"
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10, maxWidth: 480 }}
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
              border: '1px solid var(--line)',
              fontSize: 15,
              fontWeight: 500,
              fontFamily: 'inherit',
              background: 'var(--surface)',
              color: 'var(--ink)',
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

        <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted)', margin: '14px 0 0' }}>
          Free to join · Built by students who made the move
        </p>
      </div>

      {/* Right column — animated roadmap card */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            position: 'absolute',
            top: '-6%',
            right: '-4%',
            width: '78%',
            height: '88%',
            background: 'var(--peach)',
            borderRadius: 28,
            transform: 'rotate(4deg)',
          }}
        />
        <div
          className="animate-floatcard"
          style={{
            position: 'relative',
            width: 'min(380px,100%)',
            background: 'var(--surface)',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-card)',
            padding: 22,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              Your roadmap
            </span>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--terracotta)' }}>62% done</span>
          </div>

          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 14 }}>
            Fall &apos;26 · Boston
          </div>

          <div style={{ height: 7, borderRadius: 99, background: 'var(--peach)', overflow: 'hidden', marginBottom: 18 }}>
            <div style={{ width: '62%', height: '100%', background: 'var(--terracotta)', borderRadius: 99 }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {completedTasks.map((task) => (
              <div key={task} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span
                  style={{
                    width: 22, height: 22, borderRadius: 7,
                    background: 'var(--terracotta)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--muted)', textDecoration: 'line-through' }}>{task}</span>
              </div>
            ))}

            <div
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'var(--peach)', margin: '0 -10px',
                padding: '8px 10px', borderRadius: 10,
              }}
            >
              <span style={{ width: 22, height: 22, borderRadius: 7, border: '2px solid var(--terracotta)', flexShrink: 0 }} />
              <span style={{ fontSize: 14.5, fontWeight: 700 }}>
                Book visa interview <span style={{ color: 'var(--terracotta)' }}>· due in 5 days</span>
              </span>
            </div>

            {pendingTasks.map((task) => (
              <div key={task} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 22, height: 22, borderRadius: 7, border: '2px solid var(--line)', flexShrink: 0 }} />
                <span style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--ink)' }}>{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
