import Link from 'next/link';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { SITE_NAME } from '@/lib/site';

const services = [
  { href: '/black-car-service-nyc', label: 'Black Car Service NYC' },
  { href: '/services/chauffeur-service', label: 'Chauffeur Service' },
  { href: '/services/airport', label: 'Airport Car Service' },
  { href: '/services/corporate', label: 'Corporate Car Service' },
  { href: '/services/hourly', label: 'Hourly Chauffeur Service' },
  { href: '/services/limousine-service', label: 'Limousine Service' },
  { href: '/services/sprinter-van-service', label: 'Sprinter Van Service' },
  { href: '/services/long-distance', label: 'Long-Distance Car Service' },
  { href: '/services/wedding', label: 'Wedding Car Service' },
  { href: '/services/executive-vip', label: 'Executive VIP Service' },
  { href: '/services/corporate-roadshow', label: 'Corporate Roadshow Service' },
];

const company = [
  { href: '/fleet', label: 'Our Fleet' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/book', label: 'Book Now' },
  { href: '/pricing', label: 'Pricing & Rates' },
  { href: '/world-cup-2026', label: 'MetLife Stadium' },
  { href: '/us-open-2026', label: 'US Open 2026' },
  { href: '/referrals', label: 'Refer & Earn $50' },
  { href: '/blog', label: 'Blog' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold text-brand-white tracking-tight">
              {SITE_NAME}
            </Link>
            <p className="mt-4 text-brand-silver text-sm max-w-xs">
              Private black cars from New York City to New Jersey, Connecticut, Philadelphia and Washington, DC.
            </p>
          </div>

          <div>
            <h3 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-brand-silver hover:text-brand-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-brand-silver hover:text-brand-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-brand-silver text-sm">
              <li>
                <a href={`tel:${CONTACT_PHONE_E164}`} className="hover:text-brand-white transition-colors">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="hover:text-brand-white transition-colors">
                  {CONTACT_EMAIL_BOOKINGS}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-white transition-colors"
                >
                  <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-dark flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-silver text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-brand-silver hover:text-brand-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-brand-silver hover:text-brand-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/site-map" className="text-brand-silver hover:text-brand-white transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
