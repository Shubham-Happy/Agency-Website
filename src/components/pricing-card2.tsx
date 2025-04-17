import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PricingFeatureItem2 } from "@/components/pricing-feature-item2";
import { cn } from "@/lib/utils";

interface PricingCard2Props {
  name: string;
  description: string;
  price: number;
  isMostPopular: boolean;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  className?: string;
}

export function PricingCard2({
  name,
  description,
  price,
  isMostPopular,
  feature1,
  feature2,
  feature3,
  feature4,
  className,
}: PricingCard2Props) {
  return (
    <Card className={cn("relative shadow-lg", className)}>
      <CardContent className="divide-y p-0">
        <div className="flex flex-col items-center px-7 py-10">
          <h4 className="font-heading text-2xl font-semibold text-foreground">{name}</h4>
          <p className="mt-2 text-muted-foreground">{description}</p>
          <Button size="lg" asChild className="mt-10 w-full text-black">
            <a href="#">Get started</a>
          </Button>
        </div>
        <ul className="space-y-2 px-7 py-10">
          <PricingFeatureItem2 text={feature1} />
          <PricingFeatureItem2 text={feature2} />
          <PricingFeatureItem2 text={feature3} />
          <PricingFeatureItem2 text={feature4} />
        </ul>
      </CardContent>
      {isMostPopular === true && (
        <span className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md">
          Most popular
        </span>
      )}
    </Card>
  );
}
