/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: process.env.VERCEL_ENV === 'preview' ? 'noindex, nofollow' : 'index, follow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
