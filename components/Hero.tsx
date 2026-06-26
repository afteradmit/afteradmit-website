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
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--accent-soft)',
            color: 'var(--accent-ink)',
            padding: '6px 14px',
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)' }} />
          For international students
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
            fontWeight: 500,
            fontSize: 'clamp(2.7rem,6vw,4.6rem)',
            lineHeight: 1.02,
            letterSpacing: '-.02em',
            margin: '0 0 22px',
          }}
        >
          From admit to arrival,
          <br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>handled.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.05rem,1.6vw,1.22rem)',
            lineHeight: 1.55,
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
              padding: '14px 16px',
              border: '1px solid var(--line)',
              borderRadius: 12,
              fontSize: 15,
              fontFamily: 'inherit',
              background: 'var(--surface)',
              color: 'var(--ink)',
            }}
          />
          <button
            type="submit"
            className="btn-accent"
            style={{
              padding: '14px 22px',
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

        <p style={{ fontSize: 13.5, color: 'var(--muted)', margin: '14px 0 0' }}>
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
            background: 'var(--accent-soft)',
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
            border: '1px solid var(--line)',
            borderRadius: 22,
            boxShadow: '0 30px 60px -28px rgba(27,34,48,.32)',
            padding: 22,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              Your roadmap
            </span>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)' }}>62% done</span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
              fontSize: 21,
              fontWeight: 500,
              marginBottom: 14,
            }}
          >
            Fall &apos;26 · Boston
          </div>

          <div style={{ height: 7, borderRadius: 99, background: 'var(--accent-soft)', overflow: 'hidden', marginBottom: 18 }}>
            <div style={{ width: '62%', height: '100%', background: 'var(--accent)', borderRadius: 99 }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {completedTasks.map((task) => (
              <div key={task} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span
                  style={{
                    width: 22, height: 22, borderRadius: 7,
                    background: 'var(--accent)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span style={{ fontSize: 14.5, color: 'var(--muted)', textDecoration: 'line-through' }}>{task}</span>
              </div>
            ))}

            {/* In-progress task */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'var(--accent-soft)', margin: '0 -10px',
                padding: '8px 10px', borderRadius: 10,
              }}
            >
              <span style={{ width: 22, height: 22, borderRadius: 7, border: '2px solid var(--accent)', flexShrink: 0 }} />
              <span style={{ fontSize: 14.5, fontWeight: 600 }}>
                Book visa interview <span style={{ color: 'var(--accent)' }}>· due in 5 days</span>
              </span>
            </div>

            {pendingTasks.map((task) => (
              <div key={task} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 22, height: 22, borderRadius: 7, border: '2px solid var(--line)', flexShrink: 0 }} />
                <span style={{ fontSize: 14.5, color: 'var(--ink)' }}>{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
