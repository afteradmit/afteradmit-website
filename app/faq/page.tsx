import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ',
  description: "Answers to common questions about AfterAdmit — who it's for, how it works, and what it costs.",
}

export default function FAQPage() {
  return (
    <>
      <Nav />
      <FAQClient />
      <Footer />
    </>
  )
}
