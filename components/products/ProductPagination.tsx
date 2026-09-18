"use client";

import { Icon } from "@/components/hg";

/* Page numbers with an ellipsis once the run gets long: first, last, the
   current page and its neighbours. Returns e.g. [1, "…", 4, 5, 6, "…", 9]. */
function pageRun(current: number, total: number): (number | "gap")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const run: (number | "gap")[] = [1];
  const from = Math.max(2, current - 1);
  const to = Math.min(total - 1, current + 1);
  if (from > 2) run.push("gap");
  for (let page = from; page <= to; page++) run.push(page);
  if (to < total - 1) run.push("gap");
  run.push(total);
  return run;
}

export function ProductPagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav className="hg-pagination" aria-label="Pagination des produits">
      <button
        type="button"
        className="hg-pagination__step"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        <Icon name="arrowLeft" size={16} />
        <span className="hg-pagination__stepLabel">Précédent</span>
      </button>

      <ul className="hg-pagination__pages">
        {pageRun(page, totalPages).map((entry, i) =>
          entry === "gap" ? (
            <li key={`gap-${i}`} aria-hidden="true" className="hg-pagination__gap">
              …
            </li>
          ) : (
            <li key={entry}>
              <button
                type="button"
                className="hg-pagination__page hg-mono"
                data-current={entry === page ? "true" : undefined}
                aria-current={entry === page ? "page" : undefined}
                aria-label={`Page ${entry}`}
                onClick={() => onChange(entry)}
              >
                {entry}
              </button>
            </li>
          )
        )}
      </ul>

      <button
        type="button"
        className="hg-pagination__step"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
      >
        <span className="hg-pagination__stepLabel">Suivant</span>
        <Icon name="arrowRight" size={16} />
      </button>
    </nav>
  );
}
