import Image from "next/image";

export function Section9() {
  return (
    <div className="py-10 lg:px-32 px-10 bg-primary bg-blue-300">
      <div className="grid lg:grid-cols-2 lg:mt-12">
        <text x={0} className="font-extrabold text-7xl text-white text-left">
          VISION
        </text>
      </div>
      <div className="mt-10 mb-32 grid gap-8 lg:grid-cols-2">
        <div className="flex justify-between bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-6">
          <div className="items-center">
            <Image
              alt="Placeholder"
              src="/images/savingaccountpage.png"
              width={200}
              height={200}
              className="rounded-full mr-4 pt-10"
            />
          </div>
          <div className="text-center container">
            <h3 className="font-heading font-bold text-white text-2xl">Empower Emerging Brands</h3>
            <p className="text-white my-5 text-wrap text-xl">
              By Offering cost-effective marketing solutions with High ROAS
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-gradient-to-r rounded-lg p-6 from-purple-400 to-blue-800">
          <div className="items-center">
            <Image
              alt="Placeholder"
              src="/images/secureaboutpage.png"
              width={200}
              height={200}
              className="rounded-full mr-4 pt-10"
            />
          </div>
          <div className="text-center container">
            <h3 className="font-heading font-bold text-white text-2xl">Enable Small Influencers</h3>
            <p className="text-white my-5 text-wrap text-xl">
              By Offering secure paid collaboration with brands they love.
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-gradient-to-r rounded-lg p-6 from-purple-400 to-blue-800">
          <div className="items-center">
            <Image
              alt="Placeholder"
              src="/images/discaboutpage.png"
              width={200}
              height={200}
              className="rounded-full mr-4 pt-10"
            />
          </div>
          <div className="text-center container">
            <h3 className="font-heading font-bold text-white text-2xl">Discounts</h3>
            <p className="text-white my-5 text-wrap text-xl">
              Provide Customers with exclusive additional discounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
