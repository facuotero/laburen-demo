import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

interface ImageItem {
  src: string;
  alt: string;
  className?: string;
}

interface CarouselSpacingProps {
  images: ImageItem[];
  className?: string;
}

export function CarouselSpacing({ images, className = "w-full" }: CarouselSpacingProps) {
  return (
    <Carousel className={className}>
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/7">
            <div className="p-1 flex justify-center items-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={108}
                height={68}
                className={`opacity-70 hover:opacity-100 transition-opacity ${image.className || "h-17 w-108"}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
