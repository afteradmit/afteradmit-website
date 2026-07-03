import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ResourcesClient from './ResourcesClient'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Free guides on packing and scholarships to help you get ready, no sign-up required.',
}

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <ResourcesClient />
      <Footer />
    </>
  )
}
