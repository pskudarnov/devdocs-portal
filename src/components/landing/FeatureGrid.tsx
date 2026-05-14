import { Search, FileCode, Layers, History } from "lucide-react";

const features = [
  {
    title: "Instant Search",
    description: "Lightning fast Algolia-powered search across all your documentation versions.",
    icon: Search,
    color: "text-primary",
  },
  {
    title: "MDX Support",
    description: "Embed React components directly in your markdown for interactive documentation.",
    icon: FileCode,
    color: "text-secondary",
  },
  {
    title: "API References",
    description: "Auto-generate beautiful API references from OpenAPI specs.",
    icon: Layers,
    color: "text-tertiary",
  },
  {
    title: "Versioned Docs",
    description: "Keep old documentation available while working on the next major release.",
    icon: History,
    color: "text-primary",
  },
];

const featureDelays = ["delay-100", "delay-200", "delay-300", "delay-500"] as const;

export function FeatureGrid() {
  return (
    <section className="border-y border-outline-variant/10 bg-surface-container-low/50 py-20 md:py-24">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-14 flex flex-col gap-4 text-center md:mb-16">
          <h2 className="text-3xl font-bold text-on-surface md:text-4xl">Portal features</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Everything you need to build top-tier documentation portals, out of the box.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`group relative rounded-lg border border-outline-variant/20 bg-surface-container p-6 transition-colors hover:border-primary/50 md:p-8 animate-fade-in-up ${featureDelays[idx]}`}
            >
              <div className={`mb-6 inline-flex rounded-lg bg-surface-bright p-3 ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-on-surface">{feature.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {feature.description}
              </p>

              <div className="pointer-events-none absolute inset-0 rounded-lg bg-primary/5 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
