import { Link, ArrowRight, BarChart, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SignUpButton } from "@/components/sign-up-button";

export function Section3() {
  return (
    <section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter font-heading sm:text-4xl md:text-5xl">
              Everything you need to succeed
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Select from a wide range of Products and Brands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <Link className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading">Personalized Link</h3>
              <p className="text-center text-muted-foreground">
                Get your very own link for a product that you promote to put on your Content
              </p>
              {/* <Button size="sm" variant="outline" className="bg-yellow-200">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button> */}
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <BarChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading">Earn As You Sell !</h3>
              <p className="text-center text-muted-foreground">
                When users buy product from your personalized link, You earn !
              </p>
              {/* <Button size="sm" variant="outline" className="bg-yellow-200">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button> */}
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading">Mulitple Brands</h3>
              <p className="text-center text-muted-foreground">
                Work seamlessly with your Favorite Brands you wanna promote.
              </p>
              {/* <Button size="sm" variant="outline" className="bg-yellow-200">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button> */}
            </div>
          </div>
        </div>
        {/* <SignUpButton /> */}
      </section>
    </section>
  );
}
