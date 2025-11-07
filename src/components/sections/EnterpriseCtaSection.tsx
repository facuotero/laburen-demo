"use client";

import { useTranslations } from "next-intl";

export default function EnterpriseCtaSection() {
  const t = useTranslations("enterprise");
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-neutral-50">
        <div className="mx-auto max-w-4xl py-24 md:py-32 lg:py-32">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-transparent shadow-primary-600 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              {t("cta.badge")}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance font-light text-3xl md:text-6xl lg:text-7xl italic tracking-tight text-neutral-900">
              {t("cta.title.line1")}
            </h1>
            <h1 className="text-balance font-medium italic text-3xl md:text-6xl lg:text-7xl tracking-tight text-primary-500">
              {t("cta.title.line2")}
            </h1>
            <p className="mt-8 text-pretty text-base md:text-xl lg:text-xl text-gray-600">
              {t("cta.description")}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <button className="rounded-full bg-white border border-gray-300 px-4 py-3 text-sm md:text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                {t("cta.buttons.talkToExpert")}
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-primary-800 bg-primary-500 px-4 py-3 text-sm md:text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                {t("cta.buttons.startForFree")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
