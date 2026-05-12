import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center py-32 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_65%)] opacity-5 pointer-events-none" />

      <div className="relative z-10 animate-fade-in-up opacity-0">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-outline-variant/30 bg-surface-container text-on-surface-variant">
          <FileQuestion className="h-10 w-10" />
        </div>

        <div className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          Error 404
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-on-surface mb-4">
          Page not found
        </h1>
        <p className="mx-auto mb-10 max-w-md text-lg text-on-surface-variant leading-relaxed">
          The document or page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-container px-8 py-3 text-sm font-bold text-on-primary-container transition-all hover:bg-primary hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-xl border border-outline-variant/30 bg-surface-container px-8 py-3 text-sm font-bold text-on-surface transition-all hover:border-primary/50 hover:scale-105 active:scale-95"
          >
            Browse Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
