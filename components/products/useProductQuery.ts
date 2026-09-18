"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { SORT_OPTIONS, type SortValue, type StockState } from "@/lib/products";

export type Filters = {
  q: string;
  categories: string[];
  origins: string[];
  stock: StockState[];
  min: number | null;
  max: number | null;
  sort: SortValue;
  page: number;
};

export const EMPTY_FILTERS: Filters = {
  q: "",
  categories: [],
  origins: [],
  stock: [],
  min: null,
  max: null,
  sort: "pertinence",
  page: 1,
};

const SORT_VALUES = SORT_OPTIONS.map((option) => option.value) as readonly string[];

const list = (value: string | null) => (value ? value.split(",").filter(Boolean) : []);

const number = (value: string | null) => {
  if (value === null || value.trim() === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
};

function parse(params: URLSearchParams): Filters {
  const sort = params.get("sort");
  const page = Number(params.get("page"));
  return {
    q: params.get("q") ?? "",
    categories: list(params.get("category")),
    origins: list(params.get("origin")),
    stock: list(params.get("stock")).filter((v): v is StockState => v === "in" || v === "out"),
    min: number(params.get("min")),
    max: number(params.get("max")),
    sort: sort && SORT_VALUES.includes(sort) ? (sort as SortValue) : "pertinence",
    page: Number.isInteger(page) && page > 1 ? page : 1,
  };
}

/* Only what differs from the default is written, so a plain /products stays a
   plain URL and a filtered one carries exactly its filters. */
function serialize(filters: Filters): string {
  const params = new URLSearchParams();
  if (filters.q.trim()) params.set("q", filters.q.trim());
  if (filters.categories.length) params.set("category", filters.categories.join(","));
  if (filters.origins.length) params.set("origin", filters.origins.join(","));
  if (filters.stock.length) params.set("stock", filters.stock.join(","));
  if (filters.min !== null) params.set("min", String(filters.min));
  if (filters.max !== null) params.set("max", String(filters.max));
  if (filters.sort !== "pertinence") params.set("sort", filters.sort);
  if (filters.page > 1) params.set("page", String(filters.page));
  return params.toString();
}

/* Filter state lives in React and is mirrored into the query string.

   That order matters: typing filters the grid on the keystroke, while the URL
   catches up on a short debounce — a router write per character would be both
   noisy and slower than the list it describes. The URL still wins whenever it
   changes from outside (a shared link, Back, Forward), which is what keeps the
   two honest. */
export function useProductQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsKey = searchParams.toString();

  const [filters, setFilters] = useState<Filters>(() => parse(new URLSearchParams(paramsKey)));
  const [seenKey, setSeenKey] = useState(paramsKey);

  // Adjusting state during render is React's documented pattern for deriving
  // from a changed input; an effect would paint the stale list once first.
  if (seenKey !== paramsKey) {
    setSeenKey(paramsKey);
    if (paramsKey !== serialize(filters)) setFilters(parse(new URLSearchParams(paramsKey)));
  }

  useEffect(() => {
    const next = serialize(filters);
    if (next === paramsKey) return;
    const id = window.setTimeout(() => {
      router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
    }, 250);
    return () => window.clearTimeout(id);
  }, [filters, paramsKey, pathname, router]);

  /* Any change to a filter sends the reader back to the first page — page 3 of
     a four-item result is a dead end. */
  const update = useCallback((next: Partial<Filters>) => {
    setFilters((current) => ({
      ...current,
      ...next,
      page: next.page ?? (Object.keys(next).length ? 1 : current.page),
    }));
  }, []);

  const reset = useCallback(() => setFilters(EMPTY_FILTERS), []);

  return { filters, update, reset };
}

/** How many facets are narrowing the list — the number on the Filtres button. */
export function countActive(filters: Filters): number {
  return (
    filters.categories.length +
    filters.origins.length +
    filters.stock.length +
    (filters.min !== null ? 1 : 0) +
    (filters.max !== null ? 1 : 0) +
    (filters.q.trim() ? 1 : 0)
  );
}
