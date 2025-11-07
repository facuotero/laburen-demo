"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

interface ImageItem {
  src: string;
  alt: string;
  className?: string;
}

interface CarouselSpacingProps {
  images: ImageItem[];
  className?: string;
}

export function CarouselSpacing({
  images,
  className = "w-full",
}: CarouselSpacingProps) {
  const trackItems = images.length ? [...images, ...images] : images;

  return (
    <Carousel
      className={className}
      opts={{
        align: "start",
        loop: true,
        dragFree: true, 
        duration: 25, 
      }}
      plugins={[
        AutoScroll({
          speed: 1.2,
          startDelay: 0,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {trackItems.map((image, index) => (
          <CarouselItem
            key={`${image.src}-${index}`}
            className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
          >
            <div className="p-1 flex justify-center items-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={108}
                height={68}
                className={`opacity-70 hover:opacity-100 transition-opacity ${
                  image.className || "h-17 w-108"
                }`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
