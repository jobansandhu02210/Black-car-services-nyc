'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { clsx } from 'clsx';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/book', label: 'Book Now' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
  { href: '/world-cup-2026', label: 'MetLife Stadium' },
  { href: '/us-open-2026', label: 'US Open' },
  { href: '/referrals', label: 'Refer' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-white border-b border-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center shrink-0">
            {logoError ? (
              <span className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black tracking-tight">
                Eagle Eye Chauffeur
              </span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/logo-2026-04-25.png"
                alt="Eagle Eye Chauffeur"
                width={180}
                height={56}
                className="h-12 w-auto lg:h-14 object-contain object-left"
                onError={() => setLogoError(true)}
              />
            )}
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'text-sm font-medium transition-colors',
                  pathname === href
                    ? 'text-brand-black border-b-2 border-brand-black'
                    : 'text-brand-grey hover:text-brand-black'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-brand-grey hover:text-brand-black transition-colors"
              aria-label="Call us"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT_PHONE_DISPLAY}
            </a>
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-brand-black text-brand-white text-sm font-medium hover:bg-brand-charcoal transition-colors"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 text-brand-black"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            className="lg:hidden py-4 border-t border-brand-light"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={clsx(
                      'block py-3 px-2 text-sm font-medium',
                      pathname === href ? 'text-brand-black bg-brand-light' : 'text-brand-grey'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/book"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center py-3 bg-brand-black text-brand-white text-sm font-medium"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
