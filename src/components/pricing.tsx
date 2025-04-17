import Image from "next/image";

import { PricingCard } from "@/components/pricing-card";

export function Pricing() {
  return (
    <section className="flex flex-col items-center sm:gap-7 gap-10">
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          alt="Background image"
          src="/images/bg-about-us.png"
          width={1920}
          height={1080}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="flex flex-col gap-3">
            <div className="pt-20" />
            <div className="text-center rounded-3xl shadow-xl bg-white">
              <span className="uppercase text-center text-black">Pricing</span>
              <h2 className="font-heading font-bold tracking-tighter sm:text-5xl text-4xl">
                Creators
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
                Choose a tier that suits your Experience.
              </p>
            </div>
          </div>
          <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-2 md:px-32">
            <PricingCard
              cTA="Sign Up"
              name="Free Tier"
              price={0}
              feature1="You choose the product"
              feature2="Create content "
              feature3="Earn on every sales"
              feature4="Personalized Links"
              feature5="Creative freedom to you"
              description="No Follower Restriction"
              isMostPopular
            />
            <PricingCard
              cTA="Fill in Your Details Now!!"
              name="Premium"
              price={99}
              feature1="Everything in Basic"
              feature2="Early access to Promotional Content"
              feature3="More earning per referral"
              feature4="Exclusive Brand Deals"
              feature5="Flexible Payouts"
              description="Minimum 10K+ Followers"
              isMostPopular={false}
              className="border-2 border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
