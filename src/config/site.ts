export const siteConfig = {
  name: "DevDocs",
  title: "DevDocs Premium",
  description:
    "A premium developer documentation portal with precision engineering and a production-ready interface.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devdocs.pavel-skudarnov.ru",
  repositoryUrl: "https://github.com/pskudarnov/devdocs-portal",
  email: "mailto:pavel.skudarnov@yandex.ru",
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/architecture", label: "Architecture" },
  { href: "/changelog", label: "Changelog" },
] as const;
