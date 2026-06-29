'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import Nav from '@/components/Nav'

export default function Dashboard() {
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/signin')
      } else {
        setEmail(session.user.email ?? null)
        setLoading(false)
      }
    })
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <>
        <Nav />
        <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 65px)' }}>
          <p style={{ color: 'var(--muted)', fontSize: 15 }}>Loading…</p>
        </main>
      </>
    )
  }

  return (
    <>
      <Nav />
      <main
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: 'clamp(48px, 7vw, 80px) 24px',
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            display: 'block',
            marginBottom: 14,
          }}
        >
          Dashboard
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-newsreader, "Newsreader", serif)',
            fontWeight: 500,
            fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
            letterSpacing: '-.02em',
            margin: '0 0 8px',
          }}
        >
          Welcome back.
        </h1>
        <p style={{ fontSize: 15, color: 'var(--muted)', margin: '0 0 40px' }}>{email}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Link
            href="/profile/complete"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 22px',
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: 14,
              textDecoration: 'none',
              color: 'var(--ink)',
            }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 3 }}>Complete your profile</div>
              <div style={{ fontSize: 13, color: 'var(--muted)' }}>Add your details to personalise your roadmap</div>
            </div>
            <span style={{ color: 'var(--accent)', fontSize: 20 }}>→</span>
          </Link>
        </div>

        <button
          onClick={handleSignOut}
          style={{
            marginTop: 40,
            background: 'none',
            border: 'none',
            color: 'var(--muted)',
            fontSize: 14,
            cursor: 'pointer',
            fontFamily: 'inherit',
            padding: 0,
          }}
        >
          Sign out
        </button>
      </main>
    </>
  )
}
