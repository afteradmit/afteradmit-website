import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms and conditions governing your use of AfterAdmit.',
}

type Section = {
  title: string
  body: string[]
  list?: string[]
  closing?: string[]
}

const sections: Section[] = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'By creating an account or using the Service, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the Service.',
      'We may update these Terms from time to time. Any changes will become effective when posted on this page. Your continued use of the Service after changes are posted constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    title: '2. Description of the Service',
    body: [
      'AfterAdmit helps admitted students navigate the period between university acceptance and move-in by providing personalized roadmaps, checklists, educational resources, community features, marketplace recommendations, and related tools.',
      'The Service is intended for informational and organizational purposes only. Nothing on the platform constitutes legal, immigration, financial, tax, medical, educational, or professional advice.',
    ],
  },
  {
    title: '3. Eligibility',
    body: [
      'You must be at least 13 years old to create an account and use the Service. By registering, you represent that the information you provide is accurate, complete, and current.',
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
      'You may sign in using Google OAuth. Your use of Google Sign-In is also governed by Google\'s Terms of Service.',
    ],
  },
  {
    title: '4. Acceptable Use',
    body: ['You agree not to use the Service to:'],
    list: [
      'Violate any applicable law or regulation.',
      'Upload or transmit fraudulent, misleading, unlawful, defamatory, obscene, or harmful content.',
      'Harass, threaten, intimidate, or impersonate another person.',
      'Share another person\'s confidential or personal information without permission.',
      'Attempt to gain unauthorized access to the Service, its infrastructure, or other user accounts.',
      'Introduce viruses, malware, or other harmful code.',
      'Interfere with the operation or security of the Service.',
      'Scrape, copy, or systematically collect content or data from the Service without permission.',
      'Use the Service for spam, scams, or fraudulent activity.',
    ],
    closing: ['We reserve the right to suspend or terminate accounts that violate these Terms.'],
  },
  {
    title: '5. Third-Party Services',
    body: [
      'AfterAdmit may recommend or connect users with third-party providers, including but not limited to housing providers, lenders, insurance companies, banks, visa consultants, travel providers, storage providers, and other businesses.',
      'These providers operate independently from AfterAdmit. We do not own, operate, or control their services unless expressly stated.',
      'Although we may review or vet providers before listing them, we do not guarantee their quality, availability, pricing, accuracy, legality, safety, or outcomes.',
      'Any agreement or transaction between you and a third-party provider is solely between you and that provider. You are responsible for independently verifying important information before making decisions or purchases.',
    ],
  },
  {
    title: '6. Community Features',
    body: [
      'If you choose to participate in community discussions or networking features, you understand that information you voluntarily share may be visible to other users.',
      'You are solely responsible for the content you post and your interactions with other users.',
      'AfterAdmit does not endorse or guarantee the accuracy of user-generated content and is not responsible for disputes or interactions between users.',
    ],
  },
  {
    title: '7. AI Features',
    body: [
      'The Service may include AI-powered tools that generate recommendations, summaries, or responses.',
      'AI-generated content may be inaccurate, incomplete, or outdated. It should not be relied upon as legal, immigration, financial, educational, or professional advice.',
      'You are responsible for independently verifying important information with official sources.',
    ],
  },
  {
    title: '8. Resources and Guides',
    body: [
      'Packing lists, scholarship information, visa guides, checklists, and other educational resources are provided solely for general informational purposes.',
      'Requirements, deadlines, eligibility criteria, and regulations may change without notice and may vary by university, government agency, airline, financial institution, or other organization.',
      'Always verify important information directly with the relevant official source before relying on it.',
      'Use of the Service does not guarantee university admission, visa approval, scholarships, housing, employment, internships, financial aid, or any other outcome.',
    ],
  },
  {
    title: '9. Rewards and Promotions',
    body: [
      'AfterAdmit may offer points, rewards, discounts, vouchers, referral incentives, or promotional credits.',
      'Unless otherwise stated:',
    ],
    list: [
      'Rewards have no cash value.',
      'Rewards are non-transferable.',
      'Rewards may expire.',
      'We may modify, suspend, or discontinue any rewards program at any time.',
      'We reserve the right to revoke rewards obtained through fraud, abuse, or violations of these Terms.',
    ],
  },
  {
    title: '10. User Content',
    body: [
      'You retain ownership of any information or content you submit to the Service.',
      'By submitting content, you grant AfterAdmit a worldwide, non-exclusive, royalty-free license to host, store, reproduce, display, modify, and distribute that content solely for the purpose of operating, improving, and promoting the Service.',
      'If you delete your account, some content you have shared in public discussions may remain visible where removal is impractical or where required for maintaining the integrity of community conversations.',
    ],
  },
  {
    title: '11. Intellectual Property',
    body: [
      'All content, software, designs, logos, graphics, trademarks, and other materials provided through the Service are the exclusive property of AfterAdmit or its licensors and are protected by applicable intellectual property laws.',
      'You may not copy, reproduce, distribute, modify, or create derivative works without our prior written permission.',
    ],
  },
  {
    title: '12. Service Availability',
    body: [
      'We may modify, suspend, discontinue, or remove any feature of the Service at any time without prior notice.',
      'We do not guarantee uninterrupted availability of the Service or that it will always be error-free or secure.',
    ],
  },
  {
    title: '13. Disclaimer of Warranties',
    body: [
      'The Service is provided "as is" and "as available" without warranties of any kind, whether express or implied.',
      'We do not warrant that the Service will be uninterrupted, secure, error-free, or free of harmful components.',
      'While we strive to provide accurate information, we do not guarantee that any content on the Service is complete, current, or applicable to your individual circumstances.',
    ],
  },
  {
    title: '14. Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, AfterAdmit shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages arising out of or related to your use of the Service or any third-party services.',
      'Our total liability for any claim arising out of these Terms or the Service shall not exceed the amount you paid to AfterAdmit during the twelve months preceding the event giving rise to the claim.',
    ],
  },
  {
    title: '15. Indemnification',
    body: [
      'You agree to indemnify and hold harmless AfterAdmit, its founders, employees, contractors, affiliates, and partners from any claims, damages, losses, liabilities, costs, or expenses arising from your use of the Service, your violation of these Terms, or your violation of any applicable law or third-party rights.',
    ],
  },
  {
    title: '16. Termination',
    body: [
      'You may stop using the Service or delete your account at any time.',
      'We may suspend or terminate your access to the Service, with or without notice, if we believe you have violated these Terms or engaged in conduct that may harm the Service, other users, or third parties.',
      'Some information may be retained following account deletion where required by law or for legitimate business purposes, including fraud prevention, dispute resolution, and legal compliance.',
    ],
  },
  {
    title: '17. Electronic Communications',
    body: [
      'By creating an account, you consent to receive electronic communications relating to your account, security, legal notices, and important updates regarding the Service.',
      'Marketing communications are optional and may be unsubscribed from at any time.',
    ],
  },
  {
    title: '18. Force Majeure',
    body: [
      'AfterAdmit shall not be liable for delays or failures in performance resulting from events beyond our reasonable control, including natural disasters, government actions, internet outages, labor disputes, cyberattacks, or other unforeseen events.',
    ],
  },
  {
    title: '19. Governing Law',
    body: [
      'These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.',
      'Once AfterAdmit is incorporated, this section may be updated to specify the governing state and jurisdiction.',
    ],
  },
  {
    title: '20. Severability',
    body: [
      'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
    ],
  },
  {
    title: '21. Entire Agreement',
    body: [
      'These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and AfterAdmit regarding your use of the Service and supersede any prior agreements relating to the Service.',
    ],
  },
  {
    title: '22. Contact Us',
    body: [
      'If you have any questions about these Terms of Service, please contact us at: legal@afteradmit.com',
    ],
  },
]

export default function Terms() {
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
          Terms of Service
        </h1>
        <p style={{ fontSize: 14, color: 'var(--muted)', margin: '0 0 48px' }}>
          Last updated: July 3, 2026
        </p>

        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--muted)', margin: '0 0 48px' }}>
          Please read these Terms of Service carefully before using AfterAdmit. These Terms constitute
          a legally binding agreement between you and AfterAdmit governing your access to and use of
          the platform located at afteradmit.com (the &quot;Service&quot;).
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {sections.map(({ title, body, list, closing }) => (
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
                {list && (
                  <ul style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {list.map((item, i) => (
                      <li key={i} style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--muted)' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {closing?.map((para, i) => (
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
