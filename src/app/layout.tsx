import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Sereme Abdoulaye — Software Engineer",
  description:
    "Full-stack engineer specializing in accessible, high-performance web and mobile applications. Expert in React, Next.js, Vue, and modern JavaScript.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "React",
    "Next.js",
    "Vue",
    "frontend",
    "Sereme Abdoulaye",
    "Abidjan",
    "Côte d'Ivoire",
  ],
  authors: [{ name: "Sereme Abdoulaye" }],
  creator: "Sereme Abdoulaye",
  metadataBase: new URL("https://portfolio-swart-xi-73.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    title: "Sereme Abdoulaye — Software Engineer",
    description:
      "Full-stack engineer specializing in accessible, high-performance web and mobile applications.",
    siteName: "Sereme Abdoulaye Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Sereme Abdoulaye — Software Engineer",
    description:
      "Full-stack engineer specializing in accessible, high-performance web and mobile applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
