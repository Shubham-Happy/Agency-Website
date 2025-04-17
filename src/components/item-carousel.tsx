import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ItemCarouselProps {
  productTitle: string;
  productPrice: string;
  productDes: string;
  cTA: string;
  className?: string;
}

export function ItemCarousel({
  productTitle,
  productPrice,
  productDes,
  cTA,
  className,
}: ItemCarouselProps) {
  return (
    <Card
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm inline-block px-2 p-6",
        className,
      )}
    >
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="relative h-60">
          <Image alt="Image" src="/images/gallery5.png" fill className="object-cover" />
        </div>
        <div className="grid-cols-2 grid">
          <h3 className="text-2xl font-semibold leading-none tracking-tight mt-3">
            {productTitle}
          </h3>
          <h3 className="text-2xl font-semibold leading-none mt-3 text-right">{productPrice}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{productDes}</p>
        <Button className="mr-auto">{cTA}</Button>
      </CardContent>
    </Card>
  );
}
