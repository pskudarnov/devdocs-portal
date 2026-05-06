import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="py-14 md:py-20">
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        Documentation that helps teams ship faster.
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        DevDocs is a polished documentation portal demo with searchable docs, article pages, code
        blocks and responsive navigation built for portfolio review.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/docs">
          <Button>Browse docs</Button>
        </Link>
        <Link href="/changelog">
          <Button variant="ghost">View changelog</Button>
        </Link>
      </div>
    </section>
  );
}
