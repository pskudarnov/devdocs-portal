import Link from "next/link";
import { docs } from "@/data/docs";
import { DocCard } from "@/components/docs/DocCard";
import { ArrowRight, Flame } from "lucide-react";

export function DocsPreview() {
  return (
    <section className="py-24 px-gutter relative">
      <div className="mx-auto max-w-container-max">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div className="animate-fade-in-up opacity-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-tertiary/20 bg-tertiary/5 mb-6">
              <Flame className="h-3.5 w-3.5 text-tertiary" />
              <span className="text-[10px] font-bold text-tertiary tracking-wider uppercase">Trending Now</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
              Popular Guides
            </h2>
            <p className="mt-3 text-on-surface-variant max-w-lg">
              The most-read articles this week, curated by our engineering team.
            </p>
          </div>
          <Link
            href="/docs"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all animate-fade-in-up opacity-0 delay-200"
          >
            Browse all docs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards grid with stagger */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {docs.slice(0, 4).map((doc, idx) => (
            <div key={doc.id} className={`animate-fade-in-up opacity-0 delay-${(idx + 1) * 100}`}>
              <DocCard doc={doc} />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            Browse all docs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
