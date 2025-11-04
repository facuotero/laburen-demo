import Image from "next/image";
import {
  RefreshIcon,
  DiamondIcon,
  HeadsetIcon,
  MonitorIcon,
  HandshakeIcon,
  CheckIcon,
  BrainIcon,
  GlobeIcon,
  CoinsIcon,
  StarBadgeIcon,
  UserIcon,
  LinkIcon,
  PieceIcon,
  UsersIcon,
} from "../../../public/icons/index";

export default function Pricing() {
  return (
    <div className="mx-auto w-full max-w-[370px] aspect-370/1658 md:max-w-[664px] md:aspect-664/854 lg:max-w-[1014px] lg:aspect-1014/814 mb-8">
      <div className="mx-auto w-full max-w-[1014px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-stretch [&>*]:w-full">
        {/* Pro Plan */}
        <div className="flex flex-col  justify-between rounded-2xl max-w-[370px] aspect-370/491 md:max-w-[324px] md:aspect-324/491 lg:max-w-[327px] lg:aspect-327/580 p-8 shadow-lg border border-gray-200">
          <div>
            <div className="flex items-center">
              <h3 className="text-xl font-medium text-neutral-900">Pro</h3>
            </div>
            <p className="mt-2">
              <span className="text-4xl font-bold tracking-tight text-neutral-900">
                $19{" "}
              </span>
              <span className="text-sm font-medium text-neutral-400">
                /monthly
              </span>
            </p>
            <p className="mt-4 text-xs md:text-sm lg:text-sm text-neutral-600">
              For professionals and small teams starting with AI.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-800">
              <li className="flex gap-x-3">
                <CoinsIcon className="lg:w-5 lg:h-5" />
                $19 of included monthly credits
              </li>
              <li className="flex gap-x-3">
                <UsersIcon className="lg:w-5 lg:h-5" />
                Unlimited Agents
              </li>
              <li className="flex gap-x-3">
                <PieceIcon className="lg:w-5 lg:h-5" />1 user per Workspace
              </li>
              <li className="flex gap-x-3">
                <LinkIcon className="lg:w-5 lg:h-5" />
                {"Basic integrations (WhatsApp, Website, Email)"}
              </li>
              <li className="flex gap-x-3">
                <UserIcon className="lg:w-5 lg:h-5" />1 user per Workspace
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                Escribir aquí
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                Escribir aquí
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                Escribir aquí
              </li>
            </ul>
          </div>
          <button className="mt-8 block w-full rounded-2xl bg-neutral-900 px-3 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Upgrade to Pro
          </button>
        </div>
        {/* Business Plan */}
        <div className=" relative flex flex-col justify-between rounded-2xl max-w-[370px] aspect-370/491 md:max-w-[324px] md:aspect-324/491 lg:max-w-[327px] lg:aspect-327/580 p-8 shadow-lg border border-gray-200">
          <div className=" absolute right-4">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium text-primary-800 border border-primary-500 bg-primary-100">
              Recommended
            </span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-neutral-900">Business</h3>
            </div>
            <p className="mt-6">
              <span className="text-4xl font-bold tracking-tight text-primary-800">
                $99{" "}
              </span>
              <span className="text-sm font-medium text-neutral-400">
                /monthly
              </span>
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              For teams ready for more power and advanced support.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-800">
              <li className="flex gap-x-3">
                <StarBadgeIcon className="lg:w-5 lg:h-5" color="#4CC722" />
                All included in Pro plan +
              </li>
              <li className="flex gap-x-3">
                <CoinsIcon className="lg:w-5 lg:h-5" color="#4CC722" />
                $99 monthly credits included
              </li>
              <li className="flex gap-x-3">
                <GlobeIcon className="lg:w-5 lg:h-5" color="#4CC722" />
                {"Access to all integrations (Pro, Business)"}
              </li>
              <li className="flex gap-x-3">
                <BrainIcon className="lg:w-5 lg:h-5 " color="#4CC722" />
                {"Tech session for a use case implementation (one-time)"}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" color="#4CC722" />
                Escribir aquí
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5 " color="#4CC722" />
                Escribir aquí
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" color="#4CC722" />
                Escribir aquí
              </li>
            </ul>
          </div>
          <button className="mt-8 block w-full rounded-2xl px-3 py-2 text-center text-sm font-medium text-white shadow-sm focus-visible:outline border-primary-500 bg-linear-to-b from-primary-500 to-[#006B3C] focus-visible:outline-offset-2 focus-visible:outline-black">
            Start a Business Plan
          </button>
        </div>
        {/* Growth Plan */}
        <div className="flex flex-col justify-between rounded-2xl max-w-[370px] aspect-370/491 md:max-w-[664px] md:aspect-664/347 lg:max-w-[327px] lg:aspect-327/580 p-8 shadow-lg border border-gray-200">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-neutral-900">Growth</h3>
            </div>
            <p className="mt-6">
              <span className="text-4xl font-bold tracking-tight text-neutral-900">
                $499
              </span>
              <span className="text-sm font-medium text-neutral-400">
                {" "}
                /monthly
              </span>
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              For teams ready for more power and advanced support.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-800">
              <li className="flex gap-x-3">
                <HandshakeIcon className="lg:w-5 lg:h-5" />
                Tailored Agent Implementation and Integrations
              </li>
              <li className="flex gap-x-3">
                <MonitorIcon className="lg:w-5 lg:h-5" />
                Dedicated Customer Success Manager
              </li>
              <li className="flex gap-x-3">
                <HeadsetIcon className="lg:w-5 lg:h-5" />
                Dedicated Customer Success Manager
              </li>
              <li className="flex gap-x-3">
                <DiamondIcon className="lg:w-5 lg:h-5 " />
                Scalable Credit Volume
              </li>
              <li className="flex gap-x-3">
                <RefreshIcon className="lg:w-5 lg:h-5 " />
                Up to 5 connection actions per Agent
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                Escribir aquí
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                Escribir aquí
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                Escribir aquí
              </li>
            </ul>
          </div>
          <button className="mt-8 block w-full rounded-2xl bg-black px-3 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Start a Business Plan
          </button>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="mx-auto mt-8 max-w-[370px] aspect-370/644 md:max-w-[664px] md:aspect-664/347 lg:max-w-[1014px] lg:max-h-[410px] lg:aspect-1014/410 relative">
        <div className="flex flex-col md:flex-row lg:flex-row rounded-2xl bg-linear-to-r p-4 md:p-6 border border-primary-500 relative overflow-hidden">
          {/* Contenido principal a la izquierda */}
          <div className="flex-1 pr-8 md:pr-0">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-xl lg:text-xl font-semibold text-neutral-900">
                Enterprise
              </h3>
            </div>
            <p className="mt-4 md:mt-4 text-xs md:text-sm lg:text-sm text-neutral-500">
              For ambitious companies ready to scale with AI.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-800">
              <li className="flex gap-x-3">
                <CheckIcon className="w-5 h-5" color="#4CC722" />
                500,000 monthly credits included
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="w-5 h-5" color="#4CC722" />
                Dedicated technical support
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="w-5 h-5" color="#4CC722" />
                Conversation analysis and reports
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="w-5 h-5" color="#4CC722" />
                Dedicated account manager
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="w-5 h-5" color="#4CC722" />
                Advanced integrations + API access
              </li>
            </ul>
            <button className="mt-8 md:mt-4 md:w-[294px] hidden md:visible lg:visible items-center rounded-2xl bg-primary-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600  focus-visible:outline-offset-2 focus-visible:outline-green-500">
              Learn More
            </button>
          </div>
          {/* Imagen Nora - alineada a la derecha y al fondo */}
          <div className="md:absolute lg:absolute right-0 bottom-0">
            <div className="relative w-[256px] h-[280px] md:w-[310px] md:h-[338px] lg:w-[407px] lg:h-[330px]">
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
