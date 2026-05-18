import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | DevDocs Portal",
  description:
    "Implementation paths, checklists, snippets, and release resources for DevDocs Portal.",
};

export default function ResourcesPage() {
  return (
    <section className="min-h-screen py-12 md:py-16">
      <div className="mx-auto max-w-[1000px] space-y-8 px-gutter">
        <header className="rounded-lg border border-outline-variant/20 bg-surface-container p-7">
          <h1 className="text-4xl font-bold text-on-surface md:text-5xl">Resources</h1>
          <p className="mt-3 max-w-3xl text-on-surface-variant">
            Operational reference page with recommended reading paths, practical checklists, and
            command snippets used to ship this project safely.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-outline-variant/20 bg-surface-container p-5">
            <h2 className="text-lg font-bold text-on-surface">Recommended docs paths</h2>
            <ul className="mt-3 space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link href="/docs/quick-start" className="hover:text-primary">
                  Quick Start → Environment Variables → Local Development Workflow
                </Link>
              </li>
              <li>
                <Link href="/docs/search-experience" className="hover:text-primary">
                  Search Experience → Content Modeling → Accessibility Patterns
                </Link>
              </li>
              <li>
                <Link href="/docs/production-build" className="hover:text-primary">
                  Production Build → PM2 Deployment → Smoke Testing → Rollback Strategy
                </Link>
              </li>
            </ul>
          </article>

          <article className="rounded-lg border border-outline-variant/20 bg-surface-container p-5">
            <h2 className="text-lg font-bold text-on-surface">Deployment commands</h2>
            <pre className="mt-3 overflow-x-auto rounded-md border border-outline-variant/25 bg-black p-3 text-xs text-on-surface-variant">
              <code>{`npm run typecheck\nnpm run lint\nnpm run format:check\nnpm run build\npm2 restart devdocs-portal --update-env\ncurl -I https://devdocs.pavel-skudarnov.ru/docs`}</code>
            </pre>
          </article>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-outline-variant/20 bg-surface-container p-5 text-sm text-on-surface-variant">
            <h2 className="text-base font-bold text-on-surface">Accessibility checklist</h2>
            <ul className="mt-2 space-y-1">
              <li>• Keyboard focus visible on links and buttons</li>
              <li>• Heading hierarchy is sequential per page</li>
              <li>• Icon-only controls include aria-labels</li>
            </ul>
          </article>
          <article className="rounded-lg border border-outline-variant/20 bg-surface-container p-5 text-sm text-on-surface-variant">
            <h2 className="text-base font-bold text-on-surface">SEO checklist</h2>
            <ul className="mt-2 space-y-1">
              <li>• Metadata title and description per route</li>
              <li>• Sitemap includes all indexable pages</li>
              <li>• robots.txt allows crawl for public docs</li>
            </ul>
          </article>
          <article className="rounded-lg border border-outline-variant/20 bg-surface-container p-5 text-sm text-on-surface-variant">
            <h2 className="text-base font-bold text-on-surface">Release checklist</h2>
            <ul className="mt-2 space-y-1">
              <li>• typecheck, lint, format, build pass</li>
              <li>• PM2 restart completed with new env</li>
              <li>• Smoke endpoints return expected codes</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
