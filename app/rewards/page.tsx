import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RewardsClient from './RewardsClient'

export const metadata: Metadata = {
  title: 'Rewards',
  description: 'Earn points, unlock badges and tiers, and redeem rewards on AfterAdmit.',
}

export default function RewardsPage() {
  return (
    <>
      <Nav />
      <RewardsClient />
      <Footer />
    </>
  )
}
