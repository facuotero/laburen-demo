export default function ContentSection() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="lg:max-w-lg">
              <h1 className="text-h3 leading-tight font-normal text-neutral-500 dark:text-neutral-400">
                AI is not here to replace us, but to <span className="font-semibold text-neutral-800 dark:text-white">amplify us.</span>
              </h1>
              <div className="mt-8 space-y-6 text-xl text-neutral-700 dark:text-neutral-300">
                <p>
                  At Laburen, we believe people should focus on what truly matters.
                </p>
                <p>
                  Artificial Intelligence is here to free your time, boost your ideas, and open new opportunities for your business to grow and evolve.
                </p>
                <p>
                  Our mission is simple: make AI agents accessible to everyone.
                </p>
                <p>
                  It shouldn't be a privilege for a few tech giants, but a real tool for entrepreneurs, businesses, and companies that want to transform the way they work.
                </p>
                <p>
                  We believe in a more human and innovative world, where technology has one clear purpose: <span className="font-semibold text-neutral-800 dark:text-white">to improve people's lives.</span>
                </p>
                <p>
                  That's the commitment that drives us. That's the heart of Laburen.
                </p>
                <p className="font-medium">
                  Every revolution starts with a Shovel, like ours.
                </p>
              </div>
              <div className="mt-10">
                <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
                  See our vision
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:pl-4">
            <div className="relative lg:max-w-lg">
              <img
                alt="Content illustration"
                src="/content_illustration.png"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
