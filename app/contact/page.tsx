import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Get in touch with the AfterAdmit team about visas, housing, billing, your account, or partnerships.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <ContactClient />
      <Footer />
    </>
  )
}
