import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { ComparisonTable, type Cell } from '@/components/ComparisonTable';
import { PageHero, TextTable } from '@/components/PageHero';
import { FaqList, InfoCards, RelatedLinks } from '@/components/AirportSections';
import { ogDefaults } from '@/lib/og';
import { releaseRobots } from '@/lib/page-release';

const path = '/services/routes/nyc-to-hamptons';
const title = 'NYC to the Hamptons Car Service | Black Car Service';
const description =
  'Private car service from New York City to the Hamptons: Westhampton, Southampton, East Hampton, Sag Harbor and Montauk, door to door. Book ahead for summer.';
const bookHref = `/book?service=point-to-point&dropoff=${encodeURIComponent('Southampton, NY')}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
  ...releaseRobots(path),
};

// From Midtown Manhattan. Rounded public-map estimates; summer Fridays can run longer.
const driveTimes: string[][] = [
  ['Westhampton Beach', '80 mi', '1 h 40 min – 2 h', '2 h 30 min – 3 h 30 min'],
  ['Southampton', '90 mi', '1 h 50 min – 2 h 15 min', '3 h – 4 h'],
  ['Bridgehampton', '97 mi', '2 h – 2 h 30 min', '3 h 15 min – 4 h 15 min'],
  ['Sag Harbor', '100 mi', '2 h 10 min – 2 h 40 min', '3 h 15 min – 4 h 15 min'],
  ['East Hampton', '105 mi', '2 h 15 min – 2 h 45 min', '3 h 30 min – 4 h 30 min'],
  ['Montauk', '120 mi', '2 h 40 min – 3 h', '4 h – 5 h'],
];

const towns = [
  { title: 'Westhampton Beach', body: 'The first of the Hamptons — the shortest ride from the city and from JFK.' },
  { title: 'Southampton and Water Mill', body: 'Village shopping, beach clubs and the start of the summer traffic on County Road 39.' },
  { title: 'Bridgehampton and Sagaponack', body: 'Farm stands, polo and estate drives off Montauk Highway.' },
  { title: 'Sag Harbor', body: 'The harbor town north of the highway, popular for weekends and weddings.' },
  { title: 'East Hampton and Amagansett', body: 'Main Street, the beaches and summer rentals further east.' },
  { title: 'Montauk', body: 'The end of the line — surf, the lighthouse and the longest ride of the season.' },
];

const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'Door to door with your bags', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'Leave exactly when you want', cells: ['yes', 'no', 'no', 'varies'] },
  { row: 'Room for kids, dogs and beach gear', cells: ['yes', 'varies', 'varies', 'no'] },
  { row: 'Private — just your group', cells: ['yes', 'no', 'no', 'varies'] },
  { row: 'Fastest on a summer Friday', cells: ['no', 'no', 'varies', 'yes'] },
];

const faqs = [
  {
    q: 'How long does it take to drive from NYC to the Hamptons?',
    a: 'Outside summer weekends, about 1 hour 40 minutes to Westhampton and 2 hours 15 minutes to East Hampton from Midtown. On summer Friday afternoons, allow an extra hour or more.',
  },
  {
    q: 'How much is a car service from Manhattan to the Hamptons?',
    a: 'It depends on the town, the vehicle and whether it is one way or a return. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'When should I leave to beat Hamptons traffic?',
    a: 'Before 1 pm or after 8 pm on a summer Friday, or early Saturday morning. Coming back, Sunday morning is far easier than Sunday afternoon.',
  },
  {
    q: 'Can you pick me up at JFK or LaGuardia and drive me to the Hamptons?',
    a: 'Yes. JFK is the closest NYC airport to the Hamptons. Add your flight number and we time the pickup to your landing.',
  },
  {
    q: 'Do you drive from the Hamptons back to the city?',
    a: 'Yes, in both directions. Book with your Hamptons pickup address and your city or airport destination.',
  },
  {
    q: 'How far ahead should I book for summer?',
    a: 'For Memorial Day, the Fourth of July and Labor Day weekends, book a week or more ahead. Other summer weekends, a few days ahead is usually enough.',
  },
];

const related = [
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'All our routes out of New York.' },
  { href: '/services/areas/queens', title: 'Queens car service', body: 'Where the Long Island Expressway begins.' },
  { href: '/services/airport/jfk', title: 'JFK car service', body: 'The closest NYC airport to the East End.' },
  { href: '/services/airport/teb', title: 'Teterboro car service', body: 'Flying private? We meet you at the FBO.' },
  { href: '/fleet', title: 'Our vehicles', body: 'SUVs for beach gear, Sprinters for groups.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function NycToHamptonsPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Long-distance car service', url: `${site}/services/long-distance` },
          { name: 'NYC to the Hamptons', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="New York City to the Hamptons Car Service"
        description={description}
        url={`${site}${path}`}
        serviceType="Long-distance car service"
        areaServed={[
          { type: 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
          { type: 'AdministrativeArea', name: 'The Hamptons' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#hamptons-title', '#hamptons-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Long distance', href: '/services/long-distance' }, { name: 'NYC to the Hamptons' }]}
        eyebrow="New York → The Hamptons"
        idPrefix="hamptons"
        h1="NYC to the Hamptons Car Service"
        answer={`${SITE_NAME} drives you from Manhattan, Brooklyn, Queens or the airports straight to your door in the Hamptons — about two hours to Southampton outside summer weekends. No bus schedule, no train change, room for the beach bags.`}
        ctaHref={bookHref}
        ctaLabel="Get my Hamptons price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="time-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="time-heading"
            eyebrow="Drive time"
            title="How long is the drive from NYC to the Hamptons?"
            intro="Times from Midtown. The Long Island Expressway and Sunrise Highway carry most of the trip; County Road 39 into Southampton is the usual summer bottleneck."
          />
          <TextTable caption="Drive times from Midtown Manhattan to Hamptons towns" head={['To', 'Distance', 'Off-season / weekdays', 'Summer Fridays']} rows={driveTimes} />
          <p className="mt-6 text-sm text-brand-muted">Approximate road distances and times; live traffic decides on the day.</p>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="towns-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="towns-heading"
            eyebrow="Destinations"
            title="Where we drive in the Hamptons"
            intro="Any address on the South Fork works, from Westhampton to Montauk."
          />
          <InfoCards items={towns} tone="tint" />
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="Car service vs Jitney, LIRR and flying out"
            intro="The bus and train are cheaper, and a seaplane or helicopter is faster on a summer Friday. A private car is the one that goes from your front door to theirs."
          />
          <ComparisonTable
            caption="How a car service compares with bus, train and flying to the Hamptons"
            columns={['Car service', 'Hampton Jitney', 'LIRR', 'Seaplane / helicopter']}
            rows={comparison}
          />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center text-brand-white hover:bg-brand-accent-hover">
              Book NYC to the Hamptons
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-white px-6 py-3 text-center text-brand-ink ring-1 ring-brand-line hover:ring-brand-accent"
            >
              Ask about a weekend return
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="NYC to the Hamptons FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Related routes and airports" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
