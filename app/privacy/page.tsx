import type { Metadata } from 'next';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { LegalPage, type LegalSection } from '@/components/LegalPage';
import { ogDefaults } from '@/lib/og';

const path = '/privacy';
const title = 'Privacy Policy | Black Car Service';
const description =
  'What personal information Black Car Service collects when you get a price or book a ride, why we use it, who we share it with and how to ask us to delete it.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
};

// TODO(owner): add the registered legal business name once confirmed ("<Legal name> d/b/a Black Car Service").
const UPDATED = 'November 3, 2026';

const sections: LegalSection[] = [
  {
    h: 'What we collect',
    body: ['When you ask for a price, book a ride or contact us, we collect what you type in, such as:'],
    list: [
      'Your name, phone number and email address',
      'Pickup and drop-off addresses, date, time and any stops',
      'Flight number, passenger count, bags and notes for the driver',
      'Messages you send us by email, phone, text or WhatsApp',
    ],
  },
  {
    h: 'Why we use it',
    body: ['We use this information only to run the service:'],
    list: [
      'To price, confirm and carry out your ride',
      'To time airport pickups to your flight',
      'To contact you about your booking, before and on the day',
      'To send invoices and receipts',
      'To keep the records the law and our accounts require',
    ],
  },
  {
    h: 'Who we share it with',
    body: [
      'We do not sell your personal information. We share it only with the people and services that help us deliver your ride:',
    ],
    list: [
      'The driver assigned to your trip',
      'Google, to suggest addresses as you type and to measure the driving distance for your estimate',
      'Our email provider, to send booking confirmations',
      'Our payment provider (Stripe), when you pay an invoice online',
      'Authorities, when the law requires it',
    ],
  },
  {
    h: 'Payments',
    body: [
      'Card payments are entered directly on Stripe’s secure form. We never see or store your full card number; we only receive confirmation that the payment went through.',
    ],
  },
  {
    h: 'Cookies and analytics',
    body: [
      'The website may use cookies and analytics tools, such as Google Analytics, to see which pages are used and to improve them. You can block or delete cookies in your browser settings; the booking form still works without them.',
    ],
  },
  {
    h: 'How long we keep it',
    body: [
      'We keep booking records for as long as we need them to provide the service and to meet tax and legal requirements. After that we delete them.',
    ],
  },
  {
    h: 'Your choices',
    body: ['You can ask us at any time to:'],
    list: [
      'Show you the information we hold about you',
      'Correct anything that is wrong',
      'Delete your information, unless we must keep it by law',
      'Stop sending you anything other than messages about a booking',
    ],
  },
  {
    h: 'Children',
    body: ['Bookings must be made by adults. We do not knowingly collect information from children under 13.'],
  },
  {
    h: 'Changes',
    body: ['If we change this policy, we will update the date at the top of this page.'],
  },
];

export default function PrivacyPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Privacy Policy', url: `${site}${path}` },
        ]}
      />
      <LegalPage
        title="Privacy Policy"
        updated={UPDATED}
        intro={`This policy explains what information ${SITE_NAME} collects when you use this website or book a ride with us, how we use it and the choices you have.`}
        sections={sections}
        contactLead="Questions about your information, or want it deleted?"
        seeAlso={{ href: '/terms', label: 'Terms of Service' }}
      />
    </>
  );
}
