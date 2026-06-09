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
    default: 'Syntalix Consultancy | AI & ML Development India',
    template: '%s | Syntalix Consultancy Services'
  },
  description: 'Syntalix Consultancy Services builds AI/ML infrastructure, LLM engineering, agentic systems, web and mobile apps in India. Get a free consultation today.',
  keywords: [
    'AI development India', 'ML consulting India', 'LLM engineering',
    'software development India', 'AI chatbot development',
    'custom AI solutions', 'Syntalix Consultancy', 'machine learning company India'
  ],
  authors: [{ name: 'Syntalix Consultancy Services', url: 'https://www.syntalixconsultancy.in' }],
  creator: 'Syntalix Consultancy Services',
  publisher: 'Syntalix Consultancy Services',
  alternates: {
    canonical: 'https://www.syntalixconsultancy.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.syntalixconsultancy.in',
    siteName: 'Syntalix Consultancy Services',
    title: 'Syntalix Consultancy | AI & ML Development India',
    description: 'India-based AI/ML and software development company. Custom AI systems, LLM engineering, agentic AI, web and mobile apps.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Syntalix Consultancy Services - AI, ML & Software Development'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntalix Consultancy | AI & ML Development India',
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
  themeColor: "#4F46E5",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
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
        "streetAddress": "H NO 494 RANVEER NAGAR, NEAR ITI CHAURAHA ETAWAH, I. T. I. Etawah, CIVIL LINE",
        "addressLocality": "Etawah",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "206002",
        "addressCountry": "IN"
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
      "email": "syntalix.consultancy@gmail.com",
      "telephone": "+91-9259750107",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-18:00",
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
      "publisher": { "@id": "https://www.syntalixconsultancy.in/#organization" }
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
