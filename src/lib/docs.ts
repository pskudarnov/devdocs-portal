import { docs } from "@/data/docs";

export type DocsSort = "popular" | "updated" | "az";

export function filterDocs(query: string, category: string, difficulty: string, sort: DocsSort) {
  let list = docs.filter((d) => {
    const text =
      `${d.title} ${d.description} ${d.summary ?? ""} ${d.tags.join(" ")} ${d.category} ${d.sections
        .map((s) => s.body)
        .join(" ")}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  if (category !== "all") list = list.filter((d) => d.category === category);
  if (difficulty !== "all") list = list.filter((d) => d.difficulty === difficulty);

  return [...list].sort((a, b) => {
    if (sort === "updated")
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    if (sort === "az") return a.title.localeCompare(b.title);
    return b.popularity - a.popularity;
  });
}

export const getDocBySlug = (slug: string) => docs.find((d) => d.slug === slug);
