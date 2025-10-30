import Image from "next/image";

export default function HeroEnterprise() {
  return (
    <div>
      <div className="relative isolate">
        <div className="mx-auto max-w-4xl sm:py-16 lg:mt-16">
          <div className="text-center">
            <h1 className="text-primary text-5xl italic tracking-tight text-neutral-600 sm:text-6xl mb-2 font-extralight">
              Scale your business with
            </h1>
            <h1 className="text-neutral-900 italic text-7xl tracking-tight sm:text-6xl">
              AI Employees
            </h1>
            <p className="mt-8 text-pretty text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto">
              Get started immediately for free. Upgrade for more credits, usage
              <br />
              and collaboration.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <button className="rounded-full bg-white border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
              Talk to an Expert
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-green-600 transition-colors">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
          
          <div className="p-6 sm:p-10">
            <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 items-center gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-14 lg:max-w-none">
              <Image
                alt="AWS"
                src="/aws.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
              <Image
                alt="OpenAI"
                src="/openAI.svg"
                width={150}
                height={68}
                className="max-h-12 w-full object-contain"
              />
              <Image
                alt="Microsoft Office"
                src="/office.svg"
                width={150}
                height={68}
                className="max-h-12 w-full object-contain"
              />
              <Image
                alt="HubSpot"
                src="/hubspot.svg"
                width={150}
                height={68}
                className="max-h-12 w-full object-contain"
              />
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 items-center gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-14 lg:max-w-none">
              <Image
                alt="Salesforce"
                src="/salesforce.svg"
                width={150}
                height={68}
                className="max-h-12 w-full object-contain"
              />
              <Image
                alt="Google Suite"
                src="/gSuite.svg"
                width={150}
                height={68}
                className="max-h-12 w-full object-contain"
              />
              <Image
                alt="Odoo"
                src="/odoo2.svg"
                width={150}
                height={68}
                className="max-h-12 w-full object-contain"
              />
              <Image
                alt="Anthropic"
                src="/anthropic.svg"
                width={150}
                height={68}
                className="max-h-12 w-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
