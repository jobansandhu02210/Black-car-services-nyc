import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import CopyCodeButton, { CopyCodeLarge } from '@/components/CopyCodeButton';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'Refer a Friend — Earn $50 | Eagle Eye Chauffeur NYC',
  },
  description:
    'Refer a friend to Eagle Eye Chauffeur and earn $50 credit on their first booking. Great for corporate clients & airport transfers.',
  keywords: [
    'refer a friend car service',
    'Eagle Eye referral program',
    'NYC chauffeur referral',
    'group transport referral NYC',
    'referral discount car service NYC',
  ],
  alternates: { canonical: `${getSiteUrl()}/referrals` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/referrals`,
    title: 'Refer a Friend — Earn $50 | Eagle Eye Chauffeur NYC',
    description:
      'Refer a friend to Eagle Eye Chauffeur and earn $50 credit when they book. Share with corporate teams, event groups, and travelers.',
  },
};

const steps = [
  {
    title: '1. Share Your Code',
    body: 'Share the referral code EAGLE50 with your friends, family, or colleagues. Post it on social media, text it to your group chats, or mention it at the tailgate.',
  },
  {
    title: '2. They Book a Ride',
    body: 'When someone uses your code to book their first ride with Eagle Eye — airport transfer, night out, or any trip — they get 10% off and you earn credit.',
  },
  {
    title: '3. You Earn $50',
    body: 'Once their ride is complete, we add $50 credit to your account. Use it on your next booking. No limit on how many people you can refer.',
  },
  {
    title: '4. Group Travel Bonus',
    body: 'Refer 5+ people who book a ride and earn a $300 bonus on top of your $50 per referral. Perfect for corporate teams and event groups!',
  },
];

const faqs = [
  {
    q: 'Is there a limit to how many people I can refer?',
    a: 'No limit. Refer as many as you want. Each successful booking earns you $50 credit.',
  },
  {
    q: 'How do I get my $50 credit?',
    a: 'Credit is automatically added to your account after your referral completes their first ride. You\'ll get an email notification.',
  },
  {
    q: 'Does the person I refer get anything?',
    a: 'Yes — they get 10% off their first booking when they use your referral code.',
  },
  {
    q: 'Can I use my credit for any type of booking?',
    a: 'Absolutely. Credit can be applied to any Eagle Eye Chauffeur service — airport transfers, corporate travel, event transportation, and more.',
  },
  {
    q: 'How do I share my code?',
    a: 'Text or email your friends your referral code. Or share our booking link and mention your code. We\'re working on a dedicated referral link — coming soon!',
  },
];

export default function ReferralsPage() {
  return (
    <div className="bg-brand-offwhite">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] bg-brand-black flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-charcoal/80 border border-brand-dark text-brand-silver text-sm mb-6">
              🎉 Limited Time
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white leading-tight">
              Refer a Friend, <br />
              <span className="text-brand-white">Earn $50</span>
            </h1>
            <p className="mt-4 text-lg text-brand-silver max-w-xl">
              Share Eagle Eye Chauffeur with your network. When they book their first ride, we add $50 to your account. Perfect for corporate travel, event groups, and airport runs.
            </p>
            <div className="mt-8 inline-flex items-center gap-4 px-6 py-4 bg-brand-dark border border-brand-dark">
              <span className="text-brand-silver text-sm">Your Referral Code:</span>
              <span className="font-mono text-xl font-bold tracking-widest text-brand-white">EAGLE50</span>
              <CopyCodeButton code="EAGLE50" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[url('/assets/EEC-Logo.svg')] bg-contain bg-center bg-no-repeat mx-auto mb-4 opacity-60" />
                <h3 className="font-serif text-lg font-semibold text-brand-black mb-2">{step.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Bonus */}
      <section className="py-16 lg:py-24 bg-brand-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-brand-white mb-4">
            Group Referral Bonus
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-2xl mx-auto">
            Refer 5+ people who book a ride and earn a <strong className="text-brand-white">$300 bonus</strong> on top of your $50 per referral. Perfect for corporate teams and event groups.
          </p>
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mb-8">
            <div className="bg-brand-dark p-6">
              <div className="text-3xl font-bold text-brand-white">$50</div>
              <div className="text-sm text-brand-silver mt-1">Per Referral</div>
            </div>
            <div className="bg-brand-dark p-6 border border-green-600">
              <div className="text-3xl font-bold text-green-400">$300</div>
              <div className="text-sm text-brand-silver mt-1">Group Bonus</div>
            </div>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-light transition-colors"
          >
            Book Your Ride & Use a Referral Code
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-12">
            Referral Program FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-brand-light pb-6">
                <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                <p className="text-brand-grey text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-brand-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-brand-white mb-4">
            Start Referring Today
          </h2>
          <p className="text-brand-silver mb-8">
            Your code is <strong className="text-brand-white">EAGLE50</strong>. Share it, earn $50 per booking, and help your crew travel in style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CopyCodeLarge code="EAGLE50" />
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-white text-brand-white font-medium hover:bg-brand-charcoal transition-colors gap-2"
            >
              <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Share on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
