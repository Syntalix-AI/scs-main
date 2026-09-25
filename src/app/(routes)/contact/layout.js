export const metadata = {
    title: "Contact Us | Syntalix Consultancy",
    description: "Get in touch with Syntalix Consultancy (Syntalix LLP) for AI/ML projects, LLM engineering, agentic AI development, or enterprise software. Free consultation available.",
    openGraph: {
        title: 'Contact Us | Syntalix Consultancy',
        description: 'Get in touch with Syntalix Consultancy for AI/ML projects, LLM engineering, agentic AI development, or enterprise software. Free consultation available.',
        url: 'https://www.syntalixconsultancy.com/contact',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us | Syntalix Consultancy',
        description: 'Get in touch with Syntalix Consultancy (Syntalix LLP) for AI/ML projects, LLM engineering, agentic AI development, or enterprise software. Free consultation available.',
        images: ['/og-image.png'],
    },
    alternates: {
        canonical: "https://www.syntalixconsultancy.com/contact",
    },
};

export default function ContactLayout({ children }) {
    return children;
}
