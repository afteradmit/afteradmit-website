'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import Nav from '@/components/Nav'

export default function SignUp() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { phone_number: phone },
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    if (data.session) {
      router.push('/dashboard')
    } else {
      setMessage('Check your email to confirm your account, then sign in.')
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: 'calc(100vh - 65px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 420,
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: 20,
            padding: 'clamp(28px, 5vw, 44px)',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
              fontWeight: 500,
              fontSize: '1.8rem',
              letterSpacing: '-.02em',
              margin: '0 0 6px',
            }}
          >
            Create your account
          </h1>
          <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 28px' }}>
            Already have an account?{' '}
            <Link href="/signin" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
                required
                className="input-field"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                required
                minLength={6}
                className="input-field"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>
                Phone number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 234 567 8900"
                required
                className="input-field"
                style={inputStyle}
              />
            </div>

            {error && (
              <p style={{ fontSize: 13, color: '#c0392b', margin: 0, padding: '10px 14px', background: '#fdf2f2', borderRadius: 8 }}>
                {error}
              </p>
            )}
            {message && (
              <p style={{ fontSize: 13, color: 'var(--accent-ink)', margin: 0, padding: '10px 14px', background: 'var(--accent-soft)', borderRadius: 8 }}>
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-accent"
              style={{
                marginTop: 4,
                padding: '13px',
                border: 'none',
                borderRadius: 12,
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                fontFamily: 'inherit',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? 'Creating account…' : 'Create account'}
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid var(--line)',
  borderRadius: 10,
  fontSize: 15,
  fontFamily: 'inherit',
  background: 'var(--bg)',
  color: 'var(--ink)',
  boxSizing: 'border-box',
}
