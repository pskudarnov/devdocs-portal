import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDocBySlug } from "@/lib/docs";
import { DocArticle } from "@/components/docs/DocArticle";
import { OnThisPage } from "@/components/docs/OnThisPage";
import { DocNavigation } from "@/components/docs/DocNavigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return { title: "Doc not found" };
  return { title: `${doc.title} | DevDocs`, description: doc.description };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  return (
    <section className="py-10">
      <div className="flex gap-6">
        <div className="min-w-0 flex-1">
          <DocArticle doc={doc} />
          <DocNavigation slug={slug} />
          <div className="mt-6">
            <Link href="/docs" className="text-sm text-blue-700 hover:underline">
              ← Back to docs
            </Link>
          </div>
        </div>
        <OnThisPage doc={doc} />
      </div>
    </section>
  );
}
