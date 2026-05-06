import Link from "next/link";
import { docs } from "@/data/docs";

export function DocNavigation({ slug }: { slug: string }) {
  const idx = docs.findIndex((d) => d.slug === slug);
  const prev = idx > 0 ? docs[idx - 1] : null;
  const next = idx < docs.length - 1 ? docs[idx + 1] : null;

  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      {prev ? (
        <Link className="text-sm text-blue-700 hover:underline" href={`/docs/${prev.slug}`}>
          ← {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link className="text-sm text-blue-700 hover:underline" href={`/docs/${next.slug}`}>
          {next.title} →
        </Link>
      ) : null}
    </div>
  );
}
