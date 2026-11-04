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

const path = '/services/areas/westchester';
const title = 'Westchester Car Service to JFK, LGA & Newark | Black Car Service';
const description =
  'Private car service from Scarsdale, Rye, Bronxville, Chappaqua, Tarrytown and all of Westchester County to LaGuardia, JFK, Newark and Manhattan.';
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
  { title: 'Scarsdale and Bronxville', spec: 'Lower Westchester', body: 'The Hutchinson and the Bronx River Parkway put LaGuardia about 20 to 30 minutes away.' },
  { title: 'Rye, Harrison and Larchmont', spec: 'The Sound shore', body: 'I-95 runs right past; LaGuardia and the Connecticut line are both close.' },
  { title: 'White Plains', spec: 'The county seat', body: 'Offices, hotels and the train station, a few minutes from Westchester Airport.' },
  { title: 'Chappaqua and Armonk', spec: 'Northern Westchester', body: 'Quiet roads and long driveways; the Saw Mill and I-684 do the work.' },
  { title: 'Tarrytown and Sleepy Hollow', spec: 'River towns', body: 'Over the Cuomo Bridge, Newark becomes a real option from the Hudson side.' },
  { title: 'Yonkers and New Rochelle', spec: 'Next to the city', body: 'Just over the Bronx line, with quick runs to Manhattan and LaGuardia.' },
];

// Typical off-peak drive times (public-map estimates, rounded).
const times: string[][] = [
  ['Scarsdale', '20–30 min', '35–50 min', '45–70 min', '35–50 min'],
  ['Bronxville', '20–30 min', '35–50 min', '40–60 min', '30–45 min'],
  ['Rye', '25–35 min', '40–55 min', '55–80 min', '45–60 min'],
  ['White Plains', '25–35 min', '40–55 min', '50–75 min', '40–60 min'],
  ['Chappaqua', '35–45 min', '50–65 min', '55–80 min', '50–70 min'],
  ['Tarrytown', '35–45 min', '50–65 min', '45–60 min', '40–55 min'],
];

const airports = [
  { title: 'LaGuardia', spec: 'The usual pick', body: 'The closest big airport for most of Westchester, with flights to almost every US city.' },
  { title: 'Westchester Airport (HPN)', spec: 'Small and quick', body: 'Fewer routes, but minutes from much of the county and easy to get through.' },
  { title: 'JFK and Newark', spec: 'For long-haul', body: 'International flights mean a longer ride. From the river towns, Newark can be quicker than JFK.' },
];

const faqs = [
  {
    q: 'Which airport is closest to Westchester?',
    a: 'Westchester County Airport (HPN) in White Plains is the closest, but it has a limited set of routes. LaGuardia is the nearest major airport, usually 20 to 45 minutes from most towns.',
  },
  {
    q: 'How early should I book a ride from Westchester to JFK?',
    a: 'A day ahead is usually enough; for early-morning flights and holiday weekends, book a few days ahead. Allow 40 to 65 minutes of driving off-peak, more on weekday afternoons.',
  },
  {
    q: 'Can you drive me from Westchester to Manhattan for the day?',
    a: 'Yes. Book a one-way ride each way, or book by the hour so the same driver waits between meetings. Hourly bookings have a two-hour minimum.',
  },
  {
    q: 'Do you go from Westchester to Connecticut or New Jersey?',
    a: 'Yes. Greenwich and Stamford are just over the line, and the Cuomo Bridge makes Bergen County and the rest of New Jersey straightforward.',
  },
  {
    q: 'How much is a car service from Westchester to LaGuardia?',
    a: 'It depends on your town and the vehicle. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
];

const related = [
  { href: '/services/airport/hpn', title: 'Westchester Airport car service', body: 'HPN pickups, FBOs and drive times.' },
  { href: '/services/airport/lga', title: 'LaGuardia car service', body: 'The nearest major airport to the county.' },
  { href: '/services/areas/connecticut', title: 'Connecticut car service', body: 'Greenwich and Stamford, just over the line.' },
  { href: '/services/areas/manhattan', title: 'Manhattan car service', body: 'Into the city for meetings or an evening out.' },
  { href: '/services/areas/long-island', title: 'Long Island car service', body: 'Across the Sound by the Throgs Neck.' },
  { href: '/services/airport', title: 'Compare NYC airports', body: 'JFK, LaGuardia, Newark, HPN and Teterboro.' },
];

export default function WestchesterPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}/services/airport` },
          { name: 'Westchester car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="Westchester County Car Service"
        description={description}
        url={`${site}${path}`}
        areaServed={[
          { type: 'AdministrativeArea', name: 'Westchester County, New York' },
          { type: 'Airport', name: 'LaGuardia Airport', sameAs: 'https://www.wikidata.org/wiki/Q8977' },
          { type: 'Airport', name: 'Westchester County Airport' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#westchester-title', '#westchester-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Airports', href: '/services/airport' }, { name: 'Westchester' }]}
        eyebrow="Westchester County, New York"
        idPrefix="westchester"
        h1="Westchester Car Service"
        answer={`${SITE_NAME} drives from every corner of Westchester County — Scarsdale, Rye, Chappaqua, Tarrytown and more — to LaGuardia, JFK, Newark and Manhattan. LaGuardia is usually 20 to 45 minutes away, and we time the pickup to your flight.`}
        ctaHref={bookHref}
        ctaLabel="Get my Westchester price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="towns-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="towns-heading"
            eyebrow="Where we pick up"
            title="Westchester towns we drive from"
            intro="Any address in the county works. These are the towns we drive from most."
          />
          <InfoCards items={towns} />
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="Westchester to LaGuardia, JFK, Newark and Midtown"
            intro="Typical off-peak times. The Hutch, the Cross Bronx and the Major Deegan all slow down on weekday afternoons; allow 20 to 30 minutes more."
          />
          <TextTable
            caption="Off-peak drive times from Westchester towns to NYC airports and Midtown"
            head={['From', 'LaGuardia', 'JFK', 'Newark', 'Midtown']}
            rows={times}
          />
          <p className="mt-6 text-sm text-brand-muted">Approximate times; live traffic decides on the day.</p>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="airports-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="airports-heading" eyebrow="Which airport" title="Choosing an airport from Westchester" />
          <InfoCards items={airports} />
          <p className="mt-8 text-sm text-brand-muted">
            Flying from White Plains? See our{' '}
            <Link href="/services/airport/hpn" className="font-semibold text-brand-accent hover:underline">Westchester Airport (HPN) page</Link>.
          </p>
          <Link href={bookHref} className="mt-8 inline-flex rounded-lg bg-brand-accent px-6 py-3 text-brand-white hover:bg-brand-accent-hover">
            Book a Westchester ride
          </Link>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Westchester car service FAQs" />
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
