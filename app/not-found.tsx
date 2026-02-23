import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] px-5">
      <div className="text-center max-w-md">
        <p className="text-7xl mb-6" aria-hidden="true">🌊</p>
        <h1 className="font-heading font-extrabold text-4xl text-[var(--color-text)] mb-4">
          Lost at sea?
        </h1>
        <p className="text-[var(--color-text-muted)] text-lg mb-8">
          This page doesn't exist — but Fuerteventura is still out there waiting.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/activities" className="btn-secondary">
            View activities
          </Link>
        </div>
      </div>
    </div>
  )
}
