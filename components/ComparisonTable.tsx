export type Cell = 'yes' | 'no' | 'varies';

const cellLabel: Record<Cell, string> = { yes: 'Yes', no: 'No', varies: 'Varies' };

const cellStyle: Record<Cell, string> = {
  yes: 'bg-brand-accent-soft text-brand-accent',
  varies: 'bg-brand-tint text-brand-muted',
  no: 'bg-brand-white text-brand-muted ring-1 ring-brand-line',
};

function Pill({ cell }: { cell: Cell }) {
  return (
    <span className={`inline-flex min-w-[4.5rem] justify-center rounded-full px-2.5 py-1 text-xs font-semibold ${cellStyle[cell]}`}>
      {cellLabel[cell]}
    </span>
  );
}

/**
 * Qualitative yes/varies/no comparison. The first column is always "Black car" and is
 * highlighted; `columns` names the alternatives in the order their cells appear in `rows`.
 */
export function ComparisonTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: string[];
  rows: { row: string; cells: Cell[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-brand-line">
      <table className="w-full min-w-[640px] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-brand-tint font-display text-brand-ink">
          <tr>
            <th scope="col" className="px-5 py-4 font-bold">
              <span className="sr-only">Feature</span>
            </th>
            {columns.map((c, i) => (
              <th key={c} scope="col" className={`px-4 py-4 font-bold ${i === 0 ? 'text-brand-accent' : ''}`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-line">
          {rows.map((r) => (
            <tr key={r.row}>
              <th scope="row" className="px-5 py-3.5 font-semibold text-brand-ink">
                {r.row}
              </th>
              {r.cells.map((cell, i) => (
                <td key={columns[i]} className="px-4 py-3.5">
                  <Pill cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
