"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function GlobalAlliancesSection() {
  const t = useTranslations("enterprise.globalAlliances");
  return (
    <section className="bg-neutral-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 md:space-y-24">

        {/* NVIDIA Block */}
        <div className="text-left mb-12">
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="text-neutral-900 font-normal">{t("title.line1").split(" ")[0]} </span>
            <span className="text-neutral-400 font-normal">{t("title.line1").split(" ")[1]} </span><br />
            <span className="text-neutral-400 font-normal">{t("title.line2").split(" ")[0]} </span>
            <span className="text-neutral-900 font-normal">{t("title.line2").split(" ").slice(1).join(" ")}</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Text */}
          <div className="order-1 lg:order-1 pr-12">

            <div className="flex items-center space-x-6 mb-8">
              <img
                src="enterprise.png"
                alt="Laburen.com Enterprise"
                className="h-10 w-auto"
              />
              <div className="border-l border-gray-300 h-10 md:h-12" />
              <img
                src="nvidia.png"
                alt="NVIDIA Inception Program"
                className="h-10 w-auto"
              />
            </div>

                        <h3 className="text-2xl lg:text-3xl font-normal text-neutral-700 mb-6">
              {t("nvidia.title")} <span className="font-semibold text-neutral-900">{t("nvidia.highlight")}</span>
            </h3>

            {t.raw("nvidia.paragraphs").map((paragraph: string, index: number) => (
              <p key={index} className="text-neutral-700 mb-4 text-lg leading-snug">
                {paragraph}
              </p>
            ))}

            <div>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-800 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-[#1f1f1f] transition-colors">
                {t("nvidia.button")}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2 relative h-full flex items-stretch">
            <img
              src="powering_businesses.png"
              alt="NVIDIA Partnership"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Enterprise Block (reverse layout) */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="order-1 lg:order-2 pt-6">
            <div className="flex items-center space-x-6 mb-8">
              <img
                src="enterprise.png"
                alt="Laburen.com Enterprise"
                className="h-10 w-auto"
              />
              <div className="border-l border-gray-300 h-10 md:h-12" />
              <img
                src="microsoft_for_startups.png"
                alt="Microsoft for Startups"
                className="h-10 w-auto"
              />
            </div>
                        <p className="text-neutral-700 text-base lg:text-lg leading-relaxed">
              <span className="font-semibold">{t("microsoft.intro").split(":")[0]}:</span> {t("microsoft.intro").split(":")[1]}
            </p>

            {t.raw("microsoft.paragraphs").map((paragraph: string, index: number) => (
              <p key={index} className="text-neutral-700 mt-4 text-base lg:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="mt-8">
                <button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-800 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-[#1f1f1f] transition-colors">
                {t("microsoft.button")}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-1 lg:col-start-1 flex items-stretch">
            <div className="relative h-full w-full">
              <img
                src="powering_businesses.png"
                alt="Enterprise Partnership"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}