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
    <section className="min-h-screen py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1080px] px-gutter">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,800px)_240px] xl:justify-center">
          <div className="min-w-0">
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
            <DocArticle doc={doc} />
            <div className="mt-12 border-t border-outline-variant/20 pt-12">
              <DocNavigation slug={slug} />
            </div>
          </div>
          <aside className="sticky top-24 hidden w-60 shrink-0 xl:block">
            <OnThisPage doc={doc} />
          </aside>
        </div>
      </div>
    </section>
  );
}
