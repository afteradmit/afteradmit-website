'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const navLinks = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/community', label: 'Community' },
  { href: '/resources', label: 'Resources' },
  { href: '/rewards', label: 'Rewards' },
  { href: '/about', label: 'About us' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [displayName, setDisplayName] = useState<string | null>(null)

  useEffect(() => {
    const getDisplayName = (session: { user: { user_metadata?: { username?: string }; email?: string } } | null) =>
      session ? session.user.user_metadata?.username || session.user.email || 'Account' : null

    supabase.auth.getSession().then(({ data: { session } }) => {
      setDisplayName(getDisplayName(session))
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setDisplayName(getDisplayName(session))
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    setOpen(false)
    await supabase.auth.signOut()
    router.push('/')
  }

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isSamePageHash = href.startsWith('/#') && window.location.pathname === '/'
    if (isSamePageHash) {
      e.preventDefault()
      const id = href.slice(2)
      setOpen(false)
      // Wait for the menu-close re-render to commit before scrolling, so the
      // target position is measured against the final (closed-menu) layout.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      })
    } else {
      setOpen(false)
    }
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        background: 'rgba(250,248,244,.82)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <nav
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <a
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', color: 'var(--ink)' }}
        >
          <img src="/logo.png" alt="AfterAdmit" style={{ width: 34, height: 34, borderRadius: 10, display: 'block' }} />
          <span style={{ fontWeight: 700, fontSize: 19, letterSpacing: '-.02em' }}>AfterAdmit</span>
        </a>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{ textDecoration: 'none', color: 'var(--muted)', fontSize: 15, fontWeight: 500 }}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {displayName ? (
            <>
              <a
                href="/dashboard"
                className="hide-nav-sm"
                style={{
                  textDecoration: 'none',
                  color: 'var(--muted)',
                  fontSize: 14,
                  fontWeight: 500,
                  maxWidth: 160,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {displayName}
              </a>
              <button
                type="button"
                onClick={handleSignOut}
                className="nav-cta"
                style={{
                  border: 'none',
                  background: 'var(--ink)',
                  color: '#fff',
                  padding: '10px 18px',
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <a
                href="/signin"
                className="hide-nav-sm"
                style={{
                  textDecoration: 'none',
                  color: 'var(--muted)',
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Sign in
              </a>
              <a
                href="/signup"
                className="nav-cta"
                style={{
                  textDecoration: 'none',
                  background: 'var(--ink)',
                  color: '#fff',
                  padding: '10px 18px',
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Join now
              </a>
            </>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="hidden max-[960px]:flex"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              border: 'none',
              background: 'transparent',
              color: 'var(--ink)',
              cursor: 'pointer',
              flexShrink: 0,
              padding: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="hidden max-[960px]:flex"
          style={{
            flexDirection: 'column',
            gap: 4,
            padding: '8px 24px 20px',
            borderTop: '1px solid var(--line)',
            background: 'var(--paper)',
          }}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleMobileLinkClick(e, href)}
              style={{
                textDecoration: 'none',
                color: 'var(--ink)',
                fontSize: 16,
                fontWeight: 600,
                padding: '12px 4px',
                borderBottom: '1px solid var(--line)',
              }}
            >
              {label}
            </a>
          ))}
          {displayName ? (
            <>
              <a
                href="/dashboard"
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: 'var(--ink)',
                  fontSize: 16,
                  fontWeight: 600,
                  padding: '12px 4px',
                }}
              >
                {displayName}
              </a>
              <button
                type="button"
                onClick={handleSignOut}
                style={{
                  textAlign: 'left',
                  border: 'none',
                  background: 'none',
                  color: 'var(--ink)',
                  fontSize: 16,
                  fontWeight: 600,
                  padding: '12px 4px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            <a
              href="/signin"
              onClick={() => setOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--ink)',
                fontSize: 16,
                fontWeight: 600,
                padding: '12px 4px',
              }}
            >
              Sign in
            </a>
          )}
        </div>
      )}
    </header>
  )
}
