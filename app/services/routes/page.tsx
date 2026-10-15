import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';
import { WHATSAPP_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'NYC Black Car Routes | Airport & City Transfers',
  description:
    'All Eagle Eye Chauffeur routes — JFK, LGA, EWR airport transfers, borough-to-borough rides, Westchester, Hamptons, Long Island. Flat rates, TLC.',
  alternates: { canonical: `${getSiteUrl()}/services/routes` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes` },
};

const airportRoutes = [
  {
    name: 'JFK to Manhattan',
    description: 'JFK arrivals meet & greet, flat rate, flight tracking',
    href: '/services/routes/jfk-to-manhattan-black-car-service',
  },
  {
    name: 'Manhattan to JFK',
    description: 'Door-to-terminal, all neighborhoods, on-time guaranteed',
    href: '/services/routes/manhattan-to-jfk-black-car-service',
  },
  {
    name: 'LGA to Manhattan',
    description: 'LaGuardia arrivals, fastest route to Midtown',
    href: '/services/routes/lga-to-manhattan-black-car-service',
  },
  {
    name: 'Manhattan to LGA',
    description: 'Hotel & office pickup, all LGA terminals',
    href: '/services/routes/manhattan-to-lga-black-car-service',
  },
  {
    name: 'EWR to Manhattan',
    description: 'Newark Airport arrivals, direct to NYC, flat rate',
    href: '/services/routes/ewr-to-manhattan-black-car-service',
  },
  {
    name: 'Manhattan to EWR',
    description: 'Departures to Newark Airport, no surge pricing',
    href: '/services/routes/manhattan-to-ewr-black-car-service',
  },
  {
    name: 'Brooklyn to JFK',
    description: 'Direct via Belt Parkway, all Brooklyn neighborhoods',
    href: '/services/routes/brooklyn-to-jfk-black-car-service',
  },
  {
    name: 'Queens to JFK',
    description: 'Close-in Queens transfer, flat rate, no detours',
    href: '/services/routes/queens-to-jfk-black-car-service',
  },
  {
    name: 'Queens to LGA',
    description: 'Queens neighborhoods to LaGuardia, fast and direct',
    href: '/services/routes/queens-to-lga-black-car-service',
  },
  {
    name: 'Bronx to JFK',
    description: 'Bronx door pickup to JFK, flat rate, on-time',
    href: '/services/routes/bronx-to-jfk-black-car-service',
  },
  {
    name: 'Staten Island to JFK',
    description: 'Via Verrazano, direct and comfortable',
    href: '/services/routes/staten-island-to-jfk-black-car-service',
  },
  {
    name: 'Midtown to JFK',
    description: 'Hotel, office & corporate departure service',
    href: '/services/routes/midtown-to-jfk-black-car-service',
  },
  {
    name: 'Upper East Side to JFK',
    description: 'Residential & luxury building pickup to JFK',
    href: '/services/routes/upper-east-side-to-jfk-black-car-service',
  },
  {
    name: 'JFK to Brooklyn',
    description: 'Arrivals direct to all Brooklyn destinations',
    href: '/services/routes/jfk-to-brooklyn',
  },
  {
    name: 'JFK to Queens',
    description: 'JFK arrivals to Queens neighborhoods, flat rate',
    href: '/services/routes/jfk-to-queens-black-car-service',
  },
  {
    name: 'JFK to Westchester',
    description: 'JFK to White Plains, Scarsdale, and beyond',
    href: '/services/routes/jfk-to-westchester-car-service',
  },
  {
    name: 'JFK to Long Island',
    description: 'Nassau & Suffolk County from JFK, flat rate',
    href: '/services/routes/jfk-to-long-island-car-service',
  },
  {
    name: 'LGA to Brooklyn',
    description: 'LaGuardia arrivals to Brooklyn, no surge pricing',
    href: '/services/routes/lga-to-brooklyn-black-car-service',
  },
  {
    name: 'EWR to Brooklyn',
    description: 'Newark Airport to Brooklyn, direct and comfortable',
    href: '/services/routes/ewr-to-brooklyn-black-car-service',
  },
  {
    name: 'LGA to Queens',
    description: 'LaGuardia arrivals to all Queens neighborhoods',
    href: '/services/routes/lga-to-queens-black-car-service',
  },
  {
    name: 'JFK to Midtown Manhattan',
    description: 'Times Square, Park Ave, Grand Central — flat rate',
    href: '/services/routes/jfk-to-midtown-manhattan-black-car-service',
  },
  {
    name: 'JFK to Upper East Side',
    description: 'Park Ave, 5th Ave, Carnegie Hill from JFK arrivals',
    href: '/services/routes/jfk-to-upper-east-side-car-service',
  },
  {
    name: 'EWR to Long Island',
    description: 'Newark to Nassau & Suffolk County, all tolls included',
    href: '/services/routes/ewr-to-long-island-car-service',
  },
  {
    name: 'LGA to Long Island',
    description: 'LaGuardia to Nassau & Suffolk County, direct flat rate',
    href: '/services/routes/lga-to-long-island-car-service',
  },
  {
    name: 'LGA to Westchester',
    description: 'LaGuardia to White Plains, Scarsdale, Rye, and beyond',
    href: '/services/routes/lga-to-westchester-car-service',
  },
  {
    name: 'EWR to Queens',
    description: 'Newark Airport to Astoria, Flushing, Jamaica — tolls included',
    href: '/services/routes/ewr-to-queens-car-service',
  },
  {
    name: 'Wall Street to JFK',
    description: 'FiDi & downtown offices to JFK — early departures, flat rate',
    href: '/services/routes/wall-street-to-jfk-car-service',
  },
  {
    name: 'Park Avenue to JFK',
    description: 'Midtown corporate & residential Park Ave pickups to JFK',
    href: '/services/routes/park-avenue-to-jfk-car-service',
  },
  {
    name: 'Midtown to LGA',
    description: 'Hotel & office pickups across Midtown to LaGuardia',
    href: '/services/routes/midtown-to-lga-black-car-service',
  },
  {
    name: 'Midtown to EWR',
    description: 'Midtown to Newark Airport via Lincoln Tunnel, tolls included',
    href: '/services/routes/midtown-to-ewr-black-car-service',
  },
];

const cityRoutes = [
  {
    name: 'Manhattan to Brooklyn',
    description: 'Borough-to-borough black car, anytime, flat rate',
    href: '/services/routes/manhattan-to-brooklyn',
  },
  {
    name: 'Brooklyn to Manhattan',
    description: 'All Brooklyn zip codes to Manhattan, on demand',
    href: '/services/routes/brooklyn-to-manhattan-black-car-service',
  },
  {
    name: 'Bronx to Manhattan',
    description: 'Riverdale, Fordham, Grand Concourse to Midtown — flat rate',
    href: '/services/routes/bronx-to-manhattan-black-car-service',
  },
  {
    name: 'Queens to Manhattan',
    description: 'Astoria, LIC, Flushing, Forest Hills — direct to Midtown',
    href: '/services/routes/queens-to-manhattan-black-car-service',
  },
  {
    name: 'Staten Island to Manhattan',
    description: 'Residential and corporate rides to Manhattan',
    href: '/services/routes/staten-island-to-manhattan-black-car-service',
  },
  {
    name: 'NYC to Westchester',
    description: 'Manhattan and boroughs to Westchester County',
    href: '/services/routes/nyc-to-westchester-car-service',
  },
  {
    name: 'Manhattan to Hamptons',
    description: 'Luxury transfers to the Hamptons, East End Long Island',
    href: '/services/routes/manhattan-to-hamptons-car-service',
  },
  {
    name: 'Manhattan to Connecticut',
    description: 'Greenwich, Stamford, Westport — all CT tolls included',
    href: '/services/routes/manhattan-to-connecticut-car-service',
  },
  {
    name: 'JFK to Long Island',
    description: 'Nassau & Suffolk County from JFK, direct door-to-door',
    href: '/services/routes/jfk-to-long-island-car-service',
  },
];

const trustPoints = [
  {
    heading: 'Flat rates confirmed at booking',
    body: 'Your price is locked in before the car rolls. No surge, no meter, no surprises.',
  },
  {
    heading: 'TLC licensed & insured',
    body: 'Every driver holds a New York TLC license. Fully insured, commercially registered.',
  },
  {
    heading: 'Flight tracking on all airport routes',
    body: 'We monitor your flight live and adjust pickup automatically — no extra charge for delays.',
  },
  {
    heading: '24/7 availability',
    body: 'Early morning departures, late-night arrivals, and everything in between.',
  },
];

export default function RoutesIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-4">
            Eagle Eye Chauffeur — All Routes
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-6">
            Black Car Service Routes — NYC &amp; Tri-State
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl">
            Eagle Eye Chauffeur serves all five NYC boroughs, three major airports, Westchester,
            the Hamptons, and Long Island. Every route is flat-rate, TLC licensed, and available
            around the clock. Browse by route below or book directly.
          </p>
        </div>
      </section>

      {/* Airport Routes */}
      <section className="bg-brand-offwhite py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
              Airport Transfer Routes
            </h2>
            <p className="text-brand-grey text-lg">
              From/to JFK, LGA, EWR, and HPN — flat-rate, flight tracking included.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {airportRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="group bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-brand-black group-hover:text-brand-charcoal transition-colors">
                    {route.name}
                  </span>
                  <span className="text-brand-grey mt-0.5 shrink-0 text-lg leading-none">→</span>
                </div>
                <p className="text-sm text-brand-grey mt-2">{route.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City & Long-Distance Routes */}
      <section className="bg-brand-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
              City &amp; Long-Distance Routes
            </h2>
            <p className="text-brand-grey text-lg">
              Borough-to-borough, NYC to Westchester, and luxury transfers to the Hamptons.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="group bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-brand-black group-hover:text-brand-charcoal transition-colors">
                    {route.name}
                  </span>
                  <span className="text-brand-grey mt-0.5 shrink-0 text-lg leading-none">→</span>
                </div>
                <p className="text-sm text-brand-grey mt-2">{route.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8 text-center">
            Why Every Route Is Handled the Same Way
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {trustPoints.map((point) => (
              <div key={point.heading} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{point.heading}</h3>
                <p className="text-sm text-brand-grey">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Distance Routes */}
      <section className="bg-brand-offwhite py-12 border-t border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl font-semibold text-brand-black mb-6">Long-Distance & Special Routes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/services/routes/nyc-to-boston', title: 'NYC to Boston Car Service' },
              { href: '/services/routes/nyc-to-philadelphia', title: 'NYC to Philadelphia Car Service' },
              { href: '/services/routes/nyc-to-washington-dc', title: 'NYC to Washington DC Car Service' },
              { href: '/services/routes/nyc-to-princeton-nj-car-service', title: 'NYC to Princeton, NJ' },
              { href: '/services/routes/manhattan-to-teterboro-black-car-service', title: 'Manhattan to Teterboro (TEB)' },
              { href: '/services/routes/teterboro-to-manhattan-black-car-service', title: 'Teterboro to Manhattan' },
              { href: '/services/routes/teterboro-to-new-jersey-car-service', title: 'Teterboro to New Jersey' },
              { href: '/services/routes/brooklyn-to-teterboro-car-service', title: 'Brooklyn to Teterboro (TEB)' },
              { href: '/services/routes/queens-bronx-to-teterboro-car-service', title: 'Queens & Bronx to Teterboro' },
              { href: '/services/routes/long-island-to-teterboro-car-service', title: 'Long Island to Teterboro' },
              { href: '/services/routes/connecticut-to-teterboro-car-service', title: 'Connecticut to Teterboro' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group bg-brand-white border border-brand-light hover:border-brand-black transition-colors p-4 text-sm font-medium text-brand-black">
                {l.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-brand-white py-12 border-t border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl font-semibold text-brand-black mb-6">Route Guides & Articles</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: '/blog/hamptons-car-service-from-nyc-best-way', title: 'NYC to Hamptons: Best Way Guide' },
              { href: '/blog/nyc-to-connecticut-car-service-greenwich-stamford', title: 'NYC to Connecticut Car Service Guide' },
              { href: '/blog/black-car-vs-rental-car-nyc', title: 'Black Car vs Rental Car NYC' },
              { href: '/blog/how-to-get-from-manhattan-to-westchester', title: 'Manhattan to Westchester Guide' },
              { href: '/blog/nyc-to-montauk-car-service-guide', title: 'NYC to Montauk Car Service Guide' },
              { href: '/blog/summer-hamptons-nyc-transportation-guide-2026', title: 'Summer 2026 Hamptons Transport Guide' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group bg-brand-offwhite border border-brand-light hover:border-brand-black transition-colors p-4 text-sm font-medium text-brand-black">
                {l.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-brand-white mb-4">
            Ready to Book Your Route?
          </h2>
          <p className="text-brand-silver mb-8">
            All routes, flat rates. Book online or reach us on WhatsApp — 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <Link
              href={WHATSAPP_URL}
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
