import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import {
  WHATSAPP_BOOKING_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Black Car Service NYC | Luxury Chauffeur & Transfers',
  description:
    'NYC black car service — flat-rate luxury sedans and SUVs for airport transfers, corporate travel, and point-to-point rides. Professional.',
  alternates: { canonical: `${getSiteUrl()}/black-car-service-nyc` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/black-car-service-nyc`,
    title: 'Black Car Service NYC | Luxury Chauffeur & Transfers | Eagle Eye',
    description:
      'NYC black car service — flat-rate luxury sedans and SUVs for airport transfers, corporate travel, and point-to-point rides. No surge pricing. Book 24/7.',
  },
};

const faqs = [
  {
    q: 'What is a black car service in NYC?',
    a: 'A black car service is a pre-booked, licensed ground transportation service using luxury sedans or SUVs with a professional chauffeur. Unlike taxis or rideshare apps, black car service offers flat-rate pricing agreed before the trip, a dedicated professional driver, and a higher standard of vehicle and service.',
  },
  {
    q: 'How is black car service different from Uber Black?',
    a: 'Eagle Eye Chauffeur offers fully flat-rate pricing locked at booking — no surge pricing ever. You also get a dedicated professional chauffeur (not a gig worker), real-time flight tracking for airport rides, meet-and-greet service, and consistent luxury vehicles. Uber Black uses dynamic pricing that can multiply your fare during peak hours or bad weather.',
  },
  {
    q: 'How much does NYC black car service cost?',
    a: 'Pricing depends on your route and vehicle class. All rates are flat, confirmed at booking, and include tolls — no hidden fees, no surge. Get an instant quote by entering your pickup and drop-off on our booking page.',
  },
  {
    q: 'Do you serve all NYC boroughs?',
    a: 'Yes. Eagle Eye Chauffeur serves all five boroughs — Manhattan, Brooklyn, Queens, the Bronx, and Staten Island — plus Long Island, Westchester, New Jersey, and Connecticut.',
  },
  {
    q: 'Can I book a black car for JFK, LGA, or EWR airport?',
    a: 'Yes. Airport transfers are our most-booked service. We cover all four NYC-area airports: JFK, LaGuardia (LGA), Newark Liberty (EWR), and Westchester (HPN). Your driver tracks your flight and adjusts pickup timing automatically.',
  },
  {
    q: 'Are your drivers TLC licensed?',
    a: 'Yes. Every Eagle Eye chauffeur holds a valid NYC Taxi & Limousine Commission (TLC) license and passes a background check. Our vehicles carry full commercial insurance.',
  },
  {
    q: 'Can I book a black car for corporate travel?',
    a: 'Yes. We offer corporate accounts with monthly invoicing, executive sedans and SUVs, and consistent professional service for roadshows, client pickups, and daily commutes. Contact us to set up a corporate account.',
  },
];

const services = [
  { label: 'JFK Airport', href: '/services/airport/jfk', desc: 'Flat-rate transfers to & from JFK, all terminals' },
  { label: 'LGA Airport', href: '/services/airport/lga', desc: 'Professional pickups at LaGuardia Terminal B & C' },
  { label: 'EWR Airport', href: '/services/airport/ewr', desc: 'Newark Liberty transfers — tolls included' },
  { label: 'Corporate Travel', href: '/services/corporate', desc: 'Executive sedans for roadshows & client rides' },
  { label: 'Hourly Hire', href: '/services/hourly', desc: 'Dedicated chauffeur by the hour, any purpose' },
  { label: 'Special Events', href: '/services/special-events', desc: 'Weddings, proms, galas & VIP occasions' },
];

const differentiators = [
  { title: 'Flat-Rate Pricing', body: 'Your fare is locked at booking. No surge pricing, no meter, no surprises — just the price you agreed to, door to door.' },
  { title: 'TLC Licensed Chauffeurs', body: 'Every driver holds a valid NYC TLC license and passes a rigorous background check. Uniformed, trained, and professional on every ride.' },
  { title: 'Flight Tracking', body: 'For airport rides, we monitor your flight live. Delayed or early — your driver adjusts automatically at no extra charge.' },
  { title: 'Meet & Greet', body: 'Your chauffeur meets you at arrivals with a name sign, assists with luggage, and escorts you to your vehicle.' },
  { title: 'Premium Fleet', body: 'Business and First Class sedans and SUVs — spotless, late-model vehicles maintained to the highest standard.' },
  { title: '24/7 Availability', body: 'Pre-dawn airport runs, late-night events, same-day requests — we are available around the clock, every day of the year.' },
];

export default function BlackCarServiceNYCPage() {
  const siteUrl = getSiteUrl();
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Black Car Service NYC', url: `${siteUrl}/black-car-service-nyc` },
  ];

  return (
    <>
      <ServiceJsonLd
        name="Black Car Service NYC"
        description="Luxury black car and chauffeur service in New York City — airport transfers, corporate travel, and point-to-point rides with flat-rate pricing and professional TLC-licensed drivers."
        areaServed="New York City, NY"
        url={`${siteUrl}/black-car-service-nyc`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* HERO */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm tracking-widest uppercase mb-4 font-medium">
            TLC Licensed · Flat-Rate · No Surge Pricing
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mb-6">
            Black Car Service NYC
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-10">
            Eagle Eye Chauffeur provides premium black car service across New York City and the tri-state area. Luxury sedans and SUVs, professional TLC-licensed chauffeurs, flat-rate pricing — confirmed at booking with no surge, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors text-center"
            >
              Get Instant Quote
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors text-center"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* WHY EAGLE EYE */}
      <section className="bg-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-silver text-sm tracking-widest uppercase mb-3 font-medium">Why Eagle Eye</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black">
              NYC Black Car Service Done Right
            </h2>
            <p className="mt-4 text-brand-grey max-w-xl mx-auto leading-relaxed">
              Six things that set a real black car service apart from a rideshare — and that we deliver on every single ride.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div key={d.title} className="border border-brand-light bg-brand-offwhite p-8">
                <h3 className="font-semibold text-brand-black mb-3">{d.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-brand-offwhite py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black">
              Black Car Services We Offer
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors group"
              >
                <h3 className="font-semibold text-brand-black group-hover:underline mb-2">{s.label}</h3>
                <p className="text-brand-grey text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VS RIDESHARE COMPARISON */}
      <section className="bg-brand-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-12">
            Black Car Service vs. Uber Black in NYC
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white">
                  <th className="text-left px-6 py-4 font-semibold">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold">Eagle Eye Chauffeur</th>
                  <th className="text-center px-6 py-4 font-semibold">Uber Black</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-light">
                {[
                  ['Flat-rate pricing', '✓ Always', '✗ Surge applies'],
                  ['Price locked at booking', '✓ Yes', '✗ No'],
                  ['TLC licensed driver', '✓ Guaranteed', '✓ Yes'],
                  ['Flight tracking', '✓ Included', '✗ Not included'],
                  ['Meet & greet with name sign', '✓ Every airport ride', '✗ Curbside only'],
                  ['Consistent vehicle', '✓ Guaranteed class', '∼ Varies'],
                  ['Corporate accounts', '✓ Monthly invoicing', '✗ No'],
                  ['Direct driver contact', '✓ WhatsApp & phone', '✗ App only'],
                ].map(([feature, eagle, uber]) => (
                  <tr key={feature} className="hover:bg-brand-offwhite transition-colors">
                    <td className="px-6 py-4 text-brand-grey font-medium">{feature}</td>
                    <td className="px-6 py-4 text-center text-green-700 font-semibold">{eagle}</td>
                    <td className="px-6 py-4 text-center text-brand-grey">{uber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-brand-offwhite py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-10">
            NYC Black Car Service Areas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              { region: 'NYC Boroughs', places: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'] },
              { region: 'Airports', places: ['JFK Airport', 'LaGuardia (LGA)', 'Newark (EWR)', 'Westchester (HPN)'] },
              { region: 'Long Island', places: ['Nassau County', 'Suffolk County', 'Hamptons', 'Garden City', 'Great Neck'] },
              { region: 'Tri-State', places: ['Westchester', 'Greenwich CT', 'Stamford CT', 'Hoboken NJ', 'Jersey City NJ'] },
            ].map((group) => (
              <div key={group.region} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-3">{group.region}</h3>
                <ul className="space-y-1 text-brand-grey">
                  {group.places.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-brand-light pb-8">
                <h3 className="font-semibold text-brand-black mb-3">{faq.q}</h3>
                <p className="text-brand-grey leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Book Your NYC Black Car Today
          </h2>
          <p className="text-brand-silver mb-8 leading-relaxed">
            Flat-rate pricing, professional TLC-licensed chauffeurs, available 24/7. Get your quote in under a minute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors"
            >
              Get Instant Quote
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
