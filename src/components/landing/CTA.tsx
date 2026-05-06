import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-14 text-center">
      <h2 className="text-3xl font-semibold text-slate-900">Explore documentation</h2>
      <p className="mx-auto mt-3 max-w-xl text-slate-600">
        Review docs hierarchy, article readability and code examples in one polished demo.
      </p>
      <div className="mt-6">
        <Link href="/docs">
          <Button>Open docs portal</Button>
        </Link>
      </div>
    </section>
  );
}
