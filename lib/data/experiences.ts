/* ─── Experiences data ───────────────────────────────────────────────
   The 2 core products. Replace placeholder copy with real details.
   WhatsApp message is pre-filled per experience.
──────────────────────────────────────────────────────────────────── */

export interface Experience {
  slug:         string
  name:         string
  tagline:      string
  description:  string
  longDesc:     string
  duration:     string
  groupSize:    string
  priceFrom:    number
  priceLabel:   string          // e.g. "per person"
  difficulty:   string
  includes:     string[]
  notIncludes:  string[]
  highlights:   string[]
  whatsappText: string          // pre-filled WhatsApp message
  gradient:     string          // Tailwind gradient fallback
  accentColor:  string          // Tailwind text color for accents
  badgeColor:   string          // badge background
  image:        string          // swap for real photo
  imageAlt:     string
  emoji:        string
  tag:          string          // short label on card
  faqs:         Array<{ q: string; a: string }>
}

export const experiences: Experience[] = [
  {
    slug:        'paddle-excursion',
    name:        'Paddle Excursion',
    tagline:     'Explore the coastline from the water',
    description: 'A guided paddle adventure along the wild coastline of Fuerteventura. No experience needed — just the desire to see the island from a different angle.',
    longDesc:    'Paddle through calm coves, volcanic rock formations and crystal-clear Atlantic water on this guided excursion. Our experienced guides adapt the route to the group — whether you want to take it easy or push a bit further. Ideal for families, couples and anyone who wants to experience the coast the way it should be: slowly, quietly and up close.',
    duration:    '2 hours',
    groupSize:   'Up to 8 people',
    priceFrom:   35,
    priceLabel:  'per person',
    difficulty:  'All levels',
    includes: [
      'All paddle equipment (board/kayak + paddle)',
      'Life jacket and safety gear',
      'Certified local guide',
      'Safety briefing',
      'Waterproof bag for your belongings',
    ],
    notIncludes: [
      'Transport to meeting point',
      'Drinks / snacks',
    ],
    highlights: [
      'Volcanic rock formations up close',
      'Crystal-clear Atlantic water',
      'Wildlife spotting (fish, occasional turtles)',
      'Great for photos',
      'No experience required',
    ],
    whatsappText: "Hi! I'd like to book the Paddle Excursion 🏄 Please let me know your availability.",
    gradient:    'from-ocean-700 to-cyan-500',
    accentColor: 'text-ocean-600',
    badgeColor:  'bg-ocean-100 text-ocean-700',
    image:       'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&q=80&auto=format&fit=crop',
    imageAlt:    'Paddleboarding along the rocky coastline of Fuerteventura',
    emoji:       '🏄',
    tag:         'Most Popular',
    faqs: [
      {
        q: 'Do I need to know how to swim?',
        a: 'Basic swimming ability is recommended, but not mandatory. You will wear a life jacket at all times.',
      },
      {
        q: 'Is it suitable for children?',
        a: 'Yes — children from around 8 years old can join (younger with a shared board with a parent). We adapt the experience for families.',
      },
      {
        q: 'What should I bring?',
        a: 'Swimwear, sunscreen, towel and water. Leave valuables at home — we provide a waterproof bag for essentials.',
      },
      {
        q: 'What happens if the weather is bad?',
        a: "Safety first. If conditions are not suitable, we'll reschedule or offer a full refund. No questions asked.",
      },
    ],
  },
  {
    slug:        'west-sunset-experience',
    name:        'West Sunset Experience',
    tagline:     'The best sunset on the island. Period.',
    description: "Fuerteventura's west coast is where the Atlantic meets the Sahara — and at sunset, the result is unforgettable. We take you to the right spot, at the right time, away from the crowds.",
    longDesc:    "The west coast of Fuerteventura faces open Atlantic and the last light hits it in a way that photographers chase from all over the world. This experience combines a guided route to the best sunset viewpoints — some accessible only if you know where to look — with optional paddling at golden hour for the full immersive effect. Whether you want to watch from the coast or be on the water as the sun goes down, this experience delivers.",
    duration:    '2–2.5 hours',
    groupSize:   'Up to 8 people',
    priceFrom:   45,
    priceLabel:  'per person',
    difficulty:  'All levels',
    includes: [
      'Guided route to sunset viewpoints',
      'Optional paddle at golden hour',
      'All equipment if paddling',
      'Local guide with insider knowledge',
      'Photography tips from the best angles',
    ],
    notIncludes: [
      'Transport to meeting point',
      'Drinks / snacks',
    ],
    highlights: [
      'Exclusive viewpoints away from crowds',
      'Atlantic horizon sunset',
      'Dramatic volcanic landscape',
      'Perfect for couples and photographers',
      'Flexible — paddle or walk',
    ],
    whatsappText: "Hi! I'd like to book the West Sunset Experience 🌅 Please let me know your availability.",
    gradient:    'from-amber-600 to-orange-400',
    accentColor: 'text-amber-600',
    badgeColor:  'bg-amber-100 text-amber-700',
    image:       'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    imageAlt:    'Dramatic sunset over the Atlantic ocean from the west coast of Fuerteventura',
    emoji:       '🌅',
    tag:         'Sunset Special',
    faqs: [
      {
        q: 'What time does it start?',
        a: 'The start time changes daily to match sunset. When you book, we confirm the exact time for your date.',
      },
      {
        q: 'Is this a paddle activity or a viewpoint tour?',
        a: "Both options are available — we offer a paddle version on calm evenings, and a coastal walk version when conditions are better on land. We'll advise you on the day.",
      },
      {
        q: 'Is it romantic / good for couples?',
        a: "Very much so. Many guests book this specifically for anniversaries or special occasions. Let us know and we'll make it extra special.",
      },
      {
        q: 'What if sunset is cloudy?',
        a: "We can't control the weather, but even cloudy sunsets on the west coast are dramatic. We only cancel for safety reasons, never for aesthetic ones.",
      },
    ],
  },
]

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find(e => e.slug === slug)
}
