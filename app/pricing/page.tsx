import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { PageHero, TextTable } from '@/components/PageHero';
import { FaqList, InfoCards, RelatedLinks, StepsList } from '@/components/AirportSections';
import { FLEET_CLASSES, SPRINTER_HOURLY_RATE } from '@/lib/fleet';
import { ogDefaults } from '@/lib/og';

const path = '/pricing';
const title = 'Car Service Prices & Hourly Rates | Black Car Service';
const description =
  'How Black Car Service prices a ride: one trip estimate based on distance and vehicle, hourly rates from $110, and no surge pricing. Get your price online.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const steps = [
  { name: 'Enter the trip', text: 'Pickup, drop-off, date and time — or the number of hours you need.' },
  { name: 'Compare the cars', text: 'Every vehicle shows its own trip estimate side by side.' },
  { name: 'Send the request', text: 'We confirm the booking and the fare before the ride.' },
];

const factors = [
  { title: 'Distance', body: 'Point-to-point and airport rides are priced on the driving distance between your two addresses, not on a zone map.' },
  { title: 'Vehicle', body: 'A sedan costs less than an SUV, and a Sprinter costs more again. Pick the smallest car that fits your group and bags.' },
  { title: 'Time booked', body: 'For hourly bookings, the price is the hourly rate for the vehicle multiplied by the hours, with a two-hour minimum.' },
];

// TODO(owner): confirm what the trip estimate includes (tolls, airport fees, gratuity) and add it to the FAQ.
const faqs = [
  {
    q: 'Do your prices go up when it is busy?',
    a: 'No. There is no surge pricing. A ride at 5 am on a Tuesday is priced the same way as one on a Friday evening.',
  },
  {
    q: 'Why do you show one total instead of a breakdown?',
    a: 'Because that is the number you pay for the ride. You see one trip estimate for each vehicle, and we confirm the fare before the ride.',
  },
  {
    q: 'How much is an hourly booking?',
    a: `From $${FLEET_CLASSES[0].hourlyRate} an hour for an Executive Sedan, with a two-hour minimum. The table on this page lists the hourly rate for every vehicle.`,
  },
  {
    q: 'Can I get a price without booking?',
    a: 'Yes. The booking page shows your estimate before you send anything, and there is no account to create. You can also call or WhatsApp us for a price.',
  },
  {
    q: 'Do you price long-distance trips differently?',
    a: 'No. Philadelphia, Washington, DC and Boston are priced on distance and vehicle in the same way as a ride across town — just with more miles.',
  },
];

const related = [
  { href: '/fleet', title: 'Our vehicles', body: 'Seats, bags and models for every class.' },
  { href: '/services/airport', title: 'Airport car service', body: 'JFK, LaGuardia, Newark, HPN and Teterboro.' },
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'Philadelphia, DC, Boston and the Hamptons.' },
];

export default function PricingPage() {
  const site = getSiteUrl();
  const hourlyRows: string[][] = [
    ...FLEET_CLASSES.map((c) => [c.name, `Up to ${c.passengers}`, `$${c.hourlyRate} / hour`, `$${c.hourlyRate * 2}`]),
    ['Sprinter Van', 'Up to 14', `$${SPRINTER_HOURLY_RATE} / hour`, `$${SPRINTER_HOURLY_RATE * 2}`],
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Pricing', url: `${site}${path}` },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Pricing' }]}
        eyebrow="Prices and rates"
        idPrefix="pricing"
        h1="Car Service Prices"
        answer={`${SITE_NAME} prices every ride the same way: the driving distance and the vehicle you choose, shown as one trip estimate before you book. Hourly bookings start at $${FLEET_CLASSES[0].hourlyRate} an hour. There is no surge pricing.`}
        ctaHref="/book"
        ctaLabel="See my price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="factors-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="factors-heading"
            eyebrow="How it works"
            title="What decides the price of your ride"
            intro="Three things, and nothing that changes with demand."
          />
          <InfoCards items={factors} />
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="hourly-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="hourly-heading"
            eyebrow="By the hour"
            title="Hourly rates by vehicle"
            intro="For meetings across town, a night out or a day with several stops. The driver waits between stops; the minimum booking is two hours."
          />
          <TextTable caption="Hourly car service rates by vehicle" head={['Vehicle', 'Passengers', 'Hourly rate', 'Two-hour minimum']} rows={hourlyRows} />
          <p className="mt-6 text-sm text-brand-muted">
            Seats, bags and models are on the{' '}
            <Link href="/fleet" className="font-semibold text-brand-accent hover:underline">fleet page</Link>.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="steps-heading" eyebrow="Get a price" title="See your price in under a minute" />
          <StepsList steps={steps} />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/book" className="rounded-lg bg-brand-accent px-6 py-3 text-center text-brand-white hover:bg-brand-accent-hover">
              Get my trip estimate
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-white px-6 py-3 text-center text-brand-ink ring-1 ring-brand-line hover:ring-brand-accent"
            >
              Ask for a price on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Pricing questions" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Choose your ride" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
