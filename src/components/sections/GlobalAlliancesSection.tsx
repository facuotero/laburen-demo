"use client";

import { ArrowUpRight } from "lucide-react";

export default function GlobalAlliancesSection() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 md:space-y-24">

        {/* NVIDIA Block */}
        <div className="text-left mb-12">
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="text-neutral-900 font-normal">Powering </span>
            <span className="text-neutral-400 font-normal">businesses </span><br />
            <span className="text-neutral-400 font-normal">through </span>
            <span className="text-neutral-900 font-normal">Global Alliances</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Text */}
          <div className="order-1 lg:order-1 pr-12">

            <div className="flex items-center space-x-6 mb-8">
              <img
                src="../../../enterprise.png"
                alt="Laburen.com Enterprise"
                className="h-10 w-auto"
              />
              <div className="border-l border-gray-300 h-10 md:h-12" />
              <img
                src="../../../nvidia.png"
                alt="NVIDIA Inception Program"
                className="h-10 w-auto"
              />
            </div>

            <h3 className="text-2xl lg:text-3xl font-normal text-neutral-700 mb-6">
              Innovation validated by NVIDIA: <span className="font-semibold text-neutral-900">a global mark of trust.</span>
            </h3>

            <p className="text-neutral-700 mb-4 text-lg leading-snug">
              Being part of NVIDIA Inception is a global recognition that validates Laburen.com as one of the startups with the greatest projection in Artificial Intelligence.
            </p>

            <p className="text-neutral-700 mb-4 text-lg leading-snug">
              It’s not just about belonging to a program: it means being evaluated and backed by NVIDIA’s technical team, who identified in us real innovation, scalability, and a practical approach to solving business challenges. What sets us apart — and caught NVIDIA’s attention — is our ability to retrain Large Language Models (LLMs) for specific industries.
            </p>

            <p className="text-neutral-700 mb-4 text-lg leading-snug">
              We don’t work with generic AI: we adapt it to the language of each business, with the technological power driving today’s global leaders. With NVIDIA as our ally, our AI agents don’t just scale — they become engines of transformation for companies worldwide.
            </p>

            <div>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-800 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-[#1f1f1f] transition-colors">
                Discover more
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2 relative h-full flex items-stretch">
            <img
              src="../../../powering_businesses.png"
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
                src="../../../enterprise.png"
                alt="Laburen.com Enterprise"
                className="h-10 w-auto"
              />
              <div className="border-l border-gray-300 h-10 md:h-12" />
              <img
                src="../../../microsoft_for_startups.png"
                alt="Microsoft for Startups"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-neutral-700 text-base lg:text-lg leading-relaxed">
              <span className="font-semibold">Laburen Enterprise:</span> scaling AI into new markets.
            </p>

            <p className="text-neutral-700 mt-4 text-base lg:text-lg leading-relaxed">
              Joining the Microsoft for Startups network opened the door to a global ecosystem of innovation.
              This isn’t just a partnership; it’s the opportunity to build with greater reach, speed, and
              security — backed by the infrastructure and tools of one of the world’s most influential tech
              companies.
            </p>

            <p className="text-neutral-700 mt-4 text-base lg:text-lg leading-relaxed">
              With Laburen Enterprise as a key partner, we deliver scalable AI solutions that drive transformation across
              industries and regions, turning promise into competitive advantage.
            </p>

            <div className="mt-8">
                <button className="inline-flex items-center gap-1.5 rounded-full bg-[#262626] px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-[#1f1f1f] transition-colors">
                Discover more
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-1 lg:col-start-1 flex items-stretch">
            <div className="relative h-full w-full">
              <img
                src="../../../powering_businesses.png"
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