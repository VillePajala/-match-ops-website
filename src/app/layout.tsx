import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { generateWebsiteSchema, generateOrganizationSchema, generateSoftwareApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "MatchOps Local - Free Soccer Coaching App",
    template: "%s | MatchOps Local"
  },
  description: "Professional soccer coaching tools accessible to everyone. Manage your team, plan tactics, and track performance with our free Progressive Web App.",
  keywords: [
    "soccer coaching app", "football tactics", "team management", "match tracking", 
    "soccer coach tools", "formation builder", "player statistics", "tactical planning",
    "youth soccer", "coaching software", "free soccer app", "PWA"
  ],
  authors: [{ name: "MatchOps Team" }],
  creator: "MatchOps",
  publisher: "MatchOps",
  category: "Sports & Fitness",
  classification: "Soccer Coaching Software",
  applicationName: "MatchOps Local",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fi_FI"],
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://matchops.local",
    siteName: "MatchOps Local",
    title: "MatchOps Local - Free Soccer Coaching App",
    description: "Professional soccer coaching tools accessible to everyone. Manage your team, plan tactics, and track performance with our free Progressive Web App.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "MatchOps Local - Free Soccer Coaching App",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@matchops",
    creator: "@matchops",
    title: "MatchOps Local - Free Soccer Coaching App",
    description: "Professional soccer coaching tools accessible to everyone. Manage your team, plan tactics, and track performance with our free Progressive Web App.",
    images: ["/images/og-default.png"],
  },
  
  manifest: "/manifest.json",
  
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || "https://matchops.local",
    languages: {
      'en': '/en',
      'fi': '/fi'
    }
  },
  
  verification: {
    google: process.env.GOOGLE_VERIFICATION_ID,
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION_ID || ''
    }
  },
  
  other: {
    'theme-color': '#0f172a',
    'color-scheme': 'dark',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    generateWebsiteSchema(),
    generateOrganizationSchema(),
    generateSoftwareApplicationSchema()
  ];

  return (
    <html lang="en">
      <head>
        <StructuredData data={structuredData} />
      </head>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}