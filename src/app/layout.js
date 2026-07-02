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
    default: 'Syntalix Consultancy | AI & ML Company India',
    template: '%s | Syntalix Consultancy'
  },
  description: 'Syntalix Consultancy (Syntalix LLP) is an India-based AI/ML engineering firm specialising in LLM engineering, agentic AI systems, RAG pipelines, and enterprise software. LLPIN: ACR-6280.',
  keywords: [
    'AI ML company India', 'Syntalix LLP', 'Syntalix Consultancy',
    'LLM engineering India', 'agentic AI systems India', 'RAG pipeline development',
    'enterprise software India', 'AI consulting firm India', 'machine learning company India',
    'LLM fine-tuning India', 'AI infrastructure India', 'MLOps India',
    // City-level targeting
    'AI company Gujarat', 'AI consulting Gujarat', 'AI company Ahmedabad',
    'AI consulting Ahmedabad', 'AI company Surat', 'AI company Vadodara',
    'AI company Delhi', 'AI consulting Delhi', 'AI company Bengaluru',
    'AI consulting Bengaluru', 'AI company Kolkata', 'AI consulting Kolkata',
    'AI company Uttar Pradesh', 'AI company Lucknow',
    // AEO
    'AEO services India', 'answer engine optimization India', 'AI SEO India',
    'get cited by ChatGPT', 'Perplexity SEO India', 'Google AI Overviews optimization'
  ],
  authors: [{ name: 'Syntalix LLP', url: 'https://www.syntalixconsultancy.com' }],
  creator: 'Syntalix LLP',
  publisher: 'Syntalix LLP',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.syntalixconsultancy.com',
    siteName: 'Syntalix Consultancy',
    title: 'Syntalix Consultancy | AI & ML Company India',
    description: 'India-based AI/ML engineering firm. LLM engineering, agentic AI systems, RAG pipelines, and enterprise software for global clients.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Syntalix Consultancy - AI & ML Engineering Company India'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntalix Consultancy | AI & ML Company India',
    description: 'India-based AI/ML engineering firm. LLM engineering, agentic AI systems, RAG pipelines, and enterprise software.',
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
    // Fill in the actual value from Google Search Console
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
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.syntalixconsultancy.com/#organization",
      "name": "Syntalix Consultancy",
      "legalName": "Syntalix LLP",
      "alternateName": ["Syntalix", "Syntalix LLP", "Syntalix AI"],
      "legalIdentifier": "ACR-6280",
      "url": "https://www.syntalixconsultancy.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.syntalixconsultancy.com/syntalix_logo.webp",
        "width": 200,
        "height": 60
      },
      "image": "https://www.syntalixconsultancy.com/og-image.png",
      "description": "Syntalix Consultancy (Syntalix LLP, LLPIN: ACR-6280) is an India-based AI/ML engineering consultancy specialising in LLM engineering, agentic AI systems, RAG architecture, and enterprise software development for global clients.",
      "foundingDate": "2025",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Uttar Pradesh"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9259750107",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        }
      ],
      "email": "syntalixllp@gmail.com",
      "telephone": "+91-9259750107",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-18:00",
      "sameAs": [
        "https://www.linkedin.com/company/syntalix-consultancy",
        "https://clutch.co/profile/syntalix-consultancy",
        "https://github.com/Syntalix-AI",
        "https://www.facebook.com/syntalix/",
        "https://www.fiverr.com/agencies/syntalixai"
      ],
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "City", "name": "Ahmedabad" },
        { "@type": "City", "name": "Surat" },
        { "@type": "City", "name": "Vadodara" },
        { "@type": "City", "name": "Rajkot" },
        { "@type": "State", "name": "Gujarat" },
        { "@type": "City", "name": "New Delhi" },
        { "@type": "City", "name": "Gurugram" },
        { "@type": "City", "name": "Noida" },
        { "@type": "State", "name": "Delhi" },
        { "@type": "City", "name": "Bengaluru" },
        { "@type": "State", "name": "Karnataka" },
        { "@type": "City", "name": "Kolkata" },
        { "@type": "State", "name": "West Bengal" },
        { "@type": "City", "name": "Lucknow" },
        { "@type": "City", "name": "Kanpur" },
        { "@type": "State", "name": "Uttar Pradesh" },
        { "@type": "City", "name": "Mumbai" },
        { "@type": "City", "name": "Hyderabad" },
        { "@type": "City", "name": "Pune" },
        { "@type": "City", "name": "Chennai" }
      ],
      "knowsAbout": [
        "Artificial Intelligence", "Machine Learning", "Large Language Models",
        "LLM Engineering", "Agentic AI Systems", "RAG Systems",
        "Software Development", "Enterprise Software", "Web Development",
        "Mobile App Development", "MLOps", "AI Consulting",
        "Answer Engine Optimization", "AEO", "AI SEO", "Structured Data",
        "JSON-LD Schema", "Entity Optimization"
      ],
      "serviceType": [
        "LLM Engineering", "Agentic AI Systems", "AI & ML Infrastructure",
        "Web Development", "Mobile App Development", "AI Consulting",
        "Answer Engine Optimization", "AEO Services"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI & Software Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LLM Engineering", "url": "https://www.syntalixconsultancy.com/services/llm-engineering" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agentic AI Systems", "url": "https://www.syntalixconsultancy.com/services/agentic-systems" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & ML Infrastructure", "url": "https://www.syntalixconsultancy.com/services/ai-ml-infrastructure" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web & Mobile Development", "url": "https://www.syntalixconsultancy.com/services/web-mobile-development" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.syntalixconsultancy.com/#website",
      "url": "https://www.syntalixconsultancy.com",
      "name": "Syntalix Consultancy",
      "description": "AI/ML engineering consultancy based in India — Syntalix LLP (LLPIN: ACR-6280)",
      "publisher": { "@id": "https://www.syntalixconsultancy.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.syntalixconsultancy.com/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
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
