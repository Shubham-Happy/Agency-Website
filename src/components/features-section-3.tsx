import { MessageSquareHeart, Gauge, Hash, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { FeatureHoverCard } from "@/components/feature-hover-card";
import { Button } from "@/components/ui/button";

export function Features2() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-center shadow-inner shadow-xl rounded-3xl text-yellow-400">
          get your brand known
        </span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          WITH CREATORS
        </h2>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        <FeatureHoverCard
          icon={MessageSquareHeart}
          title="Collab with 100+ Creators"
          description=""
          className="lg:border-l"
        />
        <FeatureHoverCard icon={Gauge} title="Increase ROI" description="" />
        <FeatureHoverCard
          icon={Hash}
          title='Build Upon "Trends"'
          description="Export your website to a Next.js & Tailwind app."
        />
        <FeatureHoverCard
          icon={ArrowUpRight}
          title="Unlock Unlimited Potential"
          description="Customize without limitations and host anywhere."
        />
      </div>
      <div>
        <Button size="lg" asChild>
          <Link href="/login" className="h-12 cursor-pointer text-base md:px-9">
            Unlock The Creator Economy
          </Link>
        </Button>
      </div>
    </section>
  );
}
