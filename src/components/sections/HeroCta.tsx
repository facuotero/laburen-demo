"use client";

import { ArrowRightIcon } from "../../../public/icons";

export default function HeroCta() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-neutral-50">
        <div className="mx-auto max-w-4xl py-24 md:py-32 lg:py-32">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-transparent shadow-primary-600 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              🚀 Limitless growth
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance font-light text-3xl md:text-6xl lg:text-7xl italic tracking-tight text-neutral-900">
              Is your business ready
              <br />
              for the{" "}
              <span className="font-medium text-primary-500">next level</span>
            </h1>
            <p className="mt-8 text-pretty text-base md:text-xl lg:text-xl text-gray-600">
              AI can be the competitive edge your organization needs. With
              Laburen Enterprise, we design AI Agents tailored to your goals,
              teams, and processes — bringing more efficiency, more impact, and
              more time for what really matters.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <button className="rounded-full bg-white border border-gray-300 px-4 py-3 text-sm md:text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                Talk to an Expert
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-primary-500 bg-linear-to-b from-primary-500 to-[#006B3C] px-4 py-3 text-sm md:text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                Explore Enterprise
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
