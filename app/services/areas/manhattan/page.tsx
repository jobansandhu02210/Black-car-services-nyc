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

const path = '/services/areas/manhattan';
const title = 'Manhattan Car Service to JFK, LGA & Newark | Black Car Service';
const description =
  'Private car service from any Manhattan address to JFK, LaGuardia and Newark, plus hourly rides around town and long trips to NJ, CT, Philadelphia and DC.';
const bookHref = '/book?service=airport';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
  ...releaseRobots(path),
};

const pickups = [
  { title: 'Hotels and lobbies', body: 'Give us the hotel name and we pull up at the main entrance. On one-way streets the driver waits on the hotel side, so you do not cross traffic with luggage.' },
  { title: 'Apartment buildings', body: 'Tell us if your building has a side or service entrance. The driver texts on arrival and helps with bags from the door.' },
  { title: 'Offices', body: 'For a mid-afternoon flight from the office, book a pickup at the building and we take the bags if you dropped them off in the morning.' },
];

// Typical off-peak drive times (public-map estimates, rounded).
const airportTimes: string[][] = [
  ['Midtown', '25–45 min', '45–75 min', '40–60 min'],
  ['Upper East Side', '20–35 min', '40–70 min', '45–70 min'],
  ['Upper West Side', '25–40 min', '50–75 min', '35–60 min'],
  ['Harlem', '20–30 min', '40–60 min', '45–70 min'],
  ['SoHo / Tribeca', '30–50 min', '40–65 min', '30–50 min'],
  ['Financial District', '35–55 min', '40–65 min', '30–50 min'],
];

const choosing = [
  { title: 'East Side and Harlem', spec: 'Usually LaGuardia', body: 'The RFK Bridge puts LaGuardia close to the Upper East Side and Harlem, often well under half an hour.' },
  { title: 'West Side and downtown', spec: 'Often Newark', body: 'The Lincoln and Holland Tunnels make Newark a fair alternative from Hell’s Kitchen, Chelsea, Tribeca and the Financial District.' },
  { title: 'Long-haul international', spec: 'Mostly JFK', body: 'Most long-haul carriers fly from JFK. From downtown, the Brooklyn-Battery Tunnel and Belt Parkway can be quicker than the Van Wyck.' },
];

const faqs = [
  {
    q: 'Which airport is closest to Manhattan?',
    a: 'LaGuardia is the closest for most of Manhattan, especially the East Side and Harlem. From the West Side and downtown, Newark is often similar. JFK is the furthest of the three for most addresses.',
  },
  {
    q: 'How early should I leave Manhattan for my flight?',
    a: 'For a domestic flight, plan to arrive two hours before departure; for international, three. Add the drive time for your neighborhood, plus 30 minutes on weekday afternoons. The pickup planner on our JFK page does the maths for you.',
  },
  {
    q: 'Can you pick me up at my hotel?',
    a: 'Yes. Put the hotel name in the pickup address and the driver meets you at the main entrance. Tell us in the notes if the hotel has a separate car entrance.',
  },
  {
    q: 'Do you offer hourly car service in Manhattan?',
    a: 'Yes. Book by the hour for meetings across town, a night out or a day of errands, with the same driver waiting between stops. Hourly bookings have a two-hour minimum.',
  },
  {
    q: 'Do you drive from Manhattan to the suburbs and other cities?',
    a: 'Yes. We drive from Manhattan to Westchester, Long Island, New Jersey and Connecticut, and on longer trips to Philadelphia, Washington, DC and Boston. You see one trip estimate before you book.',
  },
];

const related = [
  { href: '/services/airport/lga', title: 'LaGuardia car service', body: 'The quickest airport from most of Manhattan.' },
  { href: '/services/airport/jfk', title: 'JFK car service', body: 'Terminals, drive times and the pickup planner.' },
  { href: '/services/airport/ewr', title: 'Newark airport car service', body: 'Often the easier choice from the West Side.' },
  { href: '/services/areas/brooklyn', title: 'Brooklyn car service', body: 'Across the river — rides to JFK and beyond.' },
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'Philadelphia, DC, Boston and the Hamptons.' },
  { href: '/fleet', title: 'Our vehicles', body: 'Sedans, SUVs and Sprinter vans.' },
];

export default function ManhattanPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}/services/airport` },
          { name: 'Manhattan car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="Manhattan Car Service"
        description={description}
        url={`${site}${path}`}
        areaServed={[
          { type: 'AdministrativeArea', name: 'Manhattan', sameAs: 'https://www.wikidata.org/wiki/Q11299' },
          { type: 'Airport', name: 'LaGuardia Airport', sameAs: 'https://www.wikidata.org/wiki/Q8977' },
          { type: 'Airport', name: 'John F. Kennedy International Airport', sameAs: 'https://www.wikidata.org/wiki/Q8685' },
          { type: 'Airport', name: 'Newark Liberty International Airport' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#manhattan-title', '#manhattan-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Airports', href: '/services/airport' }, { name: 'Manhattan' }]}
        eyebrow="Manhattan, New York"
        idPrefix="manhattan"
        h1="Manhattan Car Service"
        answer={`${SITE_NAME} picks up at hotels, apartments and offices anywhere in Manhattan, from the Financial District to Inwood. Most rides go to LaGuardia, JFK or Newark; we also drive by the hour around town and on to New Jersey, Connecticut, Philadelphia and DC.`}
        ctaHref={bookHref}
        ctaLabel="Get my Manhattan price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="Manhattan to LaGuardia, JFK and Newark"
            intro="Typical off-peak times by neighborhood. Weekday afternoons from about 3 to 7 pm can add 20 to 40 minutes, more on Fridays before a holiday."
          />
          <TextTable caption="Off-peak drive times from Manhattan neighborhoods to NYC airports" head={['From', 'LaGuardia', 'JFK', 'Newark']} rows={airportTimes} />
          <p className="mt-6 text-sm text-brand-muted">Approximate times; live traffic decides on the day.</p>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="choose-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="choose-heading"
            eyebrow="Which airport"
            title="Which airport is easiest from your part of Manhattan?"
            intro="Your airline usually decides. When you have a choice, the side of the island you live on matters more than the miles."
          />
          <InfoCards items={choosing} tone="tint" />
          <p className="mt-8 text-sm text-brand-muted">
            Compare all five airports on the{' '}
            <Link href="/services/airport" className="font-semibold text-brand-accent hover:underline">NYC airports page</Link>.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="pickup-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="pickup-heading" eyebrow="Pickups" title="Manhattan pickups that go smoothly" />
          <InfoCards items={pickups} />
          <Link href={bookHref} className="mt-10 inline-flex rounded-lg bg-brand-accent px-6 py-3 text-brand-white hover:bg-brand-accent-hover">
            Book a Manhattan ride
          </Link>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Manhattan car service FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Related airports and routes" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
