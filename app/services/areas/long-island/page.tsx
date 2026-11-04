import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { PageHero, TextTable } from '@/components/PageHero';
import { FaqList, InfoCards, RelatedLinks } from '@/components/AirportSections';
import { ogDefaults } from '@/lib/og';
import { releaseRobots } from '@/lib/page-release';

const path = '/services/areas/long-island';
const title = 'Long Island Car Service: Nassau & Suffolk | Black Car Service';
const description =
  'Private car service from Nassau and Suffolk County to JFK, LaGuardia, Newark and Manhattan: Great Neck, Garden City, Huntington, Long Beach and more.';
const bookHref = '/book?service=airport';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
  ...releaseRobots(path),
};

const towns = [
  { title: 'Great Neck and Manhasset', spec: 'North Shore, Nassau', body: 'Just past the Queens line — LaGuardia is often 20 to 30 minutes away.' },
  { title: 'Garden City and Mineola', spec: 'Central Nassau', body: 'Close to the Southern State and the Cross Island, with JFK about half an hour off.' },
  { title: 'Oyster Bay and Syosset', spec: 'Gold Coast', body: 'Estate drives and quiet lanes; tell us about gates and long driveways when you book.' },
  { title: 'Long Beach and the South Shore', spec: 'Nassau barrier island', body: 'The nearest Long Island beach town to JFK, usually 25 to 35 minutes.' },
  { title: 'Huntington and Cold Spring Harbor', spec: 'Western Suffolk', body: 'Further out, but still an easy run to both Queens airports outside rush hour.' },
  { title: 'Stony Brook and beyond', spec: 'Suffolk County', body: 'Longer rides to the city or the airports; for the East End, see our Hamptons page.' },
];

// Typical off-peak drive times (public-map estimates, rounded).
const times: string[][] = [
  ['Great Neck', '25–35 min', '20–30 min', '40–60 min'],
  ['Garden City', '20–30 min', '25–40 min', '45–70 min'],
  ['Long Beach', '25–35 min', '40–55 min', '55–80 min'],
  ['Oyster Bay', '40–55 min', '35–50 min', '55–85 min'],
  ['Huntington', '45–60 min', '40–55 min', '60–90 min'],
  ['Stony Brook', '60–80 min', '55–75 min', '75–110 min'],
];

const reasons = [
  { title: 'No train change at Jamaica', body: 'The LIRR plus AirTrain means hauling bags across platforms. A car goes from your driveway to the terminal curb.' },
  { title: 'Early flights, no parking', body: 'For a 6 am departure the trains are thin. We pick up whenever you need, and you skip long-term parking fees.' },
  { title: 'Into the city for the evening', body: 'Dinner, a show or a game in Manhattan, then a ride home without anyone driving back on the LIE.' },
];

const faqs = [
  {
    q: 'Which airport is best from Long Island?',
    a: 'JFK is usually closest from the South Shore and central Nassau; LaGuardia is often quicker from the North Shore. From eastern Suffolk, Long Island MacArthur Airport (ISP) in Ronkonkoma may be the nearest of all, and we drive there too.',
  },
  {
    q: 'Do you cover both Nassau and Suffolk County?',
    a: 'Yes. We pick up anywhere in Nassau and Suffolk. For the Hamptons and the North Fork, allow more time and book a little further ahead in summer.',
  },
  {
    q: 'Can I book a car from Long Island to Manhattan for the night?',
    a: 'Yes. Book a one-way ride each way, or book by the hour so the same driver waits and brings you home. Hourly bookings have a two-hour minimum.',
  },
  {
    q: 'How much is a car service from Long Island to JFK?',
    a: 'It depends on your town and the vehicle. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'Do you drive from Long Island to New Jersey or Connecticut?',
    a: 'Yes. Newark, the Jersey suburbs, Westchester and Connecticut are all regular trips from Long Island.',
  },
];

const related = [
  { href: '/services/airport/jfk', title: 'JFK car service', body: 'The closest airport to the South Shore.' },
  { href: '/services/airport/lga', title: 'LaGuardia car service', body: 'Often quicker from the North Shore.' },
  { href: '/services/routes/nyc-to-hamptons', title: 'NYC to the Hamptons', body: 'Further east — Westhampton to Montauk.' },
  { href: '/services/areas/queens', title: 'Queens car service', body: 'Just over the city line.' },
  { href: '/services/areas/westchester', title: 'Westchester car service', body: 'Across the Sound by the Throgs Neck.' },
  { href: '/fleet', title: 'Our vehicles', body: 'Sedans, SUVs and Sprinter vans.' },
];

export default function LongIslandPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}/services/airport` },
          { name: 'Long Island car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="Long Island Car Service"
        description={description}
        url={`${site}${path}`}
        areaServed={[
          { type: 'AdministrativeArea', name: 'Nassau County, New York' },
          { type: 'AdministrativeArea', name: 'Suffolk County, New York' },
          { type: 'Airport', name: 'John F. Kennedy International Airport', sameAs: 'https://www.wikidata.org/wiki/Q8685' },
          { type: 'Airport', name: 'LaGuardia Airport', sameAs: 'https://www.wikidata.org/wiki/Q8977' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#long-island-title', '#long-island-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Airports', href: '/services/airport' }, { name: 'Long Island' }]}
        eyebrow="Nassau & Suffolk County, New York"
        idPrefix="long-island"
        h1="Long Island Car Service"
        answer={`${SITE_NAME} drives from Nassau and Suffolk County to JFK, LaGuardia and Newark, and into Manhattan — from Great Neck and Garden City out to Huntington and Stony Brook. Door to door, timed to your flight, with no train change at Jamaica.`}
        ctaHref={bookHref}
        ctaLabel="Get my Long Island price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="towns-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="towns-heading"
            eyebrow="Where we pick up"
            title="Long Island towns we drive from"
            intro="Any address in Nassau or Suffolk works. These are the towns we hear from most."
          />
          <InfoCards items={towns} />
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="Long Island to JFK, LaGuardia and Manhattan"
            intro="Typical off-peak times. The Long Island Expressway and the Northern State back up westbound in the morning and eastbound in the evening."
          />
          <TextTable caption="Off-peak drive times from Long Island towns to JFK, LaGuardia and Midtown" head={['From', 'JFK', 'LaGuardia', 'Midtown Manhattan']} rows={times} />
          <p className="mt-6 text-sm text-brand-muted">Approximate times; live traffic decides on the day.</p>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="why-heading" eyebrow="Why a car" title="Car service vs the LIRR and AirTrain" />
          <InfoCards items={reasons} />
          <p className="mt-8 text-sm text-brand-muted">
            Heading east instead? See{' '}
            <Link href="/services/routes/nyc-to-hamptons" className="font-semibold text-brand-accent hover:underline">NYC to the Hamptons</Link>.
          </p>
          <Link href={bookHref} className="mt-8 inline-flex rounded-lg bg-brand-accent px-6 py-3 text-brand-white hover:bg-brand-accent-hover">
            Book a Long Island ride
          </Link>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Long Island car service FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Related airports and areas" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
