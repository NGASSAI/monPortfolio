// Layout racine de l'application Next.js.
// Ce fichier définit le wrapper global, les métadonnées SEO et le chargement du header/footer.
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Nathan NGASSAI - Portfolio",
    template: "%s | Nathan NGASSAI",
  },
  description:
    "Portfolio professionnel de Nathan NGASSAI — développeur web junior spécialisé dans les sites modernes, performants et élégants.",
  keywords: [
    "développeur web",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "HTML",
    "CSS",
    "performance web",
  ],
  authors: [{ name: "Nathan NGASSAI" }],
  creator: "Nathan NGASSAI",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Nathan NGASSAI - Portfolio",
    description:
      "Portfolio professionnel de Nathan NGASSAI — sites web modernes, performants et élégants.",
    siteName: "Portfolio Nathan NGASSAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan NGASSAI - Portfolio",
    description:
      "Portfolio professionnel de Nathan NGASSAI — sites web modernes, performants et élégants.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
