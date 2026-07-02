'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'Who is AfterAdmit for?',
    a: "Any admitted international student preparing to move for their studies. Whether you're starting an undergrad, master's or PhD, the journey from acceptance to arrival is the same set of moving parts, and that's exactly what we organize.",
  },
  {
    q: 'Is the roadmap really tailored to me?',
    a: 'Yes. We build it from your specific school, program, home country and start date, so deadlines, document lists and consulate requirements match your real situation, not a generic template.',
  },
  {
    q: 'Do you give immigration or legal advice?',
    a: "We help you understand and stay ahead of every requirement, prepare your documents and practice for your interview. For formal legal questions we point you to qualified professionals. We never pretend to replace them.",
  },
  {
    q: 'When does it open in my region?',
    a: "We're rolling out region by region based on demand. Join the waitlist with your school email and we'll notify you the moment your country and university are supported.",
  },
  {
    q: 'How much does it cost?',
    a: 'The full roadmap is free. If you want a dedicated human advisor, document review and visa interview prep, the one-time Concierge plan covers your entire journey.',
  },
]

export default function FAQClient() {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState<number | null>(0)

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main style={{ background: 'var(--sand)', minHeight: 'calc(100vh - 65px)' }}>
      {/* Header */}
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: 'clamp(48px,7vw,80px) 24px 40px',
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: 'var(--terracotta)',
            display: 'block',
            marginBottom: 14,
          }}
        >
          FAQ
        </span>
        <h1
          style={{
            fontWeight: 800,
            fontSize: 'clamp(2rem,4.5vw,3rem)',
            letterSpacing: '-.025em',
            lineHeight: 1.08,
            margin: '0 0 28px',
          }}
        >
          Frequently asked questions
        </h1>

        {/* Search bar */}
        <div style={{ position: 'relative', maxWidth: 560 }}>
          <span
            style={{
              position: 'absolute',
              left: 18,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 17,
              color: 'var(--muted)',
              pointerEvents: 'none',
            }}
          >
            🔍
          </span>
          <input
            type="search"
            placeholder="Search questions and answers..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setOpen(null) }}
            style={{
              width: '100%',
              padding: '14px 20px 14px 48px',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid var(--line)',
              background: 'var(--surface)',
              fontSize: 15,
              fontFamily: 'inherit',
              fontWeight: 500,
              color: 'var(--ink)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--terracotta)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
          />
        </div>
      </div>

      {/* Two-column content */}
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 24px clamp(64px,8vw,104px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,240px) 1fr',
          gap: 40,
          alignItems: 'start',
        }}
      >
        {/* Left: Support box */}
        <div
          style={{
            background: 'var(--surface)',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-card)',
            padding: '24px 20px',
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.01em', marginBottom: 10 }}>
            Need support?
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.65,
              color: 'var(--muted)',
              margin: '0 0 20px',
            }}
          >
            Can&apos;t find what you are looking for? If you have more questions, our team is happy
            to help.
          </p>
          <Link
            href="mailto:support@afteradmit.com"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--terracotta)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Contact us
          </Link>
        </div>

        {/* Right: Q&A accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.length === 0 && (
            <p style={{ color: 'var(--muted)', fontSize: 15, padding: '12px 0' }}>
              No results for &ldquo;{search}&rdquo;
            </p>
          )}
          {filtered.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                style={{
                  background: 'var(--surface)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-card)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>
                    {faq.q}
                  </span>
                  <span style={{ fontSize: 22, color: 'var(--terracotta)', lineHeight: 1, flexShrink: 0 }}>
                    {isOpen ? '–' : '+'}
                  </span>
                </button>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0,
                    transition: 'grid-template-rows .28s ease, opacity .28s ease',
                    padding: '0 24px',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p
                      style={{
                        margin: 0,
                        paddingBottom: 20,
                        fontSize: 15,
                        fontWeight: 500,
                        lineHeight: 1.6,
                        color: 'var(--muted)',
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
