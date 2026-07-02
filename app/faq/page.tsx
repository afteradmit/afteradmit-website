import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about AfterAdmit — who it\'s for, how it works, and what it costs.',
}

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--sand)', minHeight: 'calc(100vh - 65px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(48px,7vw,80px) 24px 0' }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: 'var(--terracotta)',
              display: 'block',
              marginBottom: 16,
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
              margin: '0 0 12px',
            }}
          >
            Questions, answered.
          </h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--muted)', margin: '0 0 48px' }}>
            Everything you need to know about AfterAdmit.
          </p>
        </div>
        <FAQ standalone />
      </main>
      <Footer />
    </>
  )
}
