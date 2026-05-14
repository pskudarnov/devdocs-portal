import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture | DevDocs Premium",
  description:
    "Architecture overview for content model, routing, UI layers, SEO, and deployment workflow.",
};

const layers = [
  [
    "Content model",
    "Typed docs dataset in src/data/docs.ts with tags, outcomes, callouts, and related links.",
  ],
  [
    "Routing",
    "App Router pages for landing, docs catalog, dynamic article routes, changelog, and resources.",
  ],
  [
    "Components",
    "Reusable UI and layout modules in src/components with docs-specific and landing-specific blocks.",
  ],
  [
    "Search/filter layer",
    "Client-side filtering and sorting in DocsExplorer backed by a typed filter utility.",
  ],
  [
    "SEO layer",
    "Metadata API, sitemap generation, robots output, and canonical URL configuration.",
  ],
  [
    "Deployment layer",
    "Build verification and PM2 runtime restart with smoke-test endpoint checks.",
  ],
];

export default function ArchitecturePage() {
  return (
    <section className="min-h-screen py-12 md:py-16">
      <div className="mx-auto max-w-container-max space-y-8 px-gutter">
        <header className="rounded-lg border border-outline-variant/20 bg-surface-container p-7">
          <h1 className="text-4xl font-bold text-on-surface md:text-5xl">Architecture</h1>
          <p className="mt-3 max-w-3xl text-on-surface-variant">
            DevDocs Portal is intentionally structured as a production-style frontend documentation
            product. The architecture favors typed content, deterministic rendering, and predictable
            release operations.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {layers.map(([title, body]) => (
            <article
              key={title}
              className="rounded-lg border border-outline-variant/20 bg-surface-container p-5"
            >
              <h2 className="text-lg font-bold text-on-surface">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{body}</p>
            </article>
          ))}
        </div>
        <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-6 text-sm text-on-surface-variant">
          <h2 className="text-xl font-bold text-on-surface">Technical decisions and tradeoffs</h2>
          <ul className="mt-3 space-y-2">
            <li>
              • Content is stored as typed in-repo data for speed and deterministic builds; tradeoff
              is manual editorial updates.
            </li>
            <li>
              • Search/filter is client-side to keep the demo self-contained; tradeoff is limited
              scalability compared with indexed search backends.
            </li>
            <li>
              • PM2 runtime flow is explicit for VPS portability; tradeoff is additional operational
              discipline during deploys.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
