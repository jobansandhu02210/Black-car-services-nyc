/**
 * Line-art vehicle placeholder. Stands in for photos until the owner supplies real pictures of
 * their own cars (TODO(owner)) — template/stock photos must not be used.
 */
export function VehicleArt({ kind = 'sedan', className }: { kind?: 'sedan' | 'suv'; className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-end rounded-xl bg-gradient-to-br from-brand-sky to-brand-tint px-4 pb-3 ${className ?? 'h-28'}`}>
      <svg viewBox="0 0 120 40" className="h-12 w-auto text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        {kind === 'suv' ? (
          <path d="M4 30h112v-8l-10-3-10-11H30L20 19 6 21z" />
        ) : (
          <path d="M4 30h112v-6l-14-4-14-10H40L26 20 8 23z" />
        )}
        <circle cx="30" cy="31" r="6" fill="white" />
        <circle cx="92" cy="31" r="6" fill="white" />
      </svg>
    </div>
  );
}
