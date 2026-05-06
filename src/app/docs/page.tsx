"use client";

import { useMemo, useState } from "react";
import { DocsSearch } from "@/components/docs/DocsSearch";
import { DocsGrid } from "@/components/docs/DocsGrid";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { filterDocs } from "@/lib/docs";

export default function DocsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [sort, setSort] = useState<"popular" | "updated" | "az">("popular");

  const filtered = useMemo(
    () => filterDocs(query, category, difficulty, sort),
    [query, category, difficulty, sort],
  );

  return (
    <section className="py-10">
      <h1 className="text-3xl font-semibold">Documentation</h1>
      <p className="mt-2 text-sm text-slate-600">
        Search, filter and browse developer docs by category and complexity.
      </p>
      <div className="mt-6 flex gap-6">
        <DocsSidebar />
        <div className="min-w-0 flex-1 space-y-4">
          <DocsSearch
            query={query}
            category={category}
            difficulty={difficulty}
            sort={sort}
            setQuery={setQuery}
            setCategory={setCategory}
            setDifficulty={setDifficulty}
            setSort={(v) => setSort(v as "popular" | "updated" | "az")}
          />
          <DocsGrid docs={filtered} />
        </div>
      </div>
    </section>
  );
}
