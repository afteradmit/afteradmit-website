'use client'

import { useState } from 'react'
import Link from 'next/link'

const tabs = ['My Rewards', 'Badges & Tiers', 'How to Earn Points', 'How to Redeem', 'Terms & Conditions'] as const
type Tab = (typeof tabs)[number]

const tiers = [
  { name: 'Bronze', points: 100, color: '#B08D57' },
  { name: 'Silver', points: 200, color: '#9AA0A6' },
  { name: 'Gold', points: 500, color: '#D4A937' },
  { name: 'Platinum', points: 1000, color: '#8E9AAE' },
  { name: 'Diamond', points: 1500, color: '#5AB4C7' },
]

const earnGroups = [
  {
    points: 1,
    items: [
      { title: 'Make a post', detail: 'Earn up to 1 point per day.' },
      {
        title: 'Reply to a newcomer post',
        detail: 'Reply to a user with fewer than 10 posts. Earn up to 1 point per day.',
      },
    ],
  },
  {
    points: 2,
    items: [
      { title: 'Create a new topic', detail: 'Earn up to 2 points per day when you start a new topic.' },
      { title: 'Complete your profile', detail: 'One-time reward for completing your profile details.' },
    ],
  },
  {
    points: 5,
    items: [
      { title: 'Write a review', detail: 'One-time reward.' },
      { title: 'Get 5 kudos', detail: 'Earn 5 points when one post gets 5 Kudos. Maximum of 5 points per day.' },
      { title: 'Complete onboarding tasks', detail: 'One-time reward.' },
    ],
  },
]

const bonusItems = [
  { title: 'Get a quote from a provider', points: 5 },
  { title: 'Refer a friend', points: 10 },
  { title: 'Sign up for a service', points: 15 },
]

const leaderboard = [
  { name: 'wanderlust.k', points: 2140 },
  { name: 'campusbound99', points: 1875 },
  { name: 'sevis_survivor', points: 1690 },
  { name: 'northbound92', points: 1520 },
  { name: 'paperchase.wei', points: 1410 },
  { name: 'quietstorm_a', points: 1280 },
  { name: 'hallwayhero', points: 1150 },
  { name: 'movingday.nik', points: 990 },
  { name: 'firstgenfly', points: 860 },
  { name: 'lateflight.sam', points: 745 },
]

const cardStyle: React.CSSProperties = {
  background: 'var(--surface)',
  borderRadius: 'var(--radius-card)',
  boxShadow: 'var(--shadow-card)',
}

function initials(username: string) {
  return username.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase()
}

function Leaderboard() {
  return (
    <aside
      style={{
        ...cardStyle,
        padding: 'clamp(20px,3vw,28px)',
        position: 'sticky',
        top: 90,
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
          marginBottom: 8,
        }}
      >
        Leaderboard
      </span>
      <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 18px' }}>
        Top 10 by points
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {leaderboard.map((user, i) => {
          const rank = i + 1
          const isTopThree = rank <= 3
          return (
            <div
              key={user.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '5px 0',
                borderBottom: rank < leaderboard.length ? '1px solid var(--line)' : 'none',
              }}
            >
              <span
                style={{
                  width: 16,
                  fontSize: 12,
                  fontWeight: 800,
                  color: isTopThree ? 'var(--terracotta)' : 'var(--muted)',
                  flexShrink: 0,
                }}
              >
                {rank}
              </span>
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: isTopThree ? 'var(--terracotta)' : 'var(--sand)',
                  color: isTopThree ? '#fff' : 'var(--ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {initials(user.name)}
              </span>
              <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>
                {user.name}
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>
                {user.points.toLocaleString()}
              </span>
            </div>
          )
        })}
      </div>

      <div
        style={{
          marginTop: 20,
          paddingTop: 20,
          borderTop: '1px solid var(--line)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'var(--sand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px',
            fontSize: 16,
          }}
        >
          🔒
        </div>
        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)', margin: '0 0 14px', lineHeight: 1.5 }}>
          Sign up to see your rank
        </p>
        <Link
          href="/signup"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--terracotta)',
            color: '#fff',
            fontSize: 13,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          Join now
        </Link>
      </div>
    </aside>
  )
}

export default function RewardsClient() {
  const [active, setActive] = useState<Tab>('My Rewards')

  return (
    <main style={{ background: 'var(--sand)', minHeight: 'calc(100vh - 65px)' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: 'clamp(48px,7vw,80px) 24px 0',
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
          REWARDS
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
          Earn points. Unlock rewards.
        </h1>

        {/* Subsection tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            borderBottom: '1px solid var(--line)',
            paddingBottom: 20,
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
      </div>

      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '32px 24px clamp(64px,8vw,104px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(260px,320px)',
          gap: 32,
          alignItems: 'start',
        }}
      >
        <div>
          {active === 'My Rewards' && (
            <div style={{ ...cardStyle, padding: 'clamp(32px,5vw,48px)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 12px' }}>
                Sign in to see your rewards
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, margin: '0 auto 28px', maxWidth: 440 }}>
                Create an account or sign in to track your points, badges, and tier progress.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/signin"
                  style={{
                    padding: '12px 24px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1.5px solid var(--line)',
                    color: 'var(--ink)',
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  style={{
                    padding: '12px 24px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'var(--terracotta)',
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  Join now
                </Link>
              </div>
            </div>
          )}

          {active === 'Badges & Tiers' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 16 }}>
              {tiers.map((tier) => (
                <div key={tier.name} style={{ ...cardStyle, padding: 24, textAlign: 'center' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: tier.color,
                      margin: '0 auto 16px',
                    }}
                  />
                  <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-.01em', marginBottom: 4 }}>
                    {tier.name}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)' }}>
                    {tier.points.toLocaleString()}+ pts
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === 'How to Earn Points' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {earnGroups.map((group) => (
                <div key={group.points} style={{ ...cardStyle, padding: 'clamp(24px,4vw,32px)' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: 'var(--sand)',
                      color: 'var(--terracotta-dk)',
                      fontSize: 13,
                      fontWeight: 800,
                      padding: '5px 14px',
                      borderRadius: 'var(--radius-pill)',
                      marginBottom: 18,
                    }}
                  >
                    {group.points} {group.points === 1 ? 'point' : 'points'}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {group.items.map((item) => (
                      <div key={item.title}>
                        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                        <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.55 }}>{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ ...cardStyle, padding: 'clamp(24px,4vw,32px)' }}>
                <div style={{ fontSize: 13, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--muted)', marginBottom: 18 }}>
                  Bonus activities
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {bonusItems.map((item) => (
                    <div
                      key={item.title}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                      }}
                    >
                      <span style={{ fontSize: 15, fontWeight: 700 }}>{item.title}</span>
                      <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--terracotta)' }}>
                        +{item.points} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {active === 'How to Redeem' && (
            <div style={{ ...cardStyle, padding: 'clamp(32px,5vw,48px)', textAlign: 'center' }}>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                Redemption details are coming soon.
              </p>
            </div>
          )}

          {active === 'Terms & Conditions' && (
            <div style={{ ...cardStyle, padding: 'clamp(32px,5vw,48px)', textAlign: 'center' }}>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                Terms & conditions are coming soon.
              </p>
            </div>
          )}
        </div>

        <Leaderboard />
      </div>
    </main>
  )
}
