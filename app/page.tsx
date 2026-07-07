'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Problem from '@/components/Problem'
import Pricing from '@/components/Pricing'
import StudentVoices from '@/components/StudentVoices'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const ctaLabel = submitted ? "You're on the list ✓" : 'Get started'

  return (
    <>
      <Nav />
      <main>
        <Hero email={email} onEmail={setEmail} onSubmit={handleSubmit} ctaLabel={ctaLabel} />
        <TrustBar />
        <Problem />
        <Pricing />
        <StudentVoices />
        <FinalCTA email={email} onEmail={setEmail} onSubmit={handleSubmit} ctaLabel={ctaLabel} />
      </main>
      <Footer />
    </>
  )
}
