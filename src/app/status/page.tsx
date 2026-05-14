import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status | DevDocs Premium",
  description:
    "Production readiness dashboard for quality gates, deployment, and monitoring checks.",
};

export default function StatusPage() {
  return (
    <section className="min-h-screen py-12 md:py-16">
      <div className="mx-auto max-w-container-max space-y-6 px-gutter">
        <header className="rounded-lg border border-outline-variant/20 bg-surface-container p-7">
          <h1 className="text-4xl font-bold text-on-surface md:text-5xl">
            Production readiness status
          </h1>
          <p className="mt-3 text-on-surface-variant">
            Operational snapshot of quality gates, deployment checks, and monitoring expectations
            for the DevDocs portal.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
          {[
            "typecheck: pass",
            "lint: pass",
            "format: pass",
            "build: pass",
            "smoke test: pass",
            "PM2 restart: verified",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-outline-variant/20 bg-surface-container p-4 text-on-surface-variant"
            >
              ✓ {item}
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-outline-variant/20 bg-surface-container p-5 text-sm text-on-surface-variant">
            <h2 className="text-base font-bold text-on-surface">Smoke test endpoints</h2>
            <ul className="mt-2 space-y-1">
              <li>• /</li>
              <li>• /docs</li>
              <li>• /changelog</li>
              <li>• /sitemap.xml</li>
              <li>• /robots.txt</li>
            </ul>
          </article>
          <article className="rounded-lg border border-outline-variant/20 bg-surface-container p-5 text-sm text-on-surface-variant">
            <h2 className="text-base font-bold text-on-surface">Monitoring checklist</h2>
            <ul className="mt-2 space-y-1">
              <li>• Review PM2 error and output logs after each deploy</li>
              <li>• Confirm bound port and cwd match expected runtime</li>
              <li>• Re-run endpoint checks after log clear</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
