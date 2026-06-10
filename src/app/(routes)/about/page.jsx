import About from '@/components/Home/About'
import Link from 'next/link'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Syntalix Consultancy Services — an India-based AI/ML and software development company delivering custom solutions for businesses worldwide.',
}

const AboutPage = () => {
  return (
    <main className="pt-20 md:pt-28">
      <About />
      {/* Additional About Content */}
      <section className="py-16 md:py-24 bg-background section-glow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold syntalix-heading text-foreground">
              Why Choose Syntalix?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are a registered LLP in India (LLPIN: ACR-6280) with deep expertise in artificial intelligence, machine learning, and enterprise software development. Our team builds practical, scalable solutions that drive business outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="glass-card p-6 rounded-2xl card-hover">
                <p className="text-3xl font-bold text-primary mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Projects delivered across AI, ML, web, and mobile</p>
              </div>
              <div className="glass-card p-6 rounded-2xl card-hover">
                <p className="text-3xl font-bold text-primary mb-2">5+</p>
                <p className="text-sm text-muted-foreground">Countries served including US, UK, UAE, and Australia</p>
              </div>
              <div className="glass-card p-6 rounded-2xl card-hover">
                <p className="text-3xl font-bold text-primary mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">Support and communication across time zones</p>
              </div>
            </div>
            <div className="pt-8">
              <Link
                href="/services"
                className="inline-flex px-8 py-3 rounded-full gradient-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage