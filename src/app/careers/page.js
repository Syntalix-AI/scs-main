import Link from 'next/link';

export const metadata = {
  title: 'Careers',
  description: 'Explore career opportunities at Syntalix Consultancy Services. Join our team of AI, ML, and software development experts.',
};

const Careers = () => {
    return (
        <main className="min-h-[70vh] flex items-center justify-center section-glow">
            <div className="text-center space-y-6 px-4 max-w-xl">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Careers at Syntalix
                </div>
                <h1 className="text-4xl md:text-6xl font-bold syntalix-heading gradient-text">
                    Join Our Team
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    We currently have no open positions. Check back soon for exciting opportunities in AI, ML, and software development.
                </p>
                <p className="text-sm text-muted-foreground">
                    Follow us on{' '}
                    <a
                        href="https://www.linkedin.com/company/syntalix/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                    >
                        LinkedIn
                    </a>{' '}
                    for the latest updates and openings.
                </p>
                <div className="pt-4">
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-3 rounded-full gradient-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Careers;
