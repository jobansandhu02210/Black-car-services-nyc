import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Park Avenue to JFK Car Service | Midtown East Car',
  description:
    'Park Avenue to JFK black car service — flat rate from Midtown East, Grand Central area & Park Ave corridor. Door-to-door executive chauffeur. Eagle.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/park-avenue-to-jfk-car-service`,
  },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/routes/park-avenue-to-jfk-car-service`,
    title: 'Park Avenue to JFK Car Service | Midtown East Car | Eagle Eye',
    description: 'Flat-rate black car service from Park Avenue and Midtown East to JFK Airport. Door-to-door, no surge pricing, executive chauffeur 24/7. Eagle Eye.',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Park Avenue to JFK?',
    a: 'From Park Avenue in Midtown East, the drive to JFK Airport typically takes 40–55 minutes in normal traffic via the Queens-Midtown Tunnel or Queensboro Bridge and the Van Wyck Expressway. From Park Ave & 59th Street (upper stretch), allow 45–60 minutes. During rush hour (7–9 AM, 4–7 PM), add 20–30 minutes. We monitor traffic in real time and select the best route at the time of your pickup.',
  },
  {
    q: 'Is there a flat rate from the Grand Central area to JFK?',
    a: 'Yes. All Eagle Eye Chauffeur fares are flat rates confirmed at booking — not metered, not surge-priced. The price you lock in when you reserve is exactly what you pay, regardless of traffic conditions, time of day, or demand. Many of our Midtown East clients value this for corporate expense predictability.',
  },
  {
    q: 'Do you pick up from Park Avenue hotels?',
    a: 'Absolutely. We provide direct hotel-entrance pickup from the Waldorf Astoria, The Baccarat, The Lowell, The Kimberly, The New York Palace, and every hotel along the Park Avenue corridor. Your chauffeur pulls up to the hotel entrance — not a garage or side street. Confirm the exact address when booking.',
  },
  {
    q: 'Can corporate clients set up executive billing for Park Avenue pickups?',
    a: 'Yes. We support business accounts with consolidated monthly invoicing, multi-passenger bookings, and detailed trip records for law firms, financial institutions, and corporate offices along Park Avenue and Midtown East. Contact us to set up an account for your company.',
  },
  {
    q: 'What is the best time to leave Park Avenue for an early morning JFK flight?',
    a: 'For flights departing before 8 AM, we recommend a pickup no later than 5:30–6 AM to allow for the 40–55 minute drive plus check-in time. For international departures requiring 3-hour check-in windows, plan accordingly. Our drivers are available from 3 AM onward and will be at your Park Avenue address well before your requested time.',
  },
];

export default function ParkAvenueToJFKPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
          { name: 'Park Avenue to JFK Car Service', url: `${getSiteUrl()}/services/routes/park-avenue-to-jfk-car-service` },
        ]}
      />
      <ServiceJsonLd
        name="Park Avenue to JFK Car Service"
        description="Premium black car service from Park Avenue, Midtown East, and the Grand Central corridor to JFK Airport. Flat-rate pricing, hotel and office door pickup, executive corporate accounts, 24/7 availability."
        areaServed="Park Avenue, Midtown East, Grand Central, Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/park-avenue-to-jfk-car-service`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Park Avenue · Midtown East · Grand Central Corridor
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Park Avenue to JFK Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Park Avenue is home to the city&apos;s most prominent law firms, financial institutions,
            and corporate headquarters. Eagle Eye Chauffeur delivers flat-rate, door-to-door black
            car service from any address on the Park Avenue corridor to JFK — with the executive
            standard the address demands.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">40–55 min</div>
              <div className="text-brand-silver text-sm mt-1">Park Ave to JFK</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flat Rate</div>
              <div className="text-brand-silver text-sm mt-1">No surge, ever</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Hotel &amp; office pickup</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Corporate</div>
              <div className="text-brand-silver text-sm mt-1">Accounts &amp; invoicing</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Park Avenue to JFK
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

      {/* ── Routes Table ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Park Avenue Corridor to JFK — Pickup Locations &amp; Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            We serve every address along the Park Avenue corridor, from 34th Street to 59th Street
            and all Midtown East cross streets. Estimated times are off-peak.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Park Ave & 42nd St → JFK Airport', time: '40–55 min' },
              { from: 'Park Ave & 50th St → JFK Airport', time: '40–55 min' },
              { from: 'Grand Central Terminal → JFK Airport', time: '40–55 min' },
              { from: 'MetLife Building (200 Park Ave) → JFK', time: '40–55 min' },
              { from: 'Waldorf Astoria (301 Park Ave) → JFK', time: '40–55 min' },
              { from: 'Park Ave & 59th St → JFK Airport', time: '45–60 min' },
              { from: 'Lever House (390 Park Ave) → JFK', time: '40–55 min' },
              { from: 'Park Ave & 34th St → JFK Airport', time: '40–55 min' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex justify-between items-center"
              >
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            Times are off-peak estimates. Rush-hour travel may add 20–30 minutes.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get a flat-rate quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included in Every Park Avenue to JFK Booking
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Park Avenue corridor expects a higher standard. Every Eagle Eye booking is built
            around that expectation — from confirmation to curbside at JFK.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Hotel or office door pickup',
                desc: 'Your chauffeur pulls up to the entrance of your Park Avenue hotel, law firm, or corporate office — not a garage or a block away.',
              },
              {
                title: 'Flat rate locked at booking',
                desc: 'Price confirmed at reservation — no surge pricing, no meter running. Ideal for corporate cards and expense reporting.',
              },
              {
                title: 'Driver confirmed the evening before',
                desc: 'Your chauffeur\'s name, vehicle, and direct contact are sent the night before your trip. No morning uncertainty.',
              },
              {
                title: 'Luxury sedan or executive SUV',
                desc: 'A premium black car — clean, current-model sedan or full-size SUV — every time. No surprises with the vehicle.',
              },
              {
                title: 'Luggage assistance',
                desc: 'Your chauffeur loads bags from hotel lobby or building entrance and unloads at JFK check-in curb.',
              },
              {
                title: 'Corporate accounts & invoicing',
                desc: 'Monthly billing, multi-passenger coordination, and detailed trip records for firms and institutions on the Park Ave corridor.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-5 bg-brand-offwhite border border-brand-light">
                <span className="text-brand-black font-semibold mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-brand-black mb-1">{item.title}</div>
                  <div className="text-sm text-brand-grey">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Midtown East Executives Choose Eagle Eye Chauffeur
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The law firms and financial institutions lining Park Avenue require a car service that
            operates to the same standard they hold themselves.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Grand Central Area Hotel Pickups', body: 'Every major hotel in the Grand Central corridor — Waldorf Astoria, The Kimberly, The Roger, and beyond — is covered with direct-entrance pickup.' },
              { title: 'Law Firm & Finance Corridor', body: 'Park Avenue between 42nd and 59th is home to some of the nation\'s top law and financial firms. We understand the billing standards and confidentiality expectations of that clientele.' },
              { title: 'No Surge for Early Flights', body: 'Corporate travel rarely happens at convenient hours. Our flat rate applies at 4 AM or 9 AM — there is no peak-hour premium.' },
              { title: 'Expense-Ready Receipts', body: 'Clean, itemized receipts for every trip — no surge line items, no explanations required when submitting to finance.' },
              { title: 'Discreet Professional Service', body: 'Our chauffeurs are trained to be professional and discreet. Conversations, calls, and materials in the vehicle are your business.' },
              { title: 'Driver Reliability Guarantee', body: 'Your driver is confirmed the evening before every trip — not matched at the last minute when you\'re standing outside a building with luggage.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-white border border-brand-light p-5">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                </div>
                <p className="text-brand-grey text-sm pl-6">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Park Avenue to JFK — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Midtown East and Park Avenue clients booking JFK car service.
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

      {/* ── Related ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/midtown-to-jfk-black-car-service"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Midtown to JFK</div>
              <div className="text-sm text-brand-grey">All Midtown pickup locations to JFK</div>
            </Link>
            <Link
              href="/services/routes/jfk-to-manhattan-black-car-service"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">JFK to Manhattan</div>
              <div className="text-sm text-brand-grey">Arrivals — meet &amp; greet at JFK</div>
            </Link>
            <Link
              href="/services/airport/jfk"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">JFK Airport Service</div>
              <div className="text-sm text-brand-grey">All JFK terminals &amp; routes</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Park Avenue to JFK Black Car
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. No surge. Executive chauffeur at your Park Avenue address — hotel, office, or residence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-10 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Reserve Now
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
