import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "http://64.188.63.171:3240";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DevDocs Premium — Documentation Portal",
  description:
    "A premium developer documentation portal with precision engineering and cinematic design.",
  openGraph: {
    title: "DevDocs Premium",
    description:
      "A premium developer documentation portal with precision engineering and cinematic design.",
    url: siteUrl,
    siteName: "DevDocs",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDocs Premium",
    description:
      "A premium developer documentation portal with precision engineering and cinematic design.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-on-background font-geist selection:bg-primary-container selection:text-on-primary-container">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
