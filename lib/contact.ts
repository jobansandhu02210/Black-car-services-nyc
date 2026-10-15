/** E.164 for tel: links */
export const CONTACT_PHONE_E164 = '+19299196499';

/** Human-readable US format */
export const CONTACT_PHONE_DISPLAY = '(929) 919-6499';

/** Secondary phone number */
export const CONTACT_PHONE_2_E164 = '+19294244201';
export const CONTACT_PHONE_2_DISPLAY = '(929) 424-4201';

/** Booking notifications and primary inquiries */
export const CONTACT_EMAIL_BOOKINGS = 'info@eagleeyechauffeur.com';

/** WhatsApp number (E.164 without +) used in WhatsApp click-to-chat links */
export const CONTACT_WHATSAPP_NUMBER = '19299196499';

/**
 * WhatsApp click-to-chat base. Uses api.whatsapp.com/send (WhatsApp's documented
 * click-to-chat endpoint) instead of wa.me — wa.me just 302-redirects to this URL,
 * which SEO crawlers report as a "link to redirect" on every page that has a WhatsApp CTA.
 */
const WHATSAPP_SEND_BASE = `https://api.whatsapp.com/send?phone=${CONTACT_WHATSAPP_NUMBER}`;

/** Pre-filled WhatsApp booking message with a form template */
export const WHATSAPP_BOOKING_URL =
  `${WHATSAPP_SEND_BASE}&text=${encodeURIComponent(
    'Hi Eagle Eye Chauffeur! I\'d like to book a ride.\n\n' +
    '📅 Date:\n' +
    '⏰ Pick-up Time:\n' +
    '📍 Pick-up Address:\n' +
    '📍 Drop-off Address:\n' +
    '✈️ Flight Number (if airport):\n' +
    '👤 Full Name:\n' +
    '📱 Phone:\n' +
    '🚗 Vehicle (Business/First Class):\n' +
    '📝 Special Requests:'
  )}`;

/** Short WhatsApp URL for general inquiries */
export const WHATSAPP_URL = WHATSAPP_SEND_BASE;
