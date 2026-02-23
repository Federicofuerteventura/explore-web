import Link from 'next/link'
import { locales, localeNames } from '@/lib/i18n/config'

const WHATSAPP_URL =
  'https://wa.me/34600000000?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20experiences%20in%20Fuerteventura'

const FOOTER_LINKS = {
  experiences: [
    { href: '/activities',                  label: 'All Activities'           },
    { href: '/activities/surf-lessons-beginners',  label: 'Surf Lessons'    },
    { href: '/activities/kitesurfing-introduction', label: 'Kitesurfing'    },
    { href: '/activities/snorkeling-volcanic-reefs', label: 'Snorkeling'    },
    { href: '/surf-fuerteventura',          label: 'Surf in Fuerteventura'   },
  ],
  guides: [
    { href: '/guides',                                   label: 'All Guides' },
    { href: '/guides/best-surf-spots-fuerteventura',     label: 'Best Surf Spots' },
    { href: '/guides/when-to-visit-fuerteventura',       label: 'When to Visit'   },
    { href: '/guides/complete-kitesurf-guide-fuerteventura', label: 'Kitesurfing Guide' },
    { href: '/guides/hidden-beaches-fuerteventura',      label: 'Hidden Beaches'  },
  ],
  company: [
    { href: '/about',   label: 'About Us'    },
    { href: '/contact', label: 'Contact'     },
    // { href: '/press',   label: 'Press'    },
  ],
  legal: [
    { href: '/legal/privacy',  label: 'Privacy Policy'  },
    { href: '/legal/terms',    label: 'Terms of Use'    },
    { href: '/legal/cookies',  label: 'Cookie Policy'   },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ocean-900 text-white" role="contentinfo">
      {/* ── Main footer ─────────────────────────────────────────── */}
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column — spans 2 on large */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="font-heading font-bold text-xl text-white group-hover:text-ocean-200 transition-colors">
                Explore
              </span>
              <span className="font-heading font-bold text-xl text-ocean-400 group-hover:text-ocean-300 transition-colors">
                Fuerteventura
              </span>
            </Link>
            <p className="mt-4 text-ocean-200 text-sm leading-relaxed max-w-xs">
              Your local guide to surf, outdoor adventures and authentic experiences on the
              Atlantic island of Fuerteventura, Canary Islands.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl
                         bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm
                         transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Message us on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Message us on WhatsApp
            </a>

            {/* Languages */}
            <div className="mt-6">
              <p className="text-ocean-400 text-xs uppercase tracking-wider font-semibold mb-3">
                Available in
              </p>
              <div className="flex flex-wrap gap-2">
                {locales.map(locale => (
                  <span
                    key={locale}
                    className="px-2.5 py-1 bg-ocean-800 text-ocean-300 text-xs rounded-lg border border-ocean-700"
                    aria-label={localeNames[locale]}
                  >
                    {localeNames[locale]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experiences */}
          <FooterColumn title="Experiences" links={FOOTER_LINKS.experiences} />

          {/* Guides & Blog */}
          <FooterColumn title="Guides & Blog" links={FOOTER_LINKS.guides} />

          {/* Company + Legal */}
          <div className="space-y-8">
            <FooterColumn title="Company" links={FOOTER_LINKS.company} />
            <FooterColumn title="Legal"   links={FOOTER_LINKS.legal}   />
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────── */}
      <div className="border-t border-ocean-800">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ocean-400 text-sm">
            © {year} Explore Fuerteventura. All rights reserved.
          </p>
          <p className="text-ocean-500 text-xs">
            Fuerteventura, Canary Islands, Spain 🇪🇸
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─── Footer column sub-component ───────────────────────────────── */
function FooterColumn({
  title,
  links,
}: {
  title: string
  links: Array<{ href: string; label: string }>
}) {
  return (
    <div>
      <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5" role="list">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-ocean-300 hover:text-white text-sm transition-colors
                         focus-visible:outline focus-visible:outline-1 focus-visible:outline-white focus-visible:rounded"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
