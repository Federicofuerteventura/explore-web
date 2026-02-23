import type { Metadata } from 'next'
import Link from 'next/link'
import { activities } from '@/lib/data/activities'
import { ActivityCard } from '@/components/ui/ActivityCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Activities & Experiences in Fuerteventura',
  description:
    'Browse surf lessons, kitesurfing, snorkeling, e-bike tours and more in Fuerteventura. Small groups, certified local instructors. Book directly — no middle-man fees.',
  alternates: { canonical: 'https://explorefuerteventura.com/activities' },
  openGraph: {
    title: 'Activities & Experiences in Fuerteventura',
    description:
      'Surf, kite, snorkel or explore on two wheels — find the right Fuerteventura activity for your level.',
  },
}

const activityPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Activities & Experiences in Fuerteventura',
  itemListElement: activities.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'TouristAttraction',
      name: a.title,
      url: `https://explorefuerteventura.com/activities/${a.slug}`,
      description: a.description,
    },
  })),
}

const CATEGORIES = [
  { value: 'all',     label: 'All' },
  { value: 'surf',    label: '🏄 Surf' },
  { value: 'kite',    label: '🪁 Kite' },
  { value: 'water',   label: '🤿 Water' },
  { value: 'land',    label: '🚴 Land' },
  { value: 'nature',  label: '🌿 Nature' },
  { value: 'culture', label: '🏛️ Culture' },
]

export default function ActivitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(activityPageSchema) }}
      />

      {/* Page header */}
      <div className="bg-ocean-900 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-ocean-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-ocean-600">›</li>
              <li aria-current="page" className="text-white">Activities</li>
            </ol>
          </nav>

          <SectionHeader
            eyebrow="Things to Do"
            title="Activities & Experiences"
            subtitle="Every experience is run by local guides who know the island. Browse by category or scroll through everything we offer."
            titleAs="h1"
          />
        </div>
      </div>

      {/* Filters + grid */}
      <section className="section-padding bg-[var(--color-bg)]">
        <div className="container-main">
          {/* Category filter chips — JS-free, URL-based */}
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.value}
                href={cat.value === 'all' ? '/activities' : `/activities?category=${cat.value}`}
                className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--color-border)]
                           bg-white text-[var(--color-text-muted)]
                           hover:border-ocean-300 hover:text-ocean-700 hover:bg-ocean-50
                           transition-all duration-200
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-500"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Activities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {activities.map((activity, i) => (
              <ActivityCard key={activity.slug} activity={activity} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
