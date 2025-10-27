import Image from 'next/image'

const testimonials = [
  {
    body: 'Con Laburen logramos automatizar la atención al cliente en WhatsApp y mejorar nuestras ventas al instante. Ahora nuestros agentes humanos se enfocan en cerrar ventas.',
    author: {
      name: 'Carolina Herrera',
      handle: 'CEO',
      imageUrl: '/avatars/avatar_wt_maxi.svg',
    },
  },
  {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: {
      name: 'Axel Jutoran',
      handle: 'CEO',
      imageUrl: '/avatars/avatar_nora.svg',
    },
  },
  {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: {
      name: 'Axel Jutoran',
      handle: 'CEO',
      imageUrl: '/avatars/avatar_wt_consu.svg',
    },
  },
  {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'Axel Jutoran',
      handle: 'CEO',
      imageUrl: '/avatars/avatar_wt_jorge.svg',
    },
  },
  {
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    author: {
      name: 'Axel Jutoran',
      handle: 'CEO',
      imageUrl: '/avatars/avatar_wt_maxi.svg',
    },
  },
  {
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    author: {
      name: 'Axel Jutoran',
      handle: 'CEO',
      imageUrl: '/avatars/avatar_nora.svg',
    },
  },
]

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute left-0 top-0 h-full w-full opacity-20"
          fill="none"
          viewBox="0 0 1440 800"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="testimonials-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0H20L0 20Z"
                stroke="rgb(34 197 94)"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonials-pattern)" />
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-primary-700 px-4 py-2 text-sm font-medium mb-6">
            TESTIMONIALS
          </div>
          <h2 className="text-balance text-4xl font-regular tracking-tight text-neutral-600 sm:text-5xl dark:text-gray-300">
            Companies around the world are already hiring AI Agents with Laburen.com
          </h2>
        </div>  
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm/6 shadow-sm border border-gray-100 dark:bg-white/[0.025] dark:border-gray-800">
                  <blockquote className="text-gray-900 dark:text-gray-100">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      alt={testimonial.author.name}
                      src={testimonial.author.imageUrl}
                      width={40}
                      height={40}
                      className="rounded-full bg-gray-50 dark:bg-gray-800"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                      <div className="text-gray-600 dark:text-gray-400">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        
        {/* See more button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700">
            See more
          </button>
        </div>
      </div>
    </div>
  )
}
