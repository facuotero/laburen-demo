"use client";

import Image from 'next/image'
import { useTranslations } from 'next-intl';

interface TestimonialType {
  body: string;
  author: {
    name: string;
    role: string;
  };
}

const avatars = [
  '/avatars/avatar_wt_maxi.svg',
  '/avatars/avatar_nora.svg',
  '/avatars/avatar_wt_consu.svg',
  '/avatars/avatar_wt_jorge.svg',
  '/avatars/avatar_wt_maxi.svg',
  '/avatars/avatar_nora.svg',
]

export default function Testimonials() {
  const t = useTranslations();
  const testimonialsData = t.raw('testimonials') as {
    badge: string;
    title: string;
    button: string;
    items: TestimonialType[];
  };
  const testimonials = testimonialsData.items;
  return (
    <div className="bg-white">
      <div className="bg-white w-11/12 mb-4 lg:max-w-7xl m-auto bg-[url('/testimonials-background.svg')] bg-no-repeat bg-position-[0_0] bg-size-[100%_100%] rounded-3xl border border-neutral-200 shadow-lg py-24 sm:py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <svg
            className="absolute left-0 top-0 h-full w-full opacity-20"
            fill="none"
            viewBox="0 0 1440 800"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="testimonials-pattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 40L40 0H20L0 20Z"
                  stroke="rgb(34 197 94)"
                  strokeWidth="0.5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonials-pattern)" />
          </svg>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-primary-700 px-4 py-2 text-sm font-medium mb-6">
              {testimonialsData.badge}
            </div>
            <h2 className="text-balance text-4xl font-regular tracking-tight text-neutral-600 sm:text-5xl">
              {testimonialsData.title}
            </h2>
          </div>  
                  <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial: TestimonialType, i: number) => (
                <div key={i} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-white p-8 text-sm/6 shadow-sm border border-gray-100">
                    <blockquote className="text-gray-900">
                      <p>{`"${testimonial.body}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <Image
                        alt={testimonial.author.name}
                        src={avatars[i]}
                        width={40}
                        height={40}
                        className="rounded-full bg-gray-50"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div className="text-gray-600">{testimonial.author.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          
          {/* See more button */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              {testimonialsData.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
