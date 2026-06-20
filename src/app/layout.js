import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Navbar";
import { Foot } from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL('https://www.syntalixconsultancy.com'),
  title: {
    default: 'Syntalix Consultancy | Software, AI & ML Development Company India',
    template: '%s | Syntalix Consultancy'
  },
  description: 'Syntalix Consultancy (Syntalix LLP) is a software and AI/ML development company based in India. We build enterprise software, web & mobile apps, LLM engineering, agentic AI systems, and ML infrastructure for global clients.',
  keywords: [
    'software development company India', 'AI ML development India', 'Syntalix LLP',
    'Syntalix Consultancy', 'LLM engineering India', 'agentic AI systems',
    'enterprise software development', 'web development India', 'mobile app development India',
    'machine learning company India', 'AI consulting firm India', 'custom software India',
    'React Next.js development India', 'AI chatbot development', 'RAG systems India'
  ],
  authors: [{ name: 'Syntalix LLP', url: 'https://www.syntalixconsultancy.com' }],
  creator: 'Syntalix LLP',
  publisher: 'Syntalix LLP',
  alternates: {
    canonical: 'https://www.syntalixconsultancy.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.syntalixconsultancy.com',
    siteName: 'Syntalix Consultancy',
    title: 'Syntalix Consultancy | Software, AI & ML Development Company India',
    description: 'India-based software and AI/ML development company. Enterprise apps, LLM engineering, agentic AI, web & mobile development for global businesses.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Syntalix Consultancy - Software, AI & ML Development Company India'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntalix Consultancy | Software, AI & ML Development India',
    description: 'India-based software and AI/ML development company. Enterprise apps, LLM engineering, agentic AI, web & mobile development.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Fill in the actual values from Google Search Console
    google: '',
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4F46E5",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.syntalixconsultancy.com/#organization",
      "name": "Syntalix Consultancy",
      "alternateName": ["Syntalix LLP", "Syntalix Consultancy Services"],
      "url": "https://www.syntalixconsultancy.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.syntalixconsultancy.com/syntalix_logo.webp",
        "width": 200,
        "height": 60
      },
      "description": "Syntalix Consultancy (Syntalix LLP) is an India-based software and AI/ML development company specialising in enterprise software, web & mobile apps, LLM engineering, autonomous agentic systems, and ML infrastructure for global clients.",
      "foundingDate": "2023",
      "legalName": "Syntalix LLP",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9259750107",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        }
      ],
      "email": "syntalix.consultancy@gmail.com",
      "telephone": "+91-9259750107",
      "sameAs": [
        "https://www.syntalixconsultancy.com",
        "https://www.syntalixconsultancy.in",
        "https://www.linkedin.com/company/syntalix/",
        "https://www.facebook.com/syntalix/",
        "https://github.com/Syntalix-AI"
      ],
      "areaServed": ["IN", "US", "AU", "AE", "GB"],
      "knowsAbout": [
        "Artificial Intelligence", "Machine Learning", "Large Language Models",
        "Software Development", "Enterprise Software", "Web Development",
        "Mobile App Development", "AI Consulting", "LLM Fine-tuning",
        "Agentic AI Systems", "RAG Systems", "MLOps"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software & AI Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom AI & ML Infrastructure", "url": "https://www.syntalixconsultancy.com/services/ai-ml-infrastructure" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generative LLM Engineering", "url": "https://www.syntalixconsultancy.com/services/llm-engineering" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Autonomous Agentic Systems", "url": "https://www.syntalixconsultancy.com/services/agentic-systems" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web & Mobile App Development", "url": "https://www.syntalixconsultancy.com/services/web-mobile-development" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.syntalixconsultancy.com/#website",
      "url": "https://www.syntalixconsultancy.com",
      "name": "Syntalix Consultancy",
      "description": "Software, AI & ML development consultancy based in India — Syntalix LLP",
      "publisher": { "@id": "https://www.syntalixconsultancy.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.syntalixconsultancy.com/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.syntalixconsultancy.com/#service",
      "name": "Syntalix Consultancy",
      "legalName": "Syntalix LLP",
      "url": "https://www.syntalixconsultancy.com",
      "parentOrganization": { "@id": "https://www.syntalixconsultancy.com/#organization" },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "telephone": "+91-9259750107",
      "email": "syntalix.consultancy@gmail.com",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-18:00",
      "serviceType": ["Software Development", "AI Development", "ML Consulting", "Web Development", "Mobile App Development"]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Nav />
          {children}
          <Foot />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
