"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { docs } from "@/data/docs";
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
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-5 md:col-span-2">
            <h2 className="text-xl font-bold text-on-surface">New to the project?</h2>
            <p className="mt-2 text-sm text-on-surface-variant">
              Start with this recommended path to understand setup, architecture, and release flow
              without context switching.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link
                href="/docs/quick-start"
                className="rounded-md border border-outline-variant/25 px-2.5 py-1 transition-[color,background-color,transform] duration-200 ease-out hover:text-primary active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
              >
                Quick Start
              </Link>
              <Link
                href="/docs/repository-conventions"
                className="rounded-md border border-outline-variant/25 px-2.5 py-1 transition-[color,background-color,transform] duration-200 ease-out hover:text-primary active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
              >
                Project Structure
              </Link>
              <Link
                href="/docs/deployment-checklist"
                className="rounded-md border border-outline-variant/25 px-2.5 py-1 transition-[color,background-color,transform] duration-200 ease-out hover:text-primary active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
              >
                Deployment Checklist
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Category overview
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-on-surface-variant">
              {["Getting Started", "API", "Components", "Guides", "Deployment"].map((name) => (
                <li key={name}>
                  {name}: {docs.filter((d) => d.category === name).length}
                </li>
              ))}
            </ul>
          </div>
        </div>

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
                Try broadening your query or reset filters, then start from popular guides below.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="rounded-lg border border-outline-variant/35 bg-surface-container px-4 py-2 text-sm font-semibold text-on-surface transition-[border-color,background-color,transform] duration-200 ease-out hover:border-primary/50 hover:bg-surface-variant active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
                >
                  Reset filters
                </button>
                {["quick-start", "search-experience", "pm2-deployment"].map((slug) => (
                  <Link
                    key={slug}
                    href={`/docs/${slug}`}
                    className="rounded-lg border border-outline-variant/35 px-4 py-2 text-sm transition-[border-color,color,background-color,transform] duration-200 ease-out hover:border-primary/50 hover:text-primary active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100"
                  >
                    Open {slug}
                  </Link>
                ))}
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
