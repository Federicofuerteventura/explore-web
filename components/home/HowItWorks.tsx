import { WA_DEFAULT } from '@/lib/constants'

const STEPS = [
  {
    step:  '01',
    icon:  '💬',
    title: 'Message us on WhatsApp',
    desc:  'Tell us which experience you want and your preferred dates. No forms, no registration — just a direct message.',
  },
  {
    step:  '02',
    icon:  '📅',
    title: 'We confirm availability',
    desc:  "We'll reply fast with available slots, group size and any details you need. Usually within 1 hour.",
  },
  {
    step:  '03',
    icon:  '🌊',
    title: 'Show up and enjoy',
    desc:  'Arrive at the meeting point, meet your guide and let the Atlantic do the rest. No prepayment required.',
  },
]

export function HowItWorks() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="how-heading"
    >
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16 max-w-xl mx-auto">
          <p className="section-eyebrow mb-3">
            <span aria-hidden="true" className="inline-block w-5 h-px bg-ocean-500 mr-2 align-middle" />
            How to Book
          </p>
          <h2
            id="how-heading"
            className="section-title"
          >
            3 steps. That's it.
          </h2>
          <p className="section-subtitle mx-auto">
            No booking platform, no hidden fees. Direct contact with the people running your experience.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {STEPS.map(({ step, icon, title, desc }) => (
            <div
              key={step}
              className="relative p-6 md:p-8 rounded-2xl border border-[var(--color-border)]
                         hover:border-ocean-200 hover:bg-ocean-50/30
                         transition-all duration-300"
            >
              {/* Step number */}
              <span className="absolute top-5 right-5 font-heading font-extrabold text-4xl text-ocean-100 select-none" aria-hidden="true">
                {step}
              </span>
              {/* Icon */}
              <div className="text-3xl mb-5" aria-hidden="true">{icon}</div>
              <h3 className="font-heading font-bold text-lg text-[var(--color-text)] mb-2">
                {title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="text-center">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2.5 px-8 py-4 text-base"
            aria-label="Start booking via WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Start your booking now
          </a>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">
            Usually replies within 1 hour · No prepayment required
          </p>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
