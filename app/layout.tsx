import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyWhatsApp } from '@/components/ui/StickyWhatsApp'

/* ─── Fonts — loaded via CSS @import in globals.css (no Google Fonts dependency) ── */
// Fallback: system-ui fonts are set in tailwind.config.ts
// When deploying, next/font/google works fine — the issue only occurs offline.
const jakarta = { variable: '' }
const inter   = { variable: '' }

/* ─── Site-wide metadata ─────────────────────────────────────────────── */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://explorefuerteventura.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/logo-icon.svg',
  },
  title: {
    default: 'Explore Fuerteventura | Surf, Activities & Local Experiences',
    template: '%s | Explore Fuerteventura',
  },
  description:
    'Discover the best surf spots, kitesurfing, outdoor activities and authentic local experiences in Fuerteventura. Guided by people who actually live here.',
  keywords: [
    'Fuerteventura activities',
    'surf Fuerteventura',
    'kitesurfing Fuerteventura',
    'things to do Fuerteventura',
    'Fuerteventura local guide',
    'Fuerteventura experiences',
    'Canary Islands surf',
    'Fuerteventura surf lessons',
  ],
  authors: [{ name: 'Explore Fuerteventura' }],
  creator: 'Explore Fuerteventura',
  publisher: 'Explore Fuerteventura',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['de_DE', 'it_IT', 'fr_FR', 'pl_PL'],
    url: siteUrl,
    siteName: 'Explore Fuerteventura',
    title: 'Explore Fuerteventura | Surf, Activities & Local Experiences',
    description:
      'Discover surf spots, outdoor activities and authentic local experiences in Fuerteventura — curated by locals.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Explore Fuerteventura — surf, activities and local experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Fuerteventura | Surf, Activities & Local Experiences',
    description:
      'Discover surf spots, outdoor activities and authentic local experiences in Fuerteventura.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    // Uncomment when i18n routes are live:
    // languages: {
    //   'en': `${siteUrl}/en`,
    //   'de': `${siteUrl}/de`,
    //   'it': `${siteUrl}/it`,
    //   'fr': `${siteUrl}/fr`,
    //   'pl': `${siteUrl}/pl`,
    // },
  },
}

/* ─── JSON-LD schema for the whole site ─────────────────────────────── */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['TouristInformationCenter', 'LocalBusiness'],
  name: 'Explore Fuerteventura',
  url: siteUrl,
  description:
    'Local guide for surf lessons, kitesurfing, outdoor activities and authentic experiences in Fuerteventura, Canary Islands.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fuerteventura',
    addressCountry: 'ES',
    addressRegion: 'Canary Islands',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.3587',
    longitude: '-14.0537',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Fuerteventura, Canary Islands',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: ['English', 'German', 'Italian', 'French', 'Polish', 'Spanish'],
  },
  // sameAs: ['https://instagram.com/explorefuerteventura', ...]
}

/* ─── Root layout ────────────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        {/* Google Fonts — preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        {/* Accessibility: skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {/* Sticky WhatsApp button — mobile only, appears after scrolling */}
        <StickyWhatsApp />
      </body>
    </html>
  )
}
