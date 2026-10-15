import Link from 'next/link';
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  WHATSAPP_BOOKING_URL,
} from '@/lib/contact';

/**
 * High-visibility reservation strip (tablet/desktop). Mobile relies on MobileBottomBar.
 */
export function LeadCaptureStrip() {
  return (
    <div className="hidden md:block bg-brand-black border-b border-brand-dark text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <span className="text-brand-silver font-medium">
            Need a chauffeur?{' '}
            <span className="text-brand-white">24/7 reservations</span>
          </span>
          <span className="hidden lg:inline text-brand-dark" aria-hidden="true">
            |
          </span>
          <a
            href={`tel:${CONTACT_PHONE_E164}`}
            className="font-semibold text-brand-white hover:text-brand-offwhite underline-offset-2 hover:underline"
          >
            Call {CONTACT_PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#25D366] hover:text-[#1ebe5d] underline-offset-2 hover:underline"
          >
            WhatsApp
          </a>
          <Link
            href="/book"
            className="inline-flex items-center rounded-sm bg-brand-white px-4 py-1.5 text-sm font-semibold text-brand-black hover:bg-brand-offwhite transition-colors"
          >
            Instant quote
          </Link>
        </div>
      </div>
    </div>
  );
}
