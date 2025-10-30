import Image from "next/image";

export default function Pricing() {
  return (
    <div className="mx-auto w-full max-w-[370px] aspect-370/1658 md:max-w-[664px] md:aspect-664/854 lg:max-w-[1014px] lg:aspect-1014/814 mb-8">
      <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 lg:max-w-[1014px] lg:aspect-1014/451 lg:grid-cols-2">
        {/* Pro Plan */}
        <div className="flex flex-col mx-auto justify-between rounded-2xl max-w-[370px] aspect-370/491 md:max-w-[324px] md:aspect-324/491 lg:max-w-[499px] lg:aspect-499/451 bg-white p-8 shadow-lg border border-gray-200">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Pro
              </h3>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              For professionals and small teams starting with AI.
            </p>
            <p className="mt-6">
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                $19
              </span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                /monthly
              </span>
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                $19 of included monthly credits
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Email support
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Self-service setup
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Basic integrations (WhatsApp, Website, Email)
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Up to 2 connection actions per Agent
              </li>
            </ul>
          </div>
          <button className="mt-8 block w-full rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
            Upgrade to Pro
          </button>
        </div>

        {/* Business Plan */}
        <div className=" relative flex flex-col mx-auto justify-between rounded-2xl max-w-[370px] aspect-370/491 md:max-w-[324px] md:aspect-324/491 lg:max-w-[499px] lg:aspect-499/451 bg-white p-8 shadow-lg border border-gray-200">
          <div className=" absolute right-4">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium text-primary-500 border border-primary-500">
              Recommended
            </span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Business
              </h3>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              For teams ready for more power and advanced support.
            </p>
            <p className="mt-6">
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                $99
              </span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                /monthly
              </span>
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                $149 monthly credits included
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Self-service setup
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Email support
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Access to all integrations
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-primary-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Up to 5 connection actions per Agent
              </li>
            </ul>
          </div>
          <button className="mt-8 block w-full rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
            Start a Business Plan
          </button>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="mx-auto mt-8 max-w-[370px] aspect-370/644 md:max-w-[664px] md:aspect-664/347 lg:max-w-[1014px] lg:max-h-[347px] lg:aspect-1014/347 relative">
        <div className="flex flex-col md:flex-row lg:flex-row rounded-2xl bg-linear-to-r p-8 border border-primary-500 relative overflow-hidden">
          {/* Contenido principal a la izquierda */}
          <div className="flex-1 pr-8">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-xl lg:text-xl font-semibold text-gray-900 dark:text-white">
                Enterprise
              </h3>
            </div>
            <p className="mt-4 text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300">
              For ambitious companies ready to scale with AI.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                500,000 monthly credits included
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Dedicated technical support
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Conversation analysis and reports
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Dedicated account manager
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Advanced integrations + API access
              </li>
            </ul>
            <button className="mt-8 hidden md:visible lg:visible items-center rounded-md bg-green-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600  focus-visible:outline-offset-2 focus-visible:outline-green-500">
              Learn More
            </button>
          </div>
          {/* Imagen Nora - alineada a la derecha y al fondo */}
          <div className="relative lg:absolute right-0 bottom-0 top-1">
            <div className="relative w-[256px] h-[280px] md:w-[429px] md:h-[347px] lg:w-[429px] lg:h-[347px]">
              <Image
                src="/avatars/Laburante_consu.svg"
                alt="Nora - Customer success"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
            <button className="md:hidden lg:hidden mx-auto w-full rounded-2xl bg-primary-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline-offset-2 focus-visible:outline-green-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
