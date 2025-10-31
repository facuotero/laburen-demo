"use client";

export default function EnterpriseCtaSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-neutral-50">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-transparent shadow-primary-600 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-primary-500">
              🚀 Grow without limits
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance font-light text-3xl md:text-6xl lg:text-7xl italic tracking-tight text-neutral-900">
              Transform your business
            </h1>
            <h1 className="text-balance font-light italic text-3xl md:text-6xl lg:text-7xl tracking-tight text-primary-500">
              with Laburen.com
            </h1>
            <p className="mt-8 text-pretty text-base text-base md:text-xl lg:text-xl text-gray-600">
            Discover how AI can power your growth, simplify processes, and open new opportunities for success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <button className="rounded-full bg-white border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                Talk to an Expert
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-primary-500 bg-linear-to-b from-primary-500 to-[#006B3C] px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity">
                Explore Enterprise
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
