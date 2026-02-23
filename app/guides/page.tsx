import type { Metadata } from 'next'
import Link from 'next/link'
import { guides } from '@/lib/data/guides'
import { GuideCard } from '@/components/ui/GuideCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Fuerteventura Guides & Travel Tips',
  description:
    'Practical, honest guides to Fuerteventura: best surf spots, when to visit, kitesurfing tips, hidden beaches and more — all written by people who live here.',
  alternates: { canonical: 'https://explorefuerteventura.com/guides' },
}

const CATEGORIES = [
  { value: 'all',       label: 'All Topics'   },
  { value: 'surf',      label: '🏄 Surf'      },
  { value: 'travel',    label: '✈️ Travel'    },
  { value: 'nature',    label: '🌿 Nature'    },
  { value: 'food',      label: '🍽️ Food'     },
  { value: 'practical', label: '📋 Practical' },
]

export default function GuidesPage() {
  const featured = guides.filter(g => g.featured)
  const rest     = guides.filter(g => !g.featured)

  return (
    <>
      {/* Header */}
      <div className="bg-ocean-900 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-ocean-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true" className="text-ocean-600">›</li>
              <li aria-current="page" className="text-white">Guides</li>
            </ol>
          </nav>
          <SectionHeader
            eyebrow="Local Knowledge"
            title="Guides & Travel Tips"
            subtitle="No fluff. Just honest, practical information from people who live in Fuerteventura year-round."
            titleAs="h1"
          />
        </div>
      </div>

      <section className="section-padding bg-[var(--color-bg)]">
        <div className="container-main">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by topic">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.value}
                href={cat.value === 'all' ? '/guides' : `/guides?category=${cat.value}`}
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

          {/* Featured */}
          {featured.length > 0 && (
            <div className="mb-14">
              <h2 className="font-heading font-bold text-xl mb-6 text-[var(--color-text)]">
                Featured guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((g, i) => (
                  <GuideCard key={g.slug} guide={g} priority={i === 0} />
                ))}
              </div>
            </div>
          )}

          {/* All guides */}
          {rest.length > 0 && (
            <div>
              <h2 className="font-heading font-bold text-xl mb-6 text-[var(--color-text)]">
                More guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map(g => <GuideCard key={g.slug} guide={g} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
