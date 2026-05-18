import { changelog } from "@/data/changelog";
import { formatDate } from "@/lib/format";

export default function ChangelogPage() {
  const latest = changelog[0];

  return (
    <section className="min-h-screen py-12 md:py-16">
      <div className="mx-auto grid max-w-[1000px] gap-8 px-gutter lg:grid-cols-[minmax(0,1fr)_260px]">
        <div>
          <div className="mb-10 rounded-lg border border-outline-variant/20 bg-surface-container p-7">
            <h1 className="text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
              Changelog
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-on-surface-variant">
              Release history for DevDocs Portal with concrete product and engineering changes.
              Entries are grouped by version and include implementation-level notes.
            </p>
          </div>

          <div className="mb-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Latest release
            </p>
            <h2 className="mt-2 text-2xl font-bold text-on-surface">
              v{latest.version} — {latest.title}
            </h2>
            <p className="mt-2 text-sm text-on-surface-variant">{latest.summary}</p>
          </div>

          <div className="space-y-6">
            {changelog.map((entry) => (
              <article
                key={entry.version}
                className="rounded-lg border border-outline-variant/20 bg-surface-container p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-bold text-on-surface">v{entry.version}</h2>
                  <time dateTime={entry.date} className="text-sm text-on-surface-variant">
                    {formatDate(entry.date)}
                  </time>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-on-surface">{entry.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-outline-variant/25 px-2.5 py-0.5 text-xs font-semibold text-on-surface-variant"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-on-surface-variant">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-5 text-sm text-on-surface-variant">
            <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface">
              Release summary
            </h2>
            <ul className="mt-3 space-y-2">
              <li>Latest version: v{latest.version}</li>
              <li>Release cadence: weekly iterations</li>
              <li>Stability: production checks required</li>
              <li>Coverage: docs, UX, release ops</li>
            </ul>
          </div>
          <div className="rounded-lg border border-outline-variant/20 bg-surface-container p-5 text-sm text-on-surface-variant">
            <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface">
              Quality gates
            </h2>
            <ul className="mt-3 space-y-2">
              {["typecheck", "lint", "format", "build", "smoke test"].map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
