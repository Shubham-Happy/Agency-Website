import Image from "next/image";

export function Section2() {
  return (
    <section className="sm:block lg:hidden">
      <div className="w-full bg-background mt-32 pt-12">
        <h2 className="font-bold tracking-tight text-center font-heading mb-8 sm:text-6xl text-5xl">
          Brands we work with
        </h2>
        <p className="text-muted-foreground max-w-2xl text-center px-5 text-center container pb-5 text-xl">
          Our Featured Partners
        </p>
      </div>
      <div className="grid grid-cols-4">
        <Image
          alt="Image"
          src="/images/logo-3.png"
          width={400}
          height={400}
          className="px-6 py-6"
        />
        <Image
          alt="Image"
          src="/images/logo-3.png"
          width={400}
          height={400}
          className="px-6 py-6"
        />
        <Image
          alt="Image"
          src="/images/logo-4.png"
          width={400}
          height={400}
          className="px-6 py-6"
        />
        <Image
          alt="Image"
          src="/images/logo-4.png"
          width={400}
          height={400}
          className="px-6 py-6"
        />
      </div>
    </section>
  );
}
