import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog | Syntalix Consultancy Services",
  description: "Insights, guides, and industry analysis on AI/ML development, LLM engineering, agentic systems, and software development from the Syntalix team.",
  alternates: { canonical: "https://www.syntalixconsultancy.in/blog" },
  openGraph: {
    title: "Blog | Syntalix Consultancy Services",
    description: "Expert insights on AI, ML, LLM engineering, agentic systems, and software development from Syntalix Consultancy.",
    url: "https://www.syntalixconsultancy.in/blog",
  },
};

const categoryColors = {
  "AI & ML": "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  "Agentic AI": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  "Industry Insights": "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
};

function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-7 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"}`}>
            {post.category}
          </span>
        </div>
        <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-200 leading-snug syntalix-heading">
          {post.title}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 syntalix-body">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
            Read <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-primary/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[50%] bg-secondary/8 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Insights & Articles
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-5 syntalix-heading tracking-tight">
            Thoughts on{" "}
            <span className="syntalix-gradient-text">AI, ML &amp; Software</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto syntalix-body">
            In-depth guides, industry analysis, and practical insights from the
            Syntalix team on building production AI systems and software.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-3xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 syntalix-heading">
              Ready to explore what AI can do for your business?
            </h2>
            <p className="text-muted-foreground mb-6 syntalix-body">
              Talk to our team about your specific use case and get a free technical consultation.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full gradient-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
              Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
