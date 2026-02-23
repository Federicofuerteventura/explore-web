import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { Hero }               from '@/components/home/Hero'
import { ExperiencesSection } from '@/components/home/ExperiencesSection'
import { HowItWorks }         from '@/components/home/HowItWorks'
import { ValueBlock }         from '@/components/home/ValueBlock'
import { TrustSection }       from '@/components/home/TrustSection'
import { FAQSection }         from '@/components/home/FAQSection'
import { InspirationGrid }    from '@/components/home/InspirationGrid'
import { FinalCTA }           from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Explore Fuerteventura | Paddle Excursion & West Sunset Experience',
  description:
    'Guided paddle excursions and sunset experiences on the Atlantic coast of Fuerteventura. Small groups, local guides. Book directly by WhatsApp — no platform fees.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Explore Fuerteventura | Paddle Excursion & West Sunset Experience',
    description:
      'Guided paddle excursions and sunset experiences in Fuerteventura. Small groups, local guides. Book by WhatsApp.',
    url: SITE_URL,
  },
}

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Explore Fuerteventura — Guided Experiences on the Atlantic Coast',
  description:
    'Paddle excursions and sunset experiences in Fuerteventura. Small groups, local guides, direct WhatsApp booking.',
  url: SITE_URL,
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      {/* 1. Hero — full viewport, dual CTA */}
      <Hero />

      {/* 2. The 2 experiences — conversion-first cards */}
      <ExperiencesSection />

      {/* 3. How to book — 3 simple steps */}
      <HowItWorks />

      {/* 4. Why choose us — differentiators */}
      <ValueBlock />

      {/* 5. Reviews — social proof */}
      <TrustSection />

      {/* 6. FAQ — reduce friction */}
      <FAQSection />

      {/* 7. Inspiration image grid */}
      <InspirationGrid />

      {/* 8. Final WhatsApp CTA */}
      <FinalCTA />
    </>
  )
}
