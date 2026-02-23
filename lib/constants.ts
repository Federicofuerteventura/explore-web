/* ─── Global constants ───────────────────────────────────────────────
   Single source of truth — update your WhatsApp number here once.
──────────────────────────────────────────────────────────────────── */

// Replace with your real WhatsApp number (international format, no +)
export const WA_NUMBER = '34600000000'

export const WHATSAPP_BASE = `https://wa.me/${WA_NUMBER}`

export function waLink(text: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`
}

export const WA_DEFAULT = waLink(
  "Hi! I'd like to know more about your experiences in Fuerteventura 🌊"
)

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://explorefuerteventura.com'

export const SITE_NAME = 'Explore Fuerteventura'

export const CONTACT_EMAIL = 'hello@explorefuerteventura.com'
