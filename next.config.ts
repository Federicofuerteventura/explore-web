import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // i18n: Future — add next-intl or next-i18next here
  // experimental: { optimizeCss: true }, // enable when using critters
}

export default nextConfig
