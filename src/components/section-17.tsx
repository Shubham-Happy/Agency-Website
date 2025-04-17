import { ArrowDown } from "lucide-react";

export function Section17() {
  return (
    <div className="from-transparent flex p-0">
      <div className="aspect-auto hidden md:block rounded-lg px-16">
        <div className="mt-10 grid lg:columns-2 columns-2 flex">
          <div className="flex justify-between p-6 rounded-xl border-border">
            <div className="text-center container rounded-3xl">
              <h3 className="font-heading font-bold text-2xl lg:text-3xl hover:text-4xl">
                Empowering Brands
              </h3>
              <p className="text-wrap lg:text-xl text-sm my-5">
                By Offering cost-effective marketing solutions with High ROAS
              </p>
            </div>
          </div>
          <div className="flex justify-between rounded-lg mt-6">
            <div className="text-center container">
              <h3 className="font-heading font-bold lg:text-3xl hover:text-4xl">
                Enable Small Influencers
              </h3>
              <p className="my-5 text-wrap lg:text-xl text-sm">
                By Offering secure paid collaboration with brands they love.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-32 grid gap-8">
          <div className="flex items-center justify-between rounded-lg p-6 px-60">
            <div className="text-center container">
              <h3 className="font-heading font-bold lg:text-3xl hover:text-4xl">
                Discounts For Customers
              </h3>
              <p className="my-5 text-wrap lg:text-xl text-sm">
                Provide Customers with exclusive additional discounts.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <ArrowDown size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
