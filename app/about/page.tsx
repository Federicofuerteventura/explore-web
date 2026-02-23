import type { Metadata } from 'next'
import Link from 'next/link'
import { FinalCTA } from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'About Us — Local Team Behind Explore Fuerteventura',
  description:
    "We're not a booking platform — we're people who moved to Fuerteventura and built this to share the island honestly. Meet the team.",
  alternates: { canonical: 'https://explorefuerteventura.com/about' },
}

const VALUES = [
  {
    title: 'Born from love for the island',
    text: 'Explore Fuerteventura started because we kept watching tourists miss the best parts of the island — settling for resort pools when extraordinary beaches were 20 minutes away.',
  },
  {
    title: 'No greenwashing, no inflated claims',
    text: "We tell you when conditions won't be ideal. We cap group sizes even when we could earn more by filling them. We recommend competitors when they're genuinely better for your needs.",
  },
  {
    title: 'Built to last, not to scale fast',
    text: 'We want to be the go-to local resource for Fuerteventura for a very long time. That means quality over volume, relationships over transactions.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-ocean-900 to-ocean-700 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-main max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-ocean-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true" className="text-ocean-600">›</li>
              <li aria-current="page" className="text-white">About</li>
            </ol>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-[clamp(2rem,5vw,3rem)] leading-tight mb-5">
            We live here. That's the difference.
          </h1>
          <p className="text-ocean-200 text-lg leading-relaxed">
            Explore Fuerteventura is a locally-run guide and experience platform built by people who
            chose this island as home. Not a head office operation. Not a franchise. Just locals who
            want to share what they know.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl">
            <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed">
              <h2 className="font-heading font-bold text-2xl text-[var(--color-text)]">
                How we started
              </h2>
              <p>
                It started with too many conversations that went like: "What should we do while we're here?"
                And us realising that the honest answer — the spots, the timing, the what-to-avoid — wasn't
                written down anywhere in a way that was actually useful.
              </p>
              <p>
                So we built it. Initially as a set of personal recommendations. Then as a structured guide.
                Then, because people kept asking us to take them places directly, as a series of small-group
                experiences.
              </p>
              <p>
                Everything we run reflects how we'd spend the day ourselves: small groups, real spots, no
                manufactured "experience" packaging that strips away what makes the island special.
              </p>
            </div>
            <div className="space-y-5">
              {VALUES.map(({ title, text }) => (
                <div
                  key={title}
                  className="p-5 rounded-2xl border border-[var(--color-border)] hover:border-ocean-200 hover:bg-ocean-50/30 transition-colors"
                >
                  <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="section-padding bg-[var(--color-bg)]">
        <div className="container-main max-w-4xl">
          <h2 className="font-heading font-bold text-2xl text-[var(--color-text)] mb-10">
            What we do (and what we don't)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
              <h3 className="font-heading font-bold text-base text-emerald-800 mb-4">✅ We do</h3>
              <ul className="space-y-2 text-sm text-emerald-700">
                {[
                  'Surf lessons & coaching — all levels',
                  'Kitesurfing introduction sessions',
                  'Snorkeling on volcanic reefs',
                  'E-bike tours through dunes & villages',
                  'Sunset SUP sessions',
                  'Honest local advice — free, no obligation',
                  'Personalised trip planning via WhatsApp',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden="true">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h3 className="font-heading font-bold text-base text-gray-700 mb-4">❌ We don't do</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Large bus tours',
                  'Commission-based hotel or car rental referrals',
                  "Activities we don't personally vet",
                  'Inflated group sizes to maximise revenue',
                  'Fake reviews or manufactured testimonials',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden="true">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
