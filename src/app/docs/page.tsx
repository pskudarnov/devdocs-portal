import { DocsExplorer } from "@/components/docs/DocsExplorer";

export default function DocsPage() {
  return (
    <section className="min-h-screen py-12 md:py-16">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Search, filter and browse developer docs by category and complexity. Built for
            high-performance development teams.
          </p>
        </div>

        <DocsExplorer />
      </div>
    </section>
  );
}
