import { Navbar } from "@/components/layout/Navbar";
import { ServicesContent } from "@/components/sections/ServicesContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Frontend Consulting Services | Next.js & React Expert | Karthik Talam",
  description:
    "Expert frontend consulting: Next.js architecture reviews, React performance audits, code reviews, and fractional lead engineer engagements. Remote-friendly, worldwide availability.",
  alternates: {
    canonical: "https://karthik.run/services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karthik.run/services",
    title: "Frontend Consulting Services — Karthik Talam",
    description:
      "Expert frontend consulting: Next.js architecture reviews, React performance audits, code reviews, and fractional lead engineer engagements.",
    siteName: "Karthik Talam Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Karthik Talam Frontend Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Consulting Services — Karthik Talam",
    description:
      "Expert frontend consulting: Next.js architecture reviews, React performance audits, and fractional lead engagements.",
    creator: "@karthiktalam",
    site: "@karthiktalam",
    images: ["/opengraph-image"],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://karthik.run",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://karthik.run/services",
        },
      ],
    },
    {
      "@type": "Service",
      name: "Frontend Consulting Services",
      provider: {
        "@type": "Person",
        "@id": "https://karthik.run/#person",
      },
      url: "https://karthik.run/services",
      description:
        "Expert frontend consulting: Next.js architecture reviews, React performance audits, code reviews, and fractional lead engineer engagements.",
      areaServed: "Worldwide",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Remote",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Frontend Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Codebase Health Check",
              description:
                "30-min async audit with actionable feedback on performance, structure, and best practices.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consulting Hours",
              description:
                "Architecture design, performance optimization, enterprise auth setup, and AI-augmented workflow design via live sessions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fractional Lead Engineer",
              description:
                "Embedded technical leadership: architecture ownership, code review cadence, hiring support, and team mentoring.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Send an email to karthiktalam8@gmail.com with a brief description of your project or challenge. I'll respond within 24 hours.",
          },
        },
        {
          "@type": "Question",
          name: "Do you take on full-time contracts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I'm open to fractional/part-time engagements. For full-time roles, let's talk first.",
          },
        },
        {
          "@type": "Question",
          name: "What timezone are you in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I'm based in India (IST, UTC+5:30) but work async-first and can accommodate US/EU hours.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer refunds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For code reviews, if you're not satisfied with the quality of the report, I'll do a free revision.",
          },
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Navbar />
      <ServicesContent />
    </>
  );
}
