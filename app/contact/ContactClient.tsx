'use client'

import { useState } from 'react'

const topics = [
  'Account & Login',
  'Visa & I-20',
  'Housing',
  'Financing',
  'Billing & Pricing',
  'Partner with us',
  'Something else',
]

type Errors = Partial<Record<'topic' | 'firstName' | 'lastName' | 'email' | 'message', string>>

export default function ContactClient() {
  const [topic, setTopic] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): Errors => {
    const next: Errors = {}
    if (!topic) next.topic = "Please let us know what this is about."
    if (!firstName.trim()) next.firstName = 'Please enter your first name.'
    if (!lastName.trim()) next.lastName = 'Please enter your last name.'
    if (!email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "That email doesn't look right."
    }
    if (!message.trim()) next.message = 'Please tell us what you need help with.'
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setSubmitting(true)
    // TODO: wire up actual email delivery (Resend / Formspree / etc.)
    await new Promise((r) => setTimeout(r, 600))
    setSubmitting(false)
    setSubmitted(true)
  }

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    borderRadius: 12,
    border: '1.5px solid var(--line)',
    background: 'var(--surface)',
    fontSize: 15,
    fontFamily: 'inherit',
    fontWeight: 500,
    color: 'var(--ink)',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 700,
    color: 'var(--ink)',
    marginBottom: 6,
  }

  const errorStyle: React.CSSProperties = {
    fontSize: 13,
    color: 'var(--terracotta-dk)',
    marginTop: 6,
    fontWeight: 600,
  }

  if (submitted) {
    return (
      <main style={{ background: 'var(--sand)', minHeight: 'calc(100vh - 65px)' }}>
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
            padding: 'clamp(80px,12vw,140px) 24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'var(--verify-bg)',
              color: 'var(--verify-ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: 26,
            }}
          >
            ✓
          </div>
          <h1
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.5rem,3.5vw,2rem)',
              letterSpacing: '-.02em',
              margin: '0 0 12px',
            }}
          >
            Message sent
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, margin: '0 0 28px' }}>
            Thanks for reaching out. Our team will get back to you at {email} as soon as possible.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setTopic('')
              setFirstName('')
              setLastName('')
              setEmail('')
              setPhone('')
              setMessage('')
              setErrors({})
            }}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--terracotta)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Send another message
          </button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: 'var(--sand)', minHeight: 'calc(100vh - 65px)' }}>
      <div
        style={{
          maxWidth: 640,
          margin: '0 auto',
          padding: 'clamp(48px,7vw,80px) 24px clamp(64px,8vw,104px)',
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
          CONTACT US
        </span>
        <h1
          style={{
            fontWeight: 800,
            fontSize: 'clamp(2rem,4.5vw,3rem)',
            letterSpacing: '-.025em',
            lineHeight: 1.08,
            margin: '0 0 14px',
          }}
        >
          We&apos;re happy to help.
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, margin: '0 0 36px' }}>
          Send us your question and our team will get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          style={{
            background: 'var(--surface)',
            borderRadius: 'var(--radius-card)',
            boxShadow: 'var(--shadow-card)',
            padding: 'clamp(24px,4vw,36px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div>
            <label style={labelStyle} htmlFor="topic">What&apos;s this about?</label>
            <select
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              style={{ ...fieldStyle, appearance: 'auto' }}
            >
              <option value="">Select a topic...</option>
              {topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.topic && <div style={errorStyle}>{errors.topic}</div>}
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle} htmlFor="firstName">First name</label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jane"
                style={fieldStyle}
              />
              {errors.firstName && <div style={errorStyle}>{errors.firstName}</div>}
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle} htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                style={fieldStyle}
              />
              {errors.lastName && <div style={errorStyle}>{errors.lastName}</div>}
            </div>
          </div>

          <div>
            <label style={labelStyle} htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={fieldStyle}
            />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>

          <div>
            <label style={labelStyle} htmlFor="phone">Phone <span style={{ fontWeight: 500, color: 'var(--muted)' }}>(optional)</span></label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 000-0000"
              style={fieldStyle}
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What can we help you with?"
              rows={5}
              style={{ ...fieldStyle, resize: 'vertical', lineHeight: 1.5 }}
            />
            {errors.message && <div style={errorStyle}>{errors.message}</div>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              padding: '14px 24px',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--terracotta)',
              color: '#fff',
              fontSize: 15,
              fontWeight: 700,
              border: 'none',
              cursor: submitting ? 'default' : 'pointer',
              fontFamily: 'inherit',
              opacity: submitting ? 0.7 : 1,
              marginTop: 4,
            }}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
          <p
            style={{
              textAlign: 'center',
              fontSize: 13,
              color: 'var(--muted)',
              margin: 0,
            }}
          >
            We typically reply between 1-4 business days.
          </p>
        </form>
      </div>
    </main>
  )
}
