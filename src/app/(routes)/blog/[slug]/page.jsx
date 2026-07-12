import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, ArrowLeft, Tag, ArrowRight } from "lucide-react";
import fs from 'fs/promises';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `https://www.syntalixconsultancy.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.syntalixconsultancy.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Syntalix Consultancy Services"],
      tags: post.tags,
    },
  };
}

const categoryColors = {
  "AI & ML": "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  "Agentic AI": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  "Industry Insights": "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  let markdownContent = '';
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.md`);
    markdownContent = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error(`Could not read markdown file for slug: ${slug}`, error);
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 syntalix-heading">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-li:text-muted-foreground">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-t border-border bg-gray-50 dark:bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 syntalix-heading">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group block bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <p className="text-xs font-medium text-primary mb-2">{related.category}</p>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">{related.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{related.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary mt-4 font-medium">
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-3xl p-10">
            <h2 className="text-2xl font-bold mb-3 syntalix-heading">Want to explore this for your business?</h2>
            <p className="text-muted-foreground mb-6 syntalix-body">Talk to our team about your specific use case and get a free technical consultation.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full gradient-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
              Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
