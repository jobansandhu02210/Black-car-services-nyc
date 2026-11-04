import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { PageHero, TextTable } from '@/components/PageHero';
import { FactorTable, FaqList, InfoCards, RelatedLinks } from '@/components/AirportSections';
import { ogDefaults } from '@/lib/og';
import { releaseRobots } from '@/lib/page-release';

const path = '/services/airport/hpn';
const title = 'Westchester Airport (HPN) Car Service | Black Car Service';
const description =
  'Private car service to and from Westchester County Airport (HPN): Manhattan, Greenwich, Stamford and White Plains, plus private flights. Book 24/7.';
const bookHref = `/book?service=point-to-point&dropoff=${encodeURIComponent('Westchester County Airport (HPN), White Plains, NY')}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
  ...releaseRobots(path),
};

const why = [
  { title: 'One small terminal', body: 'Security, check-in and the curb are a short walk apart, which makes HPN quick for travelers who hate big-airport walks.' },
  { title: 'Close to Fairfield County', body: 'From Greenwich and Stamford, HPN is usually closer than any New York City airport — often under half an hour.' },
  { title: 'Fewer flights', body: 'The schedule is much smaller than at JFK or LaGuardia, mostly domestic routes. Check your options before you choose it.' },
];

// Approximate road distance and typical drive time to/from HPN (public-map estimates, rounded).
const driveTimes: string[][] = [
  ['White Plains (downtown)', '4 mi', '10–15 min', '15–25 min'],
  ['Scarsdale', '7 mi', '15–20 min', '20–35 min'],
  ['Greenwich, CT', '10 mi', '15–20 min', '20–35 min'],
  ['Rye', '8 mi', '15–20 min', '20–30 min'],
  ['Stamford, CT', '17 mi', '25–30 min', '35–50 min'],
  ['Westport, CT', '34 mi', '40–50 min', '55–75 min'],
  ['Upper East Side', '30 mi', '45–60 min', '70–100 min'],
  ['Midtown Manhattan', '33 mi', '50–65 min', '75–110 min'],
  ['LaGuardia (connection)', '23 mi', '30–45 min', '50–80 min'],
];

const priceFactors = [
  { factor: 'Distance', detail: 'Rides from Greenwich and White Plains are short; Manhattan is around 30 miles. The estimate uses the real driving distance for your address.' },
  { factor: 'Vehicle', detail: 'Executive Sedan for most trips, First Class SUV for families and golf bags, First Class Sedan for clients, Sprinter Van for groups.' },
  { factor: 'Tolls', detail: 'Trips into Manhattan usually cross a tolled bridge. Trips within Westchester and Connecticut are generally toll-free.' },
  { factor: 'Time of day', detail: 'The Hutchinson River Parkway and I-287 slow down on weekday mornings and evenings, which adds time to city trips.' },
];

const privateFlying = [
  { title: 'Private terminals (FBOs)', body: 'Private flights use the FBOs on the airport, not the passenger terminal. Tell us the FBO and tail number when you book.' },
  { title: 'Timed to wheels-down', body: 'Give us the departure time and we follow the flight, so the car is waiting when you taxi in.' },
  { title: 'Luggage and golf bags', body: 'Choose a First Class SUV for heavy bags, skis or golf clubs, or a Sprinter for a whole travelling party.' },
];

// TODO(owner): confirm private-flight handling (FBO pickups, tail number) before release.
const faqs = [
  {
    q: 'How long does it take to get from Westchester Airport to Manhattan?',
    a: 'About 50 to 65 minutes to Midtown outside rush hour, and 75 minutes to almost two hours on weekday evenings.',
  },
  {
    q: 'Is HPN closer than LaGuardia from Greenwich or Stamford?',
    a: 'Usually, yes. Greenwich is about 15 to 20 minutes from HPN outside rush hour, against roughly 40 to 55 minutes to LaGuardia.',
  },
  {
    q: 'How much is a car service from HPN?',
    a: 'It depends on your address, the vehicle and the time of day. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'Where does my driver meet me at Westchester Airport?',
    a: 'At the passenger terminal, we confirm the meeting point with you before you land. For private flights, we meet you at your FBO.',
  },
  {
    q: 'Do you pick up private flights at HPN?',
    a: 'Yes. Tell us the FBO, tail number and expected arrival time when you book, and we time the pickup to your flight.',
  },
  {
    q: 'Can you drive me from HPN to JFK or Newark for a connection?',
    a: 'Yes. Allow at least an hour to JFK and more to Newark at busy times, plus check-in and security at the second airport.',
  },
];

const related = [
  { href: '/services/airport', title: 'Compare NYC airports', body: 'JFK, LaGuardia, Newark, HPN and Teterboro.' },
  { href: '/services/airport/lga', title: 'LaGuardia car service', body: 'The closest big airport to Westchester.' },
  { href: '/services/areas/connecticut', title: 'Connecticut car service', body: 'Greenwich, Stamford and the shoreline.' },
  { href: '/services/airport/teb', title: 'Teterboro car service', body: 'Private flights on the New Jersey side.' },
  { href: '/fleet', title: 'Our vehicles', body: 'Sedans, SUVs and Sprinter vans.' },
  { href: '/services/areas/westchester', title: 'Westchester car service', body: 'County rides to LaGuardia, JFK and Newark.' },
];

export default function HpnPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}/services/airport` },
          { name: 'Westchester Airport car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="Westchester County Airport (HPN) Car Service"
        description={description}
        url={`${site}${path}`}
        serviceType="Airport transfer"
        areaServed={[
          { type: 'Airport', name: 'Westchester County Airport' },
          { type: 'AdministrativeArea', name: 'Westchester County', sameAs: 'https://www.wikidata.org/wiki/Q498726' },
          { type: 'State', name: 'Connecticut', sameAs: 'https://www.wikidata.org/wiki/Q779' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#hpn-title', '#hpn-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Airports', href: '/services/airport' }, { name: 'HPN' }]}
        eyebrow="Westchester County Airport · White Plains, NY"
        idPrefix="hpn"
        h1="Westchester Airport Car Service"
        answer={`${SITE_NAME} drives to and from Westchester County Airport (HPN) for Manhattan, Westchester and Fairfield County. HPN is a small one-terminal airport — often the quickest choice from Greenwich and Stamford — and we also meet private flights at its FBOs.`}
        ctaHref={bookHref}
        ctaLabel="Get my HPN price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="why-heading" eyebrow="Why HPN" title="Why fly from Westchester County Airport" />
          <InfoCards items={why} />
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="HPN drive times by town"
            intro="Typical door-to-door times by car. The parkways into the city are the slowest part at rush hour."
          />
          <TextTable caption="Drive times between Westchester County Airport and nearby towns" head={['To or from', 'Distance', 'Off-peak', 'Rush hour']} rows={driveTimes} />
          <p className="mt-6 text-sm text-brand-muted">Approximate road distances and times; live traffic decides on the day.</p>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="cost-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="cost-heading" eyebrow="Pricing" title="How much is a car service to HPN?" />
          <FactorTable caption="What affects the price of a Westchester Airport car service" rows={priceFactors} />
          <p className="mt-6 max-w-3xl text-brand-muted leading-relaxed">
            <Link href={bookHref} className="font-semibold text-brand-accent hover:underline">Enter your trip</Link> for an
            estimate. We confirm the fare before the ride.
          </p>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="private-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="private-heading"
            eyebrow="Private aviation"
            title="Car service for private flights at HPN"
            intro="Westchester is busy with private and business jets. A car waiting at the FBO turns a short flight into a short trip door to door."
          />
          <InfoCards items={privateFlying} tone="tint" />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center text-brand-white hover:bg-brand-accent-hover">
              Book an HPN car
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-white px-6 py-3 text-center text-brand-ink ring-1 ring-brand-line hover:ring-brand-accent"
            >
              Send flight details on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Westchester Airport car service FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Related airports and areas" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
