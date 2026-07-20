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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
