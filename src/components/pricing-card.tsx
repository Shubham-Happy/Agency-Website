import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PricingFeatureItem } from "@/components/pricing-feature-item";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  isMostPopular: boolean;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  cTA: string;
  className?: string;
}

export function PricingCard({
  name,
  description,
  price,
  isMostPopular,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  cTA,
  className,
}: PricingCardProps) {
  return (
    <Card className={cn("relative shadow-lg", className)}>
      <CardContent className="divide-y p-0">
        <div className="flex flex-col items-center px-7 py-10">
          <h4 className="font-heading text-2xl font-semibold text-foreground">{name}</h4>
          <p className="mt-2 text-muted-foreground">{description}</p>
          <Button size="lg" asChild className="mt-10 w-full text-black">
            <a href="#">{cTA}</a>
          </Button>
        </div>
        <ul className="space-y-2 px-7 py-10">
          <PricingFeatureItem text={feature1} />
          <PricingFeatureItem text={feature2} />
          <PricingFeatureItem text={feature3} />
          <PricingFeatureItem text={feature4} />
          <PricingFeatureItem text={feature5} />
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
