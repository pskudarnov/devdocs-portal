import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDocBySlug } from "@/lib/docs";
import { docs } from "@/data/docs";
import { DocArticle } from "@/components/docs/DocArticle";
import { OnThisPage } from "@/components/docs/OnThisPage";
import { DocNavigation } from "@/components/docs/DocNavigation";

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
        <div className="mb-6 text-sm text-on-surface-variant">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/docs" className="hover:text-primary">
            Docs
          </Link>{" "}
          / <span className="text-on-surface">{doc.title}</span>
        </div>
        <div className="flex flex-col items-start gap-10 lg:flex-row xl:gap-12">
          <div className="w-full min-w-0 flex-1">
            <DocArticle doc={doc} />
            <div className="mt-12 border-t border-outline-variant/20 pt-12">
              <DocNavigation slug={slug} />
            </div>
          </div>
          <aside className="sticky top-24 hidden w-72 shrink-0 xl:block">
            <OnThisPage doc={doc} />
          </aside>
        </div>
      </div>
    </section>
  );
}
