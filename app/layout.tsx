import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://karthik.run"),
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
    "Web Performance",
    "Frontend Consulting",
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
    url: "https://karthik.run",
    title: "Karthik Talam — Lead Frontend Engineer",
    description:
      "8+ years building high-performance web platforms. Expert in Next.js App Router, enterprise auth, and AI-augmented engineering workflows.",
    siteName: "Karthik Talam Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Karthik Talam — Lead Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Talam — Lead Frontend Engineer",
    description:
      "8+ years building high-performance web platforms. Expert in Next.js App Router, enterprise auth, and AI-augmented engineering workflows.",
    creator: "@karthiktalam",
    site: "@karthiktalam",
    images: ["/opengraph-image"],
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
        <Script id="root-structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://karthik.run/#person",
                name: "Karthik Talam",
                givenName: "Karthik",
                familyName: "Talam",
                jobTitle: "Lead Frontend Engineer",
                url: "https://karthik.run",
                email: "mailto:karthiktalam8@gmail.com",
                image: {
                  "@type": "ImageObject",
                  url: "https://karthik.run/karthik-profile.jpg",
                  width: 400,
                  height: 400,
                },
                sameAs: [
                    "https://github.com/karthik-js",
                    "https://www.linkedin.com/in/karthik-talam/",
                    "https://x.com/karthiktalam",
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Publicis Sapient",
                    url: "https://www.publicissapient.com",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                  },
                  knowsAbout: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Frontend Architecture",
                    "Web Performance",
                    "AI-Augmented Engineering",
                    "Core Web Vitals",
                    "Enterprise Authentication",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://karthik.run/#website",
                  url: "https://karthik.run",
                  name: "Karthik Talam Portfolio",
                  description:
                    "Portfolio of Karthik Talam, Lead Frontend Engineer with 8+ years building high-performance web platforms.",
                  publisher: { "@id": "https://karthik.run/#person" },
                  inLanguage: "en-US",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://karthik.run/#webpage",
                  url: "https://karthik.run",
                  name: "Lead Frontend Engineer | Next.js & React Expert | Karthik Talam",
                  isPartOf: { "@id": "https://karthik.run/#website" },
                  about: { "@id": "https://karthik.run/#person" },
                  description:
                    "8+ years building high-performance web platforms. Expert in Next.js App Router, enterprise auth, and AI-augmented engineering workflows.",
                  inLanguage: "en-US",
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://karthik.run/#service",
                  name: "Karthik Talam Frontend Consulting",
                  provider: { "@id": "https://karthik.run/#person" },
                  url: "https://karthik.run/services",
                  description:
                    "Frontend consulting, Next.js architecture reviews, code audits, and fractional lead engineer services.",
                  areaServed: "Worldwide",
                  serviceType: [
                    "Frontend Consulting",
                    "Code Review",
                    "Architecture Review",
                    "Technical Mentoring",
                    "Fractional Lead Engineer",
                  ],
                },
              ]
            })}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
