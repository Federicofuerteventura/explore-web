/* ─── FinalCTA ───────────────────────────────────────────────────── */

const WHATSAPP_URL =
  'https://wa.me/34600000000?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20experiences%20in%20Fuerteventura'

export function FinalCTA() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-ocean-600 via-ocean-500 to-cyan-400"
        aria-hidden="true"
      />
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 40%), ' +
            'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="relative container-main">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2
            id="cta-heading"
            className="font-heading font-extrabold text-white mb-5
                       text-[clamp(1.75rem,4vw,2.8rem)] leading-tight text-balance"
          >
            Not sure where to start?<br />
            <span className="text-ocean-100">We've got you.</span>
          </h2>

          {/* Sub-copy */}
          <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Drop us a message on WhatsApp. We reply fast, speak your language and
            won't push you into anything that isn't right for you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center gap-2.5 justify-center
                         w-full sm:w-auto
                         bg-white text-ocean-800 hover:bg-ocean-50
                         px-8 py-4 text-base font-bold rounded-xl
                         shadow-xl hover:shadow-2xl
                         transition-all duration-200"
              aria-label="Message us on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              Message us on WhatsApp
            </a>
            <a
              href="mailto:hello@explorefuerteventura.com"
              className="btn inline-flex items-center gap-2 justify-center
                         w-full sm:w-auto
                         bg-transparent border border-white/40 hover:bg-white/15
                         text-white
                         px-8 py-4 text-base font-semibold rounded-xl
                         transition-all duration-200"
            >
              Or send an email
            </a>
          </div>

          {/* Trust microcopy */}
          <p className="mt-5 text-white/60 text-sm">
            Usually replies within 1 hour &nbsp;·&nbsp; English, Deutsch, Italiano, Français, Polski
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
