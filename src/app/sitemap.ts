import type { MetadataRoute } from "next";
import { docs } from "@/data/docs";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/docs`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/changelog`, changeFrequency: "weekly", priority: 0.8 },
    ...docs.map((doc) => ({
      url: `${siteConfig.url}/docs/${doc.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
