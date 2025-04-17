import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselTestimonialCard } from "@/components/carousel-testimonial-card";

export function Testimonials() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Testimonials</span>
        <h2 className="font-heading text-3xl tracking-tight sm:text-4xl text-balance text-center font-bold md:text-5xl">
          Explore How Creators are Earning
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        What the most earning creators say about our platform. We provide the best environment to
        make crea
      </p>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselTestimonialCard
            name="Riya Sharma"
            text="As a micro-influencer, getting brand deals was tough. But with Promortit, I can choose the products I love, create content, and earn commissions without the stress of negotiating with brands. Super smooth experience!"
            image="/images/undrawinfluencerre1fkb.svg"
            username="riya_trendyfinds"
          />
          <CarouselTestimonialCard
            name="Dev Rajput"
            text="Many brands hesitate to work with new influencers, but this platform bridges the gap. I get access to products I want to feature, and I only earn when my content converts. Fair and simple!"
            image="/images/gallery8.png"
            username="dev_biker_vlogs"
          />
          <CarouselTestimonialCard
            name="Pooja Iyer"
            text="I’ve worked with many affiliate programs before, but this one is different. The team ensures brand quality, and I don’t have to negotiate separately. I just focus on creating content and driving sales!"
            image="/images/gallery7.png"
            username="poojas_fit_journey"
          />
          <CarouselTestimonialCard
            name="Karan Bhatt"
            text="Most influencer deals are one-off collaborations. But with this platform, my content keeps earning long after I post. It’s like passive income—just by sharing my favorite food products!"
            image="/images/gallery6.png"
            username="karansfoodtales"
          />
          <CarouselTestimonialCard
            name="Aaravi Mehta"
            text="I used to struggle with getting brands to notice my content. Now, I pick products, make honest review videos, and earn based on actual sales. No more waiting for random PR packages—finally making real money from my content!"
            image="/images/gallery3.png"
            username="aaravi.tech.reviews"
          />
          <CarouselTestimonialCard
            name="Sana Khan"
            text="I love that I can promote products I genuinely believe in, without chasing brands for payments. The tracking system is clear, and payouts are on time. It’s influencer marketing done right!"
            image="/images/gallery5.png"
            username="sana_skin_care"
          />
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
