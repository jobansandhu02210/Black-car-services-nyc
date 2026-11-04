import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { PageHero, TextTable } from '@/components/PageHero';
import { FaqList, InfoCards, RelatedLinks, StepsList } from '@/components/AirportSections';
import { TerminalFinder } from '@/components/TerminalFinder';
import { AIRPORTS, formatRange } from '@/lib/airports';
import { ogDefaults } from '@/lib/og';

const path = '/services/airport';
const title = 'NYC Airport Car Service: JFK, LGA & EWR | Black Car Service';
const description =
  'Compare JFK, LaGuardia and Newark by drive time, terminals and rail links, then book a private car to or from any of them. Flight-tracked pickups, 24/7.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const midtown = (code: 'JFK' | 'LGA' | 'EWR') => AIRPORTS[code].driveTimes.find((d) => d.place === 'Midtown Manhattan')!;

const glance: string[][] = [
  ['Distance from Midtown', `${midtown('JFK').miles} mi`, `${midtown('LGA').miles} mi`, `${midtown('EWR').miles} mi`],
  ['Drive from Midtown, off-peak', formatRange(midtown('JFK').off), formatRange(midtown('LGA').off), formatRange(midtown('EWR').off)],
  ['Drive from Midtown, rush hour', formatRange(midtown('JFK').peak), formatRange(midtown('LGA').peak), formatRange(midtown('EWR').peak)],
  ['Rail link', 'AirTrain to Jamaica and Howard Beach', 'None — buses only', 'AirTrain to NJ Transit and Amtrak (being rebuilt)'],
  ['Biggest airlines', 'Delta, JetBlue, American', 'Delta, American, United', 'United'],
  ['Long-haul international', 'Most routes', 'Very few', 'Many routes'],
];

const closest = [
  { title: 'Upper East Side, Harlem and the Bronx', body: 'LaGuardia is usually the quickest — across the RFK or Queensboro Bridge and you are there. For long-haul flights, JFK is next.' },
  { title: 'Midtown and the Upper West Side', body: 'All three are within reach. LaGuardia wins off-peak; Newark can be faster from the far West Side when the tunnels are moving.' },
  { title: 'Lower Manhattan and Tribeca', body: 'Newark through the Holland Tunnel and JFK through Brooklyn are often close in time. Check the airline before the airport.' },
  { title: 'Brooklyn and Queens', body: 'JFK for most of Brooklyn and southern Queens; LaGuardia for Astoria, Long Island City and north Queens.' },
  { title: 'New Jersey', body: 'Newark for almost everywhere in the state. From Bergen County, LaGuardia over the George Washington Bridge can also work.' },
  { title: 'Connecticut', body: 'LaGuardia is the closest of the three from Greenwich and Stamford. JFK adds roughly half an hour.' },
];

const between: string[][] = [
  ['JFK ↔ LaGuardia', '11 mi', '25–40 min', '45–70 min'],
  ['LaGuardia ↔ Newark', '25 mi', '50–70 min', '75–110 min'],
  ['JFK ↔ Newark', '35 mi', '60–80 min', '1.5–2 h'],
];

const steps = [
  { name: 'Pick the airport', text: 'Choose JFK, LaGuardia or Newark and add your address, date and time.' },
  { name: 'Add the flight', text: 'For arrivals, the flight number lets us follow the landing time.' },
  { name: 'Choose a vehicle', text: 'Sedan, SUV or First Class, depending on people and bags.' },
  { name: 'Confirm', text: 'See the estimate, and we confirm the fare before the ride.' },
];

// TODO(owner): confirm the "included" promises and the airport-to-airport answer.
const included = [
  { title: 'Flight followed', body: 'Arrival pickups move with the real landing time, early or late.' },
  { title: 'Right terminal, first time', body: 'We check your airline’s terminal before the car heads to the airport.' },
  { title: 'Help with bags', body: 'Your driver loads and unloads the luggage at both ends.' },
];

const faqs = [
  {
    q: 'Which NYC airport is closest to Manhattan?',
    a: 'LaGuardia, about 9 miles from Midtown. JFK and Newark are both around 16 miles, and which of those is quicker depends on where in Manhattan you start and the time of day.',
  },
  {
    q: 'Which NYC airport is best for international flights?',
    a: 'JFK has the most long-haul routes, and Newark has many, especially on United. LaGuardia is mostly domestic and Canada, because most of its flights are limited to about 1,500 miles.',
  },
  {
    q: 'Can I book a car between JFK, LaGuardia and Newark?',
    a: 'Yes. Airport-to-airport transfers are common on split itineraries. JFK to LaGuardia usually takes 25 to 40 minutes off-peak; JFK to Newark can take an hour and a half or more at rush hour, so leave plenty of time.',
  },
  {
    q: 'Do you serve Philadelphia International Airport?',
    a: 'Yes, as a long-distance ride from New York City or northern New Jersey. See our New York to Philadelphia service for drive times.',
  },
  {
    q: 'What happens if my flight is delayed?',
    a: 'Give us the flight number when you book. We follow the flight and time the pickup to when you actually land.',
  },
  {
    q: 'How far ahead should I book an airport car?',
    a: 'Online bookings need at least two hours’ notice. For early-morning flights, holiday weekends and SUVs, book a day or more ahead.',
  },
];

const related = [
  { href: '/services/airport/jfk', title: 'JFK car service', body: 'Terminals, drive times and the pickup planner for JFK.' },
  { href: '/services/airport/lga', title: 'LaGuardia car service', body: 'The closest airport to Midtown and the East Side.' },
  { href: '/services/airport/ewr', title: 'Newark airport car service', body: 'United’s hub, and New Jersey’s main airport.' },
  { href: '/services/airport/hpn', title: 'Westchester Airport (HPN)', body: 'A small one-terminal airport north of the city.' },
  { href: '/services/airport/teb', title: 'Teterboro Airport (TEB)', body: 'Private flights, about 12 miles from Midtown.' },
  { href: '/services/areas/queens', title: 'Queens car service', body: 'Both JFK and LaGuardia are in Queens.' },
  { href: '/services/areas/manhattan', title: 'Manhattan car service', body: 'Which airport is easiest from your side of the island.' },
  { href: '/services/areas/brooklyn', title: 'Brooklyn car service', body: 'JFK is the closest airport for most of Brooklyn.' },
  { href: '/services/areas/long-island', title: 'Long Island car service', body: 'Nassau and Suffolk to JFK and LaGuardia.' },
];

export default function AirportHubPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="NYC Airport Car Service"
        description={description}
        url={`${site}${path}`}
        serviceType="Airport transfer"
        areaServed={[
          { type: 'Airport', name: AIRPORTS.JFK.name, sameAs: 'https://www.wikidata.org/wiki/Q8685' },
          { type: 'Airport', name: AIRPORTS.LGA.name, sameAs: 'https://www.wikidata.org/wiki/Q8977' },
          { type: 'Airport', name: AIRPORTS.EWR.name, sameAs: 'https://www.wikidata.org/wiki/Q16564' },
          { type: 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#airports-title', '#airports-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Airports' }]}
        eyebrow="JFK · LaGuardia · Newark"
        idPrefix="airports"
        h1="NYC Airport Car Service"
        answer={`${SITE_NAME} drives to and from all three New York airports. LaGuardia is the closest to Midtown, JFK has the most long-haul flights, and Newark is United’s hub and the natural choice from New Jersey. Compare them below, then book the one your flight uses.`}
        ctaHref="/book?service=airport"
        ctaLabel="Get my airport price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* At a glance */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="glance-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="glance-heading"
            eyebrow="Compare"
            title="JFK vs LaGuardia vs Newark at a glance"
            intro="Drive times are typical door-to-door times by car from Midtown Manhattan."
          />
          <TextTable caption="JFK, LaGuardia and Newark compared" head={['', 'JFK', 'LaGuardia', 'Newark']} rows={glance} />
          <p className="mt-6 text-sm text-brand-muted">
            Full tables for each airport:{' '}
            <Link href="/services/airport/jfk" className="font-semibold text-brand-accent hover:underline">JFK</Link>,{' '}
            <Link href="/services/airport/lga" className="font-semibold text-brand-accent hover:underline">LaGuardia</Link> and{' '}
            <Link href="/services/airport/ewr" className="font-semibold text-brand-accent hover:underline">Newark</Link>.
          </p>
        </div>
      </section>

      {/* Closest */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="closest-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="closest-heading"
            eyebrow="Choosing an airport"
            title="Which NYC airport is closest to you?"
            intro="If you have a choice of flights, the airport nearest your door usually saves more time than a shorter flight does."
          />
          <InfoCards items={closest} tone="tint" />
        </div>
      </section>

      {/* Terminal finder */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="terminal-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="terminal-heading"
            eyebrow="Terminals"
            title="Find your terminal at JFK, LaGuardia or Newark"
            intro="Pick the airport and your airline. Several airlines are changing terminals at JFK through 2027 — we flag those."
          />
          <div className="max-w-2xl">
            <TerminalFinder initialAirport="JFK" />
          </div>
        </div>
      </section>

      {/* Between airports */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="between-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="between-heading"
            eyebrow="Connections"
            title="Car service between JFK, LaGuardia and Newark"
            intro="Landing at one airport and flying out of another? Allow for the drive, check-in and security at the second airport — a same-day connection needs a generous gap."
          />
          <TextTable caption="Drive times between New York airports" head={['Transfer', 'Distance', 'Off-peak', 'Rush hour']} rows={between} />
        </div>
      </section>

      {/* Beyond NYC */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="beyond-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="beyond-heading"
            eyebrow="Beyond the city"
            title="Airport car service from New Jersey, Connecticut and Philadelphia"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg text-brand-ink">New Jersey</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Newark is minutes from Jersey City and Hoboken, and under an hour from Morristown and Princeton. We also drive
                New Jersey travelers to JFK and LaGuardia.{' '}
                <Link href="/services/areas/new-jersey" className="font-semibold text-brand-accent hover:underline">New Jersey car service</Link>
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Connecticut</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                From Greenwich, Stamford and the shoreline, LaGuardia is usually the nearest NYC airport, with JFK close
                behind for international flights.{' '}
                <Link href="/services/areas/connecticut" className="font-semibold text-brand-accent hover:underline">Connecticut car service</Link>
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Philadelphia</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Some international routes are only offered from New York. Newark is about an hour and a half from Center City
                outside rush hour.{' '}
                <Link href="/services/routes/nyc-to-philadelphia" className="font-semibold text-brand-accent hover:underline">NYC to Philadelphia</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Included + how to book */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="how-heading" eyebrow="How it works" title="How to book an airport car" />
          <StepsList steps={steps} />
          <div className="mt-12">
            <InfoCards items={included} tone="tint" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="NYC airport car service FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-tint py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Airport pages and routes" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
