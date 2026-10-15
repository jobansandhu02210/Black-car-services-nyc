import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Contact Eagle Eye Chauffeur | NYC Black Car Service',
  description:
    'Contact Eagle Eye Chauffeur for NYC black car and airport transfer bookings. Call, WhatsApp, or email 24/7. Flat rates, no surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/contact` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/contact` },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
