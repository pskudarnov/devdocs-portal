import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section className="border-t border-outline-variant/10 px-gutter py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="glass rounded-lg border border-outline-variant/30 p-8 shadow-2xl md:p-14">
          <h2 className="mb-4 text-3xl font-bold text-on-surface md:text-5xl">
            Ready to review a production-style docs portal?
          </h2>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Explore the complete documentation catalog, review release confidence checks, and
            inspect implementation details directly in the repository.
          </p>
          <div className="mb-8 grid gap-3 sm:grid-cols-2 text-sm text-on-surface-variant">
            {[
              "24 technical articles",
              "Structured sections and callouts",
              "Copy-ready command snippets",
              "Typecheck, lint, and build gates",
            ].map((item) => (
              <div
                key={item}
                className="rounded-md border border-outline-variant/25 bg-surface px-3 py-2"
              >
                ✓ {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 font-bold text-on-primary shadow-xl transition-colors hover:bg-primary-container hover:text-on-primary-container"
            >
              Explore documentation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href={siteConfig.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant/30 bg-surface-container/50 px-7 py-3.5 font-bold text-on-surface backdrop-blur-md transition-colors hover:bg-surface-variant"
            >
              View GitHub repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
