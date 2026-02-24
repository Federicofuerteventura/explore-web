import Link from 'next/link'
import Image from 'next/image'
import { experiences } from '@/lib/data/experiences'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { waLink } from '@/lib/constants'

export function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="section-padding bg-[var(--color-bg)]"
      aria-labelledby="experiences-heading"
    >
      <div className="container-main">
        <div className="text-center mb-10 md:mb-14">
          <SectionHeader
            eyebrow="Our Experiences"
            title="Two experiences. Both unforgettable."
            subtitle="Choose your adventure — or do both. Either way, the Atlantic will surprise you."
            align="center"
            titleAs="h2"
          />
        </div>

        {/* Experience cards — stacked on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((exp, i) => (
            <article
              key={exp.slug}
              className="card group relative flex flex-col overflow-hidden"
              aria-label={exp.name}
            >
              {/* Image / gradient hero */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.imageAlt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-40 z-10`} />
                {/* Badge */}
                <span className={`absolute top-4 left-4 z-20 text-xs font-bold px-3 py-1 rounded-full ${exp.badgeColor}`}>
                  {exp.tag}
                </span>
                {/* Emoji */}
                <span className="absolute top-4 right-4 z-20 text-2xl" aria-hidden="true">
                  {exp.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-7">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-[var(--color-text)] mb-2">
                  {exp.name}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-5 flex-1">
                  {exp.description}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)] mb-6 pb-6 border-b border-gray-100">
                  <span className="flex items-center gap-1.5">
                    <ClockIcon /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GroupIcon /> {exp.groupSize}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LevelIcon /> {exp.difficulty}
                  </span>
                </div>

                {/* Price + CTAs */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)]">From</p>
                    <p className="font-heading font-extrabold text-2xl text-[var(--color-text)]">
                      €{exp.priceFrom}
                      <span className="text-sm font-normal text-[var(--color-text-muted)] ml-1">
                        / {exp.priceLabel}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2.5 w-full sm:w-auto">
                    <Link
                      href={`/experiences/${exp.slug}`}
                      className="btn-secondary flex-1 sm:flex-none text-sm justify-center"
                    >
                      Learn more
                    </Link>
                    <a
                      href={waLink(exp.whatsappText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp flex-1 sm:flex-none text-sm justify-center"
                      aria-label={`Book ${exp.name} via WhatsApp`}
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      Book
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Icons ─────────────────────────────────────────────────────── */
function ClockIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 7v5l3 3" />
    </svg>
  )
}
function GroupIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
function LevelIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
