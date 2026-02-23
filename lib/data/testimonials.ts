/* ─── Testimonials ───────────────────────────────────────────────────
   Replace with real reviews when available.
──────────────────────────────────────────────────────────────────── */

export interface Testimonial {
  id:          number
  name:        string
  country:     string
  flag:        string
  experience:  string
  rating:      number
  text:        string
  date:        string
}

export const testimonials: Testimonial[] = [
  {
    id:         1,
    name:       'Marcus H.',
    country:    'Germany',
    flag:       '🇩🇪',
    experience: 'Paddle Excursion',
    rating:     5,
    text:       "We did the paddle excursion on our second day and it completely changed how we saw the island. The guide knew every corner of the coastline. We spotted fish, saw the volcanic rock from the water and came back with photos we still can't believe we took ourselves.",
    date:       '2025-01-18',
  },
  {
    id:         2,
    name:       'Sofia M.',
    country:    'Italy',
    flag:       '🇮🇹',
    experience: 'West Sunset Experience',
    rating:     5,
    text:       "The sunset experience was the highlight of our entire trip. We went on our last evening and I genuinely teared up — the light, the silence, the coast. The guide brought us to a spot we never would have found alone. Book this. Don't think about it.",
    date:       '2025-02-03',
  },
  {
    id:         3,
    name:       'Tom & Anna K.',
    country:    'United Kingdom',
    flag:       '🇬🇧',
    experience: 'West Sunset Experience',
    rating:     5,
    text:       "We booked the sunset experience for our anniversary and it was absolutely perfect. The whole thing felt personal, not like a tourist product. The guide left us space to enjoy it without turning it into a guided lecture. Exactly what we wanted.",
    date:       '2025-02-15',
  },
  {
    id:         4,
    name:       'Claire B.',
    country:    'France',
    flag:       '🇫🇷',
    experience: 'Paddle Excursion',
    rating:     5,
    text:       "I had never paddleboarded before and was a little nervous. Within 10 minutes I felt completely at ease. The guide was incredibly patient and the route was stunning — caves, clear water, rock formations. My kids (8 and 11) loved every second of it.",
    date:       '2025-02-10',
  },
  {
    id:         5,
    name:       'Jakub W.',
    country:    'Poland',
    flag:       '🇵🇱',
    experience: 'Paddle Excursion',
    rating:     5,
    text:       "Straightforward booking process via WhatsApp, very responsive. The experience itself delivered everything they described. Small group (only 5 of us), knowledgeable guide, beautiful coastline. No fuss, just a great time on the water.",
    date:       '2025-01-30',
  },
]
