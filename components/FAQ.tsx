'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Who is AfterAdmit for?',
    a: "Any admitted international student preparing to move for their studies. Whether you're starting an undergrad, master's or PhD, the journey from acceptance to arrival is the same set of moving parts — and that's exactly what we organize.",
  },
  {
    q: 'Is the roadmap really tailored to me?',
    a: 'Yes. We build it from your specific school, program, home country and start date, so deadlines, document lists and consulate requirements match your real situation — not a generic template.',
  },
  {
    q: 'Do you give immigration or legal advice?',
    a: "We help you understand and stay ahead of every requirement, prepare your documents and practice for your interview. For formal legal questions we point you to qualified professionals — we never pretend to replace them.",
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

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section
      id="faq"
      style={{
        maxWidth: 760,
        margin: '0 auto',
        padding: 'clamp(40px,6vw,72px) 24px clamp(64px,8vw,104px)',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
          fontWeight: 400,
          fontSize: 'clamp(2rem,4.4vw,3rem)',
          lineHeight: 1.1,
          letterSpacing: '-.02em',
          margin: '0 0 36px',
          textAlign: 'center',
        }}
      >
        Questions, answered.
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={faq.q}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 14,
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '20px 22px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                }}
              >
                <span style={{ fontSize: 16.5, fontWeight: 600, color: 'var(--ink)' }}>
                  {faq.q}
                </span>
                <span style={{ fontSize: 22, color: 'var(--accent)', lineHeight: 1, flexShrink: 0 }}>
                  {isOpen ? '–' : '+'}
                </span>
              </button>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  opacity: isOpen ? 1 : 0,
                  transition: 'grid-template-rows .28s ease, opacity .28s ease',
                  padding: '0 22px',
                }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ margin: 0, paddingBottom: 20, fontSize: 15, lineHeight: 1.6, color: 'var(--muted)' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
