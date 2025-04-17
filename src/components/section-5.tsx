import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Section5() {
  return (
    <div className="flex container md:grid hidden grid-cols-[4fr_1fr]">
      <div>
        <h2 className="font-heading font-semibold tracking-tight sm:text-4xl text-balance text-4xl">
          Blog Title
        </h2>
        <Image
          alt="Image"
          src="/images/final-2.png"
          width={190}
          height={81}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          placeholder="empty"
          className="container py-20"
        />
        <p className="text-lg text-muted-foreground text-balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia lectus velit, ut
          dictum nulla rhoncus in.
        </p>
      </div>
      <div>
        <h2 className="font-heading font-semibold tracking-tight text-balance text-2xl">
          Top Blogs&lt;br&gt;
        </h2>
        <div className="h-10" />
        <Card className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="relative h-60">
              <Image
                alt="Image"
                src="/images/placeholder.png"
                fill={false}
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mt-3">Lorem ipsum</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut.
            </p>
            <Button className="mr-auto">Button</Button>
          </CardContent>
        </Card>
        <div className="h-10" />
        <Card className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="relative h-60">
              <Image
                alt="Image"
                src="/images/placeholder.png"
                fill={false}
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mt-3">Lorem ipsum</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut.
            </p>
            <Button className="mr-auto">Button</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
