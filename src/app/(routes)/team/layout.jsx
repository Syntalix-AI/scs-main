// Team page layout — holds metadata since page.jsx uses "use client"
export const metadata = {
  title: 'Team',
  description: 'Meet the Syntalix team — AI engineers, LLM specialists, and full-stack developers building production-grade AI systems for Indian and global enterprise clients.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Team | Syntalix Consultancy',
    description: 'Meet the Syntalix team — AI engineers, LLM specialists, and full-stack developers building production-grade AI systems for Indian and global enterprise clients.',
    url: 'https://www.syntalixconsultancy.com/team',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team | Syntalix Consultancy',
    description: 'Meet the Syntalix team — AI engineers, LLM specialists, and full-stack developers building production-grade AI systems.',
    images: ['/og-image.png'],
  },
}

export default function TeamLayout({ children }) {
  return children
}
