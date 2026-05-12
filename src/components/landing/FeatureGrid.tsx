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

export function FeatureGrid() {
  return (
    <section className="py-24 bg-surface-container-low/50 border-y border-outline-variant/10">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="flex flex-col gap-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface">Portal features</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Everything you need to build top-tier documentation portals, out of the box.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div 
              key={feature.title}
              className={`group relative p-8 rounded-2xl border border-outline-variant/20 bg-surface-container hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up opacity-0 delay-${(idx + 1) * 100}`}
            >
              <div className={`mb-6 inline-flex p-3 rounded-xl bg-surface-bright ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">{feature.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
