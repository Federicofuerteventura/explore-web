import Link from 'next/link'
import Image from 'next/image'
import type { Guide } from '@/lib/data/guides'

interface GuideCardProps {
  guide:     Guide
  priority?: boolean
  size?:     'default' | 'featured'
}

export function GuideCard({ guide, priority = false, size = 'default' }: GuideCardProps) {
  const { slug, title, excerpt, category, readTime, publishedAt, image, imageAlt, gradient, tags } = guide

  const isFeatured = size === 'featured'

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  }).format(new Date(publishedAt))

  return (
    <article
      className={`card group flex flex-col h-full ${isFeatured ? 'lg:flex-row' : ''}`}
      aria-label={`Guide: ${title}`}
    >
      {/* Image */}
      <Link
        href={`/guides/${slug}`}
        className={`block relative overflow-hidden shrink-0 focus-visible:ring-2 focus-visible:ring-ocean-500 ${
          isFeatured ? 'aspect-video lg:aspect-auto lg:w-72 xl:w-96' : 'aspect-[16/9]'
        }`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-75`} />
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${categoryColor(category)}`}>
          {category}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.slice(0, 2).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Title */}
        <Link href={`/guides/${slug}`} className="focus-visible:outline-none">
          <h3 className={`font-heading font-bold text-[var(--color-text)] leading-snug mb-2
                          hover:text-ocean-700 transition-colors
                          ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Footer meta */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
            <time dateTime={publishedAt}>{formattedDate}</time>
            <span aria-hidden="true">·</span>
            <span>{readTime} min read</span>
          </div>
          <Link
            href={`/guides/${slug}`}
            className="btn-ghost py-1 px-3 text-xs flex items-center gap-1"
            aria-label={`Read guide: ${title}`}
          >
            Read
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

function categoryColor(c: Guide['category']): string {
  const map: Record<Guide['category'], string> = {
    surf:      'bg-ocean-100 text-ocean-700',
    travel:    'bg-amber-100 text-amber-700',
    nature:    'bg-emerald-100 text-emerald-700',
    food:      'bg-orange-100 text-orange-700',
    practical: 'bg-violet-100 text-violet-700',
  }
  return map[c] ?? 'bg-gray-100 text-gray-700'
}

function ArrowIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}
