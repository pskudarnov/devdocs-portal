import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center overflow-hidden py-32 text-center">
      <div className="relative z-10 animate-fade-in-up">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg border border-outline-variant/30 bg-surface-container text-on-surface-variant">
          <FileQuestion className="h-10 w-10" />
        </div>

        <div className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          Error 404
        </div>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-on-surface">Page not found</h1>
        <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-on-surface-variant">
          The document or page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-8 py-3 text-sm font-bold text-on-primary-container transition-colors hover:bg-primary hover:text-on-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-outline-variant/30 bg-surface-container px-8 py-3 text-sm font-bold text-on-surface transition-colors hover:border-primary/50"
          >
            Browse Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
