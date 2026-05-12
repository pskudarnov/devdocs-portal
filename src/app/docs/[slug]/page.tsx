import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDocBySlug } from "@/lib/docs";
import { DocArticle } from "@/components/docs/DocArticle";
import { OnThisPage } from "@/components/docs/OnThisPage";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { ArrowLeft } from "lucide-react";

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
    <section className="relative py-16">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-8">
          <Link 
            href="/docs" 
            className="inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Documentation
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="min-w-0 flex-1 w-full">
            <DocArticle doc={doc} />
            <div className="mt-12 pt-12 border-t border-outline-variant/20">
               <DocNavigation slug={slug} />
            </div>
          </div>
          
          <aside className="hidden xl:block w-64 shrink-0 sticky top-28">
            <OnThisPage doc={doc} />
          </aside>
        </div>
      </div>
    </section>
  );
}
