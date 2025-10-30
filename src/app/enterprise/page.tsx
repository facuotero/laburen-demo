"use client";

import EnterpriseCtaSection from "@/components/sections/EnterpriseCtaSection";
import Faq from "@/components/sections/Faq";
import HeroEnterprise from "@/components/sections/HeroEnterpise";
import Stats from "@/components/sections/Stats";
import Usage from "@/components/sections/Usage";

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

  return (
    <div className="relative overflow-hidden bg-[url('/enterprise_background.png')] bg-cover bg-no-repeat">
      <HeroEnterprise />
      <div className="bg-white py-10 lg:py-20 rounded-2xl shadow-xl mx-4 md:mx-8 -mb-16 relative z-10">
        <Stats />
        <Faq faqs={faqs} title={title} subtitle="" />
        <Usage />
      </div>
      <EnterpriseCtaSection />
    </div>
  );
}
