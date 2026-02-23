import { SectionHeader } from '@/components/ui/SectionHeader'

const VALUES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title:       'Local guides, real knowledge',
    description: 'We live here. We know the tides, the wind patterns and the spots that only locals paddle to. Every route is chosen to show you something genuine.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title:       'Small groups, max 8',
    description: 'We cap every experience at 8 people. Small enough to feel personal — big enough to share the moment with friends or family.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title:       'Safety first, always',
    description: 'All equipment is certified. All guides are trained in water safety and first aid. If conditions are not right, we reschedule — no question, no fee.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title:       'Book directly — no platform fees',
    description: "WhatsApp, straight to us. No booking platform taking a cut, no prepayment stress. We confirm, you show up, we take care of the rest.",
  },
]

export function ValueBlock() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="value-heading"
    >
      <div className="container-main">
        <div className="max-w-2xl mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Why choose us"
            title="Not just an excursion. An experience worth talking about."
            subtitle="We're small by choice. Every detail is handled by the same people who guide you on the water."
            titleAs="h2"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {VALUES.map(({ icon, title, description }) => (
            <article
              key={title}
              className="group p-6 rounded-2xl border border-[var(--color-border)]
                         hover:border-ocean-200 hover:bg-ocean-50/40
                         transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-ocean-100 text-ocean-600
                               flex items-center justify-center mb-5
                               group-hover:bg-ocean-600 group-hover:text-white
                               transition-colors duration-300">
                {icon}
              </div>
              <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-2">
                {title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2',     label: 'curated experiences' },
              { value: '4.9★',  label: 'average rating'      },
              { value: 'Max 8', label: 'per group'            },
              { value: '100%',  label: 'local guides'         },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-heading font-extrabold text-3xl md:text-4xl text-ocean-700 mb-1">
                  {value}
                </p>
                <p className="text-[var(--color-text-muted)] text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
