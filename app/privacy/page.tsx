import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How AfterAdmit collects, uses, and protects your personal information.',
}

const sections = [
  {
    title: 'Information We Collect',
    body: [
      'When you create an account, we collect your email address and password (stored securely via Supabase Auth). If you sign in with Google, we receive your name and email address from Google.',
      'As you complete your profile, we collect additional information you provide: phone number, full name, nationality, university, and field of study. This information is used solely to personalise your AfterAdmit roadmap.',
      'We also collect standard usage data such as pages visited and actions taken within the platform, to improve our service.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'To create and manage your account and authenticate your identity.',
      'To generate a personalised checklist and roadmap tailored to your school, country, program, and start date.',
      'To send you relevant deadline reminders and service updates (you may opt out at any time).',
      'To improve our platform through aggregated, anonymised analytics.',
    ],
  },
  {
    title: 'Google Sign-In',
    body: [
      'AfterAdmit offers sign-in via Google OAuth. When you use this option, Google shares your name and email address with us. We do not receive your Google password. Your use of Google Sign-In is also governed by Google\'s Privacy Policy.',
    ],
  },
  {
    title: 'Data Storage and Security',
    body: [
      'Your data is stored securely using Supabase, which provides encrypted storage and row-level security. We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or disclosure.',
      'No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Sharing Your Information',
    body: [
      'We do not sell, rent, or trade your personal information to third parties.',
      'We may share information with trusted service providers (such as Supabase and Google) who assist in operating our platform, subject to confidentiality agreements.',
      'We may disclose your information if required by law or to protect the rights and safety of AfterAdmit and its users.',
    ],
  },
  {
    title: 'Your Rights',
    body: [
      'You may access, update, or delete your personal information at any time through your account settings.',
      'You may request a copy of the data we hold about you by contacting us at the address below.',
      'You may close your account at any time, which will result in the deletion of your profile data.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'We use essential cookies to maintain your session and keep you signed in. We do not use advertising or tracking cookies. You can disable cookies in your browser settings, though this may affect your ability to use the platform.',
    ],
  },
  {
    title: 'Children\'s Privacy',
    body: [
      'AfterAdmit is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of AfterAdmit after changes are posted constitutes your acceptance of the updated policy.',
    ],
  },
  {
    title: 'Contact Us',
    body: [
      'If you have questions about this Privacy Policy or your personal data, please contact us at: privacy@afteradmit.com',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(48px,7vw,88px) 24px clamp(64px,8vw,100px)' }}>
      <div style={{ maxWidth: 900 }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            display: 'block',
            marginBottom: 16,
          }}
        >
          Legal
        </span>
        <h1
          style={{

            fontWeight: 800,
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            letterSpacing: '-.02em',
            lineHeight: 1.08,
            margin: '0 0 12px',
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 48px' }}>
          Last updated: June 29, 2026
        </p>

        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--muted)', margin: '0 0 48px' }}>
          AfterAdmit (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your information when you use our
          platform at afteradmit.com.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {sections.map(({ title, body }) => (
            <div key={title}>
              <h2
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  letterSpacing: '-.01em',
                  margin: '0 0 14px',
                  color: 'var(--ink)',
                }}
              >
                {title}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {body.map((para, i) => (
                  <p key={i} style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)', margin: 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}
