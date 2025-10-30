"use client";

export default function EnterpriseCtaSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decorative pattern */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-primary-500">
              🚀 Limitless growth
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl italic tracking-tight text-neutral-900 sm:text-6xl mb-2">
              Is your business ready
            </h1>
            <h1 className="text-balance text-5xl italic tracking-tight text-neutral-900 sm:text-6xl">
              for the{" "}
              <span className="text-primary-500 italic">next level</span>?
            </h1>
            <p className="mt-8 text-pretty text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto">
              AI can be the competitive edge your organization needs.
              <br />
              With Laburen Enterprise, we design AI Agents tailored to your
              goals, teams, and processes — bringing more efficiency, more
              impact, and more time for what really matters.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <button className="rounded-full bg-white border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                Talk to an Expert
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-green-600 transition-colors">
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
