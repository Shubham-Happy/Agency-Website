import Image from "next/image";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row bg-gradient-to-br">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="items-center flex gap-3">
          <div className="flex">
            <Avatar className="border-2 border-white">
              <AvatarImage alt="@john" src="/images/testimonial-1.avif" />
            </Avatar>
            <Avatar className="border-2 border-white -ml-4">
              <AvatarImage alt="@max" src="/images/testimonial-2.avif" />
            </Avatar>
            <Avatar className="border-2 border-white -ml-4">
              <AvatarImage alt="@bob" src="/images/testimonial-3.avif" />
            </Avatar>
            <Avatar className="border-2 border-white -ml-4">
              <AvatarImage alt="@emily" src="/images/testimonial-4.avif" />
            </Avatar>
            <Avatar className="border-2 border-white -ml-4">
              <AvatarImage alt="@michael" src="/images/testimonial-5.avif" />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center">
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
            </div>
            <span className="mt-1 text-sm font-semibold text-muted-foreground">
              Join
              <span className="text-foreground"> 1000+ </span>
              creators
            </span>
          </div>
        </div>
        <h1 className="max-w-2xl text-center font-heading text-4xl lg:text-left tracking-tight font-bold sm:text-6xl">
          Start Earning as a Influencer
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left sm:text-xl">
          Create Social Media Post for Brands and earn money as a creator.
        </p>
        <div className="grid grid-cols-2 gap-3 flex text-center">
          <button class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-500 rounded-md group">
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
            </span>
            <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-yellow-400 rounded-md group-hover:translate-x-0" />
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Get Started
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/gallery9.png"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
