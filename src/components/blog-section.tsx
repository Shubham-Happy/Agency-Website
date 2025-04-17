import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselArticleCard } from "@/components/carousel-article-card";

export function BlogSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Articles</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Our Blog
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center">
        Learn how to build beautiful landing pages fast.
      </p>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselArticleCard
            date="Jul 16, 2024"
            image="/images/article-1.avif"
            title="How to build a beautiful landing page in minutes"
            category="Coding"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit."
          />
          <CarouselArticleCard
            date="May 10, 2024"
            image="/images/article-2.avif"
            title="How to generate the perfect theme for your website with AI"
            category="Design"
            description="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue."
          />
          <CarouselArticleCard
            date="Apr 27, 2024"
            image="/images/article-3.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
          <CarouselArticleCard
            date="Apr 9, 2024"
            image="/images/article-4.avif"
            title="How to edit React components and Tailwind visually"
            category="Design"
            description="Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit."
          />
          <CarouselArticleCard
            date="Mar 11, 2024"
            image="/images/article-5.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselArticleCard
            date="Jul 16, 2024"
            image="/images/article-1.avif"
            title="How to build a beautiful landing page in minutes"
            category="Coding"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit."
          />
          <CarouselArticleCard
            date="May 10, 2024"
            image="/images/article-2.avif"
            title="How to generate the perfect theme for your website with AI"
            category="Design"
            description="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue."
          />
          <CarouselArticleCard
            date="Apr 27, 2024"
            image="/images/article-3.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
          <CarouselArticleCard
            date="Apr 9, 2024"
            image="/images/article-4.avif"
            title="How to edit React components and Tailwind visually"
            category="Design"
            description="Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit."
          />
          <CarouselArticleCard
            date="Mar 11, 2024"
            image="/images/article-5.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselArticleCard
            date="Jul 16, 2024"
            image="/images/article-1.avif"
            title="How to build a beautiful landing page in minutes"
            category="Coding"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit."
          />
          <CarouselArticleCard
            date="May 10, 2024"
            image="/images/article-2.avif"
            title="How to generate the perfect theme for your website with AI"
            category="Design"
            description="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue."
          />
          <CarouselArticleCard
            date="Apr 27, 2024"
            image="/images/article-3.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
          <CarouselArticleCard
            date="Apr 9, 2024"
            image="/images/article-4.avif"
            title="How to edit React components and Tailwind visually"
            category="Design"
            description="Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit."
          />
          <CarouselArticleCard
            date="Mar 11, 2024"
            image="/images/article-5.avif"
            title="How to build at the speed of no-code without customization limits"
            category="Coding"
            description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
          />
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
