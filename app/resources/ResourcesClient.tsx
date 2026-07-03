'use client'

import { useState } from 'react'
import Link from 'next/link'

const tabs = ['Packing', 'Scholarships'] as const
type Tab = (typeof tabs)[number]

const packingGroups = [
  {
    title: 'Documents to carry on you',
    items: [
      'Passport, visa, and I-20 or equivalent admission documents',
      'Acceptance letter and financial documents',
      'Printed and digital copies of transcripts and test scores',
      'Health records and vaccination certificates',
    ],
  },
  {
    title: 'Clothing & climate',
    items: [
      'Layerable clothing for your destination’s seasons',
      'One formal outfit for orientation or interviews',
      'Comfortable shoes for a lot of walking early on',
    ],
  },
  {
    title: 'Electronics & everyday items',
    items: [
      'Laptop, charger, and a universal power adapter',
      'A physical backup of important files',
      'Basic toiletries and a small supply of any regular medication',
    ],
  },
]

const scholarshipGroups = [
  {
    title: 'Types of funding to look into',
    items: [
      'Merit-based scholarships offered directly by your university',
      'Need-based financial aid and grants',
      'External scholarships from foundations, employers, or your home country',
      'Graduate assistantships (teaching or research) for eligible programs',
    ],
  },
  {
    title: 'Where to look',
    items: [
      'Your university’s financial aid or international students office',
      'Government or embassy-run scholarship programs for your home country',
      'Scholarship search databases and your program department’s own listings',
    ],
  },
]

const cardStyle: React.CSSProperties = {
  background: 'var(--surface)',
  borderRadius: 'var(--radius-card)',
  boxShadow: 'var(--shadow-card)',
}

export default function ResourcesClient() {
  const [active, setActive] = useState<Tab>('Packing')
  const groups = active === 'Packing' ? packingGroups : scholarshipGroups

  return (
    <main style={{ background: 'var(--sand)' }}>
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '48px 24px 72px',
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
          RESOURCES
        </span>
        <h1
          style={{
            fontWeight: 800,
            fontSize: 'clamp(2rem,4.5vw,3rem)',
            letterSpacing: '-.025em',
            lineHeight: 1.08,
            margin: '0 0 32px',
          }}
        >
          Free guides to help you get ready.
        </h1>

        {/* Subsection tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            borderBottom: '1px solid var(--line)',
            paddingBottom: 20,
            marginBottom: 32,
          }}
        >
          {tabs.map((tab) => {
            const isActive = tab === active
            return (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                style={{
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  background: isActive ? 'var(--terracotta)' : 'var(--surface)',
                  color: isActive ? '#fff' : 'var(--muted)',
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  boxShadow: isActive ? 'none' : 'var(--shadow-card)',
                }}
              >
                {tab}
              </button>
            )
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 760 }}>
          {groups.map((group) => (
            <div key={group.title} style={{ ...cardStyle, padding: 'clamp(24px,4vw,32px)' }}>
              <h2 style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 16px' }}>
                {group.title}
              </h2>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {group.items.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.6, color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--terracotta)', fontWeight: 700, flexShrink: 0 }}>&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {active === 'Packing' && (
            <div
              style={{
                ...cardStyle,
                padding: 'clamp(20px,3vw,28px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>Downloadable packing checklist</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Sign up for the downloadable file. It&apos;s free.</div>
              </div>
              <Link
                href="/signup"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--terracotta)',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
              >
                Sign up
              </Link>
            </div>
          )}

          <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--muted)', margin: '4px 0 0' }}>
            This is general guidance, not exhaustive advice. Please refer to our{' '}
            <Link href="/terms" style={{ color: 'var(--terracotta)', fontWeight: 600, textDecoration: 'none' }}>
              Terms &amp; Conditions
            </Link>{' '}
            for more details.
          </p>
        </div>
      </div>
    </main>
  )
}
