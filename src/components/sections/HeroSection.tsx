// import { Button } from "@/components/ui/button"
import { AgentInput } from "@/components/AgentInput";
import {
  HeadsetIcon,
  ClipboardAddIcon,
  CalendarIcon,
  ProductsIcon,
  TextIcon,
  QuestionCircleIcon,
} from "../../../public/icons";
import { CarouselSpacing } from "../Carousel";
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-50 pt-32 pb-10">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[url('/hero-bg.svg')] bg-center bg-no-repeat bg-cover xl:bg-cover" />

      {/* Content */}
      <div className="mx-auto max-w-4xl text-center px-6 lg:px-8 lg:mt-20">
        <div className="text-center space-y-4">
          {/* Badge con estrellas */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/60 px-4 py-1.5 text-sm text-gray-300">
            <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
            <span className="text-gray-400">{t('hero.badge')}</span>
          </div>

          {/* Título */}
          <h1 className="text-center leading-tight text-gray-100">
            <span className="block text-3xl sm:text-4xl italic font-light">
              {t('hero.title.line1')}
            </span>
            <span className="block text-5xl sm:text-6xl font-serif ">
              {t('hero.title.line2')}
            </span>
          </h1>
        </div>

        <p className="mt-6 text-lg text-gray-400 mx-auto">
          {t('hero.subtitle')}
        </p>

        <div className="mt-10">
          <AgentInput />
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mt-4">
            <button className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 hover:bg-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <ClipboardAddIcon className="w-4 h-4" color="#00BC7D" />
              {t('hero.features.analyzeData')}
            </button>
            <button className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 hover:bg-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" color="#FDC700" />
              {t('hero.features.automateTasks')}
            </button>
            <button className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 hover:bg-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <QuestionCircleIcon color="#00BCFF" />
              {t('hero.features.handleFaqs')}
            </button>
            <button className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 hover:bg-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <HeadsetIcon className="h-4 w-4" color="#FF8904" />
              {t('hero.features.provideSupport')}
            </button>
            <button className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 hover:bg-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <ProductsIcon color="#FF6467" />
              {t('hero.features.productRecommendations')}
            </button>
            <button className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 hover:bg-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <TextIcon color="#A684FF" />
              {t('hero.features.customResponses')}
            </button>
          </div>
        </div>

        <p className="mt-16 text-2xl">
          {t("hero.companiesText")}
        </p>
      </div>

      {/* Logos carousel - Full width */}
      <div className="mt-8 w-full px-6 lg:px-8">
        <CarouselSpacing
          images={[
            {
              src: "logo_gfitness.svg",
              alt: "Gfitness",
              className: "h-17 w-108",
            },
            {
              src: "logo_granger.svg",
              alt: "Granger",
              className: "h-17 w-108",
            },
            {
              src: "logo_nvidia.svg",
              alt: "NVIDIA",
              className: "h-17 w-108",
            },
            {
              src: "logo_microsoft.svg",
              alt: "Microsoft",
              className: "h-17 w-108",
            },
            {
              src: "logo_vias3d.svg",
              alt: "VIAS3D",
              className: "h-17 w-108",
            },
            {
              src: "logo_taraborelli.svg",
              alt: "Taraborelli",
              className: "h-17 w-108",
            },
            {
              src: "logo_portsaid.svg",
              alt: "Portsaid",
              className: "h-17 w-108",
            },
          ]}
        />
      </div>
    </section>
  );
}
