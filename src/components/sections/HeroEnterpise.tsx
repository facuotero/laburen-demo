import { useTranslations } from "use-intl";

export default function HeroEnterprise() {
  const t = useTranslations("enterprise.hero");
  return (
    <div className="mb-8 md:mb-0 lg:mb-0">
      <div className="relative isolate">
        <div className="mx-auto max-h-[368px] lg:max-h-[372px] py-24 lg:mt-16">
          <div className="text-center">
            <h1 className="text-primary text-2xl lg:text-4xl italic tracking-tight text-neutral-600 mb-2 font-extralight">
              {t("title.line1")}
            </h1>
            <h1 className="text-neutral-900 italic text-4xl lg:text-7xl tracking-tight font-serif">
              {t("title.line2")}
            </h1>
            <p className="max-w mx-auto mt-8 text-base md:text- lg:text-lg text-neutral-800">
              {t("description")}
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <button className="rounded-full bg-white border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
              {t("buttons.viewPlans")}
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-green-600 transition-colors">
              {t("buttons.getInTouch")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
