import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { FaqJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Book NYC Black Car Service | Instant Quote',
  description:
    'Book your NYC black car service online — flat-rate airport transfers to JFK, LGA & EWR. Instant quote, no surge pricing. Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/book` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/book` },
  robots: { index: true, follow: true },
};

const steps = [
  { n: '1', t: 'Enter your trip', d: 'Choose your service — airport transfer, point-to-point, or hourly — and add your pickup, drop-off, date, and time.' },
  { n: '2', t: 'Get an instant flat rate', d: 'See a flat-rate quote based on your route and vehicle. No surge pricing, no meter — tolls included.' },
  { n: '3', t: 'Confirm & ride', d: 'Submit your booking and we confirm by email. Your professional chauffeur arrives on time, every time.' },
];

const reasons = [
  { t: 'Flat rates, no surge', d: 'Your price is confirmed at booking and never changes — no peak-hour surprises.' },
  { t: 'Flight tracking', d: 'For JFK, LGA, and EWR pickups we track your flight and adjust for delays automatically.' },
  { t: 'TLC-licensed chauffeurs', d: 'Professional, background-checked, uniformed drivers in immaculate late-model vehicles.' },
  { t: '24/7 availability', d: 'Book any time — early-morning flights, red-eyes, and last-minute rides included.' },
];

const faqs = [
  {
    q: 'How do I book a black car service in NYC?',
    a: 'Use the booking form above: select your service, enter your pickup and drop-off, choose your date, time, and vehicle, and you’ll get an instant flat-rate quote. Submit the request and we confirm your ride by email. You can also call or WhatsApp us to book directly.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For airport transfers and standard rides, a few hours’ notice is usually enough, and we accept last-minute and same-day bookings 24/7. For weddings, corporate travel, and events, we recommend booking a few days ahead to guarantee your preferred vehicle class.',
  },
  {
    q: 'Is the quoted price the final price?',
    a: 'Yes — we use flat-rate pricing with no surge and tolls included. The only time the price changes is if you add stops, extra hours, or change the route, which we confirm with you first.',
  },
  {
    q: 'Which airports do you cover?',
    a: 'We cover JFK, LaGuardia (LGA), Newark (EWR), Westchester (HPN), and Teterboro (TEB), with meet-and-greet service and real-time flight tracking on airport pickups.',
  },
  {
    q: 'What vehicles are available?',
    a: 'Our fleet includes an Executive Sedan (up to 3 passengers), First Class SUV (up to 6), First Class Sedan, and Sprinter vans for groups (executive, limo, and jet cabins seating up to roughly 14–18). You choose your vehicle class during booking, with room for luggage in every class.',
  },
  {
    q: 'How much does a car service cost in NYC?',
    a: 'Airport transfers and point-to-point rides are flat-rate, confirmed at booking with tolls included and no surge. Hourly bookings typically range from about $110 per hour for an executive sedan up to roughly $200 per hour for a luxury SUV or Sprinter van, with a short minimum. Enter your trip above for an exact instant quote.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Eagle Eye Chauffeur serves all five NYC boroughs — Manhattan, Brooklyn, Queens, the Bronx, and Staten Island — plus Long Island, Westchester, the Hamptons, New Jersey, Connecticut, and upstate New York, along with all major airports (JFK, LGA, EWR, HPN, TEB).',
  },
];

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <FaqJsonLd faqs={faqs} />

      <section className="bg-brand-white py-16 lg:py-20 border-t border-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-10 text-center">
            How Booking Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-black text-brand-white flex items-center justify-center font-serif text-xl">{s.n}</div>
                <h3 className="font-semibold text-brand-black mb-2">{s.t}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-10 text-center">
            Why Book With Eagle Eye Chauffeur
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.t} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{r.t}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8 text-center">
            Booking FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-brand-grey mt-8">
            Prefer to talk to us? <Link href="/contact" className="text-brand-black underline">Contact Eagle Eye Chauffeur →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
