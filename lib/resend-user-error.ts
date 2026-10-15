/**
 * Maps Resend API errors to actionable copy for the website (avoid raw provider jargon).
 */
export function publicEmailSendError(errorMessage: string | undefined): string {
  const raw = (errorMessage || '').trim();
  const m = raw.toLowerCase();

  if (!raw) {
    return 'We could not send the email. Please try again in a moment or contact us by phone.';
  }

  if (
    m.includes('domain') ||
    m.includes('verify') ||
    m.includes('not verified') ||
    m.includes('invalid from') ||
    m.includes('from address') ||
    m.includes('sender') ||
    m.includes('not allowed')
  ) {
    return (
      'Email from your domain is not accepted yet. In Vercel, set EMAIL_FROM to exactly the sender Resend expects, e.g. ' +
      'Eagle Eye Chauffeur <bookings@yourdomain.com> — the part after @ must match a domain that shows Verified in Resend ' +
      '(Domains). After changing env vars, redeploy. Until DNS is verified, you can send tests from onboarding@resend.dev only.'
    );
  }

  return raw;
}
