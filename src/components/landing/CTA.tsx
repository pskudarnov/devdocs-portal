import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-gutter relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary-container)_0%,_transparent_70%)] opacity-10 pointer-events-none" />
      
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="glass rounded-3xl p-8 md:p-16 text-center border border-outline-variant/30 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-6">
            Ready to build <span className="text-gradient">world-class</span> docs?
          </h2>
          <p className="mx-auto max-w-xl text-on-surface-variant text-lg leading-relaxed mb-10">
            Join thousands of developers creating beautiful, searchable, and technical documentation with DevDocs Premium.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-on-primary font-bold hover:bg-primary-container hover:text-on-primary-container transition-all shadow-xl hover:shadow-primary/20"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-outline-variant/30 bg-surface-container/50 text-on-surface font-bold hover:bg-surface-variant transition-all backdrop-blur-md"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
