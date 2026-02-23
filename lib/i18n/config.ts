/* ─── i18n configuration ─────────────────────────────────────────────
   Prepare for next-intl. Add language routes when ready.
──────────────────────────────────────────────────────────────────── */

export const locales       = ['en', 'de', 'it', 'fr', 'pl'] as const
export const defaultLocale = 'en' as const
export type  SupportedLocale = typeof locales[number]

export const localeNames: Record<SupportedLocale, string> = {
  en: 'English',
  de: 'Deutsch',
  it: 'Italiano',
  fr: 'Français',
  pl: 'Polski',
}

export const localeFlagEmojis: Record<SupportedLocale, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  it: '🇮🇹',
  fr: '🇫🇷',
  pl: '🇵🇱',
}

/**
 * Minimal t() helper — returns the same string for now.
 * Swap this for next-intl's useTranslations() when adding full i18n.
 */
export function t(key: string): string {
  return key
}
