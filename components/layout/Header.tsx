'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* ─── Constants ──────────────────────────────────────────────────── */
const NAV_LINKS = [
  { href: '/experiences/paddle-excursion',       label: 'Paddle Excursion'      },
  { href: '/experiences/west-sunset-experience', label: 'West Sunset Experience' },
  { href: '/about',                              label: 'About'                 },
  { href: '/contact',                            label: 'Contact'               },
] as const

const WHATSAPP_URL =
  "https://wa.me/34600000000?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20experiences%20in%20Fuerteventura%20%F0%9F%8C%8A"

/* ─── Header ─────────────────────────────────────────────────────── */
export function Header() {
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const pathname = usePathname()

  // Detect scroll
  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 24)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  // Close mobile menu on navigation
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isLight = scrolled || menuOpen // Use light/white header variant

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isLight
          ? 'bg-white/97 backdrop-blur-md shadow-sm'
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
      role="banner"
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center rounded-md focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:outline-none"
            aria-label="Explore Fuerteventura — home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Explore Fuerteventura"
              style={{ height: '60px', width: 'auto' }}
              className={`transition-all duration-300 ${isLight ? '' : 'brightness-0 invert'}`}
            />
          </Link>

          {/* ── Desktop nav ───────────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`
                    px-4 py-2 rounded-lg font-medium text-[15px] transition-colors duration-200
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-500
                    ${isLight
                      ? active
                        ? 'text-ocean-600 bg-ocean-50'
                        : 'text-gray-700 hover:text-ocean-700 hover:bg-gray-50'
                      : active
                        ? 'text-white bg-white/20'
                        : 'text-white/90 hover:text-white hover:bg-white/15'
                    }
                  `}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* ── Desktop CTA ───────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
                transition-all duration-200
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-500
                ${isLight
                  ? 'bg-ocean-600 text-white hover:bg-ocean-700 shadow-button'
                  : 'bg-white text-ocean-800 hover:bg-ocean-50 shadow-md'
                }
              `}
              aria-label="Contact us on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat with us
            </a>
          </div>

          {/* ── Mobile menu toggle ────────────────────────────────── */}
          <button
            type="button"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`
              md:hidden p-2 rounded-lg transition-colors
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-500
              ${isLight
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/20'
              }
            `}
          >
            {menuOpen
              ? <XIcon    className="w-6 h-6" />
              : <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        aria-hidden={!menuOpen}
        className={`
          md:hidden absolute inset-x-0 top-full bg-white border-t border-gray-100
          transition-all duration-300 origin-top shadow-lg
          ${menuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}
        `}
      >
        <nav className="container-main py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`
                  px-4 py-3.5 rounded-xl font-medium text-base transition-colors
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-500
                  ${active
                    ? 'text-ocean-600 bg-ocean-50 font-semibold'
                    : 'text-gray-700 hover:text-ocean-600 hover:bg-ocean-50'
                  }
                `}
              >
                {label}
              </Link>
            )
          })}

          <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full px-6 py-4
                         bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold
                         rounded-xl transition-colors shadow-sm
                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <p className="text-center text-xs text-gray-400 pb-1">
              Usually replies within 1 hour
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}

/* ─── Icons ──────────────────────────────────────────────────────── */
function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h11" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
