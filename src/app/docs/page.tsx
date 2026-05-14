import { docs } from "@/data/docs";
import { DocsExplorer } from "@/components/docs/DocsExplorer";

export default function DocsPage() {
  const beginner = docs.filter((d) => d.difficulty === "Beginner").length;
  const intermediate = docs.filter((d) => d.difficulty === "Intermediate").length;
  const advanced = docs.filter((d) => d.difficulty === "Advanced").length;
  const lastUpdated = [...docs].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0]
    ?.updatedAt;

  return (
    <section className="min-h-screen py-12 md:py-16">
      <div className="mx-auto max-w-container-max space-y-8 px-gutter">
        <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-7 md:p-10">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
            Documentation catalog
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
            Browse implementation guides for Next.js App Router, TypeScript, metadata SEO, UI
            architecture, and PM2 release operations. Each article includes practical sections,
            command snippets, and related reading paths.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-md border border-outline-variant/20 bg-surface px-4 py-3 text-sm">
              <span className="font-bold text-on-surface">{docs.length}</span> total articles
            </div>
            <div className="rounded-md border border-outline-variant/20 bg-surface px-4 py-3 text-sm">
              <span className="font-bold text-on-surface">5</span> categories
            </div>
            <div className="rounded-md border border-outline-variant/20 bg-surface px-4 py-3 text-sm">
              <span className="font-bold text-on-surface">
                {beginner}/{intermediate}/{advanced}
              </span>{" "}
              beginner/intermediate/advanced
            </div>
            <div className="rounded-md border border-outline-variant/20 bg-surface px-4 py-3 text-sm">
              <span className="font-bold text-on-surface">{lastUpdated}</span> last updated
            </div>
          </div>
        </div>

        <DocsExplorer />
      </div>
    </section>
  );
}
