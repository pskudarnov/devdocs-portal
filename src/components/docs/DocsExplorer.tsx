"use client";

import { useMemo, useState } from "react";
import { DocsGrid } from "@/components/docs/DocsGrid";
import { DocsSearch } from "@/components/docs/DocsSearch";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { filterDocs, type DocsSort } from "@/lib/docs";

export function DocsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [sort, setSort] = useState<DocsSort>("popular");

  const filtered = useMemo(
    () => filterDocs(query, category, difficulty, sort),
    [query, category, difficulty, sort],
  );

  const hasActiveFilters =
    query.trim() !== "" || category !== "all" || difficulty !== "all" || sort !== "popular";

  function resetFilters() {
    setQuery("");
    setCategory("all");
    setDifficulty("all");
    setSort("popular");
  }

  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <DocsSidebar />

      <div className="min-w-0 flex-1 space-y-8">
        <div className="surface-panel overflow-hidden rounded-lg p-1">
          <DocsSearch
            query={query}
            category={category}
            difficulty={difficulty}
            sort={sort}
            hasActiveFilters={hasActiveFilters}
            onReset={resetFilters}
            setQuery={setQuery}
            setCategory={setCategory}
            setDifficulty={setDifficulty}
            setSort={(value) => setSort(value as DocsSort)}
          />
        </div>

        <section aria-live="polite" aria-atomic="true" className="pt-2">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
              {filtered.length} articles found
            </h2>
          </div>

          {filtered.length === 0 ? (
            <div className="surface-panel rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-on-surface">No articles found</h3>
              <p className="mt-2 text-sm text-on-surface-variant">
                Try adjusting your search or reset filters.
              </p>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="rounded-lg border border-outline-variant/35 bg-surface-container px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:border-primary/50 hover:bg-surface-variant"
                >
                  Reset filters
                </button>
              </div>
            </div>
          ) : (
            <DocsGrid docs={filtered} />
          )}
        </section>
      </div>
    </div>
  );
}
