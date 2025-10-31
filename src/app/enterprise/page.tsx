"use client";

import EnterpriseCtaSection from "@/components/sections/EnterpriseCtaSection";
import Faq from "@/components/sections/Faq";
import HeroEnterprise from "@/components/sections/HeroEnterpise";
import Stats from "@/components/sections/Stats";
import Usage from "@/components/sections/Usage";
import LogoGrid from "@/components/LogoGrid";

export default function EnterpriseSection() {
  const faqs = [
    {
      question: "Together we grow, and here are some key results:",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Can AI Employees access my company's data?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Can my non-technical team use the platform?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Can I define their behavior?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Can AI Employees take action?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Can I get statistics and analytics?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Where do AI Employees actually work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  const title = "Boost your business with Laburen Enterprise";

  const LOGOS = [
    { alt: "AWS", src: "/aws.svg" },
    { alt: "OpenAI", src: "/openAI.svg" },
    { alt: "Microsoft", src: "/office.svg" },
    { alt: "Hubspot", src: "/hubspot.svg" },
    { alt: "Salesforce", src: "/salesforce.svg" },
    { alt: "Google Suite", src: "/gSuite.svg" },
    { alt: "Odoo", src: "/odoo2.svg" },
    { alt: "Anthropic", src: "/anthropic.svg" },
  ];

  return (
<div className="relative overflow-hidden bg-[url('/enterprise_background.png')] bg-cover bg-no-repeat">
  <HeroEnterprise />

  {/* Desktop: LogoGrid fuera de la tarjeta */}
  <div className="hidden lg:block">
    <LogoGrid logos={LOGOS} />
  </div>

  <div className="py-8 lg:py-20 rounded-2xl shadow-xl -mb-16 z-10 relative bg-neutral-50 md:mx-8 lg:mx-8">
    {/* Mobile/Tablet: LogoGrid comparte el div con Stats */}
    <div className="lg:hidden">
      <LogoGrid logos={LOGOS} />
    </div>

    <Stats />
    <Faq faqs={faqs} title={title} subtitle="" />
    <Usage />
  </div>

  <EnterpriseCtaSection />
</div>
  );
}
