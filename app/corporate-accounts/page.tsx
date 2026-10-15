'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from '@/lib/contact';

const benefits = [
  {
    title: 'Monthly Consolidated Invoicing',
    description:
      'One expense-report-ready invoice at the end of each month with itemized trip details — no chasing receipts.',
  },
  {
    title: 'Dedicated Account Coordinator',
    description:
      'One person manages all your bookings, preferences, and last-minute changes. No call centers, no queues.',
  },
  {
    title: 'Multi-Vehicle Fleet Coordination',
    description:
      'Need five cars for a roadshow or a fleet for a conference? We coordinate multiple vehicles seamlessly.',
  },
  {
    title: 'Priority Booking & Availability',
    description:
      'Corporate accounts receive priority scheduling — your rides are confirmed before general availability opens.',
  },
  {
    title: 'Driver Consistency',
    description:
      'The same trusted drivers for your executives, so preferences and routes are already known on arrival.',
  },
  {
    title: 'Full NDA & Discretion',
    description:
      'We sign confidentiality agreements and maintain strict discretion on all passengers and destinations.',
  },
];

const industries = [
  {
    name: 'Finance & Investment Banking',
    description: 'Roadshow logistics, investor meetings, and daily executive transfers across Midtown and FiDi.',
  },
  {
    name: 'Law Firms',
    description:
      'Discreet transport for partners, clients, and depositions — billed directly to the firm.',
  },
  {
    name: 'Management Consulting',
    description:
      'Flexible hourly and point-to-point service for teams rotating across client sites.',
  },
  {
    name: 'Entertainment & Media',
    description:
      'Talent transport, production crews, and red-carpet arrivals handled with precision and confidentiality.',
  },
  {
    name: 'Healthcare & Pharma',
    description:
      'Medical executive travel and HCP event logistics requiring HIPAA-aware discretion.',
  },
  {
    name: 'Real Estate',
    description:
      'Client tours, property showings, and broker transport across all five boroughs and the Tri-State area.',
  },
  {
    name: 'Technology',
    description:
      'Airport runs, team off-sites, and executive daily travel for NYC-based and visiting tech professionals.',
  },
  {
    name: 'Private Equity & Hedge Funds',
    description:
      'Low-profile, reliable transport for principals and portfolio company executives.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Apply',
    description:
      'Submit the inquiry form below with your company details and estimated usage.',
  },
  {
    number: '02',
    title: 'Account Setup Call',
    description:
      'Your dedicated coordinator will contact you within 24 hours to finalize preferences, authorized bookers, and billing.',
  },
  {
    number: '03',
    title: 'First Booking',
    description:
      'Place your first ride — by phone, email, or WhatsApp — and experience the service firsthand.',
  },
  {
    number: '04',
    title: 'Monthly Invoice',
    description:
      'Receive a single consolidated invoice at month-end, itemized and ready for your finance team.',
  },
];

const faqs = [
  {
    q: 'Is there a minimum number of rides for a corporate account?',
    a: 'No minimum — corporate accounts are available to any company needing reliable, recurring transportation service.',
  },
  {
    q: 'How does monthly invoicing work?',
    a: 'You receive one consolidated invoice at the end of each month with itemized trip details — pickup, destination, date, and amount — formatted for expense reporting.',
  },
  {
    q: 'Can we book for multiple executives across our company?',
    a: 'Yes — one account supports multiple authorized bookers. Each trip is tracked separately on your invoice so individual cost centers can be identified.',
  },
  {
    q: 'How quickly can we get set up?',
    a: 'Typically within 24–48 hours of submitting your account application. Your coordinator will reach out promptly to complete onboarding.',
  },
  {
    q: 'Do you sign NDAs for corporate accounts?',
    a: 'Yes — we sign confidentiality agreements for clients requiring formal documentation. This is standard practice for many of our finance, legal, and entertainment clients.',
  },
];

export default function CorporateAccountsPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const companyName = String(fd.get('companyName') || '').trim();
    const contactName = String(fd.get('contactName') || '').trim();
    const title = String(fd.get('title') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const monthlyRides = String(fd.get('monthlyRides') || '').trim();
    const useCase = String(fd.get('useCase') || '').trim();
    const notes = String(fd.get('notes') || '').trim();

    try {
      const res = await fetch('/api/corporate-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({
          companyName,
          contactName,
          title,
          email,
          phone,
          monthlyRides,
          useCase,
          notes,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setErrorMessage(
          typeof data.error === 'string' ? data.error : 'Could not submit inquiry.'
        );
        setStatus('error');
        return;
      }

      setStatus('sent');
      form.reset();
    } catch {
      setErrorMessage('Network error. Please try again or call us directly.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-brand-offwhite">

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-4">
            Corporate Car Service Accounts — NYC
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl leading-relaxed mb-8">
            Monthly billing, a dedicated account coordinator, and expense-ready invoicing for companies that need reliable executive transportation — without the overhead of managing every booking individually.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#corporate-form"
              className="inline-flex items-center justify-center px-7 py-3 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-sm"
            >
              Apply for an Account
            </a>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-flex items-center justify-center px-7 py-3 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors text-sm"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Companies Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Built around the needs of finance, legal, consulting, and media clients who expect more than a ride.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-brand-white border border-brand-light p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-brand-black mb-2">
                  {b.title}
                </h3>
                <p className="text-brand-grey text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Who We Serve
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Corporate accounts across every major NYC industry vertical.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-brand-offwhite border border-brand-light p-5"
              >
                <h3 className="font-semibold text-brand-black text-sm mb-1">
                  {ind.name}
                </h3>
                <p className="text-brand-grey text-xs leading-relaxed">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            How It Works
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            From inquiry to first ride — typically within 24 to 48 hours.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="font-serif text-5xl font-semibold text-brand-light mb-3 select-none">
                  {step.number}
                </div>
                <h3 className="font-semibold text-brand-black mb-2">{step.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Inquiry Form */}
      <section id="corporate-form" className="py-16 lg:py-20 bg-brand-white scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Request a Corporate Account
          </h2>
          <p className="text-brand-grey mb-10">
            Tell us about your company and usage. We&apos;ll follow up within one business day to finalize your account.
          </p>

          {status === 'sent' ? (
            <div className="bg-brand-offwhite border border-brand-light p-8 text-center">
              <h3 className="font-serif text-xl font-semibold text-brand-black mb-2">
                Application Received
              </h3>
              <p className="text-brand-grey">
                Thank you — your account coordinator will be in touch within 24 hours. For urgent inquiries, call us at{' '}
                <a href={`tel:${CONTACT_PHONE_E164}`} className="text-brand-black hover:underline font-medium">
                  {CONTACT_PHONE_DISPLAY}
                </a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-brand-black mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    placeholder="Acme Capital Partners"
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-brand-black mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    placeholder="Jane Smith"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-brand-black mb-2">
                    Title / Role
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    placeholder="Executive Assistant"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-black mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    placeholder={CONTACT_PHONE_DISPLAY}
                  />
                </div>
                <div>
                  <label htmlFor="monthlyRides" className="block text-sm font-medium text-brand-black mb-2">
                    Estimated Monthly Rides
                  </label>
                  <select
                    id="monthlyRides"
                    name="monthlyRides"
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                  >
                    <option value="">Select a range</option>
                    <option value="1-5">1–5 rides/month</option>
                    <option value="6-15">6–15 rides/month</option>
                    <option value="16-30">16–30 rides/month</option>
                    <option value="30+">30+ rides/month</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-brand-black mb-2">
                  Primary Use Case
                </label>
                <select
                  id="useCase"
                  name="useCase"
                  className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                >
                  <option value="">Select primary use</option>
                  <option value="Airport Transfers">Airport Transfers</option>
                  <option value="Corporate Roadshows">Corporate Roadshows</option>
                  <option value="Executive Daily Travel">Executive Daily Travel</option>
                  <option value="Events & Entertainment">Events &amp; Entertainment</option>
                  <option value="Mixed/Multiple">Mixed / Multiple</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-brand-black mb-2">
                  Notes / Special Requirements
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent resize-y"
                  placeholder="Number of authorized bookers, NDA requirement, preferred vehicle class, anything else we should know…"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Submitting…' : 'Request Corporate Account'}
                </button>
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm" role="alert">
                  {errorMessage ?? 'Something went wrong. Please try again or call us.'}
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-10">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-brand-light pb-8 last:border-0 last:pb-0">
                <dt className="font-semibold text-brand-black mb-2">{faq.q}</dt>
                <dd className="text-brand-grey text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-brand-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-brand-white mb-4">
            Ready to Set Up Your Account?
          </h2>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Apply online and we&apos;ll have your account ready within 24–48 hours. Prefer to speak with someone first? Call us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#corporate-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Apply for an Account
            </a>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
