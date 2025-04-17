import { SocialProofLogo } from "@/components/social-proof-logo";

export function SocialProof() {
  return (
    <section className="container flex flex-col items-center gap-10 py-24">
      <h2 className="text-center text-lg font-semibold leading-8">
        Trusted by the world&apos;s best companies
      </h2>
      <div className="grid w-full grid-cols-4 gap-10 sm:grid-cols-6 sm:gap-12 lg:grid-cols-5">
        <SocialProofLogo image="/images/microsoft.webp" />
        <SocialProofLogo image="/images/google.png" />
        <SocialProofLogo image="/images/amazon.png" />
        <SocialProofLogo image="/images/netflix.png" className="sm:col-start-2" />
        <SocialProofLogo image="/images/facebook.png" className="col-start-2 sm:col-start-auto" />
      </div>
    </section>
  );
}
