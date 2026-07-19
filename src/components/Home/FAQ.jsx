const faqs = [
  {
    question: "What AI and ML services does Syntalix Consultancy provide?",
    answer:
      "Syntalix Consultancy builds custom AI and ML infrastructure, LLM applications, agentic AI workflows, RAG pipelines, AI chatbots, predictive analytics, and computer vision systems. We also provide AI consulting and Answer Engine Optimization (AEO) — helping businesses appear in AI-generated answers from ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    question: "Is Syntalix Consultancy available in Gujarat — Ahmedabad, Surat, and Vadodara?",
    answer:
      "Yes. Syntalix Consultancy (Syntalix LLP) provides AI consulting, LLM engineering, agentic AI systems, and enterprise software services to businesses across Gujarat — including Ahmedabad, Surat, Vadodara, and Rajkot. All engagements are available remotely, with free initial consultations.",
  },
  {
    question: "Which Indian cities does Syntalix serve?",
    answer:
      "Syntalix Consultancy serves clients across all major Indian markets: Gujarat (Ahmedabad, Surat, Vadodara), Delhi NCR (Delhi, Gurugram, Noida), Bengaluru, Kolkata, Mumbai, Hyderabad, Pune, Chennai, and across Uttar Pradesh (Lucknow, Kanpur, Agra). We also serve international clients in the US, UK, UAE, and Australia.",
  },
  {
    question: "What is Answer Engine Optimization (AEO) and does Syntalix offer it?",
    answer:
      "Answer Engine Optimization (AEO) is the practice of structuring your website and content so that AI engines like ChatGPT, Perplexity, Google AI Overviews, and Claude cite your brand when answering user queries. Yes — Syntalix offers AEO as a service. We implement structured data (JSON-LD schema), entity clarity, AI-crawlable content (llms.txt), and authority citation building so your business gets recommended by AI engines.",
  },
  {
    question: "Can Syntalix build web and mobile applications?",
    answer:
      "Yes. The team develops business websites, web applications, e-commerce platforms, iOS apps, Android apps, cross-platform mobile apps, and enterprise software with scalable architecture — across India and for global clients.",
  },
  {
    question: "How can I start a project with Syntalix Consultancy?",
    answer:
      "You can contact Syntalix by phone at +91 9259750107, email syntalix.consultancy@gmail.com, or use the website contact form to request a free consultation for your project. We serve clients remotely across India and globally.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Common Questions About Our AI and Software Services
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Direct answers for businesses in Gujarat, Delhi, Bengaluru, Kolkata, Uttar Pradesh, and globally — evaluating an AI, ML, AEO, or software development partner.
          </p>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <article key={item.question} className="py-6">
              <h3 className="text-xl font-semibold text-foreground">
                {item.question}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
