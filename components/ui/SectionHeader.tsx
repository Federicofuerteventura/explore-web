/* ─── SectionHeader ──────────────────────────────────────────────────
   Reusable section heading block with optional eyebrow label and subtitle.
   Supports left-aligned (default) and centered variants.
──────────────────────────────────────────────────────────────────── */

interface SectionHeaderProps {
  eyebrow?:   string
  title:      string
  subtitle?:  string
  align?:     'left' | 'center'
  titleAs?:   'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align     = 'left',
  titleAs   = 'h2',
  className = '',
}: SectionHeaderProps) {
  const Tag = titleAs
  const isCenter = align === 'center'

  return (
    <div className={`${isCenter ? 'text-center mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <p className="section-eyebrow mb-3" aria-label={`Section: ${eyebrow}`}>
          <span aria-hidden="true" className="inline-block w-5 h-px bg-ocean-500 mr-2 align-middle" />
          {eyebrow}
        </p>
      )}
      <Tag className="section-title">
        {title}
      </Tag>
      {subtitle && (
        <p className={`section-subtitle ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
