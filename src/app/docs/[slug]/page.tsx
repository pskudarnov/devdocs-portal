import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDocBySlug } from "@/lib/docs";
import { docs } from "@/data/docs";
import { DocArticle } from "@/components/docs/DocArticle";
import { OnThisPage } from "@/components/docs/OnThisPage";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return { title: "Doc not found" };
  return { title: `${doc.title} | DevDocs Premium`, description: doc.description };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-8">
          <Link
            href="/docs"
            className="group mb-8 inline-flex items-center gap-2 rounded-md text-sm font-bold text-on-surface-variant transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Documentation
          </Link>
        </div>

        <div className="flex flex-col items-start gap-10 lg:flex-row xl:gap-12">
          <div className="w-full min-w-0 flex-1">
            <DocArticle doc={doc} />
            <div className="mt-12 border-t border-outline-variant/20 pt-12">
              <DocNavigation slug={slug} />
            </div>
          </div>

          <aside className="sticky top-24 hidden w-64 shrink-0 xl:block">
            <OnThisPage doc={doc} />
          </aside>
        </div>
      </div>
    </section>
  );
}
