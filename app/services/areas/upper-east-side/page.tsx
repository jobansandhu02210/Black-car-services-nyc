import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Upper East Side Black Car Service NYC',
  description:
    'Black car on the Upper East Side — residential building pickups, JFK/LGA transfers, Museum Mile events, hourly hire. Flat rates, TLC-licensed. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/upper-east-side` },
  openGraph: {
    ...ogDefaults,
    title: 'Upper East Side Black Car Service NYC | Eagle Eye',
    description: 'Luxury black car service on the Upper East Side. Residential building pickups, JFK/LGA airport transfers, Museum Mile events, and hourly hire.',
    url: `${getSiteUrl()}/services/areas/upper-east-side`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you pick up from Upper East Side residential buildings?',
    a: 'Yes. Residential building pickup is our most common UES request. We serve pre-war co-ops on Park Avenue and Fifth Avenue, doorman buildings in Lenox Hill, and all residential addresses throughout Carnegie Hill, Yorkville, and the broader Upper East Side. Your chauffeur arrives at the building entrance and coordinates with your doorman when needed.',
  },
  {
    q: 'How long does a black car take from the Upper East Side to JFK?',
    a: 'From the Upper East Side to JFK is typically 40–60 minutes depending on traffic and time of day. To LGA, expect 20–35 minutes. To EWR via the Midtown Tunnel and New Jersey Turnpike, plan for 50–70 minutes. All rates are flat and confirmed at booking — traffic delays never change your price.',
  },
  {
    q: 'Can I book a black car for school runs or after-school events on the Upper East Side?',
    a: 'Yes. We provide school-run transport for Upper East Side families — pickups from Brearley, Chapin, Spence, and other UES schools, as well as after-school activity transport and event-night rides. Many UES families use our hourly hire service to cover multiple children&apos;s schedules in a single booking with one dedicated chauffeur.',
  },
  {
    q: 'Is hourly black car hire available for Upper East Side residents?',
    a: 'Absolutely. Hourly hire is well-suited to UES residents with multiple appointments — Fifth Avenue shopping, Museum Mile visits, doctor appointments on Park Avenue, and Midtown lunches all covered with one chauffeur for the day. Your driver stays with you throughout the booking period without re-booking between stops.',
  },
  {
    q: 'Do you cover Museum Mile, Lenox Hill, and the surrounding UES neighborhoods?',
    a: 'Yes. Our Upper East Side service covers the full neighborhood — from 59th Street at the southern edge to 96th Street in Carnegie Hill, and from Fifth Avenue at Central Park east to the FDR Drive. That includes Museum Mile, Lenox Hill Hospital, Yorkville, and all the residential cross-streets in between.',
  },
  {
    q: 'Can I get a black car from the Upper East Side to the Hamptons or Connecticut?',
    a: 'Yes. UES-to-Hamptons and UES-to-Connecticut runs are popular on Friday afternoons and holiday weekends. Your flat rate is confirmed at booking and never changes regardless of traffic. We recommend booking at least 24 hours in advance for Hamptons and Connecticut transfers, especially during peak summer season.',
  },
  {
    q: 'Do you pick up from the Carlyle Hotel on the Upper East Side?',
    a: 'Yes. The Carlyle at 35 East 76th Street is a regular Eagle Eye pickup point. Your chauffeur coordinates with the hotel&apos;s front desk and stages in the motor court area on 76th Street for a clean, unhurried departure. The same applies to The Mark at 77th and Madison and all other Upper East Side hotel properties.',
  },
  {
    q: 'How long does it take to get from the Upper East Side to JFK on a weekday morning?',
    a: 'On a typical weekday morning between 7–9 a.m., expect 40–55 minutes from the Upper East Side to JFK. The Queens-Midtown Tunnel and Grand Central Parkway approach tend to move well in the outbound direction at that hour. We recommend allowing 2.5 hours before your departure time for domestic flights and 3 hours for international — your flat rate is confirmed at booking regardless of how traffic develops.',
  },
  {
    q: 'How far is the Upper East Side from the NYC airports?',
    a: 'From the Upper East Side, LaGuardia (LGA) is the closest airport at about 7 miles (20–40 minutes via the RFK/Triborough Bridge). JFK is about 15 miles (40–60 minutes) and Newark (EWR) about 14 miles (35–55 minutes). LaGuardia is usually the quickest option from the UES.',
  },
  {
    q: 'How much does a car service from the Upper East Side to the airport cost?',
    a: 'Airport transfers from the Upper East Side are a flat rate confirmed at booking, with all tolls included and no surge regardless of traffic. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Doorman building coordination',
    desc: 'We coordinate directly with your building doorman for seamless lobby pickups on Park Avenue, Fifth Avenue, and throughout the UES.',
  },
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Upper East Side rate is locked the moment you book — no surge for weekday rush hours or Museum Mile event nights.',
  },
  {
    title: 'Family and school transport',
    desc: 'School runs, after-school activities, and family event transport handled with the same professional standard as every other Eagle Eye booking.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is licensed, background-checked, and trained to the white-glove standard that Upper East Side residents expect.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model business-class vehicles — always clean, always the class you booked. Well-suited to UES co-op entrances and hotel lobbies alike.',
  },
  {
    title: 'Hourly hire for full-day coverage',
    desc: 'Keep your chauffeur through a full UES day — Fifth Avenue shopping, Park Avenue appointments, and onward to evening events without re-booking.',
  },
];

export default function UpperEastSidePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Upper East Side', url: `${getSiteUrl()}/services/areas/upper-east-side` },
        ]}
      />
      <ServiceJsonLd
        name="Upper East Side Black Car Service"
        description="Luxury black car and chauffeur service on the Upper East Side, Manhattan. Residential building pickups from Park and Fifth Avenues, airport transfers to JFK and LGA, school and event transport, and hourly hire throughout UES, Lenox Hill, Carnegie Hill, and Yorkville."
        areaServed="Upper East Side, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/upper-east-side`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Upper East Side Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Professional chauffeur service throughout the Upper East Side — from Park Avenue
            co-ops and Fifth Avenue residences to Lenox Hill hospital visits, Museum Mile events,
            and airport transfers to JFK and LGA. Flat-rate pricing, no surge, and a TLC-licensed
            chauffeur at your UES door around the clock.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Upper East Side</div>
              <div className="text-brand-silver text-sm mt-1">59th to 96th Street</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Luxury Residences</div>
              <div className="text-brand-silver text-sm mt-1">Park Ave, Fifth Ave &amp; beyond</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Early mornings &amp; late nights</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">TLC Licensed</div>
              <div className="text-brand-silver text-sm mt-1">Professional &amp; insured</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Now — Flat Rate
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Upper East Side Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Every service UES residents and visitors need — from airport runs to school pickups,
            Museum Mile outings to Hamptons weekends.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Upper East Side address.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Dedicated chauffeur for full-day UES appointments, shopping, and errands.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                UES to Midtown and beyond — corporate accounts and monthly invoicing available.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Upper East Side address to any destination — flat rate confirmed at booking.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Museum galas, Park Avenue dinners, charity events — luxury arrival and departure.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Family & School Transport</div>
              <div className="text-sm text-brand-grey">
                School runs and after-school activities throughout UES private schools.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Upper East Side Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            UES residents expect a car service that meets them at the lobby, respects their time,
            and never delivers a surprise on the bill. Here&apos;s how Eagle Eye delivers that.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eaglEyeBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-brand-offwhite border border-brand-light p-6">
                <div className="font-semibold text-brand-black mb-2">{benefit.title}</div>
                <div className="text-sm text-brand-grey leading-relaxed">{benefit.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Neighborhoods ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Upper East Side Locations & Areas We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our UES service covers every block from 59th to 96th Street and from Central Park
            east to the river — including Museum Mile, Lenox Hill, Carnegie Hill, and Yorkville.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Park Avenue (UES)',
              'Fifth Avenue (UES)',
              'Madison Avenue (UES)',
              'Museum Mile',
              'Central Park East',
              'Lenox Hill',
              'Yorkville',
              'Carnegie Hill',
              'Metropolitan Museum',
              'Guggenheim Museum',
              '72nd Street Corridor',
              '86th Street Corridor',
              'East End Avenue',
              'Sutton Place',
              'Gracie Mansion Area',
              'Upper East Side Schools',
            ].map((n) => (
              <div
                key={n}
                className="bg-brand-white border border-brand-light px-4 py-3 text-sm text-brand-black"
              >
                <span className="text-brand-charcoal mr-2">✓</span>
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pickup Guide ── */}
      <section className="bg-brand-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
            Upper East Side Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-black mb-2">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">The Upper East Side&apos;s residential streets run one-way east–west between Park, Madison, and Fifth Avenues, with Park and Fifth carrying most of the north–south traffic. Your chauffeur will confirm which entrance to use for your building — most pre-war co-ops on Park Avenue have a service lane alongside the building, while Fifth Avenue residences overlook the park with limited stopping. For hotel pickups at The Carlyle on 76th Street or The Mark on 77th, drivers use the hotel motor court. We coordinate with building doormen in advance so your car is staged by the time you step out.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-2">Notable pickup points</h3>
              <ul className="space-y-1">
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>The Carlyle Hotel — 76th St &amp; Madison Ave</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>The Mark Hotel — 77th St &amp; Madison Ave</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Metropolitan Museum of Art — Fifth Ave &amp; 82nd St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Lenox Hill Hospital — 77th St &amp; Park Ave</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Park Avenue co-ops — 70th to 90th St corridor</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Guggenheim Museum — Fifth Ave &amp; 89th St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>East 86th Street corridor — major cross-street hub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Routes ── */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Common Routes from the Upper East Side</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white">
                  <th className="text-left p-4 font-medium">Route</th>
                  <th className="text-left p-4 font-medium">Est. Drive Time</th>
                  <th className="text-left p-4 font-medium">Service</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Upper East Side to JFK Airport</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Upper East Side to LaGuardia (LGA)</td>
                  <td className="p-4 text-brand-grey">20–28 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Upper East Side to Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">50–65 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Upper East Side to Westchester</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Out-of-Town Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Upper East Side to the Hamptons</td>
                  <td className="p-4 text-brand-grey">2–2.5 hr</td>
                  <td className="p-4 text-brand-grey">Out-of-Town Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Upper East Side to Midtown Manhattan</td>
                  <td className="p-4 text-brand-grey">15–25 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black">Upper East Side to JFK via Midtown Tunnel</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-brand-grey text-xs mt-3">Times are estimates in normal traffic. Flat rate confirmed at booking.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Upper East Side Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from UES residents and visitors booking luxury black car service.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Upper East Side Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your UES door —
            Park Avenue lobby to airport, or anywhere in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-10 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-10 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Prefer to call?{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
            {' '}·{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
