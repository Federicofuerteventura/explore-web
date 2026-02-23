'use client'

import { useState } from 'react'
import { WA_DEFAULT } from '@/lib/constants'

const FAQS = [
  {
    q: 'Do I need to know how to paddle or swim?',
    a: "No prior experience needed. We start with a briefing and adapt to your level. Basic swimming ability is recommended, and you'll wear a life jacket at all times.",
  },
  {
    q: 'What is the West Sunset Experience exactly?',
    a: "It's a guided evening excursion to the best sunset viewpoints on the west coast of Fuerteventura — the side that faces the open Atlantic. Depending on conditions, it can include paddling on flat water at golden hour. We confirm the exact format when you book.",
  },
  {
    q: 'How many people per group?',
    a: 'Maximum 8 people. We keep groups small so the guide can give proper attention to everyone and the experience feels personal, not like a tour bus.',
  },
  {
    q: 'How do I book?',
    a: "WhatsApp — it's the fastest and most direct way. Message us with your preferred experience and dates, and we'll confirm availability, timing and any details you need.",
  },
  {
    q: 'Do I need to pay in advance?',
    a: 'No prepayment required to reserve. We confirm your spot by WhatsApp and settle payment on the day.',
  },
  {
    q: 'What happens if the weather is bad?',
    a: "Safety is always first. If conditions are not safe, we reschedule to your next available day or offer a full refund. We'll never run an experience in conditions we wouldn't be comfortable in ourselves.",
  },
  {
    q: 'Can children join?',
    a: 'Yes — children from around 8 years old can join the Paddle Excursion (younger ones can share a board with a parent). The Sunset Experience is suitable for all ages. Let us know when you book.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i))

  return (
    <section
      className="section-padding bg-[var(--color-bg)]"
      aria-labelledby="faq-heading"
    >
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="section-eyebrow mb-3">
              <span aria-hidden="true" className="inline-block w-5 h-px bg-ocean-500 mr-2 align-middle" />
              FAQ
            </p>
            <h2 id="faq-heading" className="section-title">
              Common questions
            </h2>
          </div>

          {/* Accordion */}
          <dl className="space-y-2">
            {FAQS.map(({ q, a }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden
                           hover:border-ocean-200 transition-colors duration-200"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={open === i}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                               font-heading font-semibold text-[var(--color-text)] text-[15px]
                               focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-500 focus-visible:outline-offset-2"
                  >
                    {q}
                    <span
                      className={`shrink-0 w-6 h-6 rounded-full bg-ocean-100 text-ocean-600
                                   flex items-center justify-center
                                   transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {a}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

          {/* More questions CTA */}
          <div className="mt-8 text-center">
            <p className="text-[var(--color-text-muted)] text-sm mb-3">
              Have a question not listed here?
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm text-ocean-600 hover:text-ocean-800 font-semibold inline-flex items-center gap-1.5"
            >
              Ask us on WhatsApp
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
