import Link from 'next/link'
import { featuredGuides } from '@/lib/data/guides'
import { GuideCard } from '@/components/ui/GuideCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

/* ─── LocalInsights ──────────────────────────────────────────────── */
export function LocalInsights() {
  const [primaryGuide, ...restGuides] = featuredGuides

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="guides-heading"
    >
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
          <SectionHeader
            eyebrow="Local Guides"
            title="Know Before You Go"
            subtitle="Honest, practical guides written from experience — no filler, no affiliate fluff."
            titleAs="h2"
          />
          <Link
            href="/guides"
            className="btn-secondary whitespace-nowrap self-start sm:self-auto"
            aria-label="Browse all guides"
          >
            All guides
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Layout: featured large + 2 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Featured guide — takes 2 columns on lg */}
          {primaryGuide && (
            <div className="lg:col-span-2">
              <GuideCard guide={primaryGuide} size="featured" priority />
            </div>
          )}

          {/* Smaller guides */}
          <div className="flex flex-col gap-6 md:gap-8">
            {restGuides.slice(0, 2).map(guide => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>

        {/* SEO content block — useful text that also helps Google */}
        <aside
          className="mt-14 md:mt-16 p-6 md:p-8 rounded-2xl bg-sand-100/60 border border-sand-200"
          aria-label="About Fuerteventura"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-3">
                Why Fuerteventura?
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                Fuerteventura is one of the few places in Europe where you can surf 12 months a year.
                The consistent Atlantic swells, reliable trade winds and 340+ days of sunshine make it a
                natural magnet for watersports enthusiasts — but also for families, couples and anyone
                who wants to slow down in a raw, beautiful landscape.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-3">
                When is the best time to surf?
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                Autumn and winter (October–March) bring the biggest, most consistent swells — ideal for
                intermediate and advanced surfers. Spring and summer are perfect for beginners: smaller,
                more forgiving waves, warm water and calm days between swells for flatwater activities.
              </p>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-sand-200">
            <Link
              href="/guides/when-to-visit-fuerteventura"
              className="btn-ghost p-0 text-sm text-ocean-600 hover:text-ocean-800 inline-flex items-center gap-1.5"
            >
              Read the full month-by-month guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  )
}
