'use client';

import { useState, useEffect } from 'react';

const SPLASH_STORAGE_KEY = 'eagle-eye-splash-shown';

export function SplashScreen() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(SPLASH_STORAGE_KEY)) return;

    setShow(true);
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setMounted(true)));
    const t1 = setTimeout(() => setFadeOut(true), 2600);
    const t2 = setTimeout(() => {
      sessionStorage.setItem(SPLASH_STORAGE_KEY, '1');
      setShow(false);
    }, 3400);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ease-out ${
        !mounted ? 'opacity-0' : fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      // Use true black to blend with the logo image background (avoids a visible seam vs brand black #0a0a0a).
      style={{ pointerEvents: 'none', backgroundColor: '#000000' }}
      aria-hidden="true"
    >
      {logoError ? (
        <span className="font-serif text-4xl lg:text-5xl font-semibold text-white tracking-tight text-center">
          Eagle Eye Chauffeur
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/logo-splash-2026-04-25.png"
          alt="Eagle Eye Chauffeur"
          width={360}
          height={180}
          className="object-contain w-[min(86vw,360px)] h-auto"
          onError={() => setLogoError(true)}
        />
      )}
    </div>
  );
}
