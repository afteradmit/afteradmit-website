import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'AfterAdmit',
    template: '%s | AfterAdmit',
  },
  description:
    'AfterAdmit helps international students manage every step between acceptance and move-in day — visa, housing, flights, banking, health insurance, and more.',
  keywords: ['international students', 'visa', 'I-20', 'housing', 'F-1 visa', 'university'],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'AfterAdmit',
    description:
      'One personalized, ordered checklist for the whole journey — tailored to your school, country and program.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hankenGrotesk.variable}>
      <body
        style={{
          background: 'var(--bg)',
          color: 'var(--ink)',
          fontFamily: 'var(--font-hanken, "Hanken Grotesk", system-ui, sans-serif)',
          WebkitFontSmoothing: 'antialiased',
          overflowX: 'hidden',
        }}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MMPVTFKP5H"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MMPVTFKP5H');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
