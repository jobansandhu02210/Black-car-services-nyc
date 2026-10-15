import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'NYC to Princeton NJ Car Service',
  description:
    'New York City to Princeton NJ black car service — flat rate from Manhattan, JFK, EWR & all NYC. Corporate & university transfers to Princeton.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/nyc-to-princeton-nj-car-service`,
  },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/routes/nyc-to-princeton-nj-car-service`,
    title: 'NYC to Princeton NJ Car Service | Eagle Eye',
    description: 'Flat-rate black car service from New York City to Princeton NJ. Manhattan, JFK, EWR, LGA and all NYC boroughs to Princeton. Corporate campus.',
  },
};

const faqs = [
  {
    q: 'How far is Princeton NJ from New York City, and how long is the drive?',
    a: 'New York City to Princeton NJ is about 50 miles. From Midtown Manhattan, the drive typically takes 65–80 minutes via the New Jersey Turnpike or I-287. From the Financial District (FiDi), expect a similar 65–80 minutes. From EWR Airport to Princeton, the drive is shorter — approximately 45–60 minutes — making Newark the most convenient airport for Princeton-bound travelers. From JFK, the drive is 70–90 minutes depending on traffic. We monitor conditions in real time and select the optimal route for your pickup time.',
  },
  {
    q: 'Is there a flat rate for car service from Manhattan to Princeton?',
    a: 'Yes. Eagle Eye Chauffeur operates on flat rates confirmed at booking — not metered, not surge-priced. Princeton is a point-to-point long-distance route, and your rate is fully confirmed when you reserve. There are no surprises for tolls, traffic, or added distance. Many of our pharma and corporate clients value this for predictable billing across repeated trips to the Route 1 corridor.',
  },
  {
    q: 'Do you serve the pharmaceutical and biotech campuses near Princeton?',
    a: 'Yes. The Princeton-Route 1 corridor is home to major pharmaceutical and biotech employers — including Johnson &amp; Johnson (Janssen), Bristol-Myers Squibb, Novo Nordisk, Integra LifeSciences, and others. We regularly transport executives, medical affairs teams, and research professionals between Manhattan offices, NYC airports, and these campuses. Corporate accounts with consolidated invoicing are available for recurring bookings.',
  },
  {
    q: 'Which airport is best for flying into Princeton NJ — EWR or JFK?',
    a: 'Newark Airport (EWR) is significantly more convenient for Princeton visitors. EWR to Princeton is approximately 45–60 minutes via the New Jersey Turnpike — roughly 30–40 minutes shorter than the JFK-to-Princeton drive. If you have a choice of airports, booking your flight into EWR and taking a black car to Princeton is by far the most efficient option. We provide flat-rate service from both EWR and JFK to Princeton.',
  },
  {
    q: 'Do you provide car service for Princeton University transfers?',
    a: 'Yes. We serve Princeton University — including Nassau Hall, the main academic campus, the Lewis Center for the Arts, and residential areas — for academic travel, conference arrivals, trustee visits, and alumni events. We also serve the Institute for Advanced Study and other Princeton-area institutions. Enter the specific campus address or building when booking for an accurate flat-rate quote.',
  },
];

export default function NYCToPrincetonPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
          { name: 'NYC to Princeton NJ Car Service', url: `${getSiteUrl()}/services/routes/nyc-to-princeton-nj-car-service` },
        ]}
      />
      <ServiceJsonLd
        name="NYC to Princeton NJ Car Service"
        description="Luxury black car service from New York City to Princeton NJ. Flat-rate service from Manhattan, JFK Airport, EWR Airport, LGA Airport, and all NYC boroughs. Corporate, pharmaceutical, biotech, and Princeton University transfers. Professional TLC-licensed chauffeurs available 24/7."
        areaServed="Princeton, NJ; New York City, NY; JFK Airport; EWR Airport"
        url={`${getSiteUrl()}/services/routes/nyc-to-princeton-nj-car-service`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            New York City · New Jersey Turnpike · Princeton NJ
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            NYC to Princeton NJ Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            The Route 1 corridor between Princeton and New York is one of the most active corporate
            travel corridors in the Northeast — home to global pharmaceutical headquarters, biotech
            campuses, and Princeton University. Eagle Eye Chauffeur provides flat-rate, professional
            black car service between New York City and Princeton, from any origin: Manhattan offices,
            JFK, EWR, LGA, or any borough.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">65–80 min</div>
              <div className="text-brand-silver text-sm mt-1">Manhattan to Princeton</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">45–60 min</div>
              <div className="text-brand-silver text-sm mt-1">EWR to Princeton</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flat Rate</div>
              <div className="text-brand-silver text-sm mt-1">No surge, ever</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Corporate</div>
              <div className="text-brand-silver text-sm mt-1">Pharma &amp; university</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book NYC to Princeton
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
            NYC Origins to Princeton NJ — Estimated Drive Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            We serve every NYC origin — Midtown offices, JFK and EWR airports, all five boroughs,
            and Hoboken and Jersey City. Estimated times are off-peak via the NJ Turnpike.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Midtown Manhattan → Princeton NJ', time: '65–80 min' },
              { from: 'Financial District (FiDi) → Princeton NJ', time: '65–80 min' },
              { from: 'JFK Airport → Princeton NJ', time: '70–90 min' },
              { from: 'EWR Airport → Princeton NJ', time: '45–60 min' },
              { from: 'LGA Airport → Princeton NJ', time: '75–90 min' },
              { from: 'Brooklyn → Princeton NJ', time: '70–85 min' },
              { from: 'Hoboken / Jersey City → Princeton NJ', time: '50–65 min' },
              { from: 'Newark → Princeton NJ', time: '45–60 min' },
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
            Times are off-peak estimates via the New Jersey Turnpike. Rush-hour may add 15–30 minutes.{' '}
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
            What&apos;s Included in Every NYC to Princeton Booking
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            A 60–90 minute cross-state corporate transfer deserves a complete professional experience —
            from your NYC door to the Princeton campus or office.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Door-to-door service',
                desc: 'Your chauffeur picks you up at your NYC building, hotel, or airport terminal and drops you at your specific Princeton address — any campus building, hotel, or corporate campus entrance.',
              },
              {
                title: 'Flat rate confirmed at booking',
                desc: 'No surge pricing, no metering, no toll surprises. Your complete, all-in price is locked when you reserve.',
              },
              {
                title: 'Driver confirmed in advance',
                desc: 'For pre-booked trips, your chauffeur\'s name, vehicle, and contact are confirmed the evening before departure.',
              },
              {
                title: 'Luxury sedan or executive SUV',
                desc: 'Business-class sedan or full-size SUV — clean, comfortable, and work-ready for the 60–90 minute journey.',
              },
              {
                title: 'Luggage &amp; briefcase assistance',
                desc: 'Your chauffeur handles bags and equipment at both ends — from lobby to trunk, trunk to building entrance.',
              },
              {
                title: 'Corporate accounts &amp; invoicing',
                desc: 'Monthly consolidated billing, multi-passenger coordination, and trip records for pharma and corporate clients with recurring Princeton travel.',
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

      {/* ── Benefits / Pharma Angle ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Corporate &amp; Pharma Clients Choose Eagle Eye for Princeton
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Princeton-Route 1 corridor is one of the most active pharmaceutical and corporate
            travel corridors in the Northeast. Eagle Eye is built for it.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Pharmaceutical Campus Expertise', body: 'We regularly serve the Janssen (J&J), Bristol-Myers Squibb, Novo Nordisk, and Integra LifeSciences campuses. Our drivers know exactly where each building entrance is — no GPS fumbling on-site.' },
              { title: 'EWR Is the Right Airport for Princeton', body: 'Newark Airport is just 45–60 minutes from Princeton — a full 30+ minutes closer than JFK or LGA. If you are flying clients into Princeton, EWR is the answer, and we serve every arrival.' },
              { title: 'Princeton University Transfers', body: 'Academic conferences, trustee visits, alumni events, and guest lecturer arrivals — we provide professional, timely service for Princeton University and the Institute for Advanced Study.' },
              { title: 'Productive 60-Minute Ride', body: 'With a professional chauffeur navigating the NJ Turnpike, you arrive in Princeton having reviewed your materials, taken calls, or simply rested — not drained from driving.' },
              { title: 'Corporate Billing for Recurring Travel', body: 'Monthly invoicing, multi-leg coordination, and trip record reporting for pharmaceutical and biotech teams making regular NYC-Princeton runs.' },
              { title: 'Return Trips Guaranteed', body: 'Pre-arrange your return from Princeton to NYC or the airport. Your return is confirmed at the same flat rate — no scrambling for a driver after a long day on campus.' },
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
            NYC to Princeton NJ — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from corporate, pharmaceutical, and university clients booking
            car service between New York City and Princeton.
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
              href="/services/routes/ewr-to-manhattan-black-car-service"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">EWR to Manhattan</div>
              <div className="text-sm text-brand-grey">Newark Airport arrivals to NYC</div>
            </Link>
            <Link
              href="/services/routes/nyc-to-philadelphia"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">NYC to Philadelphia</div>
              <div className="text-sm text-brand-grey">Flat-rate black car, NYC to Philly</div>
            </Link>
            <Link
              href="/services/routes/manhattan-to-ewr-black-car-service"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Manhattan to EWR</div>
              <div className="text-sm text-brand-grey">Departures to Newark Airport</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your NYC to Princeton Car Service
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. No surge. Professional chauffeur from your NYC address or airport —
            direct to Princeton NJ. Corporate accounts available.
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
