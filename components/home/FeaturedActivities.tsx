import Link from 'next/link'
import { featuredActivities } from '@/lib/data/activities'
import { ActivityCard } from '@/components/ui/ActivityCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

/* ─── FeaturedActivities ─────────────────────────────────────────── */
export function FeaturedActivities() {
  return (
    <section
      className="section-padding bg-[var(--color-bg)]"
      aria-labelledby="activities-heading"
    >
      <div className="container-main">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
          <SectionHeader
            eyebrow="Things to Do"
            title="Pick Your Adventure"
            subtitle="From your first surf lesson to a sunrise kite session."
            titleAs="h2"
          />
          <Link
            href="/activities"
            className="btn-secondary whitespace-nowrap self-start sm:self-auto"
            aria-label="View all activities"
          >
            View all
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredActivities.map((activity, i) => (
            <ActivityCard
              key={activity.slug}
              activity={activity}
              priority={i < 2} // LCP hint for first two cards
            />
          ))}
        </div>

        {/* Category quick-filters */}
        <div className="mt-10 md:mt-12 flex flex-wrap gap-3 justify-center">
          {[
            { href: '/activities?category=surf',    label: '🏄 Surf'         },
            { href: '/activities?category=kite',    label: '🪁 Kitesurfing'  },
            { href: '/activities?category=water',   label: '🤿 Water Sports' },
            { href: '/activities?category=land',    label: '🚴 Land & Trails' },
            { href: '/activities?category=nature',  label: '🌿 Nature'       },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 rounded-full bg-white border border-[var(--color-border)]
                         text-sm font-medium text-[var(--color-text-muted)]
                         hover:border-ocean-300 hover:text-ocean-700 hover:bg-ocean-50
                         transition-all duration-200
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-500"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
