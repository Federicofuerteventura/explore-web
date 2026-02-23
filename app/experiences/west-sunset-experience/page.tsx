import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getExperienceBySlug } from '@/lib/data/experiences'
import { waLink, SITE_URL }    from '@/lib/constants'
import { FinalCTA }            from '@/components/home/FinalCTA'
import { TrustSection }        from '@/components/home/TrustSection'

const exp = getExperienceBySlug('west-sunset-experience')!

export const metadata: Metadata = {
  title: 'West Sunset Experience Fuerteventura | Atlantic Sunset Tour',
  description:
    "Guided sunset experience on the wild west coast of Fuerteventura. Exclusive viewpoints, optional paddle at golden hour. Small groups, book by WhatsApp.",
  alternates: { canonical: `${SITE_URL}/experiences/west-sunset-experience` },
  openGraph: {
    title: 'West Sunset Experience Fuerteventura — Atlantic Sunset at Its Best',
    description:
      "The best sunset on the island. Guided experience on the west coast of Fuerteventura with optional paddle at golden hour.",
    images: [{ url: exp.image, alt: exp.imageAlt }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: exp.name,
  description: exp.description,
  url: `${SITE_URL}/experiences/west-sunset-experience`,
  image: exp.image,
  offers: {
    '@type': 'Offer',
    price: exp.priceFrom,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fuerteventura',
    addressCountry: 'ES',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: exp.faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const WA = waLink(exp.whatsappText)

export default function WestSunsetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className="relative h-[50vh] min-h-[340px] md:h-[60vh] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-80 z-10`} />
        <Image src={exp.image} alt={exp.imageAlt} fill priority className="object-cover mix-blend-overlay" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-20" />

        <nav aria-label="Breadcrumb" className="absolute top-24 left-0 right-0 z-30 container-main">
          <ol className="flex items-center gap-2 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page" className="text-white">{exp.name}</li>
          </ol>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 z-30 container-main pb-8 md:pb-12">
          <span className="inline-flex items-center px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-3">
            {exp.tag}
          </span>
          <h1 className="font-heading font-extrabold text-white text-[clamp(2rem,5vw,3.2rem)] leading-tight">
            {exp.name}
          </h1>
          <p className="text-white/80 text-lg mt-2 max-w-xl">{exp.tagline}</p>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="section-padding bg-[var(--color-bg)]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-heading font-bold text-2xl text-[var(--color-text)] mb-4">About this experience</h2>
                <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">{exp.longDesc}</p>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-[var(--color-text)] mb-4">What's included</h2>
                <ul className="space-y-2.5" role="list">
                  {exp.includes.map(item => (
                    <li key={item} className="flex items-start gap-3 text-[var(--color-text-muted)]">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {exp.notIncludes.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-[var(--color-text-muted)] font-medium mb-2">Not included:</p>
                    <ul className="space-y-1">
                      {exp.notIncludes.map(item => (
                        <li key={item} className="text-sm text-[var(--color-text-muted)] flex items-start gap-2">
                          <span aria-hidden="true" className="mt-0.5 text-gray-400">—</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-[var(--color-text)] mb-4">Highlights</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="list">
                  {exp.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-[var(--color-text-muted)]">
                      <span className="text-amber-500" aria-hidden="true">✦</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-xl text-[var(--color-text)] mb-5">Questions about this experience</h2>
                <dl className="space-y-5">
                  {exp.faqs.map(({ q, a }) => (
                    <div key={q} className="border-b border-gray-100 pb-5">
                      <dt className="font-heading font-semibold text-[var(--color-text)] mb-1.5">{q}</dt>
                      <dd className="text-[var(--color-text-muted)] text-sm leading-relaxed">{a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Booking sidebar */}
            <aside className="lg:sticky lg:top-24 self-start space-y-4">
              <div className="card p-6">
                <div className="mb-5">
                  <p className="text-xs text-[var(--color-text-muted)]">From</p>
                  <p className="font-heading font-extrabold text-3xl text-amber-600">
                    €{exp.priceFrom}
                    <span className="text-sm font-normal text-[var(--color-text-muted)] ml-1">/ {exp.priceLabel}</span>
                  </p>
                </div>

                <dl className="space-y-2.5 text-sm border-t border-b border-gray-100 py-4 mb-5">
                  {[
                    ['Duration',   exp.duration   ],
                    ['Group size', exp.groupSize   ],
                    ['Level',      exp.difficulty  ],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between">
                      <dt className="text-[var(--color-text-muted)]">{label}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-base"
                  aria-label={`Book ${exp.name} via WhatsApp`}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Book via WhatsApp
                </a>
                <p className="text-center text-xs text-[var(--color-text-muted)] mt-3">
                  No prepayment · Free cancellation · Usually replies in 1h
                </p>
              </div>

              <div className="card p-5 bg-ocean-50 border-ocean-100">
                <p className="text-xs font-semibold text-ocean-600 uppercase tracking-wide mb-1">Also available</p>
                <p className="font-heading font-bold text-base text-[var(--color-text)] mb-2">Paddle Excursion 🏄</p>
                <Link
                  href="/experiences/paddle-excursion"
                  className="text-sm text-ocean-600 hover:text-ocean-800 font-semibold transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <TrustSection />
      <FinalCTA />
    </>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
