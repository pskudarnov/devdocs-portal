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
          <DocsGrid docs={filtered} />
        </section>
      </div>
    </div>
  );
}
