import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, FileText, Search } from "lucide-react";
import { siteConfig } from "@/config/site";

const trustStats = [
  "24 docs",
  "5 categories",
  "Search & filters",
  "Copy-ready code",
  "Dark/light UI",
];

const previewBadges = ["Build passed", "API stable", "Updated May 2026", "SEO ready"];

const previewSignals = [
  { label: "Docs", value: "24" },
  { label: "Code snippets", value: "58" },
  { label: "Release notes", value: "v2.4.0" },
];

export function Hero() {
  return (
    <section className="reveal overflow-hidden border-b border-outline-variant/10 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="mx-auto grid max-w-[1160px] items-center gap-10 px-gutter lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,1.12fr)] xl:gap-14">
        <div className="z-10 flex flex-col gap-6 text-left">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.8)]" />
            <span className="text-[10px] font-bold tracking-wider text-primary uppercase">
              Production-style docs portal
            </span>
          </div>

          <h1 className="max-w-[620px] text-4xl font-bold leading-[1.08] tracking-tight text-on-surface md:text-5xl lg:text-6xl">
            Production-ready docs portal for real delivery workflows.
          </h1>

          <p className="max-w-[560px] text-base leading-relaxed text-on-surface-variant md:text-lg">
            A polished DevDocs demo with structured guides, searchable docs, release notes,
            copy-ready snippets, and deployment references built with Next.js, TypeScript, and
            Tailwind.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg border border-primary/50 bg-primary-container px-6 py-3 font-bold text-on-primary-container shadow-[0_0_20px_rgba(77,142,255,0.16)] transition-[background-color,color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary hover:text-on-primary active:translate-y-0 active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              Explore documentation
            </Link>
            <a
              href={siteConfig.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant/35 bg-surface-container px-6 py-3 font-bold text-on-surface transition-[border-color,background-color,color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-container-high active:translate-y-0 active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              <Code2 className="mr-2 h-5 w-5" />
              View GitHub repository
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-outline-variant/20 pt-5">
            {trustStats.map((item) => (
              <span
                key={item}
                className="rounded-full border border-outline-variant/30 bg-surface-container px-3 py-1 text-xs font-semibold text-on-surface-variant"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden w-full lg:block">
          <div className="absolute -inset-10 -z-10 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative min-h-[420px] w-full overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container shadow-2xl transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-35px_rgba(77,142,255,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <div className="flex items-center justify-between border-b border-outline-variant/20 bg-surface-container-lowest px-5 py-3.5">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/30" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/30" />
                <div className="h-3 w-3 rounded-full bg-green-500/30" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant">
                devdocs.pavel-skudarnov.ru/docs
              </span>
            </div>

            <div className="grid min-h-[372px] grid-cols-[230px_1fr]">
              <aside className="border-r border-outline-variant/20 bg-surface-container-low p-4">
                <div className="flex items-center gap-2 rounded-md border border-outline-variant/25 bg-surface px-3 py-2 text-xs text-on-surface-variant">
                  <Search className="h-3.5 w-3.5" />
                  Search docs, tags, sections...
                </div>
                <div className="mt-4 space-y-2 text-xs">
                  <div className="font-semibold text-on-surface">Getting Started</div>
                  <div className="text-on-surface-variant">Quick Start</div>
                  <div className="text-on-surface-variant">Environment Variables</div>
                  <div className="font-semibold text-on-surface">Deployment</div>
                  <div className="text-on-surface-variant">PM2 Deployment</div>
                  <div className="text-on-surface-variant">Smoke Testing</div>
                </div>
              </aside>

              <div className="flex flex-col gap-4 p-5">
                <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider">
                  {previewBadges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-primary"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-on-surface">Typed API Responses</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Validate payloads with strict TypeScript contracts and deterministic fallback
                  handling. Keep behavior aligned across server and client boundaries.
                </p>

                <pre className="overflow-x-auto rounded-md border border-outline-variant/30 bg-black p-3 text-xs leading-relaxed text-slate-200">
                  <code>{`type ApiResult<T> =\n  | { ok: true; data: T }\n  | { ok: false; error: { code: string; message: string } };\n\nconst result = await api<ApiResult<Article[]>>("/api/articles?limit=12");`}</code>
                </pre>

                <div className="mt-auto grid gap-2 sm:grid-cols-3">
                  {previewSignals.map((signal) => (
                    <div
                      key={signal.label}
                      className="rounded-md border border-outline-variant/25 bg-surface px-3 py-2"
                    >
                      <div className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                        {signal.label}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-on-surface">
                        {signal.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-outline-variant/20 bg-surface-container-low px-5 py-3 text-xs text-on-surface-variant">
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                Build pipeline passed
              </div>
              <div className="inline-flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                Release notes updated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
