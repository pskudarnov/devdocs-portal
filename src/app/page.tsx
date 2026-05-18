import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { DocsPreview } from "@/components/landing/DocsPreview";
import { CTA } from "@/components/landing/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <DocsPreview />
      <CTA />
    </>
  );
}
