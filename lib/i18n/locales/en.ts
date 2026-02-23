/* ─── English locale strings ─────────────────────────────────────────
   i18n-ready structure — duplicate this file for de, it, fr, pl.
   When adding next-intl or next-i18next, plug this in directly.
──────────────────────────────────────────────────────────────────── */

export const en = {
  nav: {
    activities:  'Activities',
    surf:        'Surf',
    guides:      'Guides',
    about:       'About',
    contact:     'Contact',
    chatWithUs:  'Chat with us',
  },
  hero: {
    headline:    'Wind, Waves &\nWild Fuerteventura',
    subheadline: 'Surf lessons, hidden spots & authentic local experiences — curated by people who actually live here.',
    ctaPrimary:   'Explore Activities',
    ctaSecondary: 'Chat on WhatsApp',
    trustBadge1:  'Local experts',
    trustBadge2:  'Small groups',
    trustBadge3:  'Free advice',
    scrollLabel:  'Scroll to explore',
  },
  value: {
    eyebrow: 'Why Explore Fuerteventura',
    title:   'More than a booking. A local connection.',
    subtitle:"We're not an agency — we're people who moved here, fell in love with the island and decided to share it properly.",
    items: [
      {
        title:       'Genuine local knowledge',
        description: 'We know which beach is best on a north swell, which restaurant has the real fresh catch and which trails most tourists walk straight past.',
      },
      {
        title:       'Curated for your level',
        description: 'From complete beginners catching their first wave to experienced surfers chasing specific breaks — we match the activity to the person.',
      },
      {
        title:       'Small groups, real attention',
        description: 'We cap groups at 6–8 people maximum. Because nobody learns in a crowd, and nobody wants to feel like a number.',
      },
      {
        title:       'Honest & transparent',
        description: "No hidden fees, no hard sell. If something isn't right for you, we'll tell you and suggest what is.",
      },
    ],
  },
  activities: {
    eyebrow: 'Things to Do',
    title:   'Pick Your Adventure',
    subtitle:'From your first surf lesson to a sunrise kite session — find what calls to you.',
    viewAll: 'View all activities',
    from:    'From',
    book:    'Book now',
    enquire: 'Ask a question',
  },
  insights: {
    eyebrow:  'Local Guides',
    title:    'Know Before You Go',
    subtitle: 'Honest, practical guides written from experience — no filler, no affiliate padding.',
    readMore: 'Read guide',
    viewAll:  'Browse all guides',
    readTime: 'min read',
  },
  trust: {
    eyebrow: 'Real Reviews',
    title:   'What our guests say',
    stats: {
      experiences: { value: '500+',   label: 'experiences run'    },
      rating:      { value: '4.9★',   label: 'average rating'     },
      countries:   { value: '30+',    label: 'countries visited'   },
      local:       { value: '100%',   label: 'local guides'        },
    },
  },
  cta: {
    title:      'Not sure where to start?',
    subtitle:   "Drop us a message on WhatsApp. We reply fast, speak your language and won't push you into anything.",
    whatsapp:   'Message us on WhatsApp',
    subtext:    'Usually replies within 1 hour · No obligation',
    orEmail:    'Or send an email',
  },
  footer: {
    tagline:   'Your local guide to surf, adventures and hidden Fuerteventura.',
    nav: {
      experiences: 'Experiences',
      guides:      'Guides & Blog',
      company:     'Company',
      legal:       'Legal',
    },
    copyright: '© {year} Explore Fuerteventura. All rights reserved.',
  },
} as const

export type Locale = typeof en
