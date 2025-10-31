import Image from "next/image";

export default function LogoGridResources() {
    const logos = [
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
    <div className="mx-auto w-full mt-16 lg:py-12 lg:px-8">
      <div className="mx-auto w-[370px] h-[104px] md:w-[648px] md:h-[136px] lg:w-[600px] lg:h-[136px]">
        <div
          className="grid grid-cols-4 w-full h-full gap-x-[16px] gap-y-[16px]"
        >
          {logos.map((logo) => (
            <div key={logo.alt} className="relative w-[58px] h-[16px] md:w-[86px] md:h-[24px] lg:w-[86px] lg:h-[24px] p-4">
              <Image
                alt={logo.alt}
                src={logo.src}
                fill
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
