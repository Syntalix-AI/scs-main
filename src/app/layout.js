import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Navbar";
import { Foot } from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../components/ThemeProvider";


const inter = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://www.syntalixconsultancy.in'),
  title: {
    default: 'Syntalix Consultancy Services | AI, ML & Software Development India',
    template: '%s | Syntalix Consultancy Services'
  },
  description: 'Syntalix Consultancy Services is an India-based software development company specialising in AI/ML infrastructure, LLM engineering, agentic systems, web and mobile development.',
  keywords: [
    'AI development India', 'ML consulting India', 'LLM engineering',
    'software development Ahmedabad', 'AI chatbot development',
    'custom AI solutions', 'Syntalix Consultancy', 'machine learning company India'
  ],
  authors: [{ name: 'Syntalix Consultancy Services', url: 'https://www.syntalixconsultancy.in' }],
  creator: 'Syntalix Consultancy Services',
  publisher: 'Syntalix Consultancy Services',
  alternates: {
    canonical: 'https://www.syntalixconsultancy.in',
    types: {
      // Both domains serve the same content; .in is canonical
      'text/html': [
        { url: 'https://www.syntalixconsultancy.in', hreflang: 'en-IN' },
        { url: 'https://www.syntalixconsultancy.com', hreflang: 'en' },
      ],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.syntalixconsultancy.in',
    siteName: 'Syntalix Consultancy Services',
    title: 'Syntalix Consultancy Services | AI, ML & Software Development India',
    description: 'India-based AI/ML and software development company. Custom AI systems, LLM engineering, agentic AI, web and mobile apps.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Syntalix Consultancy Services — AI, ML & Software Development'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntalix Consultancy Services | AI, ML & Software Development India',
    description: 'India-based AI/ML and software development company.',
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
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    // Fill in the actual values from Google Search Console
    google: '',
    // yandex: '',
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#4F46E5",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.syntalixconsultancy.in/#organization",
      "name": "Syntalix Consultancy Services",
      "alternateName": "Syntalix",
      "url": "https://www.syntalixconsultancy.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.syntalixconsultancy.in/syntalix_logo.svg",
        "width": 200,
        "height": 60
      },
      "description": "Syntalix Consultancy Services is an India-based software development company specialising in AI/ML infrastructure, LLM engineering, autonomous agentic systems, enterprise web architecture, and mobile development.",
      "foundingDate": "2023",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Gujarat",
        "addressLocality": "Ahmedabad"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9259750107",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"],
          "contactOption": "TollFree"
        }
      ],
      "email": "syntalix.ai@gmail.com",
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
        "Software Development", "Web Development", "Mobile App Development",
        "AI Consulting", "LLM Fine-tuning", "Agentic AI Systems"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT and AI Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom AI & ML Infrastructure" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generative LLM Engineering" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Autonomous Agentic Systems" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Web Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Native Mobile App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desktop Software Solutions" } }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.syntalixconsultancy.in/#website",
      "url": "https://www.syntalixconsultancy.in",
      "name": "Syntalix Consultancy Services",
      "description": "AI, ML, and software development consultancy based in India",
      "publisher": { "@id": "https://www.syntalixconsultancy.in/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.syntalixconsultancy.in/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Syntalix Consultancy offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Syntalix Consultancy Services offers custom AI and ML infrastructure, generative LLM engineering, autonomous agentic AI systems, enterprise web development, native Android and iOS mobile apps, and desktop software solutions."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Syntalix Consultancy Services based?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Syntalix Consultancy Services is based in India and serves clients globally including the US, Australia, UAE, and UK."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Syntalix for a project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach Syntalix Consultancy Services by email at syntalix.ai@gmail.com, by phone at +91 9259750107, or via the contact form on the website."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
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
