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

const path = '/services/areas/brooklyn';
const title = 'Brooklyn Car Service to JFK, LGA & Newark | Black Car Service';
const description =
  'Private car service from Williamsburg, Park Slope, DUMBO, Bay Ridge and all of Brooklyn to JFK, LaGuardia and Newark, or on to NJ, Philadelphia and DC.';
const bookHref = '/book?service=airport';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
  ...releaseRobots(path),
};

const neighborhoods = [
  { title: 'Williamsburg and Greenpoint', spec: 'North Brooklyn', body: 'The BQE runs straight to LaGuardia; JFK is a slightly longer run down the Van Wyck.' },
  { title: 'DUMBO and Brooklyn Heights', spec: 'The waterfront', body: 'Brownstone streets and narrow lanes — tell us about building access and we send the right size car.' },
  { title: 'Park Slope and Prospect Heights', spec: 'Around the park', body: 'Family trips with car seats and strollers; an SUV leaves room for everything.' },
  { title: 'Bed-Stuy and Crown Heights', spec: 'Central Brooklyn', body: 'Atlantic Avenue and Eastern Parkway lead quickly onto the Belt or the Van Wyck for JFK.' },
  { title: 'Bay Ridge and Dyker Heights', spec: 'Southwest Brooklyn', body: 'The Verrazzano puts Newark and the Jersey Shore surprisingly close.' },
  { title: 'Downtown Brooklyn', spec: 'Barclays Center · MetroTech', body: 'Offices, hotels and the arena, a short ride from both the bridges and the Belt.' },
];

// Typical off-peak drive times (public-map estimates, rounded).
const airportTimes: string[][] = [
  ['Williamsburg', '25–40 min', '30–50 min', '45–70 min'],
  ['Brooklyn Heights / DUMBO', '30–45 min', '35–55 min', '35–60 min'],
  ['Park Slope', '35–50 min', '30–50 min', '35–55 min'],
  ['Bed-Stuy', '30–45 min', '25–40 min', '45–70 min'],
  ['Bay Ridge', '40–60 min', '30–45 min', '35–55 min'],
  ['Downtown Brooklyn', '30–45 min', '35–50 min', '35–55 min'],
];

const routes = [
  { title: 'Belt Parkway to JFK', body: 'Most of southern and central Brooklyn reaches JFK along the Belt Parkway, avoiding the Van Wyck entirely.' },
  { title: 'Verrazzano to Newark', body: 'From Bay Ridge and southwest Brooklyn, crossing Staten Island to Newark can beat the tunnels through Manhattan.' },
  { title: 'BQE to LaGuardia', body: 'North Brooklyn heads up the BQE. It is the shortest route, but it is also the one that jams first in the afternoon.' },
];

const faqs = [
  {
    q: 'Is JFK or LaGuardia closer to Brooklyn?',
    a: 'JFK is closer for most of Brooklyn, especially the south and centre of the borough. Williamsburg and Greenpoint are about the same distance from both.',
  },
  {
    q: 'How long is the drive from Brooklyn to Newark Airport?',
    a: 'About 35 minutes to an hour and ten off-peak, depending on the neighborhood. We route over the Verrazzano or through Manhattan, whichever traffic favours on the day.',
  },
  {
    q: 'Can you bring a car seat for my child?',
    a: 'Tell us the child’s age when you book and we will confirm what we can provide. You are always welcome to bring your own seat.',
  },
  {
    q: 'Do you drive from Brooklyn to Philadelphia, DC or the Hamptons?',
    a: 'Yes. We drive door to door from Brooklyn to New Jersey, Connecticut, Philadelphia, Washington, DC and the Hamptons.',
  },
  {
    q: 'How much is a car service from Brooklyn to JFK?',
    a: 'It depends on your address and the vehicle. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
];

const related = [
  { href: '/services/airport/jfk', title: 'JFK car service', body: 'The closest airport for most of Brooklyn.' },
  { href: '/services/airport/ewr', title: 'Newark airport car service', body: 'Over the Verrazzano from southwest Brooklyn.' },
  { href: '/services/areas/manhattan', title: 'Manhattan car service', body: 'Rides from the other side of the bridges.' },
  { href: '/services/areas/queens', title: 'Queens car service', body: 'Next door, and home to both NYC airports.' },
  { href: '/services/routes/nyc-to-philadelphia', title: 'NYC to Philadelphia', body: 'About two hours from Brooklyn.' },
  { href: '/services/airport', title: 'Compare NYC airports', body: 'JFK, LaGuardia, Newark, HPN and Teterboro.' },
];

export default function BrooklynPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}/services/airport` },
          { name: 'Brooklyn car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="Brooklyn Car Service"
        description={description}
        url={`${site}${path}`}
        areaServed={[
          { type: 'AdministrativeArea', name: 'Brooklyn', sameAs: 'https://www.wikidata.org/wiki/Q18419' },
          { type: 'Airport', name: 'John F. Kennedy International Airport', sameAs: 'https://www.wikidata.org/wiki/Q8685' },
          { type: 'Airport', name: 'Newark Liberty International Airport' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#brooklyn-title', '#brooklyn-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Airports', href: '/services/airport' }, { name: 'Brooklyn' }]}
        eyebrow="Brooklyn, New York"
        idPrefix="brooklyn"
        h1="Brooklyn Car Service"
        answer={`${SITE_NAME} drives from any Brooklyn address — Williamsburg to Bay Ridge — to JFK in about 25 to 50 minutes, and to LaGuardia and Newark too. We pick the route that suits your corner of the borough, not just the shortest one on the map.`}
        ctaHref={bookHref}
        ctaLabel="Get my Brooklyn price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="hoods-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="hoods-heading"
            eyebrow="Neighborhoods"
            title="Where we pick up in Brooklyn"
            intro="Any address in the borough works. These are the areas we drive from most."
          />
          <InfoCards items={neighborhoods} />
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="Brooklyn to JFK, LaGuardia and Newark"
            intro="Typical off-peak times. The BQE and the Belt Parkway both slow down on weekday afternoons; allow an extra 20 to 30 minutes."
          />
          <TextTable caption="Off-peak drive times from Brooklyn neighborhoods to NYC airports" head={['From', 'LaGuardia', 'JFK', 'Newark']} rows={airportTimes} />
          <p className="mt-6 text-sm text-brand-muted">Approximate times; live traffic decides on the day.</p>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="routes-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="routes-heading" eyebrow="Routes" title="How we drive out of Brooklyn" />
          <InfoCards items={routes} />
          <p className="mt-8 text-sm text-brand-muted">
            Terminal tips and pickup timing are on the{' '}
            <Link href="/services/airport/jfk" className="font-semibold text-brand-accent hover:underline">JFK</Link> and{' '}
            <Link href="/services/airport/ewr" className="font-semibold text-brand-accent hover:underline">Newark</Link> pages.
          </p>
          <Link href={bookHref} className="mt-8 inline-flex rounded-lg bg-brand-accent px-6 py-3 text-brand-white hover:bg-brand-accent-hover">
            Book a Brooklyn ride
          </Link>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Brooklyn car service FAQs" />
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
