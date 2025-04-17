import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/mergedart.png"
          width={713}
          height={497.7}
          className="rounded-xl border-border shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-primary text-left">Elevate Your Sales </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left">
            Grow with Creators
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
          Creators create brand content for you and with their reach you can advertise.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Easy Onboarding</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Creators that love your brand</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Quality Checked on 10+ parameters.</span>
          </li>
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button size="lg" asChild>
            <Link href="/login" className="h-12 cursor-pointer text-base md:px-9">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
