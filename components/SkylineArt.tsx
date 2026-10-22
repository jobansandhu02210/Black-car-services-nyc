/**
 * Brand motif: a single-stroke NYC skyline in line art (docs/REFERENCE-RESEARCH.md §5.5).
 * Drawn from a list of building outlines so it stays light (no image request) and
 * inherits colour from `currentColor`.
 */

// Each entry: [width, height, roof]. 'spire' = stepped crown with antenna (Empire State-like),
// 'taper' = chamfered top with mast (One WTC-like), 'step' = setback corners.
type Roof = 'flat' | 'spire' | 'taper' | 'step';
const BUILDINGS: [number, number, Roof][] = [
  [60, 34, 'flat'], [40, 52, 'flat'], [55, 40, 'step'], [35, 70, 'flat'], [50, 48, 'flat'],
  [46, 120, 'taper'], [40, 62, 'flat'], [60, 44, 'step'], [30, 80, 'flat'], [50, 58, 'flat'],
  [36, 100, 'spire'], [55, 66, 'step'], [40, 50, 'flat'], [62, 74, 'flat'], [34, 88, 'step'],
  [50, 54, 'flat'], [44, 70, 'flat'], [60, 40, 'flat'], [38, 64, 'step'], [52, 46, 'flat'],
  [40, 82, 'flat'], [56, 52, 'flat'], [36, 60, 'step'], [60, 38, 'flat'], [44, 48, 'flat'],
  [58, 30, 'flat'],
];

const BASE = 150;

/** Roof outline from the building's left edge to its right edge (relative x, absolute y). */
function roof(w: number, top: number, kind: Roof): [number, number][] {
  const c = w / 2;
  switch (kind) {
    case 'step':
      return [[0, top + 10], [8, top + 10], [8, top], [w - 8, top], [w - 8, top + 10], [w, top + 10]];
    case 'spire':
      return [
        [0, top + 18], [6, top + 18], [6, top + 8], [c - 4, top + 8], [c - 4, top],
        [c, top - 26], [c + 4, top], [c + 4, top + 8], [w - 6, top + 8], [w - 6, top + 18], [w, top + 18],
      ];
    case 'taper':
      return [[0, top + 14], [8, top], [c - 1, top], [c, top - 30], [c + 1, top], [w - 8, top], [w, top + 14]];
    default:
      return [[0, top], [w, top]];
  }
}

function skylinePath(): { d: string; width: number } {
  let x = 0;
  const pts: [number, number][] = [[0, BASE]];
  for (const [w, h, kind] of BUILDINGS) {
    for (const [rx, y] of roof(w, BASE - h, kind)) pts.push([x + rx, y]);
    pts.push([x + w, BASE]);
    x += w;
  }
  return { d: 'M' + pts.map(([px, py]) => `${px} ${py}`).join(' L'), width: x };
}

const { d: PATH, width: WIDTH } = skylinePath();

export function SkylineArt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${WIDTH} ${BASE + 2}`}
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATH} stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
