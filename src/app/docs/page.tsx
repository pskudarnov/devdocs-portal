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
    <section className="relative min-h-screen py-16">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">Documentation</h1>
          <p className="mt-4 text-lg text-on-surface-variant max-w-2xl">
            Search, filter and browse developer docs by category and complexity. Built for high-performance development teams.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <DocsSidebar />
          
          <div className="min-w-0 flex-1 space-y-8">
            <div className="glass rounded-2xl p-1 border border-outline-variant/20 shadow-xl overflow-hidden">
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
            </div>
            
            <div className="pt-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                  {filtered.length} Articles Found
                </h3>
              </div>
              <DocsGrid docs={filtered} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
