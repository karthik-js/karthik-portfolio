import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karthik Talam — Lead Frontend Engineer",
  description:
    "Lead Frontend Engineer with 8+ years building high-traffic web platforms. Specialized in Next.js App Router architecture, enterprise authentication, and AI-augmented engineering workflows.",
  keywords: [
    "Lead Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AI-Augmented Engineering",
    "Frontend Architecture",
  ],
  authors: [{ name: "Karthik Talam", url: "https://github.com/karthik-js" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Karthik Talam — Lead Frontend Engineer",
    description:
      "Building high-traffic web platforms — from enterprise B2B e-commerce to AI-augmented engineering workflows.",
    siteName: "Karthik Talam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Talam — Lead Frontend Engineer",
    description:
      "Building high-traffic web platforms — from enterprise B2B e-commerce to AI-augmented engineering workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
