export const siteConfig = {
  name: "DevDocs Portal",
  title: "DevDocs Portal",
  description:
    "Production-ready developer documentation portal focused on practical implementation guidance.",
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
