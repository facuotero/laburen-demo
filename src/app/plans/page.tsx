"use client";

import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";

export default function PlansSection() {
  return (
    <div className="bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="relative isolate">
        <div className="mx-auto max-w-4xl sm:py-16 lg:mt-16">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm border border-primary-500">
              Precios basados en créditos. Más información
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-primary text-5xl italic tracking-tight text-neutral-600 sm:text-6xl dark:text-white mb-2 font-extralight">
              Plans and Pricing
            </h1>
            <h1 className="text-primary-500 italic text-7xl tracking-tight sm:text-6xl dark:text-white">
              Growth with AI
            </h1>
            <p className="mt-8 text-pretty text-4xl text-neutral-800 sm:text-xl max-w-3xl mx-auto dark:text-gray-400">
              Get started immediately for free. Upgrade for more credits, usage
              <br />
              and collaboration.
            </p>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <Pricing />
        <Faq />
      </div>
    </div>
  );
}
