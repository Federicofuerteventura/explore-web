import Link from 'next/link'
import Image from 'next/image'

const TILES = [
  {
    id:       1,
    title:    'Paddle Excursion',
    subtitle: 'Coast, caves & clear water',
    href:     '/experiences/paddle-excursion',
    image:    'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80&auto=format&fit=crop',
    alt:      'Paddleboarding along the rocky coastline of Fuerteventura',
    gradient: 'from-ocean-800/80 to-ocean-600/40',
    span:     'row',
  },
  {
    id:       2,
    title:    'West Sunset Experience',
    subtitle: 'Golden hour on the Atlantic',
    href:     '/experiences/west-sunset-experience',
    image:    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop',
    alt:      'Sunset over the Atlantic ocean from Fuerteventura west coast',
    gradient: 'from-amber-800/70 to-orange-600/40',
    span:     'normal',
  },
  {
    id:       3,
    title:    'Wild Coastline',
    subtitle: 'Volcanic rock meets the Atlantic',
    href:     '/experiences/paddle-excursion',
    image:    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&auto=format&fit=crop',
    alt:      'Wild volcanic coastline in Fuerteventura',
    gradient: 'from-stone-900/70 to-stone-700/30',
    span:     'normal',
  },
  {
    id:       4,
    title:    'The Island Beyond the Resort',
    subtitle: 'See it from the water',
    href:     '#experiences',
    image:    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80&auto=format&fit=crop',
    alt:      'Clear turquoise water of Fuerteventura',
    gradient: 'from-ocean-900/70 to-ocean-700/30',
    span:     'col',
  },
] as const

export function InspirationGrid() {
  return (
    <section
      className="section-padding bg-[var(--color-bg)]"
      aria-labelledby="inspiration-heading"
    >
      <div className="container-main">
        <div className="text-center mb-10 md:mb-14">
          <p className="section-eyebrow mb-3">
            <span aria-hidden="true" className="inline-block w-5 h-px bg-ocean-500 mr-2 align-middle" />
            The Island Awaits
          </p>
          <h2 id="inspiration-heading" className="section-title">
            Every session looks different
          </h2>
          <p className="section-subtitle mx-auto">
            Volcanic coast, crystal water and that west coast light — sometimes all in the same afternoon.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          <GridTile tile={TILES[0]} className="row-span-2" />
          <GridTile tile={TILES[1]} />
          <GridTile tile={TILES[2]} />
          <GridTile tile={TILES[3]} className="col-span-2 md:col-span-2" />
        </div>
      </div>
    </section>
  )
}

function GridTile({
  tile,
  className = '',
}: {
  tile: typeof TILES[number]
  className?: string
}) {
  return (
    <Link
      href={tile.href}
      className={`relative overflow-hidden rounded-2xl group
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-ocean-500
                  ${className}`}
      aria-label={`${tile.title} — ${tile.subtitle}`}
    >
      <Image
        src={tile.image}
        alt={tile.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${tile.gradient} transition-opacity duration-300`} />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <p className="font-heading font-bold text-white text-sm md:text-base leading-tight mb-0.5">
          {tile.title}
        </p>
        <p className="text-white/70 text-xs hidden sm:block">{tile.subtitle}</p>
      </div>
      <div
        className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full
                     flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      >
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
