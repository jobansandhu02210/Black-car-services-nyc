import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { PageHero, TextTable } from '@/components/PageHero';
import { FaqList, InfoCards, RelatedLinks, StepsList } from '@/components/AirportSections';
import { ogDefaults } from '@/lib/og';
import { releaseRobots } from '@/lib/page-release';

const path = '/services/airport/teb';
const title = 'Teterboro Airport (TEB) Car Service | Black Car Service';
const description =
  'Private car service for Teterboro Airport (TEB) private jet flights: Manhattan in about 30 minutes, FBO pickups timed to your arrival. Book 24/7.';
const bookHref = `/book?service=point-to-point&dropoff=${encodeURIComponent('Teterboro Airport, Teterboro, NJ')}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
  ...releaseRobots(path),
};

const fbo = [
  { title: 'You fly into an FBO, not a terminal', body: 'Teterboro has no airline terminal. Every flight uses one of the private terminals (FBOs) on the field, so we need its name to send the car to the right door.' },
  { title: 'The car is there when you taxi in', body: 'Give us the tail number and expected arrival. We follow the flight and have the driver at the FBO for wheels-down.' },
  { title: 'Bags go straight to the car', body: 'The FBO crew brings luggage out; your driver loads it. Choose an SUV for golf bags, skis or a full family load.' },
];

// Approximate road distance and typical drive time to/from TEB (public-map estimates, rounded).
const driveTimes: string[][] = [
  ['Midtown Manhattan', '12 mi', '25–35 min', '45–75 min'],
  ['Upper East Side', '14 mi', '30–40 min', '50–80 min'],
  ['Lower Manhattan / FiDi', '15 mi', '30–45 min', '55–85 min'],
  ['Englewood / Alpine', '7 mi', '15–20 min', '20–35 min'],
  ['Short Hills', '20 mi', '30–40 min', '45–65 min'],
  ['Greenwich, CT', '30 mi', '40–55 min', '60–90 min'],
  ['Princeton, NJ', '55 mi', '60–75 min', '80–110 min'],
  ['JFK (connection)', '28 mi', '45–60 min', '70–110 min'],
];

const steps = [
  { name: 'Send the flight', text: 'Tail number, FBO and expected arrival or departure time.' },
  { name: 'Choose the car', text: 'Sedan, SUV or Sprinter for the whole party.' },
  { name: 'We follow the flight', text: 'Early or late, the pickup moves with the actual arrival.' },
  { name: 'Straight to your door', text: 'Manhattan, the suburbs or on to Connecticut and the Hamptons.' },
];

// TODO(owner): confirm FBO pickup practice (ramp access only where the FBO allows it).
const faqs = [
  {
    q: 'How far is Teterboro Airport from Manhattan?',
    a: 'About 12 miles. Midtown is usually 25 to 35 minutes away outside rush hour via the Lincoln Tunnel or the George Washington Bridge, and 45 minutes or more at peak times.',
  },
  {
    q: 'Can you pick me up at my FBO at Teterboro?',
    a: 'Yes. Tell us which FBO you are using and your tail number. Some FBOs let cars meet the aircraft with advance notice; we arrange that with the FBO where it is allowed.',
  },
  {
    q: 'Are there airline flights at Teterboro?',
    a: 'No. Teterboro is for private and business aviation only. For airline flights in New Jersey, use Newark.',
  },
  {
    q: 'How much is a car service from Teterboro to Manhattan?',
    a: 'It depends on your exact address, the vehicle and the time of day. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'Can you meet a late-night or early-morning arrival?',
    a: 'Yes. We work around the clock. Send the flight details and we time the pickup to your arrival.',
  },
];

const related = [
  { href: '/services/airport/ewr', title: 'Newark airport car service', body: 'New Jersey’s airline airport, about 15 miles south.' },
  { href: '/services/airport/hpn', title: 'Westchester Airport car service', body: 'The other private-jet favourite north of the city.' },
  { href: '/services/areas/new-jersey', title: 'New Jersey car service', body: 'Bergen County, Hoboken, Princeton and the Shore.' },
  { href: '/services/airport', title: 'Compare NYC airports', body: 'JFK, LaGuardia, Newark, HPN and Teterboro.' },
  { href: '/fleet', title: 'Our vehicles', body: 'Sedans, SUVs and Sprinter vans.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function TebPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}/services/airport` },
          { name: 'Teterboro Airport car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="Teterboro Airport (TEB) Car Service"
        description={description}
        url={`${site}${path}`}
        serviceType="Airport transfer"
        areaServed={[
          { type: 'Airport', name: 'Teterboro Airport' },
          { type: 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
          { type: 'State', name: 'New Jersey', sameAs: 'https://www.wikidata.org/wiki/Q1408' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#teb-title', '#teb-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Airports', href: '/services/airport' }, { name: 'TEB' }]}
        eyebrow="Teterboro Airport · Teterboro, NJ"
        idPrefix="teb"
        h1="Teterboro Airport Car Service"
        answer={`${SITE_NAME} meets private flights at Teterboro (TEB), the closest private-jet airport to Manhattan — about 12 miles from Midtown. Send us your FBO and tail number and the car is waiting when you arrive.`}
        ctaHref={bookHref}
        ctaLabel="Get my Teterboro price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="fbo-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="fbo-heading" eyebrow="How it works at TEB" title="Teterboro FBO pickups and drop-offs" />
          <InfoCards items={fbo} />
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="Teterboro drive times to Manhattan and beyond"
            intro="Typical door-to-door times. The Hudson crossings decide most of the trip into the city."
          />
          <TextTable caption="Drive times between Teterboro Airport and nearby places" head={['To or from', 'Distance', 'Off-peak', 'Rush hour']} rows={driveTimes} />
          <p className="mt-6 text-sm text-brand-muted">Approximate road distances and times; live traffic decides on the day.</p>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="how-heading" eyebrow="Booking" title="How to book a Teterboro car" />
          <StepsList steps={steps} />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center text-brand-white hover:bg-brand-accent-hover">
              Book a Teterboro car
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-white px-6 py-3 text-center text-brand-ink ring-1 ring-brand-line hover:ring-brand-accent"
            >
              Send flight details on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Teterboro car service FAQs" />
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
