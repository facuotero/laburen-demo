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

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-50 pt-32 pb-10">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(76,199,34,0.15),transparent_70%)]" />

      {/* Content */}
      <div className="mx-auto max-w-4xl text-center px-6 lg:px-8 lg:mt-20">
        <div className="text-center space-y-4">
          {/* Badge con estrellas */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/60 px-4 py-1.5 text-sm text-gray-300">
            <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
            <span className="text-gray-400">per 1,000 customers</span>
          </div>

          {/* Título */}
          <h1 className="text-center leading-tight text-gray-100">
            <span className="block text-3xl sm:text-4xl italic font-light">
              Create your next
            </span>
            <span className="block text-5xl sm:text-6xl font-serif ">
              AI Agent
            </span>
          </h1>
        </div>

        <p className="mt-6 text-lg text-gray-400 mx-auto">
          Boost your business with Agents, virtual employees trained on your
          data — all powered by AI.
        </p>

        <div className="mt-10">
          <AgentInput />
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mt-4">
            <span className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <ClipboardAddIcon className="w-4 h-4" color="#00BC7D" />
              Analyze data & answer questions
            </span>
            <span className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" color="#FDC700" />
              Automate repetitive tasks
            </span>
            <span className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <QuestionCircleIcon color="#00BCFF" />
              Handle FAQs
            </span>
            <span className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <HeadsetIcon className="h-4 w-4" color="#FF8904" />
              Provide 24/7 support
            </span>
            <span className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <ProductsIcon color="#FF6467" />
              Product recommendations
            </span>
            <span className="px-4 py-2 rounded-full bg-neutral-800/40 border border-neutral-700/50 text-sm text-gray-300 flex items-center gap-2">
              <TextIcon color="#A684FF" />
              Custom responses
            </span>
          </div>
        </div>

        <p className="mt-16 text-2xl">
          {"Your next hire isn't human. These companies already know it..."}
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
