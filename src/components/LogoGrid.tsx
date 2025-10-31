import Image from "next/image";

type Logo = {
  alt: string;
  src: string;
};

export default function LogoGrid({ logos }: { logos: Logo[] }) {
  return (
    <div className="mx-auto w-full py-4 lg:py-12 px-6 lg:px-8">
      <div className="mx-auto w-[338px] h-[104px] sm:w-[600px] sm:h-[136px]">
        <div
          className="grid grid-cols-4 w-full h-full gap-x-[16px] gap-y-[16px]"
        >
          {logos.map((logo) => (
            <div key={logo.alt} className="relative w-[58px] h-[18px] md:w-[86px] md:h-[24px] lg:w-[86px] lg:h-[24px] p-4">
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
