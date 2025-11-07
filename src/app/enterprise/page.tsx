"use client";

import EnterpriseCtaSection from "@/components/sections/EnterpriseCtaSection";
import Faq from "@/components/sections/Faq";
import HeroEnterprise from "@/components/sections/HeroEnterpise";
import Stats from "@/components/sections/Stats";
import GlobalAlliancesSection from "@/components/sections/GlobalAlliancesSection";
import Usage from "@/components/sections/Usage";
import LogoGrid from "@/components/LogoGrid";
import { useTranslations } from "next-intl";

export default function EnterpriseSection() {
  const t = useTranslations("enterprise.faq");
  const faqs = t.raw("questions");
  const title = t("title");

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
    <GlobalAlliancesSection />
    <Faq faqs={faqs} title={title} subtitle="" />
    <Usage />
  </div>

  <EnterpriseCtaSection />
</div>
  );
}
