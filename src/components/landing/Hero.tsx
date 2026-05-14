import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const trustStats = [
  "24 docs",
  "5 categories",
  "Search & filters",
  "Copy-ready code",
  "Dark/light UI",
];

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-outline-variant/10 pt-20 pb-14 md:pt-28 md:pb-20">
      <div className="mx-auto grid max-w-container-max items-start gap-10 px-gutter lg:grid-cols-2">
        <div className="z-10 flex flex-col gap-7 text-left">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.8)]" />
            <span className="text-[10px] font-bold text-primary tracking-wider uppercase">
              Production-style docs portal
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-on-surface md:text-6xl lg:text-7xl">
            Documentation that looks and operates like a real product team workspace.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            DevDocs is a production-ready documentation portal demo built with Next.js App Router,
            TypeScript, and Tailwind. It includes structured guides, copy-ready snippets, release
            checks, and deployment references that mirror real delivery workflows.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg border border-primary/50 bg-primary-container px-7 py-3.5 font-bold text-on-primary-container shadow-[0_0_20px_rgba(77,142,255,0.16)] transition-colors hover:bg-primary hover:text-on-primary"
            >
              Explore documentation
            </Link>
            <a
              href={siteConfig.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant/35 bg-surface-container px-7 py-3.5 font-bold text-on-surface transition-colors hover:border-primary/50 hover:bg-surface-container-high"
            >
              <Code2 className="mr-2 h-5 w-5" />
              View GitHub repository
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-outline-variant/20 pt-6">
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

        <div className="relative hidden w-full overflow-hidden rounded-lg border border-outline-variant/20 bg-surface-container shadow-2xl lg:block">
          <div className="flex items-center justify-between border-b border-outline-variant/20 bg-surface-container-lowest px-4 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/30" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/30" />
              <div className="h-3 w-3 rounded-full bg-green-500/30" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant">
              devdocs.pavel-skudarnov.ru/docs
            </span>
          </div>
          <div className="grid grid-cols-[210px_1fr]">
            <aside className="border-r border-outline-variant/20 bg-surface-container-low p-4">
              <div className="rounded-md border border-outline-variant/25 bg-surface px-3 py-2 text-xs text-on-surface-variant">
                Search docs, tags, and sections...
              </div>
              <div className="mt-4 space-y-2 text-xs">
                <div className="font-semibold text-on-surface">Getting Started</div>
                <div className="text-on-surface-variant">Installation</div>
                <div className="text-on-surface-variant">Environment Variables</div>
                <div className="font-semibold text-on-surface">Deployment</div>
                <div className="text-on-surface-variant">PM2 Deployment</div>
              </div>
            </aside>
            <div className="space-y-4 p-5">
              <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider">
                {["API Stable", "Updated May 2026", "Build Passed", "SEO Ready"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-primary"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-on-surface">Typed API Responses</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Validate API payloads with narrow TypeScript contracts and fallback parsing rules.
                Keep response handling deterministic across server and client boundaries.
              </p>
              <pre className="overflow-x-auto rounded-md border border-outline-variant/30 bg-black p-3 text-xs leading-relaxed text-on-surface-variant">
                <code>{`type ApiResult<T> = { ok: true; data: T } | { ok: false; error: { code: string; message: string } }\n\nconst result = await api<ApiResult<Article[]>>("/api/articles?limit=12");`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
