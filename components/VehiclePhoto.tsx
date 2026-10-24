import Image from 'next/image';

/** 16:9 vehicle photo on white, from public/fleet (see lib/fleet.ts). */
export function VehiclePhoto({
  src,
  alt,
  className,
  sizes = '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw',
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative aspect-[16/9] overflow-hidden rounded-xl bg-brand-white ${className ?? ''}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-contain" />
    </div>
  );
}
