/* ─── Activities data ────────────────────────────────────────────────
   Mock data — replace with CMS/API calls when ready.
   Each activity maps to /activities/[slug]
──────────────────────────────────────────────────────────────────── */

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'all-levels'
export type Category   = 'surf' | 'kite' | 'water' | 'land' | 'culture' | 'nature'

export interface Activity {
  slug:        string
  title:       string
  tagline:     string
  description: string
  category:    Category
  difficulty:  Difficulty
  duration:    string        // e.g. "2–3 hours"
  groupSize:   string        // e.g. "Up to 8 people"
  priceFrom:   number        // EUR
  image:       string        // path or Unsplash URL
  imageAlt:    string
  highlights:  string[]
  featured:    boolean
  gradient:    string        // Tailwind gradient for image fallback
  tag:         string        // short label shown on card
}

export const activities: Activity[] = [
  {
    slug:        'surf-lessons-beginners',
    title:       'Surf Lessons for Beginners',
    tagline:     'Catch your first wave with local instructors',
    description:
      'Start your surf journey on some of the best Atlantic waves in Europe. Our certified local instructors take small groups to the right spots — no experience needed, just the right attitude.',
    category:    'surf',
    difficulty:  'beginner',
    duration:    '2 hours',
    groupSize:   'Up to 6 people',
    priceFrom:   45,
    image:       'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Surfer catching a wave in Fuerteventura',
    highlights:  ['All equipment included', 'Max 6 students per instructor', 'Video of your session', 'Post-class debrief'],
    featured:    true,
    gradient:    'from-ocean-600 to-cyan-400',
    tag:         'Most Popular',
  },
  {
    slug:        'kitesurfing-introduction',
    title:       'Kitesurfing Introduction',
    tagline:     'The wind capital of Europe is waiting',
    description:
      'Fuerteventura is one of the top kitesurfing destinations in the world. Our IKO-certified instructors will get you flying your first kite safely, on flat water perfect for learning.',
    category:    'kite',
    difficulty:  'beginner',
    duration:    '3 hours',
    groupSize:   'Max 4 people',
    priceFrom:   75,
    image:       'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Kitesurfer on the blue waters of Fuerteventura',
    highlights:  ['IKO certified instructors', 'Safety briefing', 'Full gear included', 'Lagoon with flat water'],
    featured:    true,
    gradient:    'from-sky-500 to-blue-400',
    tag:         'Wind Sport',
  },
  {
    slug:        'snorkeling-volcanic-reefs',
    title:       'Snorkeling on Volcanic Reefs',
    tagline:     'Discover what lives beneath the surface',
    description:
      "Fuerteventura's coastline hides an extraordinary underwater world. Join our marine guides to explore volcanic rock formations, colorful fish, sea turtles and the occasional octopus.",
    category:    'water',
    difficulty:  'all-levels',
    duration:    '2.5 hours',
    groupSize:   'Up to 10 people',
    priceFrom:   35,
    image:       'https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Snorkeling among volcanic reef formations',
    highlights:  ['Full snorkel gear', 'Marine biologist guide', 'Multiple reef sites', 'Suitable for families'],
    featured:    true,
    gradient:    'from-teal-500 to-emerald-400',
    tag:         'Family Friendly',
  },
  {
    slug:        'e-bike-dunes-coast',
    title:       'E-Bike: Dunes, Coast & Villages',
    tagline:     'Cover more ground, miss nothing',
    description:
      'Explore the lunar dunes of Corralejo Natural Park, isolated coastal tracks and traditional fishing villages — all on quality e-bikes with full local guidance.',
    category:    'land',
    difficulty:  'all-levels',
    duration:    '4 hours',
    groupSize:   'Up to 8 people',
    priceFrom:   55,
    image:       'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'E-bike riding through Fuerteventura dunes',
    highlights:  ['Premium e-bikes', 'Helmet & safety gear', 'Picnic stop included', 'Zero traffic routes'],
    featured:    false,
    gradient:    'from-amber-500 to-orange-400',
    tag:         'Active Explore',
  },
  {
    slug:        'sunset-sup-session',
    title:       'Sunset SUP Session',
    tagline:     'Golden hour on a stand-up paddleboard',
    description:
      "There's nothing quite like paddling on calm Atlantic water as the sun melts into the horizon. Perfect for all levels — no experience required, immediate zen guaranteed.",
    category:    'water',
    difficulty:  'all-levels',
    duration:    '1.5 hours',
    groupSize:   'Up to 8 people',
    priceFrom:   30,
    image:       'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Stand-up paddleboarding at sunset in Fuerteventura',
    highlights:  ['SUP & paddle included', 'Golden hour timing', 'Calm sheltered bay', 'Photographs included'],
    featured:    false,
    gradient:    'from-orange-500 to-pink-400',
    tag:         'Sunset Experience',
  },
  {
    slug:        'surf-coaching-intermediate',
    title:       'Surf Coaching — Level Up',
    tagline:     "Already surfing? Let's get better",
    description:
      'If you can already ride waves but feel stuck at the same level, our coaching sessions use video analysis, targeted drills and the best intermediate spots to unlock real progression.',
    category:    'surf',
    difficulty:  'intermediate',
    duration:    '2.5 hours',
    groupSize:   'Max 4 people',
    priceFrom:   65,
    image:       'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80&auto=format&fit=crop',
    imageAlt:    'Surfer riding a wave in Fuerteventura',
    highlights:  ['Video analysis', 'Personalized drills', 'Spot selection', 'ISA certified coaches'],
    featured:    false,
    gradient:    'from-ocean-700 to-ocean-500',
    tag:         'Progression',
  },
]

export const featuredActivities = activities.filter(a => a.featured)

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find(a => a.slug === slug)
}

export function getActivitiesByCategory(category: Category): Activity[] {
  return activities.filter(a => a.category === category)
}
