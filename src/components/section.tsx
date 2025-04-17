import Image from "next/image";

export function Section() {
  return (
    <div className="hidden lg:block">
      <div className="w-full py-12 bg-background mt-32 mb-32">
        <div className="container px-4 md:px-6 flex">
          <h2 className="font-bold tracking-tight text-center font-heading mb-8 sm:text-6xl">
            Brands we work with
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center py-10 px-5">
            Our Featured Partners
          </p>
          <div className="w-full overflow-hidden">
            <div className="flex animate-scroll-left">
              <div className="flex items-center gap-12 px-4 min-w-full">
                <div className="flex-shrink-0">
                  <Image
                    alt="Brand Logo 1"
                    src="/images/logo-3.png"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    alt="Brand Logo 2"
                    src="/images/logo-4.png"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    alt="Brand Logo 3"
                    src="/images/logo-3.png"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex-shrink-0">
                  <Image
                    alt="Brand Logo 4"
                    src="/images/logo-4.png"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
