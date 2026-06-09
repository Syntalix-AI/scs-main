const faqs = [
  {
    question: "What AI and ML services does Syntalix Consultancy provide?",
    answer:
      "Syntalix Consultancy builds custom AI and ML infrastructure, LLM applications, agentic AI workflows, AI chatbots, predictive analytics, and computer vision systems for businesses that need practical automation and decision support.",
  },
  {
    question: "Does Syntalix Consultancy serve clients across India?",
    answer:
      "Yes. Syntalix Consultancy Services is an India-registered company that serves clients across India and international markets including the US, UK, UAE, and Australia.",
  },
  {
    question: "Can Syntalix build web and mobile applications?",
    answer:
      "Yes. The team develops business websites, web applications, e-commerce platforms, iOS apps, Android apps, cross-platform mobile apps, and enterprise software with scalable architecture.",
  },
  {
    question: "How can I start a project with Syntalix Consultancy?",
    answer:
      "You can contact Syntalix by phone at +91 9259750107, email syntalixconsultancy@gmail.com, or use the website contact form to request a free consultation for your project.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Common Questions About Our AI and Software Services
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Direct answers for businesses evaluating an AI, ML, web, or mobile development partner in India.
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
