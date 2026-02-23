import { testimonials } from '@/lib/data/testimonials'
import { SectionHeader } from '@/components/ui/SectionHeader'

/* ─── TrustSection ───────────────────────────────────────────────── */
export function TrustSection() {
  return (
    <section
      className="section-padding bg-ocean-900"
      aria-labelledby="reviews-heading"
    >
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-eyebrow text-ocean-400 mb-3">
            <span aria-hidden="true" className="inline-block w-5 h-px bg-ocean-500 mr-2 align-middle" />
            Real Reviews
          </p>
          <h2
            id="reviews-heading"
            className="font-heading font-bold text-headline text-white mb-4"
          >
            What our guests say
          </h2>
          <p className="text-ocean-200 text-lg max-w-xl mx-auto">
            Unedited feedback from real people who joined our experiences.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map(review => (
            <blockquote
              key={review.id}
              className="bg-ocean-800/60 border border-ocean-700/50 rounded-2xl p-6
                         hover:border-ocean-600/50 transition-colors duration-300"
              aria-label={`Review from ${review.name}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label={`Rated ${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-amber-400' : 'text-ocean-700'}`}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-ocean-100 text-sm leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <footer className="flex items-center justify-between">
                <div>
                  <cite className="not-italic font-semibold text-white text-sm block">
                    {review.name}
                  </cite>
                  <span className="text-ocean-400 text-xs">
                    {review.flag} {review.country}
                  </span>
                </div>
                <span className="text-ocean-500 text-xs text-right">
                  {review.experience}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Platform trust note */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-ocean-400 text-sm">
            Reviews collected from Google, Airbnb & direct guests.
            {' '}
            <a
              href="#"
              className="text-ocean-300 hover:text-white underline underline-offset-2 transition-colors"
              aria-label="Read more reviews (opens external)"
            >
              Read all reviews →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}
