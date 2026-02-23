import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { activities, getActivityBySlug } from '@/lib/data/activities'

/* ─── Static params ──────────────────────────────────────────────── */
export function generateStaticParams() {
  return activities.map(a => ({ slug: a.slug }))
}

/* ─── Metadata ───────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const activity = getActivityBySlug(slug)
  if (!activity) return {}
  return {
    title: activity.title,
    description: activity.description,
    alternates: { canonical: `https://explorefuerteventura.com/activities/${activity.slug}` },
    openGraph: {
      title:       activity.title,
      description: activity.tagline,
      images:      [{ url: activity.image, alt: activity.imageAlt }],
    },
  }
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default async function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const activity = getActivityBySlug(slug)
  if (!activity) notFound()

  const WHATSAPP_URL = `https://wa.me/34600000000?text=Hi%2C%20I%27d%20like%20to%20book%20the%20%22${encodeURIComponent(activity.title)}%22%20activity`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: activity.title,
    description: activity.description,
    url: `https://explorefuerteventura.com/activities/${activity.slug}`,
    image: activity.image,
    offers: {
      '@type': 'Offer',
      price: activity.priceFrom,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fuerteventura',
      addressCountry: 'ES',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero image */}
      <div className="relative h-[45vh] min-h-[320px] md:h-[55vh] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-80`} />
        <Image
          src={activity.image}
          alt={activity.imageAlt}
          fill
          priority
          className="object-cover mix-blend-overlay"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="absolute top-24 left-0 right-0 container-main">
          <ol className="flex items-center gap-2 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/activities" className="hover:text-white">Activities</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-white truncate max-w-[180px]">{activity.title}</li>
          </ol>
        </nav>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 container-main pb-8 md:pb-12">
          <span className="tag bg-white/20 text-white border-white/30 mb-3">
            {activity.category}
          </span>
          <h1 className="font-heading font-extrabold text-white text-[clamp(1.8rem,4vw,3rem)] leading-tight">
            {activity.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-[var(--color-bg)]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Main content */}
            <article className="lg:col-span-2 space-y-8">
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                {activity.description}
              </p>

              {/* Highlights */}
              <div>
                <h2 className="font-heading font-bold text-xl mb-4">What's included</h2>
                <ul className="space-y-2.5" role="list">
                  {activity.highlights.map(h => (
                    <li key={h} className="flex items-start gap-3 text-[var(--color-text-muted)]">
                      <span className="mt-1 w-5 h-5 rounded-full bg-ocean-100 text-ocean-600 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ placeholder */}
              <div>
                <h2 className="font-heading font-bold text-xl mb-4">Frequently asked questions</h2>
                <p className="text-[var(--color-text-muted)] text-sm italic">
                  FAQ content will be added here. Use a CMS or static data array.
                </p>
              </div>
            </article>

            {/* Booking sidebar */}
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="card p-6 space-y-4">
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">From</p>
                  <p className="font-heading font-extrabold text-3xl text-ocean-700">
                    €{activity.priceFrom}
                    <span className="text-base font-normal text-[var(--color-text-muted)]"> / person</span>
                  </p>
                </div>

                <dl className="space-y-2 text-sm border-t border-b border-gray-100 py-4">
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-text-muted)]">Duration</dt>
                    <dd className="font-medium">{activity.duration}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-text-muted)]">Group size</dt>
                    <dd className="font-medium">{activity.groupSize}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-text-muted)]">Difficulty</dt>
                    <dd className="font-medium capitalize">{activity.difficulty.replace('-', ' ')}</dd>
                  </div>
                </dl>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  Book via WhatsApp
                </a>

                <p className="text-center text-xs text-[var(--color-text-muted)]">
                  No prepayment required · Free cancellation
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
