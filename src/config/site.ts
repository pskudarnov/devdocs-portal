export const siteConfig = {
  name: "DevDocs",
  title: "DevDocs Premium",
  description:
    "A premium developer documentation portal with precision engineering and a production-ready interface.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devdocs.pavel-skudarnov.ru",
  repositoryUrl: "https://github.com/pskudarnov/devdocs-portal",
  email: "mailto:hello@devdocs.example",
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/changelog", label: "Changelog" },
] as const;
