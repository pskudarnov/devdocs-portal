import Link from "next/link";
import { docs } from "@/data/docs";
import { DocCard } from "@/components/docs/DocCard";
import { ArrowRight, Flame } from "lucide-react";

const cardDelays = ["delay-100", "delay-200", "delay-300", "delay-500"] as const;

export function DocsPreview() {
  return (
    <section className="px-gutter py-20 md:py-24">
      <div className="mx-auto max-w-container-max">
        <div className="mb-12 flex items-end justify-between gap-8 md:mb-16">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tertiary/20 bg-tertiary/5 px-3 py-1.5">
              <Flame className="h-3.5 w-3.5 text-tertiary" />
              <span className="text-[10px] font-bold text-tertiary tracking-wider uppercase">
                Trending Now
              </span>
            </div>
            <h2 className="text-3xl font-bold text-on-surface md:text-4xl">Popular Guides</h2>
            <p className="mt-3 text-on-surface-variant max-w-lg">
              The most-read articles this week, curated by our engineering team.
            </p>
          </div>
          <Link
            href="/docs"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all animate-fade-in-up delay-200"
          >
            Browse all docs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards grid with stagger */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {docs.slice(0, 4).map((doc, idx) => (
            <div key={doc.id} className={`animate-fade-in-up ${cardDelays[idx]}`}>
              <DocCard doc={doc} />
            </div>
          ))}
        </div>

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
