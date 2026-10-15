import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Flatiron District Black Car Service NYC',
  description:
    'Black car in Flatiron and NoMad — MSG events, tech corporate accounts, JFK & LGA airport runs, hourly hire. Flat rates, no surge. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/flatiron` },
  openGraph: {
    ...ogDefaults,
    title: 'Flatiron District Black Car Service NYC | Eagle Eye',
    description: 'Luxury black car in Flatiron, NoMad, and Union Square. MSG event transport, tech corporate accounts, JFK & LGA airport runs, and hourly hire. Flat.',
    url: `${getSiteUrl()}/services/areas/flatiron`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Can I get a black car to or from Madison Square Garden events?',
    a: "Yes. Madison Square Garden sits at the western edge of the Flatiron corridor and is one of our most active event transfer locations. Whether you&apos;re attending a Knicks game, a major concert, or a boxing card, we provide pre-arranged pickups that ensure you&apos;re not competing with tens of thousands of other people for a surge-priced ride when the event lets out. Pre-booking a return pickup is essential for MSG events — your chauffeur is confirmed at the agreed meet point before you leave the arena.",
  },
  {
    q: 'Do you offer corporate accounts for Flatiron tech companies?',
    a: "Yes. The Flatiron District has become one of New York&apos;s premier technology and startup hubs — with companies concentrated along Broadway from 14th to 26th Street and throughout the surrounding blocks. We work with tech firms, media companies, and their executives to provide recurring corporate accounts, monthly invoicing, and multi-rider coordination. Whether it&apos;s daily executive airport runs or investor meeting transfers, we manage the logistics so your team focuses on business.",
  },
  {
    q: 'How do I get a black car from the Flatiron District to JFK or LGA?',
    a: "Book through our website or WhatsApp with your Flatiron or NoMad address, your airport terminal, and departure time. Your flat rate is confirmed immediately. From the Flatiron area, typical travel time to JFK is 40–50 minutes and to LaGuardia 25–40 minutes depending on time of day and Midtown Tunnel traffic. For early-morning departures, your chauffeur is confirmed the night before — no last-minute scrambles.",
  },
  {
    q: 'Is hourly black car hire available in the Flatiron and NoMad area?',
    a: "Yes. Hourly hire is particularly practical in the Flatiron-NoMad corridor where a busy day might include a Union Square meeting, a Madison Square Park client lunch, a Gramercy office visit, and an evening event near Chelsea. Book hourly and your chauffeur stays with you for the full period — waiting at each stop, no re-booking, no gap in coverage between appointments.",
  },
  {
    q: 'Do you serve Union Square and Gramercy from the Flatiron area?',
    a: "Yes. Our Flatiron service area extends seamlessly into Union Square to the south and Gramercy Park to the east. If your day involves a Flatiron morning meeting, a Union Square lunch, and a Gramercy evening dinner, we handle the full sequence as a single booking with one dedicated chauffeur who knows the neighborhood geography and can position efficiently between each location.",
  },
  {
    q: 'Can you handle event transfers for private parties and corporate events at Flatiron venues?',
    a: "Absolutely. The Flatiron District and NoMad are home to numerous event spaces, rooftop venues, and private dining rooms — from the Dream Hotel to 1 Hotel Brooklyn Bridge-adjacent event spaces. We coordinate both inbound guest arrivals and post-event departures, including multi-vehicle group transfers when large parties need to disperse to different Manhattan destinations or airports.",
  },
  {
    q: 'How far is the Flatiron District from the NYC airports?',
    a: 'From the Flatiron District in Manhattan, LaGuardia (LGA) is about 9 miles (25–45 minutes), Newark (EWR) about 11 miles (25–45 minutes via the tunnels), and JFK about 14 miles (40–60 minutes). LaGuardia is usually the quickest airport from Flatiron.',
  },
  {
    q: 'How much does a car service from the Flatiron District to the airport cost?',
    a: 'Airport transfers from the Flatiron District are a flat rate confirmed at booking, with all tolls included and no surge regardless of traffic. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'MSG and event district expertise',
    desc: "Madison Square Garden events move thousands of people at once. Eagle Eye clients skip the surge and leave on time — chauffeur confirmed before the final buzzer.",
  },
  {
    title: 'Tech sector corporate accounts',
    desc: "Flatiron&apos;s tech and media firms benefit from recurring corporate accounts — monthly invoicing, multi-rider coordination, and dedicated account management.",
  },
  {
    title: 'Flat rate locked at booking',
    desc: "Your Flatiron or NoMad rate is confirmed at booking and never changes regardless of event traffic, Union Square market congestion, or peak commute hours.",
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is fully TLC-licensed, background-checked, and trained to the professional standard Flatiron corporate and creative clients expect.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model business-class vehicles kept to exacting standards — the right first impression when arriving at a client meeting or investor dinner.',
  },
  {
    title: 'Full Flatiron corridor coverage',
    desc: 'Flatiron, NoMad, Union Square, Gramercy, Chelsea, and Madison Square Park — complete coverage of the neighborhood and its surrounding commercial district.',
  },
];

export default function FlatironPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Flatiron District', url: `${getSiteUrl()}/services/areas/flatiron` },
        ]}
      />
      <ServiceJsonLd
        name="Flatiron District Black Car Service"
        description="Luxury black car and chauffeur service in the Flatiron District, NoMad, and Union Square, New York City. Madison Square Garden event transport, tech company corporate accounts, JFK and LGA airport transfers, Gramercy and Chelsea coverage, and hourly hire throughout the Flatiron corridor."
        areaServed="Flatiron District, NoMad, Union Square, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/flatiron`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Flatiron District Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Luxury chauffeur service in the Flatiron District, NoMad, and Union Square — from tech
            company corporate accounts and Madison Square Garden event transport to flat-rate JFK
            and LGA airport transfers and hourly hire throughout the corridor. No surge pricing.
            TLC-licensed. Available 24/7.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flatiron</div>
              <div className="text-brand-silver text-sm mt-1">Full district coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">NoMad &amp; Union Square</div>
              <div className="text-brand-silver text-sm mt-1">14th to 26th &amp; beyond</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Tech hours to event nights</div>
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
            Flatiron District Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From Madison Square Garden event transfers and tech company corporate accounts to early
            airport runs and NoMad hourly hire — every Flatiron transportation need covered.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Flatiron, NoMad, or Union Square address.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Multi-meeting Flatiron days, investor roadshows, and Gramercy evenings — chauffeur on standby.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                Tech and media corporate accounts, monthly invoicing, and multi-rider coordination.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Flatiron address to Midtown, downtown, or beyond — flat rate confirmed at booking.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                MSG concerts and games, NoMad galas, and Flatiron venue events — luxury arrivals and departures.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Out-of-Town Transfers</div>
              <div className="text-sm text-brand-grey">
                Flatiron to the Hamptons, Connecticut, Westchester, or anywhere in the tri-state area.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Flatiron Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Flatiron District&apos;s mix of tech startups, corporate offices, event venues, and
            residential buildings requires a car service that operates at both executive and
            event-night speed — with pricing that never changes on the basis of demand.
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
            Flatiron &amp; Surrounding Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our Flatiron service area covers the full neighborhood and connects into Union Square,
            NoMad, Gramercy, Chelsea, and Madison Square Garden with equal ease.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Flatiron Building Area',
              'Madison Square Park',
              'Union Square',
              'NoMad',
              'Gramercy',
              'Chelsea (Adjacent)',
              'Madison Square Garden',
              'Fifth Avenue Corridor',
              'Broadway (14th–26th)',
              'Park Avenue South',
              'Lexington Avenue',
              'West 23rd Street',
              'West 14th Street',
              'Irving Place',
              'Stuyvesant Square',
              'Nomad Hotel Area',
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

      {/* ── Routes Table ── */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from Flatiron</h2>
          <p className="text-brand-grey text-sm mb-6">Estimated drive times in normal traffic — flat rate confirmed at booking.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white">
                  <th className="text-left p-4 font-medium">Destination</th>
                  <th className="text-left p-4 font-medium">Est. Drive Time</th>
                  <th className="text-left p-4 font-medium">Service</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">JFK Airport</td>
                  <td className="p-4 text-brand-grey">40–55 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">LaGuardia Airport (LGA)</td>
                  <td className="p-4 text-brand-grey">30–40 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">30–45 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Teterboro Airport (TEB)</td>
                  <td className="p-4 text-brand-grey">30–45 min</td>
                  <td className="p-4 text-brand-grey">Private Aviation</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Midtown Manhattan</td>
                  <td className="p-4 text-brand-grey">10–20 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black">The Hamptons</td>
                  <td className="p-4 text-brand-grey">2–2.5 hrs</td>
                  <td className="p-4 text-brand-grey">Long Distance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Pickup Guide ── */}
      <section className="bg-brand-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Flatiron Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-brand-black mb-3">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">The Flatiron District sits at the convergence of Broadway, Fifth Avenue, and Sixth Avenue — all of which see heavy traffic during commute hours and around Madison Square Garden events. Broadway between 14th and 26th Street has loading zones alongside office buildings; Fifth Avenue and Park Avenue South are the cleanest staging corridors for a timed pickup. Your chauffeur will confirm a precise avenue and cross-street by text and hold the position until you arrive — never double-parked, always accessible. For MSG event pickups, your chauffeur stages on Sixth Avenue south of 32nd Street or on 29th Street between Sixth and Seventh, avoiding the post-event pedestrian surge on 33rd and Seventh Avenue. For NoMad hotel pickups, drivers use the Nomad Hotel&apos;s designated loading area on Broadway.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-3">Key pickup locations</h3>
              <ul className="space-y-2">
                {[
                  'Flatiron Building — 23rd St & Fifth Ave',
                  'Madison Square Park — 23rd St & Madison Ave',
                  'NoMad Hotel — Broadway & 28th St',
                  'Union Square — 14th St & Park Ave South',
                  'Madison Square Garden — 7th Ave & 33rd St',
                  'Park Avenue South corridor — 18th to 26th St',
                  'Irving Place & Gramercy border — 20th St',
                ].map(loc => (
                  <li key={loc} className="text-sm text-brand-grey flex gap-2">
                    <span className="text-brand-charcoal">→</span>{loc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Flatiron District Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Flatiron tech professionals, NoMad residents, Madison Square Garden
            event guests, and Union Square visitors.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Flatiron District Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your Flatiron, NoMad, or Union
            Square door — tech corporate runs, MSG events, airport transfers, and everything
            in between.
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
