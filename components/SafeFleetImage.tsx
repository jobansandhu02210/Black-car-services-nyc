'use client';

import { useState } from 'react';

/**
 * Tries local image first (e.g. /fleet-business-sedan.png). If it fails to load (404 or missing file), shows fallback URL (e.g. Unsplash). Drop your images in public/ and they will appear automatically.
 */
export function SafeFleetImage({
  localSrc,
  fallbackSrc,
  alt,
  className = '',
  ...props
}: {
  localSrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [src, setSrc] = useState(localSrc);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setSrc(fallbackSrc)}
      {...props}
    />
  );
}
