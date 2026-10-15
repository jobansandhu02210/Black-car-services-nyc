import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute:
      'Corporate Car Service Account NYC | Monthly Billing | Eagle Eye',
  },
  description:
    'Set up a corporate car service account with Eagle Eye Chauffeur. Monthly invoicing, dedicated coordinator, executive black car for NYC companies.',
  keywords: [
    'corporate car service account NYC',
    'monthly billing black car Manhattan',
    'fleet car service for companies NYC',
    'executive assistant car service NYC',
    'corporate chauffeur account',
  ],
  alternates: { canonical: `${getSiteUrl()}/corporate-accounts` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/corporate-accounts`,
    title: 'Corporate Car Service Account NYC | Monthly Billing | Eagle Eye',
    description:
      'Set up a corporate car service account with Eagle Eye Chauffeur. Monthly invoicing, dedicated coordinator, executive black car for NYC companies.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
