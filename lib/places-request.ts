import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getSiteUrl } from '@/lib/site';

function siteUrlHostnames(): string[] {
  const hosts: string[] = [];
  try {
    const host = new URL(getSiteUrl()).hostname.toLowerCase();
    if (host) {
      hosts.push(host);
      if (host.startsWith('www.')) {
        hosts.push(host.slice(4));
      } else {
        hosts.push(`www.${host}`);
      }
    }
  } catch {
    /* ignore */
  }
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      const h = new URL(raw).hostname.toLowerCase();
      if (h && !hosts.includes(h)) hosts.push(h);
    } catch {
      /* ignore */
    }
  }
  return hosts;
}

export function hostnameAllowed(hostname: string): boolean {
  const h = hostname.toLowerCase();
  if (h === 'localhost' || h === '127.0.0.1') return true;
  if (h === 'vercel.app' || h.endsWith('.vercel.app')) return true;
  if (h === 'eagleeyechauffeur.com' || h.endsWith('.eagleeyechauffeur.com')) return true;

  for (const siteHost of siteUrlHostnames()) {
    if (h === siteHost) return true;
  }

  const raw = process.env.PLACES_ALLOWED_HOST_SUFFIXES;
  if (raw) {
    for (const suffix of raw
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean)) {
      if (h === suffix || h.endsWith(`.${suffix}`)) return true;
    }
  }
  return false;
}

/** Vercel / proxies: actual visitor-facing host */
function requestHostname(request: NextRequest): string | null {
  const forwarded = request.headers.get('x-forwarded-host');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()?.split(':')[0]?.toLowerCase();
    if (first) return first;
  }
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase();
  return host || null;
}

function hostnameFromBrowserHeaders(request: NextRequest): string | null {
  const referer = request.headers.get('referer');
  const origin = request.headers.get('origin');
  for (const u of [referer, origin]) {
    if (!u) continue;
    try {
      return new URL(u).hostname;
    } catch {
      continue;
    }
  }
  return null;
}

/**
 * Allows /api/places/*, /api/booking/notify, and /api/contact when:
 * - The browser marks the request same-origin / same-site (so booking & contact work on any custom
 *   domain without editing env), or
 * - Host / Referer / Origin matches the allowlist (Places + explicit domains).
 */
export function assertAllowedPlacesCaller(request: NextRequest): NextResponse | null {
  const reqHost = requestHostname(request);

  const secFetchSite = request.headers.get('sec-fetch-site');
  if (
    reqHost &&
    (secFetchSite === 'same-origin' || secFetchSite === 'same-site')
  ) {
    return null;
  }

  if (reqHost && hostnameAllowed(reqHost)) {
    return null;
  }

  const fromRef = hostnameFromBrowserHeaders(request);
  if (fromRef && hostnameAllowed(fromRef)) {
    return null;
  }

  return NextResponse.json(
    {
      error:
        'Request blocked (host check). Set NEXT_PUBLIC_SITE_URL in Vercel to your live URL, or open the site from an allowed domain.',
    },
    { status: 403 }
  );
}
