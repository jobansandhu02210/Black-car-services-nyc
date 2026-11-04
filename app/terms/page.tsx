import type { Metadata } from 'next';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { LegalPage, type LegalSection } from '@/components/LegalPage';
import { ogDefaults } from '@/lib/og';

const path = '/terms';
const title = 'Terms of Service | Black Car Service';
const description =
  'The terms for booking a ride with Black Car Service: confirmation, prices and payment, changes and cancellations, waiting time and passenger rules.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
};

// TODO(owner): add the registered legal business name, and replace the cancellation and
// waiting-time wording with your exact policy (time windows and charges) before launch.
const UPDATED = 'November 3, 2026';

const sections: LegalSection[] = [
  {
    h: 'Your booking',
    body: [
      'A request sent through the website, by phone or by WhatsApp becomes a booking once we confirm it to you. The confirmation shows the pickup details, the vehicle and the fare.',
    ],
  },
  {
    h: 'Prices and payment',
    body: [
      'Estimates on the website are based on the addresses, vehicle and time you enter. We confirm the fare before the ride. If the trip changes — a different address, an extra stop, a longer route or extra hours — the fare may change to match.',
      'Payment is taken in the way agreed when you book, such as an online invoice. Hourly bookings have a two-hour minimum.',
    ],
  },
  {
    h: 'Changes and cancellations',
    body: [
      'Please tell us about any change or cancellation as early as you can. The cancellation terms for your trip are given when we confirm it. A cancellation made too late for us to reassign the car, or a no-show, may be charged.',
    ],
  },
  {
    h: 'Waiting time',
    body: [
      'For airport pickups we follow your flight and allow time after landing to collect bags. For other pickups the driver waits a reasonable time; longer waits may be charged, and we will tell you before that happens.',
    ],
  },
  {
    h: 'Things outside our control',
    body: [
      'We plan every trip to arrive on time, but we are not responsible for delays caused by airlines, weather, road closures, accidents or heavy traffic, or for flights or connections missed because of them.',
    ],
  },
  {
    h: 'In the car',
    body: ['For everyone’s safety, passengers agree to:'],
    list: [
      'Wear a seat belt',
      'Not smoke or vape in the vehicle',
      'Stay within the vehicle’s seat and luggage limits',
      'Treat the driver and the car with respect',
      'Pay for damage or extra cleaning caused beyond normal use',
    ],
  },
  {
    h: 'Luggage and lost items',
    body: [
      'Tell us about large or unusual luggage when you book so we can send the right vehicle. Check the car before you leave it; if you think you left something behind, contact us as soon as possible and we will do our best to return it.',
    ],
  },
  {
    h: 'Liability',
    body: [
      'As far as the law allows, our liability for any claim about a ride is limited to the amount paid for that ride, and we are not liable for indirect or consequential losses.',
    ],
  },
  {
    h: 'Changes to these terms',
    body: ['If we change these terms, we will update the date at the top of this page. The terms in force when you book apply to that booking.'],
  },
];

export default function TermsPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Terms of Service', url: `${site}${path}` },
        ]}
      />
      <LegalPage
        title="Terms of Service"
        updated={UPDATED}
        intro={`These terms apply when you use this website or book a ride with ${SITE_NAME}. By booking, you agree to them.`}
        sections={sections}
        contactLead="Questions about these terms?"
        seeAlso={{ href: '/privacy', label: 'Privacy Policy' }}
      />
    </>
  );
}
