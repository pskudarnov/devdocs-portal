import Link from "next/link";

const workflowSteps = [
  "Find the right guide",
  "Read structured examples",
  "Copy production-ready snippets",
  "Ship with release checks",
];

const builtCards = [
  "Typed content model",
  "Search and filter UX",
  "Metadata and sitemap",
  "Accessible navigation",
  "Dark and light theme",
  "Deployment checklist",
];

const categoryBlocks = [
  { title: "Getting Started", count: 5, topics: "Installation, env vars, conventions" },
  { title: "API", count: 4, topics: "Error model, pagination, typed responses" },
  { title: "Components", count: 5, topics: "Tokens, theme, navigation, code blocks" },
  { title: "Guides", count: 5, topics: "Search, SEO metadata, release workflow" },
  { title: "Deployment", count: 5, topics: "Build, PM2, smoke tests, rollback" },
];

export function FeatureGrid() {
  return (
    <section className="reveal reveal-delay-1 border-y border-outline-variant/10 bg-surface-container-low/50 py-20 md:py-24">
      <div className="mx-auto max-w-[1160px] space-y-12 px-gutter">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-6 md:p-8">
            <h2 className="text-2xl font-bold text-on-surface">Documentation workflow</h2>
            <ol className="mt-5 space-y-3 text-sm text-on-surface-variant">
              {workflowSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-6 md:p-8">
            <h2 className="text-2xl font-bold text-on-surface">Release confidence</h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-on-surface-variant">
              {["typecheck", "lint", "build", "smoke test", "PM2 restart"].map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-outline-variant/25 bg-surface px-3 py-2"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-on-surface">What&apos;s inside</h2>
            <Link
              href="/docs"
              className="text-sm font-bold text-primary transition-colors duration-200 ease-out hover:text-primary/80"
            >
              View full catalog
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {categoryBlocks.map((block) => (
              <article
                key={block.title}
                className="rounded-lg border border-outline-variant/20 bg-surface-container p-4"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-primary">
                  {block.count} articles
                </div>
                <h3 className="mt-2 text-lg font-bold text-on-surface">{block.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">{block.topics}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-3xl font-bold text-on-surface">
            Built like a real docs product
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {builtCards.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-outline-variant/20 bg-surface-container p-4 text-sm font-medium text-on-surface-variant"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
