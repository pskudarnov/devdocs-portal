import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-outline-variant/10 pt-20 pb-14 md:pt-28 md:pb-20">
      <div className="mx-auto grid max-w-container-max items-center gap-12 px-gutter lg:grid-cols-2">
        <div className="z-10 flex flex-col gap-8 text-left">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.8)]" />
            <span className="text-[10px] font-bold text-primary tracking-wider uppercase">
              v2.4 Released
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-on-surface animate-fade-in-up delay-100 md:text-6xl lg:text-7xl">
            Documentation that feels <span className="text-gradient">fast, clear,</span> and built
            for developers.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant animate-fade-in-up delay-200 md:text-xl">
            DevDocs helps teams create beautiful, searchable, versioned documentation with a modern
            developer experience and production-ready interface.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-up delay-300">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg border border-primary/50 bg-primary-container px-7 py-3.5 font-bold text-on-primary-container shadow-[0_0_20px_rgba(77,142,255,0.16)] transition-colors hover:bg-primary hover:text-on-primary"
            >
              Explore Docs
            </Link>
            <a
              href={siteConfig.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant/35 bg-surface-container px-7 py-3.5 font-bold text-on-surface transition-colors hover:border-primary/50 hover:bg-surface-container-high"
            >
              <Code2 className="mr-2 h-5 w-5" />
              View GitHub
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="mt-4 grid max-w-xl grid-cols-3 gap-4 border-t border-outline-variant/20 pt-6 animate-fade-in-up delay-500">
            <div>
              <div className="text-2xl font-bold text-on-surface">12</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-on-surface-variant">
                Guides
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-on-surface">5</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-on-surface-variant">
                Categories
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-on-surface">SSG</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-on-surface-variant">
                Ready
              </div>
            </div>
          </div>
        </div>

        <div className="group relative z-10 hidden aspect-[4/3] w-full overflow-hidden rounded-lg border border-outline-variant/20 bg-surface-container shadow-2xl animate-blur-in delay-500 lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container-lowest opacity-80" />

          <div className="absolute inset-0 animate-float">
            <div className="absolute top-0 bottom-0 left-0 flex w-48 flex-col gap-4 border-r border-outline-variant/20 bg-surface/50 p-6 backdrop-blur-md">
              <div className="mb-2 h-4 w-24 rounded-md bg-surface-bright" />
              <div className="h-2 w-32 rounded-full bg-surface-variant" />
              <div className="h-2 w-28 rounded-full bg-surface-variant" />
              <div className="h-2 w-20 rounded-full bg-surface-variant" />
              <div className="mt-4 h-2 w-32 rounded-full bg-surface-variant/50" />
              <div className="h-2 w-24 rounded-full bg-surface-variant/50" />
            </div>

            <div className="absolute top-12 right-12 bottom-12 left-60 transform overflow-hidden rounded-lg border border-outline-variant/30 bg-black shadow-2xl transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.02]">
              <div className="flex items-center border-b border-outline-variant/20 bg-surface-container-lowest px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/20" />
                  <div className="h-3 w-3 rounded-full border border-yellow-500/50 bg-yellow-500/20" />
                  <div className="h-3 w-3 rounded-full border border-green-500/50 bg-green-500/20" />
                </div>
                <span className="ml-4 text-[10px] font-mono text-outline uppercase tracking-widest">
                  config.ts
                </span>
              </div>
              <div className="p-6 font-mono text-xs leading-relaxed text-on-surface-variant">
                <p>
                  <span className="text-tertiary">import</span> {"{ defineConfig }"}{" "}
                  <span className="text-tertiary">from</span>{" "}
                  <span className="text-primary">&apos;@devdocs/core&apos;</span>;
                </p>
                <p className="mt-4">
                  <span className="text-tertiary">export default</span> defineConfig({"{"}
                </p>
                <p className="pl-4 mt-1">
                  <span className="text-secondary">theme</span>:{" "}
                  <span className="text-primary">&apos;dark&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-secondary">features</span>: {"{"}
                </p>
                <p className="pl-8">
                  <span className="text-secondary">search</span>:{" "}
                  <span className="text-secondary">true</span>,
                </p>
                <p className="pl-8">
                  <span className="text-secondary">mdx</span>:{" "}
                  <span className="text-secondary">true</span>
                </p>
                <p className="pl-4">{"}"}</p>
                <p>{"}"});</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
