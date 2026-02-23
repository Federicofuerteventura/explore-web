import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { guides, getGuideBySlug } from '@/lib/data/guides'
import { GuideCard } from '@/components/ui/GuideCard'

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return {}
  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical: `https://explorefuerteventura.com/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      images: [{ url: guide.image, alt: guide.imageAlt }],
      type: 'article',
    },
  }
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  const related = guides.filter(g => g.category === guide.category && g.slug !== guide.slug).slice(0, 3)
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date(guide.publishedAt))

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    image: guide.image,
    author: { '@type': 'Organization', name: 'Explore Fuerteventura' },
    publisher: {
      '@type': 'Organization',
      name: 'Explore Fuerteventura',
      url: 'https://explorefuerteventura.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <div className="relative h-[40vh] min-h-[280px] md:h-[50vh] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${guide.gradient} opacity-80`} />
        <Image src={guide.image} alt={guide.imageAlt} fill priority className="object-cover mix-blend-overlay" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <nav aria-label="Breadcrumb" className="absolute top-24 left-0 right-0 container-main">
          <ol className="flex items-center gap-2 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/guides" className="hover:text-white">Guides</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-white truncate max-w-[200px]">{guide.title}</li>
          </ol>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 container-main pb-8 md:pb-12">
          <span className="tag bg-white/20 text-white border-white/30 mb-3 capitalize">{guide.category}</span>
          <h1 className="font-heading font-extrabold text-white text-[clamp(1.5rem,4vw,2.8rem)] leading-tight max-w-3xl">
            {guide.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <article className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-8 pb-6 border-b border-gray-100">
                <time dateTime={guide.publishedAt}>{formattedDate}</time>
                <span aria-hidden="true">·</span>
                <span>{guide.readTime} min read</span>
              </div>

              {/* Excerpt / intro */}
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                {guide.excerpt}
              </p>

              {/* Body placeholder — connect to CMS */}
              <div className="prose prose-lg max-w-none
                              prose-headings:font-heading
                              prose-a:text-ocean-600 prose-a:no-underline hover:prose-a:underline">
                <p className="text-[var(--color-text-muted)] italic">
                  Full article content will be loaded here from your CMS (Sanity, Contentful, Notion, etc.).
                  The guide structure, SEO metadata and schema are all in place — just connect the body.
                </p>
                <h2>Coming soon</h2>
                <p>This guide is being prepared by our local team. Check back soon or reach out on WhatsApp for immediate advice.</p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              <div className="card p-5">
                <h3 className="font-heading font-bold text-base mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {guide.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="card p-5 bg-ocean-50 border-ocean-100">
                <h3 className="font-heading font-bold text-base mb-2 text-ocean-800">Need personalised advice?</h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">
                  Our local team can answer specific questions about your trip.
                </p>
                <a
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-sm"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-[var(--color-bg)]">
          <div className="container-main">
            <h2 className="font-heading font-bold text-xl mb-8 text-[var(--color-text)]">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(g => <GuideCard key={g.slug} guide={g} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
