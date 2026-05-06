import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const siteUrl = "http://64.188.63.171:3240";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DevDocs — Developer Documentation Portal Demo",
  description:
    "A production-ready Next.js documentation portal demo with searchable docs, article pages, code blocks and responsive navigation built with TypeScript and Tailwind CSS.",
  openGraph: {
    title: "DevDocs — Developer Documentation Portal Demo",
    description:
      "A production-ready Next.js documentation portal demo with searchable docs, article pages, code blocks and responsive navigation built with TypeScript and Tailwind CSS.",
    url: siteUrl,
    siteName: "DevDocs",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDocs — Developer Documentation Portal Demo",
    description:
      "A production-ready Next.js documentation portal demo with searchable docs, article pages, code blocks and responsive navigation built with TypeScript and Tailwind CSS.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto min-h-[calc(100vh-160px)] max-w-6xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
