import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — AfterAdmit',
  description: 'The terms and conditions governing your use of AfterAdmit.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'By creating an account or using AfterAdmit (the "Service"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.',
      'We may update these Terms from time to time. Continued use of the Service after updates constitutes acceptance of the revised Terms.',
    ],
  },
  {
    title: '2. Description of Service',
    body: [
      'AfterAdmit provides international students with a personalised checklist and guidance platform to help manage the steps between university acceptance and move-in day, including visa applications, housing, flights, banking, and related tasks.',
      'The Service is provided for informational and organisational purposes only. It does not constitute legal, immigration, financial, or professional advice of any kind.',
    ],
  },
  {
    title: '3. User Accounts',
    body: [
      'You must be at least 13 years old to create an account. By registering, you confirm that the information you provide is accurate and complete.',
      'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.',
      'You may sign in using Google OAuth. Your use of Google Sign-In is additionally governed by Google\'s Terms of Service.',
    ],
  },
  {
    title: '4. Acceptable Use',
    body: [
      'You agree not to use the Service to: violate any applicable law or regulation; transmit harmful, fraudulent, or misleading content; attempt to gain unauthorised access to any part of the Service or its infrastructure; interfere with or disrupt the integrity or performance of the Service.',
      'We reserve the right to suspend or terminate accounts that violate these terms without prior notice.',
    ],
  },
  {
    title: '5. Intellectual Property',
    body: [
      'All content, features, and functionality of the Service — including but not limited to text, design, logos, and code — are the exclusive property of AfterAdmit and are protected by applicable intellectual property laws.',
      'You may not copy, reproduce, distribute, or create derivative works from any part of the Service without our express written permission.',
    ],
  },
  {
    title: '6. User-Provided Content',
    body: [
      'You retain ownership of any information you submit to the Service (such as your profile details). By submitting this information, you grant AfterAdmit a limited licence to use it solely for the purpose of providing the Service to you.',
    ],
  },
  {
    title: '7. Disclaimer of Warranties',
    body: [
      'The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components.',
      'Immigration rules, visa requirements, and deadlines change frequently. While we strive for accuracy, AfterAdmit does not guarantee that any information on the platform is current, complete, or applicable to your specific situation. Always verify critical requirements with official sources.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, AfterAdmit shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service, even if we have been advised of the possibility of such damages.',
      'Our total liability to you for any claim arising out of these Terms or the Service shall not exceed the amount you paid to AfterAdmit in the twelve months preceding the claim.',
    ],
  },
  {
    title: '9. Termination',
    body: [
      'You may close your account at any time. We reserve the right to suspend or terminate your access to the Service at our discretion, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.',
    ],
  },
  {
    title: '10. Governing Law',
    body: [
      'These Terms are governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved in the courts of competent jurisdiction.',
    ],
  },
  {
    title: '11. Contact Us',
    body: [
      'If you have questions about these Terms of Service, please contact us at: legal@afteradmit.com',
    ],
  },
]

export default function Terms() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(48px,7vw,88px) 24px clamp(64px,8vw,100px)' }}>
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
          Terms of Service
        </h1>
        <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 48px' }}>
          Last updated: June 29, 2026
        </p>

        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--muted)', margin: '0 0 48px' }}>
          Please read these Terms of Service carefully before using AfterAdmit. These Terms constitute
          a legally binding agreement between you and AfterAdmit governing your use of the platform
          at afteradmit.com.
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
      </main>
      <Footer />
    </>
  )
}
