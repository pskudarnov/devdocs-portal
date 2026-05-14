import Link from "next/link";
import { docs } from "@/data/docs";
import { DocCard } from "@/components/docs/DocCard";

export function DocsPreview() {
  const featured = [...docs].sort((a, b) => b.popularity - a.popularity).slice(0, 6);

  return (
    <section className="px-gutter py-20 md:py-24">
      <div className="mx-auto max-w-container-max">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-on-surface md:text-4xl">Featured docs</h2>
            <p className="mt-3 max-w-2xl text-on-surface-variant">
              High-impact guides most teams read first when onboarding a new frontend engineer.
            </p>
          </div>
          <Link href="/docs" className="hidden text-sm font-bold text-primary sm:inline-flex">
            Browse all articles
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((doc) => (
            <DocCard key={doc.id} doc={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
