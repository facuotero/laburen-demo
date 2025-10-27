'use client'

export default function EnterpriseCtaSection() {

  return (
    <div className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute left-0 top-0 h-full w-full opacity-30"
          fill="none"
          viewBox="0 0 1440 800"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="enterprise-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 60L60 0M30 90L90 30M-30 30L30 -30"
                stroke="rgb(59 130 246)"
                strokeWidth="1"
                strokeDasharray="2,2"
                fill="none"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#enterprise-pattern)" />
        </svg>
        
        {/* Decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 opacity-60"></div>
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 opacity-60"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 opacity-60"></div>
      </div>
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-primary-500">
              🚀 Limitless growth
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl italic tracking-tight text-neutral-900 sm:text-6xl dark:text-white mb-2">
              Is your business ready
            </h1>
            <h1 className="text-balance text-5xl italic tracking-tight text-neutral-900 sm:text-6xl dark:text-white">
              for the <span className="text-primary-500 italic">next level</span>?
            </h1>
            <p className="mt-8 text-pretty text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto dark:text-gray-400">
              AI can be the competitive edge your organization needs.
              <br />
              With Laburen Enterprise, we design AI Agents tailored to your goals, teams, and processes — bringing more efficiency, more impact, and more time for what really matters.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <button className="rounded-full bg-white border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                Talk to an Expert
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-green-600 transition-colors">
                Explore Enterprise
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
