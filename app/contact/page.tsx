import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact — Explore Fuerteventura',
  description:
    'Get in touch with our local team for activity bookings, trip advice or any question about Fuerteventura. We reply fast and speak English, German, Italian, French and Polish.',
  alternates: { canonical: 'https://explorefuerteventura.com/contact' },
}

const WHATSAPP_URL =
  'https://wa.me/34600000000?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20experiences%20in%20Fuerteventura'

const CHANNELS = [
  {
    icon:  '💬',
    title: 'WhatsApp (fastest)',
    text:  'Message us directly. We typically reply within 1 hour during local business hours.',
    cta:   'Open WhatsApp',
    href:  WHATSAPP_URL,
    external: true,
  },
  {
    icon:  '📧',
    title: 'Email',
    text:  'For longer questions, itinerary requests or B2B enquiries.',
    cta:   'hello@explorefuerteventura.com',
    href:  'mailto:hello@explorefuerteventura.com',
    external: false,
  },
  {
    icon:  '📍',
    title: 'Based in Fuerteventura',
    text:  'We operate across the island — north, south and everywhere in between.',
    cta:   null,
    href:  null,
    external: false,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-ocean-900 to-ocean-700 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-main">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-ocean-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true" className="text-ocean-600">›</li>
              <li aria-current="page" className="text-white">Contact</li>
            </ol>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-[clamp(2rem,5vw,3rem)] leading-tight mb-4">
            Get in touch
          </h1>
          <p className="text-ocean-200 text-lg max-w-xl">
            Questions about activities, trip planning or just want a local opinion? We're here.
          </p>
        </div>
      </div>

      <section className="section-padding bg-[var(--color-bg)]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Contact channels */}
            <div className="space-y-6">
              {CHANNELS.map(({ icon, title, text, cta, href, external }) => (
                <div
                  key={title}
                  className="card p-6 flex gap-4"
                >
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                  <div>
                    <h2 className="font-heading font-bold text-base text-[var(--color-text)] mb-1">
                      {title}
                    </h2>
                    <p className="text-sm text-[var(--color-text-muted)] mb-3">{text}</p>
                    {cta && href && (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="btn-ghost p-0 text-sm text-ocean-600 hover:text-ocean-800 font-semibold"
                      >
                        {cta} →
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <div className="card p-5 bg-ocean-50 border-ocean-100">
                <p className="text-sm text-ocean-700 leading-relaxed">
                  <strong className="font-semibold">Languages:</strong> English, Deutsch, Italiano, Français, Polski, Español.
                  <br />
                  We'll reply in your language.
                </p>
              </div>
            </div>

            {/* Simple enquiry form */}
            <div className="card p-6 md:p-8">
              <h2 className="font-heading font-bold text-xl text-[var(--color-text)] mb-6">
                Send a message
              </h2>
              <form
                method="POST"
                action="#"  /* Replace with Resend / Formspree / Netlify Forms endpoint */
                className="space-y-4"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)]
                                 bg-white text-[var(--color-text)] text-sm
                                 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent
                                 transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)]
                                 bg-white text-[var(--color-text)] text-sm
                                 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent
                                 transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)]
                               bg-white text-[var(--color-text)] text-sm
                               focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent
                               transition-shadow"
                  >
                    <option value="">Select an option…</option>
                    <option value="surf">Surf lessons</option>
                    <option value="kite">Kitesurfing</option>
                    <option value="snorkel">Snorkeling</option>
                    <option value="ebike">E-bike tours</option>
                    <option value="planning">Trip planning help</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us what you're looking for, your dates and any questions you have…"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)]
                               bg-white text-[var(--color-text)] text-sm
                               placeholder-gray-400 resize-y
                               focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent
                               transition-shadow"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send message
                </button>
                <p className="text-xs text-center text-[var(--color-text-muted)]">
                  Or for a faster reply, message us on WhatsApp above.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
