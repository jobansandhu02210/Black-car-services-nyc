import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { FaqList, StepsList } from '@/components/AirportSections';
import { ogDefaults } from '@/lib/og';

const path = '/book';
const title = 'Book a Black Car Online | Black Car Service';
const description =
  'Book a private car to JFK, LaGuardia or Newark, or a long-distance ride from NYC, in three short steps. See your price first; no account needed.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const steps = [
  { name: 'Your trip', text: 'Airport, city to city or by the hour, then your address, date and time.' },
  { name: 'Your car', text: 'Set your group size and compare every car with its price side by side.' },
  { name: 'Your details', text: 'Name, email and flight number if you have one. Nothing is charged here.' },
  { name: 'We confirm', text: 'We email your confirmed fare and invoice, then your driver’s details before pickup.' },
];

// TODO(owner): confirm the cancellation/changes answer once your policy is set.
const faqs = [
  {
    q: 'Is the estimate the final price?',
    a: 'The estimate is calculated for your route and car as you book. We confirm the final fare with you by email before the ride, with tolls and fees listed on the invoice.',
  },
  {
    q: 'How late can I book?',
    a: 'Online bookings need at least two hours’ notice. For anything sooner, call or WhatsApp us and we will tell you straight away whether a car is available.',
  },
  {
    q: 'Do I need an account?',
    a: 'No. You only need a name, a phone number and an email address so we can confirm the booking and send the driver’s details.',
  },
  {
    q: 'Which airports can I book?',
    a: 'JFK, LaGuardia and Newark, in either direction. For an arrival, add the flight number in the details step.',
  },
  {
    q: 'Can I book a long-distance ride here?',
    a: 'Yes. Choose City to city and enter your destination — Philadelphia, Washington, DC, or anywhere in New Jersey or Connecticut.',
  },
  {
    q: 'How do I change or cancel a booking?',
    a: 'Call or message us with your name and trip date as early as you can, and we will update it.',
  },
];

export default function BookLayout({ children }: { children: React.ReactNode }) {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Book', url: `${site}${path}` },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {children}

      <section className="border-t border-brand-line bg-brand-white py-16 lg:py-20" aria-labelledby="book-how-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="book-how-heading" eyebrow="How it works" title="How online booking works" />
          <StepsList steps={steps} />
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-20" aria-labelledby="book-faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="book-faq-heading" eyebrow="FAQ" title="Booking questions" />
          <FaqList faqs={faqs} />
          <p className="mt-8 text-sm text-brand-muted">
            Rather talk to someone?{' '}
            <Link href="/contact" className="font-semibold text-brand-accent hover:underline">
              Contact us
            </Link>{' '}
            — phone and WhatsApp are answered 24/7.
          </p>
        </div>
      </section>
    </>
  );
}
