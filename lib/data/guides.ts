/* ─── Guides / Blog data ─────────────────────────────────────────────
   Mock data — replace with a CMS (Sanity, Contentful, Notion) later.
   Each guide maps to /guides/[slug]
──────────────────────────────────────────────────────────────────── */

export type GuideCategory = 'surf' | 'travel' | 'nature' | 'food' | 'practical'

export interface Guide {
  slug:         string
  title:        string
  excerpt:      string
  body?:        string        // full markdown/HTML — loaded separately in CMS
  category:     GuideCategory
  readTime:     number        // minutes
  publishedAt:  string        // ISO date
  image:        string
  imageAlt:     string
  featured:     boolean
  tags:         string[]
  gradient:     string        // Tailwind fallback
}

export const guides: Guide[] = [
  {
    slug:        'best-surf-spots-fuerteventura',
    title:       'The Best Surf Spots in Fuerteventura (For Every Level)',
    excerpt:
      'From the world-class right-handers of El Hierro to the mellow beach breaks of Corralejo — a local breakdown of where to surf depending on your level and the swell.',
    category:    'surf',
    readTime:    7,
    publishedAt: '2024-12-10',
    image:       'https://images.unsplash.com/photo-1499702390-d0b8849d7e3f?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Aerial view of surf break in Fuerteventura',
    featured:    true,
    tags:        ['surf', 'spots', 'beginners', 'advanced'],
    gradient:    'from-ocean-600 to-cyan-500',
  },
  {
    slug:        'when-to-visit-fuerteventura',
    title:       'When to Visit Fuerteventura: Month-by-Month Guide',
    excerpt:
      "Sun every month, but swell, wind and crowds vary a lot. Here's an honest month-by-month breakdown so you can pick the right time for what you actually want to do.",
    category:    'travel',
    readTime:    6,
    publishedAt: '2025-01-15',
    image:       'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Fuerteventura beach in perfect weather',
    featured:    true,
    tags:        ['travel', 'planning', 'weather', 'seasons'],
    gradient:    'from-amber-500 to-orange-400',
  },
  {
    slug:        'fuerteventura-with-kids',
    title:       'Fuerteventura with Kids: Activities, Beaches & Tips',
    excerpt:
      'Travelling with young children? Fuerteventura has calm lagoons, shallow water activities and family-run experiences that keep everyone happy — even the parents.',
    category:    'travel',
    readTime:    5,
    publishedAt: '2025-02-01',
    image:       'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Family enjoying the beach in Fuerteventura',
    featured:    false,
    tags:        ['family', 'kids', 'travel', 'activities'],
    gradient:    'from-teal-500 to-green-400',
  },
  {
    slug:        'complete-kitesurf-guide-fuerteventura',
    title:       'Complete Kitesurfing Guide to Fuerteventura',
    excerpt:
      'Why thousands of kiters land in Fuerteventura every year — and what you need to know about spots, seasons, schools and logistics before you pack your kite bag.',
    category:    'surf',
    readTime:    9,
    publishedAt: '2025-01-28',
    image:       'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Kitesurfer flying above flat water in Fuerteventura',
    featured:    true,
    tags:        ['kitesurfing', 'kite spots', 'wind', 'schools'],
    gradient:    'from-sky-500 to-blue-400',
  },
  {
    slug:        'hidden-beaches-fuerteventura',
    title:       '7 Hidden Beaches Most Tourists Never Find',
    excerpt:
      'Forget the resort beaches. These are the coves, inlets and remote stretches of sand that locals actually drive to on their days off — with directions included.',
    category:    'nature',
    readTime:    5,
    publishedAt: '2025-02-12',
    image:       'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Remote hidden beach in Fuerteventura',
    featured:    false,
    tags:        ['beaches', 'hidden gems', 'nature', 'explore'],
    gradient:    'from-ocean-500 to-teal-400',
  },
  {
    slug:        'fuerteventura-surf-forecast-reading',
    title:       'How to Read Surf Forecasts for Fuerteventura',
    excerpt:
      'Windguru, Surfline, Magicseaweed — they all look confusing at first. This practical guide explains what swell height, period and wind direction actually mean for surfing here.',
    category:    'surf',
    readTime:    6,
    publishedAt: '2025-02-20',
    image:       'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Ocean waves at a surf spot in Fuerteventura',
    featured:    false,
    tags:        ['surf', 'forecast', 'beginners', 'tips'],
    gradient:    'from-ocean-800 to-ocean-600',
  },
]

export const featuredGuides = guides.filter(g => g.featured)

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug)
}

export function getGuidesByCategory(category: GuideCategory): Guide[] {
  return guides.filter(g => g.category === category)
}
