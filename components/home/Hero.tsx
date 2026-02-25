'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { WA_DEFAULT } from '@/lib/constants'

const VIDEO_SRC_WEBM = '/videos/hero.webm'
const VIDEO_SRC_MP4  = '/videos/hero.mp4'
const VIDEO_POSTER   = '/images/hero-poster.jpg'

const TRUST_BADGES = [
  { icon: '🌊', text: 'Fuerteventura coastline' },
  { icon: '👥', text: 'Small groups, max 8'     },
  { icon: '📍', text: 'Local guides'            },
  { icon: '✅', text: 'Book by WhatsApp'        },
]

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Headline entrance animation
    const el = headlineRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    // Respect prefers-reduced-motion: pause video if user prefers less motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      videoRef.current?.pause()
    }
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) videoRef.current?.pause()
      else           videoRef.current?.play()
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
      aria-label="Explore Fuerteventura — excursions on the Atlantic coast"
    >
      {/* ── Background video ──────────────────────────────────────── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={VIDEO_POSTER}
        aria-hidden="true"
      >
        <source src={VIDEO_SRC_WEBM} type="video/webm" />
        <source src={VIDEO_SRC_MP4}  type="video/mp4"  />
      </video>

      {/* Dark vignette so text is always legible over the video */}
      <div
        className="absolute inset-0 bg-ocean-950/50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ocean-900/85 via-ocean-900/20 to-transparent"
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative container-main pb-16 md:pb-24 pt-32 md:pt-40">
        <div className="max-w-3xl">

          <p className="inline-flex items-center gap-2 text-ocean-300 font-semibold text-sm uppercase tracking-widest mb-5 animate-fade-in">
            <span className="inline-block w-4 h-px bg-ocean-400" aria-hidden="true" />
            Fuerteventura, Canary Islands
          </p>

          <h1
            ref={headlineRef}
            className="font-heading font-extrabold text-white leading-[1.05]
                       text-[clamp(2.4rem,6vw,4.2rem)] text-balance mb-6"
          >
            Explore the coast.{' '}
            <span className="text-ocean-300">Your way.</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-up delay-200">
            Guided paddle excursions and sunset experiences on the wild Atlantic coast of Fuerteventura.
            Small groups, local guides, easy booking by WhatsApp.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up delay-300">
            <Link
              href="#experiences"
              className="btn-primary-lg text-center justify-center"
            >
              See our experiences
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center justify-center gap-2.5
                         bg-white/15 backdrop-blur-sm hover:bg-white/25
                         text-white border border-white/30
                         px-8 py-4 text-base font-semibold rounded-xl
                         transition-all duration-200"
              aria-label="Book via WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Book via WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <ul
            className="hidden md:flex flex-wrap gap-x-5 gap-y-2.5 mt-10 animate-fade-up delay-400"
            aria-label="Key facts"
          >
            {TRUST_BADGES.map(({ icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-white/70 text-sm">
                <span aria-hidden="true">{icon}</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
