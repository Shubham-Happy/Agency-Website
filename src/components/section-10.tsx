import Image from "next/image";
import Link from "next/link";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Section10() {
  return (
    <div className="items-center md:overflow-y-hidden md:grid hidden md:grid-cols-2">
      <div className="columns-1 h-screen">
        <Image
          alt="Image"
          src="/images/side-image.jpg"
          width={640}
          height={640}
          className="max-width h-screen"
        />
      </div>
      <div className="items-center flex flex-col justify-center px-8 gap-8 py-24 min-h-screen">
        <div className="flex">
          <div>
            <h3 className="font-bold items-center text-center text-4xl">LOG IN</h3>
          </div>
        </div>
        <form className="flex flex-col gap-3 px-20 py-10 shadow-xl rounded-xl">
          <div className="flex rounded-lg grid-cols-3 justify-evenly py-8">
            <Tabs defaultValue="item-1">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="Creator">Creator</TabsTrigger>
                <TabsTrigger value="brand">Brand</TabsTrigger>
              </TabsList>
              <TabsContent value="item-1" />
              <TabsContent value="item-2" />
            </Tabs>
          </div>
          <div>
            <Label>Email</Label>
            <Input
              placeholder="example@xyz.com"
              className="active:shadow-xl border-2 focus:outline-transparent"
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Password" className="border-input border-2" />
          </div>
          <div className="text-center py-8">
            <Button className="mt-2 font-semibold rounded-full text-lg">SUBMIT</Button>
          </div>
          <div className="grid-cols-2">
            <text y={0} className="font-bold py-2">
              Don&apos;t have an account?{" "}
            </text>
            <Link href="/signup" className="text-primary font-bold">
              Sign Up !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
