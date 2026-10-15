'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Marks lead-intent clicks for GA4 when NEXT_PUBLIC_GA_ID is set (gtag loaded by AnalyticsPlaceholder).
 * Configure conversions in GA4 using events: phone_click, whatsapp_click, book_navigation_click.
 */
export function GtagLeadEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.('a[href]');
      if (!el) return;
      const href = el.getAttribute('href');
      if (!href || typeof window.gtag !== 'function') return;

      if (href.startsWith('tel:')) {
        window.gtag('event', 'phone_click', {
          event_category: 'lead',
          event_label: href.replace(/^tel:/, ''),
        });
        return;
      }
      if (href.includes('wa.me') || href.includes('api.whatsapp.com/send')) {
        window.gtag('event', 'whatsapp_click', { event_category: 'lead' });
        return;
      }
      try {
        const path = new URL(href, window.location.origin).pathname;
        if (path === '/book' || path.startsWith('/book/')) {
          window.gtag('event', 'book_navigation_click', {
            event_category: 'lead',
            event_label: path,
          });
        }
      } catch {
        /* ignore invalid URLs */
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
