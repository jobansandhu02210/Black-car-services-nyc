import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'Privacy Policy | Eagle Eye Chauffeur NYC Car Service',
  },
  description:
    'How Eagle Eye Chauffeur collects, uses, and protects your personal information when you book NYC black car and airport transfer service.',
  alternates: { canonical: `${getSiteUrl()}/privacy` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/privacy`,
    title: 'Privacy Policy | Eagle Eye Chauffeur',
    description:
      'How Eagle Eye Chauffeur collects, uses, and protects your personal information.',
  },
};

const LAST_UPDATED = 'February 1, 2026';

export default function PrivacyPolicyPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Privacy Policy', url: `${siteUrl}/privacy` },
        ]}
      />

      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">Privacy Policy</h1>
          <p className="text-brand-silver">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="bg-brand-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-eec">
          <p className="text-brand-grey leading-relaxed mb-8">
            Eagle Eye Chauffeur (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
            Privacy Policy explains what information we collect when you use our website and book our NYC black car,
            airport transfer, and chauffeur services, how we use it, and the choices you have.
          </p>

          {sections.map((s) => (
            <div key={s.h} className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">{s.h}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-brand-grey leading-relaxed mb-3">{p}</p>
              ))}
              {s.list && (
                <ul className="list-disc pl-6 text-brand-grey space-y-1 mb-3">
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
            </div>
          ))}

          <div className="mb-2">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Contact Us</h2>
            <p className="text-brand-grey leading-relaxed">
              Questions about this Privacy Policy or your data? Contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="text-brand-black underline">{CONTACT_EMAIL_BOOKINGS}</a>{' '}
              or call{' '}
              <a href={`tel:${CONTACT_PHONE_E164}`} className="text-brand-black underline">{CONTACT_PHONE_DISPLAY}</a>.
            </p>
          </div>

          <p className="mt-10 text-sm text-brand-grey">
            See also our{' '}
            <Link href="/terms" className="text-brand-black underline">Terms of Service</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

const sections: { h: string; body: string[]; list?: string[] }[] = [
  {
    h: 'Information We Collect',
    body: ['We collect information you provide directly when booking or contacting us, including:'],
    list: [
      'Name, email address, and phone number',
      'Pickup and drop-off locations, dates, times, and trip details',
      'Flight information for airport transfers',
      'Special requests and preferences you share with us',
      'Payment information (processed securely by our payment provider — we never store full card numbers)',
    ],
  },
  {
    h: 'How We Use Your Information',
    body: ['We use the information we collect to:'],
    list: [
      'Provide, confirm, and coordinate your chauffeur and airport transfer service',
      'Communicate with you about your booking, including confirmations and updates',
      'Process payments and send receipts',
      'Track flights to adjust airport pickup times',
      'Improve our services and website',
      'Comply with legal and regulatory obligations',
    ],
  },
  {
    h: 'Payment Processing',
    body: [
      'Payments are processed by trusted third-party payment providers (such as Stripe). Your full card details are entered directly with the payment provider and are never stored on our servers. We only receive confirmation of payment and limited details such as the last four digits and card type.',
    ],
  },
  {
    h: 'How We Share Information',
    body: ['We do not sell your personal information. We share it only as needed to provide our service:'],
    list: [
      'With assigned chauffeurs and affiliate operators to fulfill your ride',
      'With payment processors to complete transactions',
      'With service providers who help us operate our website and communications',
      'When required by law, subpoena, or to protect our rights and safety',
    ],
  },
  {
    h: 'Cookies & Analytics',
    body: [
      'Our website uses cookies and analytics tools (such as Google Analytics) to understand how visitors use the site and to improve it. You can control cookies through your browser settings. Disabling cookies may affect some site features.',
    ],
  },
  {
    h: 'Data Security',
    body: [
      'We take reasonable technical and organizational measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    h: 'Data Retention',
    body: [
      'We retain booking and contact information for as long as needed to provide our services, meet legal and accounting requirements, and resolve disputes. You may request deletion of your information as described below.',
    ],
  },
  {
    h: 'Your Rights',
    body: ['Depending on your location, you may have the right to:'],
    list: [
      'Access the personal information we hold about you',
      'Request correction or deletion of your information',
      'Opt out of marketing communications at any time',
      'Withdraw consent where processing is based on consent',
    ],
  },
  {
    h: 'Children’s Privacy',
    body: [
      'Our services are intended for adults. We do not knowingly collect personal information from children under 13.',
    ],
  },
  {
    h: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The “Last updated” date above reflects the most recent changes. Continued use of our services after changes constitutes acceptance of the updated policy.',
    ],
  },
];
