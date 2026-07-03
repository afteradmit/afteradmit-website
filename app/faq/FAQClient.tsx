'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'Who is AfterAdmit for?',
    a: "Any admitted student getting ready for what comes after the acceptance letter. That includes international students coming to the US and domestic students navigating the same maze of housing, funding, and paperwork. Whether you're starting a master's, MBA, or PhD, AfterAdmit helps you navigate every step from admission to your arrival on campus and beyond.",
  },
  {
    q: "I'm an undergrad. Can I still use it?",
    a: 'Yes. Our current focus is on graduate students, but the resources, checklists, and guidance apply to undergraduates too, and we plan to expand support for them over time.',
  },
  {
    q: 'Is the roadmap really personalized?',
    a: "Yes. It's built from the details you share: your university, your program, where you're coming from, and when you start. Two students admitted to the same school can have very different journeys, and your roadmap reflects yours, not a one-size-fits-all list. That said, treat it as a planning guide. Always confirm requirements with your university and visa office, since they have the final word.",
  },
  {
    q: 'Do you provide immigration or legal advice?',
    a: 'No. AfterAdmit is an information tool. We help you understand each step, keep track of deadlines, and get your documents in order. For anything that needs professional legal judgment, please check with a qualified expert.',
  },
  {
    q: 'When will AfterAdmit be available for my country or university?',
    a: "We're rolling out in phases, starting with students headed to US graduate programs. Join the community with your university email and you'll hear from us the moment your school or destination is covered.",
  },
  {
    q: 'How much does AfterAdmit cost?',
    a: 'The core product is free, and it will stay that way. If you want hands-on support, our Concierge plan adds one-on-one help like document review and visa interview prep.',
  },
  {
    q: "Can I use AfterAdmit if I've already started my visa process?",
    a: "Yes. You can join at any point between admission and your first day on campus, or even after you've arrived. Tell us where you are in the process, and your roadmap picks up from there, so you can see what's done, what's next, and what you might have missed.",
  },
  {
    q: 'How is AfterAdmit different from Google, Reddit, or WhatsApp groups?',
    a: "Those places are full of advice, but it's scattered, often outdated, and rarely specific to your situation. AfterAdmit pulls the reliable information into one place, sequences it for your timeline, and tells you which sources you can actually trust. You spend less time searching and second-guessing, and more time preparing.",
  },
  {
    q: 'Do I have to buy services through AfterAdmit?',
    a: 'No. The roadmap works the same whether you use our recommended partners or arrange everything yourself. The partners we recommend are vetted based on student feedback and our quality standards, but the choice is always yours.',
  },
]

export default function FAQClient() {
  const [search, setSearch] = useState('')
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]))

  const toggle = (i: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(i)) {
        next.delete(i)
      } else {
        next.add(i)
      }
      return next
    })
  }

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main style={{ background: 'var(--sand)' }}>
      {/* Header */}
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: 'clamp(40px,5vw,48px) 24px 40px',
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
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              left: 18,
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              color: '#9E9188',
            }}
          >
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="search"
            placeholder="Search questions, topics or keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px 14px 44px',
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
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 24px clamp(64px,8vw,104px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,280px) minmax(0,930px)',
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
            href="/contact"
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
            const isOpen = openSet.has(i)
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
                  onClick={() => toggle(i)}
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
