import { changelog } from "@/data/changelog";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/format";
import { History, GitBranch } from "lucide-react";

export default function ChangelogPage() {
  return (
    <section className="min-h-screen py-12 md:py-16">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1.5">
            <History className="h-3.5 w-3.5 text-secondary" />
            <span className="text-[10px] font-bold text-secondary tracking-wider uppercase">
              Project History
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
            Changelog
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Stay updated with the latest improvements and technical refinements to the DevDocs
            Premium platform.
          </p>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-outline-variant/20">
          {changelog.map((entry) => (
            <div key={entry.version} className="relative pl-10">
              <div className="absolute left-0 top-1.5 z-10 flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 border-outline-variant bg-surface-container">
                <GitBranch className="h-3 w-3 text-primary" />
              </div>

              <article className="glass group rounded-lg border border-outline-variant/20 p-6 shadow-xl transition-colors hover:border-primary/30 md:p-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold text-on-surface transition-colors group-hover:text-primary">
                      v{entry.version}
                    </h2>
                    <Badge label={entry.type} />
                  </div>
                  <time
                    dateTime={entry.date}
                    className="rounded-full border border-outline-variant/10 bg-surface-variant/30 px-3 py-1 font-mono text-sm text-on-surface-variant"
                  >
                    {formatDate(entry.date)}
                  </time>
                </div>

                <h3 className="mb-4 text-xl font-bold text-on-surface">{entry.title}</h3>

                <ul className="grid gap-4 md:grid-cols-2">
                  {entry.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm leading-relaxed text-on-surface-variant"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
