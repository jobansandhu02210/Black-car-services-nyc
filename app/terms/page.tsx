import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'Terms of Service | Eagle Eye Chauffeur NYC Car Service',
  },
  description:
    'Terms of Service for Eagle Eye Chauffeur — booking, cancellation, payment, and conduct policies for our NYC black car and airport transfer service.',
  alternates: { canonical: `${getSiteUrl()}/terms` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/terms`,
    title: 'Terms of Service | Eagle Eye Chauffeur',
    description:
      'Booking, cancellation, payment, and conduct policies for Eagle Eye Chauffeur NYC car service.',
  },
};

const LAST_UPDATED = 'February 1, 2026';

export default function TermsPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Terms of Service', url: `${siteUrl}/terms` },
        ]}
      />

      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">Terms of Service</h1>
          <p className="text-brand-silver">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="bg-brand-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-grey leading-relaxed mb-8">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Eagle Eye Chauffeur website and your
            booking of our NYC black car, airport transfer, and chauffeur services. By booking a ride or using our
            website, you agree to these Terms.
          </p>

          {sections.map((s) => (
            <div key={s.h} className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">{s.h}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-brand-grey leading-relaxed mb-3">{p}</p>
              ))}
              {s.list && (
                <ul className="list-disc pl-6 text-brand-grey space-y-1 mb-3">
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
            </div>
          ))}

          <div className="mb-2">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Contact Us</h2>
            <p className="text-brand-grey leading-relaxed">
              Questions about these Terms? Contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="text-brand-black underline">{CONTACT_EMAIL_BOOKINGS}</a>{' '}
              or call{' '}
              <a href={`tel:${CONTACT_PHONE_E164}`} className="text-brand-black underline">{CONTACT_PHONE_DISPLAY}</a>.
            </p>
          </div>

          <p className="mt-10 text-sm text-brand-grey">
            See also our{' '}
            <Link href="/privacy" className="text-brand-black underline">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

const sections: { h: string; body: string[]; list?: string[] }[] = [
  {
    h: 'Booking & Confirmation',
    body: [
      'A reservation is confirmed once you receive a confirmation from us by email, text, or phone. Quoted rates are based on the trip details you provide. Changes to pickup location, stops, distance, or duration may adjust the final fare.',
    ],
  },
  {
    h: 'Pricing & Payment',
    body: [
      'We offer flat-rate pricing confirmed at booking, with no surge pricing. Rates include applicable tolls unless otherwise noted. Additional charges may apply for extra stops, extended wait time, changes to the route, or additional hours on hourly bookings.',
      'Payment is due as agreed at the time of booking or after the completion of your trip. Gratuity is appreciated and may be added at your discretion.',
    ],
  },
  {
    h: 'Cancellations & Changes',
    body: ['To cancel or modify a reservation, contact us as early as possible:'],
    list: [
      'Point-to-point and airport transfers: cancellations made at least 3 hours before pickup are not charged.',
      'Hourly and event bookings: cancellations made at least 24 hours before the scheduled start are not charged.',
      'Late cancellations or no-shows may be charged up to the full fare.',
      'We will always try to accommodate reasonable changes to your booking.',
    ],
  },
  {
    h: 'Wait Time',
    body: [
      'For airport pickups, we track your flight and include a reasonable grace period after landing for you to reach the vehicle. For all other pickups, complimentary wait time is provided as agreed at booking; extended waiting beyond that may incur an hourly wait charge.',
    ],
  },
  {
    h: 'Airport Transfers & Flight Delays',
    body: [
      'We monitor flight status for airport pickups and adjust timing where possible. We are not responsible for delays, cancellations, or missed connections caused by airlines, security, weather, traffic, or other circumstances beyond our reasonable control.',
    ],
  },
  {
    h: 'Passenger Conduct',
    body: ['To ensure a safe, clean, and pleasant ride for everyone, passengers agree to:'],
    list: [
      'Wear seat belts as required by law',
      'Not smoke, vape, or consume illegal substances in the vehicle',
      'Not exceed the vehicle’s stated passenger or luggage capacity',
      'Treat the chauffeur and vehicle with respect',
      'Be responsible for any damage caused to the vehicle beyond normal use',
    ],
  },
  {
    h: 'Luggage & Personal Items',
    body: [
      'Please advise us of luggage needs at booking so we can assign an appropriate vehicle. We take care with your belongings but are not liable for items left behind in the vehicle. Contact us promptly if you believe you left something behind.',
    ],
  },
  {
    h: 'Liability',
    body: [
      'We provide our services with professional care and maintain licensed, insured vehicles and chauffeurs. To the fullest extent permitted by law, our liability for any claim relating to a booking is limited to the amount paid for that booking. We are not liable for indirect, incidental, or consequential damages.',
    ],
  },
  {
    h: 'Service Availability',
    body: [
      'We serve New York City, the surrounding metro area, and long-distance destinations as described on our website. Availability is subject to demand, vehicle availability, and conditions on the day of travel.',
    ],
  },
  {
    h: 'Changes to These Terms',
    body: [
      'We may update these Terms from time to time. The “Last updated” date above reflects the most recent changes. Continued use of our services after changes constitutes acceptance of the updated Terms.',
    ],
  },
];
