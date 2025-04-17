import { ArrowDown } from "lucide-react";

export function Section16() {
  return (
    <div className="text-center py-10 px-10 lg:px-32 container">
      <div className="grid lg:mt-12 text-center">
        <text x={0} className="font-extrabold lg:text-7xl text-6xl">
          VISION
        </text>
      </div>
      <div className="aspect-auto lg:hidden">
        <div className="mt-10 gap-8">
          <div className="flex justify-between rounded-xl border-border">
            <div className="text-center container rounded-3xl pt-5">
              <h3 className="font-heading font-bold text-2xl hover:text-3xl">Empowering Brands</h3>
              <p className="my-5 text-lg">
                By Offering cost-effective marketing solutions with High ROAS
              </p>
            </div>
          </div>
          <div className="flex justify-between rounded-lg mt-6">
            <div className="text-center container">
              <h3 className="font-heading font-bold text-2xl hover:text-3xl">
                Enable Small Influencers
              </h3>
              <p className="my-5 text-wrap text-lg">
                By Offering secure paid collaboration with brands they love.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-32 grid gap-8">
          <div className="flex rounded-lg">
            <div className="text-center container">
              <h3 className="font-heading font-bold text-2xl hover:text-3xl">
                Discounts For Customers
              </h3>
              <p className="my-5 text-wrap text-lg">
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
