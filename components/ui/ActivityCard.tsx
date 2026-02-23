import Link from 'next/link'
import Image from 'next/image'
import type { Activity } from '@/lib/data/activities'

/* ─── ActivityCard ───────────────────────────────────────────────── */
interface ActivityCardProps {
  activity: Activity
  priority?: boolean // for LCP images above the fold
}

export function ActivityCard({ activity, priority = false }: ActivityCardProps) {
  const { slug, title, tagline, category, difficulty, duration, priceFrom, image, imageAlt, gradient, tag } = activity

  return (
    <article
      className="card group flex flex-col h-full"
      aria-label={`Activity: ${title}`}
    >
      {/* Image */}
      <Link
        href={`/activities/${slug}`}
        className="block relative aspect-card overflow-hidden focus-visible:ring-2 focus-visible:ring-ocean-500"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`} />
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        {/* Tag badge */}
        {tag && (
          <span className="absolute top-3 left-3 bg-white/95 text-ocean-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {tag}
          </span>
        )}
        {/* Difficulty badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${difficultyColor(difficulty)}`}
          aria-label={`Difficulty: ${difficulty.replace('-', ' ')}`}
        >
          {difficulty.replace('-', ' ')}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category */}
        <p className="text-xs font-semibold text-ocean-500 uppercase tracking-wider mb-1.5 capitalize">
          {category}
        </p>

        {/* Title */}
        <Link
          href={`/activities/${slug}`}
          className="group/title focus-visible:outline-none"
        >
          <h3 className="font-heading font-bold text-lg text-[var(--color-text)] leading-snug mb-2
                         group-hover/title:text-ocean-700 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Tagline */}
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed flex-1 mb-4">
          {tagline}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-4 border-t border-gray-100 pt-4">
          <span className="flex items-center gap-1.5">
            <ClockIcon /> {duration}
          </span>
          <span className="flex items-center gap-1.5 capitalize">
            <CategoryIcon category={category} /> {category}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-[var(--color-text-muted)]">From</span>
            <p className="font-heading font-bold text-xl text-[var(--color-text)]">
              €{priceFrom}
            </p>
          </div>
          <Link
            href={`/activities/${slug}`}
            className="btn-primary py-2 px-5 text-sm"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}

/* ─── Helpers ────────────────────────────────────────────────────── */
function difficultyColor(d: Activity['difficulty']): string {
  const map: Record<Activity['difficulty'], string> = {
    'beginner':     'bg-emerald-100 text-emerald-700',
    'intermediate': 'bg-amber-100 text-amber-700',
    'advanced':     'bg-red-100 text-red-700',
    'all-levels':   'bg-sky-100 text-sky-700',
  }
  return map[d]
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7v5l3 3" />
    </svg>
  )
}

function CategoryIcon({ category }: { category: Activity['category'] }) {
  if (category === 'surf' || category === 'water' || category === 'kite') {
    return (
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M3 15s1-1 4-1 4 2 7 2 4-1 4-1M3 19s1-1 4-1 4 2 7 2 4-1 4-1" />
      </svg>
    )
  }
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
