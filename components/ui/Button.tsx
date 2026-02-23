import Link from 'next/link'
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'

/* ─── Types ──────────────────────────────────────────────────────── */
type Variant = 'primary' | 'secondary' | 'ghost' | 'whatsapp'
type Size    = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?:    Size
  children: React.ReactNode
  className?: string
  icon?:    React.ReactNode   // optional left icon
  iconRight?: React.ReactNode // optional right icon
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
    href?: never
  }

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a'
    href: string
    external?: boolean
  }

type NextLinkProps = BaseProps & {
  as: 'link'
  href: string
  className?: string
}

type Props = ButtonProps | LinkProps | NextLinkProps

/* ─── Variant styles ────────────────────────────────────────────── */
const variantClasses: Record<Variant, string> = {
  primary:
    'bg-ocean-600 hover:bg-ocean-700 active:bg-ocean-800 text-white shadow-button hover:shadow-lg',
  secondary:
    'bg-white hover:bg-sand-50 active:bg-sand-100 text-ocean-800 border border-ocean-200 hover:border-ocean-300',
  ghost:
    'text-ocean-600 hover:text-ocean-800 hover:bg-ocean-50 border-transparent',
  whatsapp:
    'bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1aa34a] text-white shadow-sm hover:shadow-md',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-[15px] gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

/* ─── Base class ────────────────────────────────────────────────── */
function buildClass(variant: Variant, size: Size, extra?: string): string {
  return [
    'inline-flex items-center justify-center font-semibold rounded-xl',
    'transition-all duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-500 focus-visible:outline-offset-2',
    'disabled:opacity-60 disabled:cursor-not-allowed select-none',
    variantClasses[variant],
    sizeClasses[size],
    extra ?? '',
  ]
    .join(' ')
    .trim()
}

/* ─── Component ─────────────────────────────────────────────────── */
export function Button(props: Props) {
  const {
    variant  = 'primary',
    size     = 'md',
    children,
    className,
    icon,
    iconRight,
  } = props

  const cls = buildClass(variant, size, className)

  if (props.as === 'a') {
    const { href, external, as: _as, variant: _v, size: _s, icon: _i, iconRight: _ir, ...rest } = props
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && <span aria-hidden="true">{icon}</span>}
        {children}
        {iconRight && <span aria-hidden="true">{iconRight}</span>}
      </a>
    )
  }

  if (props.as === 'link') {
    const { href, as: _as, variant: _v, size: _s, icon: _i, iconRight: _ir, ...rest } = props
    return (
      <Link href={href} className={cls} {...rest}>
        {icon && <span aria-hidden="true">{icon}</span>}
        {children}
        {iconRight && <span aria-hidden="true">{iconRight}</span>}
      </Link>
    )
  }

  const { as: _as, variant: _v, size: _s, icon: _i, iconRight: _ir, ...rest } = props
  return (
    <button
      className={cls}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
      {iconRight && <span aria-hidden="true">{iconRight}</span>}
    </button>
  )
}
