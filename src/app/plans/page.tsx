"use client";

import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import { useTranslations } from "next-intl";

export default function PlansSection() {
  const t = useTranslations("plans");
  const faqs = t.raw("faq.questions");
  const title = t("faq.title");
  const subtitle = t("faq.subtitle");
  return (
    <div className="relative py-24 md:py-12 lg:py-24 sm:px-0">
      {/* Background decorative pattern */}
      <div className="relative isolate">
        <div className="mx-auto max-w-4xl mb-10 py-0 sm:py-16">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-transparent shadow-primary-600  p-2 text-sm font-medium text-neutral-700 shadow-sm whitespace-nowrap">
              {t("badge")}
              <span className="text-neutral-500 font-light">{t("moreInfo")}</span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-primary text-xl md:text-4xl lg:text-5xl italic tracking-tight text-neutral-600  dark:text-white font-extralight">
              {t("title")}
            </h1>
            <h1 className="text-primary-500 text-4xl md:text-6xl lg:text-7xl font-serif italic tracking-tight">
              {t("subtitle")}
            </h1>
            <p className="mt-8 text-pretty text-sm md:text-lg lg:text-lg text-neutral-800 sm:text-xl max-w-3xl mx-auto dark:text-gray-400">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <Pricing />
        <Faq faqs={faqs} title={title} subtitle={subtitle} />
      </div>
    </div>
  );
}
