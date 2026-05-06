import type { MetadataRoute } from "next";
import { docs } from "@/data/docs";

const base = "http://64.188.63.171:3240";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/docs`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/changelog`, changeFrequency: "weekly", priority: 0.8 },
    ...docs.map((doc) => ({
      url: `${base}/docs/${doc.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
