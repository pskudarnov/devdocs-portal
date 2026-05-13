import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="border-t border-outline-variant/10 px-gutter py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="glass rounded-lg border border-outline-variant/30 p-8 text-center shadow-2xl md:p-14">
          <h2 className="mb-6 text-3xl font-bold text-on-surface md:text-5xl">
            Ready to build <span className="text-gradient">world-class</span> docs?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant">
            Join thousands of developers creating beautiful, searchable, and technical documentation
            with DevDocs Premium.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 font-bold text-on-primary shadow-xl transition-colors hover:bg-primary-container hover:text-on-primary-container"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant/30 bg-surface-container/50 px-7 py-3.5 font-bold text-on-surface backdrop-blur-md transition-colors hover:bg-surface-variant"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
