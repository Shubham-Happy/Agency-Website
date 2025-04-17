import Link from "next/link";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselTestimonialCard } from "@/components/carousel-testimonial-card";
import { Button } from "@/components/ui/button";

export function Testimonials2() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center text-5xl">
          What OUR CREATORS SAY
        </span>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        What the most earning creators say about our platform. We provide the best environment to
        make crea
      </p>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselTestimonialCard
            name="John"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit bibendum felis a, volutpat feugiat tellus. Aliquam erat volutpat."
            image="/images/testimonial-1.avif"
            username="johndoe"
          />
          <CarouselTestimonialCard
            name="Max"
            text="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue. Vestibulum nec orci ornare, imperdiet metus vel."
            image="/images/testimonial-2.avif"
            username="maxcook"
          />
          <CarouselTestimonialCard
            name="Bob"
            text="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut tortor et feugiat. Etiam vitae nisi eleifend, blandit ligula quis, sodales neque."
            image="/images/testimonial-3.avif"
            username="thisisbob"
          />
          <CarouselTestimonialCard
            name="Emily"
            text="Suspendisse a velit elit. Curabitur augue libero, vulputate sed dui id, sodales venenatis sem. Suspendisse dapibus neque eu justo volutpat gravida."
            image="/images/testimonial-4.avif"
            username="emilysmith"
          />
          <CarouselTestimonialCard
            name="Micheal"
            text="Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit. Curabitur tempor eget urna eget lobortis dolor varius."
            image="/images/testimonial-5.avif"
            username="michael"
          />
          <CarouselTestimonialCard
            name="Linda"
            text="Nullam non lorem vitae risus volutpat dictum non sed magna. Aliquam in venenatis quam. Morbi feugiat tristique leo, vel ultrices dolor varius non. Quisque dictum tortor eu nunc."
            image="/images/testimonial-6.avif"
            username="thisislinda"
          />
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
      <div>
        <Button size="lg" asChild>
          <Link href="/login" className="h-12 cursor-pointer text-base md:px-9">
            Let&apos;s Start
          </Link>
        </Button>
      </div>
    </section>
  );
}
