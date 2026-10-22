import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { GtagLeadEvents } from '@/components/GtagLeadEvents';
import { LeadCaptureStrip } from '@/components/LeadCaptureStrip';
import { LocalBusinessJsonLd } from '@/components/JsonLd';
import { WebSiteJsonLd } from '@/components/JsonLd';
import { SplashScreen } from '@/components/SplashScreen';
import MobileBottomBar from '@/components/MobileBottomBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { ogDefaults } from '@/lib/og';
import { defaultSiteDescription, siteKeywords } from '@/lib/seo';

const poppins = Poppins({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const siteUrl = getSiteUrl();
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID?.trim();
const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Black Car Service NYC | Airport & Long-Distance Car Service',
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultSiteDescription,
  keywords: [...siteKeywords],
  authors: [{ name: SITE_NAME, url: siteUrl }],
  creator: SITE_NAME,
  openGraph: {
    ...ogDefaults,
    title: 'Black Car Service NYC | Airport & Long-Distance Car Service',
    description: defaultSiteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Car Service NYC | Airport & Long-Distance Car Service',
    description: defaultSiteDescription,
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body className="font-sans min-h-screen flex flex-col">
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <SplashScreen />
        <Header />
        <LeadCaptureStrip />
        {gaMeasurementId ? <GtagLeadEvents /> : null}
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
        {gaMeasurementId && <GoogleAnalytics gaId={gaMeasurementId} />}
      </body>
    </html>
  );
}
