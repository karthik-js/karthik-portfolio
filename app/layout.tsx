import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Lead Frontend Engineer | Next.js & React Expert | Karthik Talam",
  description:
    "8+ years building high-performance web platforms. Expert in Next.js App Router, enterprise auth, and AI-augmented engineering workflows.",
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
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow",
  },
  alternates: { canonical: "https://karthik.run" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Karthik Talam — Lead Frontend Engineer",
    description:
      "8+ years building high-performance web platforms. Expert in Next.js App Router, enterprise auth, and AI-augmented engineering workflows.",
    siteName: "Karthik Talam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Talam — Lead Frontend Engineer",
    description:
      "8+ years building high-performance web platforms. Expert in Next.js App Router, enterprise auth, and AI-augmented engineering workflows.",
    creator: "@karthik_js",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:font-medium focus:outline-none"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://karthik.run/#person",
                  "name": "Karthik Talam",
                  "jobTitle": "Lead Frontend Engineer",
                  "url": "https://karthik.run",
                  "email": "karthiktalam8@gmail.com",
                  "image": "https://karthik.run/karthik-profile.jpg",
                  "sameAs": [
                    "https://github.com/karthik-js",
                    "https://www.linkedin.com/in/karthik-talam/"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://karthik.run/#website",
                  "url": "https://karthik.run",
                  "name": "Karthik Talam Portfolio",
                  "description": "8+ years building high-performance web platforms. Expert in Next.js App Router, enterprise auth, and AI-augmented engineering workflows."
                }
              ]
            })
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
