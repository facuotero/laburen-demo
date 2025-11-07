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
import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("pricing");
  return (
    <div className="mx-auto w-full max-w-[370px] md:max-w-[664px] lg:max-w-[1014px] mb-8">
      <div className="mx-auto w-full max-w-[1014px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-stretch [&>*]:w-full">
        {/* Pro Plan */}
        <div className="flex flex-col justify-between rounded-2xl w-full min-h-[500px] p-8 shadow-lg border border-gray-200">
          <div>
            <div className="flex items-center">
              <h3 className="text-xl font-medium text-neutral-900">{t("pro.title")}</h3>
            </div>
            <p className="mt-2">
              <span className="text-4xl font-bold tracking-tight text-neutral-900">
                {t("pro.price")}{" "}
              </span>
              <span className="text-sm font-medium text-neutral-400">
                {t("pro.period")}
              </span>
            </p>
            <p className="mt-4 text-xs md:text-sm lg:text-sm text-neutral-600">
              {t("pro.description")}
            </p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-800">
              <li className="flex gap-x-3">
                <CoinsIcon className="lg:w-5 lg:h-5" />
                {t("pro.features.credits")}
              </li>
              <li className="flex gap-x-3">
                <UsersIcon className="lg:w-5 lg:h-5" />
                {t("pro.features.agents")}
              </li>
              <li className="flex gap-x-3">
                <PieceIcon className="lg:w-5 lg:h-5" />
                {t("pro.features.users")}
              </li>
              <li className="flex gap-x-3">
                <LinkIcon className="lg:w-5 lg:h-5" />
                {t("pro.features.integrations")}
              </li>
              <li className="flex gap-x-3">
                <UserIcon className="lg:w-5 lg:h-5" />
                {t("pro.features.users")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                {t("pro.features.placeholder1")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                {t("pro.features.placeholder2")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                {t("pro.features.placeholder3")}
              </li>
            </ul>
          </div>
          <button className="mt-8 block w-full rounded-2xl bg-neutral-900 px-3 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            {t("pro.button")}
          </button>
        </div>
        {/* Business Plan */}
        <div className="relative flex flex-col justify-between rounded-2xl w-full min-h-[500px] p-8 shadow-sm border border-neutral-200 shadow-primary-500">
          <div className=" absolute right-4">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium text-primary-800 border border-primary-500 bg-primary-100">
              {t("business.recommended")}
            </span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-neutral-900">{t("business.title")}</h3>
            </div>
            <p className="mt-6">
              <span className="text-4xl font-bold tracking-tight text-primary-800">
                {t("business.price")}{" "}
              </span>
              <span className="text-sm font-medium text-neutral-400">
                {t("business.period")}
              </span>
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              {t("business.description")}
            </p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-800">
              <li className="flex gap-x-3">
                <StarBadgeIcon className="lg:w-5 lg:h-5" color="#4CC722" />
                {t("business.features.all")}
              </li>
              <li className="flex gap-x-3">
                <CoinsIcon className="lg:w-5 lg:h-5" color="#4CC722" />
                {t("business.features.credits")}
              </li>
              <li className="flex gap-x-3">
                <GlobeIcon className="lg:w-5 lg:h-5" color="#4CC722" />
                {t("business.features.integrations")}
              </li>
              <li className="flex gap-x-3">
                <BrainIcon className="lg:w-5 lg:h-5 " color="#4CC722" />
                {t("business.features.session")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" color="#4CC722" />
                {t("business.features.placeholder1")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5 " color="#4CC722" />
                {t("business.features.placeholder2")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" color="#4CC722" />
                {t("business.features.placeholder3")}
              </li>
            </ul>
          </div>
          <button className="mt-8 block w-full rounded-2xl px-3 py-2 text-center text-sm font-medium text-white shadow-sm focus-visible:outline border-primary-500 bg-linear-to-b from-primary-500 to-[#006B3C] focus-visible:outline-offset-2 focus-visible:outline-black">
            {t("business.button")}
          </button>
        </div>
        {/* Growth Plan */}
        <div className="flex flex-col justify-between rounded-2xl w-full md:col-span-2 lg:col-span-1 min-h-[500px] p-8 shadow-lg border border-neutral-200">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-neutral-900">{t("growth.title")}</h3>
            </div>
            <p className="mt-6">
              <span className="text-4xl font-bold tracking-tight text-neutral-900">
                {t("growth.price")}
              </span>
              <span className="text-sm font-medium text-neutral-400">
                {" "}
                {t("growth.period")}
              </span>
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              {t("growth.description")}
            </p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-800">
              <li className="flex gap-x-3">
                <HandshakeIcon className="lg:w-5 lg:h-5" />
                {t("growth.features.implementation")}
              </li>
              <li className="flex gap-x-3">
                <MonitorIcon className="lg:w-5 lg:h-5" />
                {t("growth.features.manager")}
              </li>
              <li className="flex gap-x-3">
                <HeadsetIcon className="lg:w-5 lg:h-5" />
                {t("growth.features.support")}
              </li>
              <li className="flex gap-x-3">
                <DiamondIcon className="lg:w-5 lg:h-5 " />
                {t("growth.features.credits")}
              </li>
              <li className="flex gap-x-3">
                <RefreshIcon className="lg:w-5 lg:h-5 " />
                {t("growth.features.actions")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                {t("growth.features.placeholder1")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                {t("growth.features.placeholder2")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="lg:w-5 lg:h-5" />
                {t("growth.features.placeholder3")}
              </li>
            </ul>
          </div>
          <button className="mt-8 block w-full rounded-2xl bg-black px-3 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            {t("growth.button")}
          </button>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="mx-auto mt-8 max-w-[370px] md:max-w-[664px] lg:max-w-[1014px] relative min-h-[400px]">
        <div className="flex flex-col md:flex-row lg:flex-row rounded-2xl bg-linear-to-r p-4 md:p-6 border border-primary-500 relative overflow-hidden">
          {/* Contenido principal a la izquierda */}
          <div className="flex-1 pr-8 md:pr-0">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-xl lg:text-xl font-semibold text-neutral-900">
                {t("enterprise.title")}
              </h3>
            </div>
            <p className="mt-4 md:mt-4 text-xs md:text-sm lg:text-sm text-neutral-500">
              {t("enterprise.description")}
            </p>
            <ul className="mt-8 space-y-3 text-sm text-neutral-800">
              <li className="flex gap-x-3">
                <CheckIcon className="w-5 h-5" color="#4CC722" />
                {t("enterprise.features.credits")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="w-5 h-5" color="#4CC722" />
                {t("enterprise.features.support")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="w-5 h-5" color="#4CC722" />
                {t("enterprise.features.analysis")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="w-5 h-5" color="#4CC722" />
                {t("enterprise.features.manager")}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="w-5 h-5" color="#4CC722" />
                {t("enterprise.features.integrations")}
              </li>
            </ul>
            <button className="mt-8 md:mt-4 md:w-[294px] hidden md:visible lg:visible items-center rounded-2xl bg-primary-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600  focus-visible:outline-offset-2 focus-visible:outline-green-500">
              {t("enterprise.button")}
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
              {t("enterprise.button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
