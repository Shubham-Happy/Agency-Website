"use client";

import { motion } from "framer-motion";
import { Sparkles, Rabbit, Download, Code } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { SignUpButton } from "@/components/sign-up-button";

export function Features() {
  return (
    <section className="container py-24 flex flex-col items-center gap-6 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Features</span>
        <h2 className="font-heading text-3xl tracking-tight sm:text-4xl text-balance text-center md:text-5xl font-bold">
          Create Videos for Brands
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center">
        When user buys from your own very link, You get a cut.
      </p>
      <div className="grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3 md:flex-row md:items-center mt-6 auto-rows-[18rem]">
        <Card className="row-span-1 flex flex-col space-y-4 p-4 transition shadow-md duration-200 hover:shadow-xl h-full md:col-span-2 lg:col-span-1">
          <motion.div
            initial="initial"
            whileHover="animate"
            className="bg-dot-black/[0.2] flex size-full min-h-24 flex-1 flex-col space-y-2"
          >
            <motion.div
              variants={{
                animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
                initial: { x: 0 },
              }}
              className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2"
            >
              <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-primary" />
              <div className="h-4 w-full rounded-full bg-gray-100" />
            </motion.div>
            <motion.div
              variants={{
                animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
                initial: { x: 0 },
              }}
              className="ml-auto flex w-3/4 flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2"
            >
              <div className="h-4 w-full rounded-full bg-gray-100" />
              <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-primary" />
            </motion.div>
            <motion.div
              variants={{
                animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
                initial: { x: 0 },
              }}
              className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2"
            >
              <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-primary" />
              <div className="h-4 w-full rounded-full bg-gray-100" />
            </motion.div>
          </motion.div>
          <div className="transition duration-200 group-hover:translate-x-2">
            <Sparkles size={24} className="text-primary" />
            <h3 className="my-2 font-sans font-bold text-foreground text-lg sm:text-2xl">
              Select a Product
            </h3>
            <p className="font-sans font-normal text-muted-foreground text-md">
              Browse from thousands of choices.
            </p>
          </div>
        </Card>
        <Card className="row-span-1 flex flex-col space-y-4 p-4 transition shadow-md duration-200 hover:shadow-xl h-full md:col-span-2">
          <motion.div
            animate="animate"
            initial="initial"
            whileHover="hover"
            className="bg-dot-black/[0.2] flex size-full min-h-24 flex-1 flex-col space-y-2"
          >
            <motion.div
              style={{ maxWidth: "53.49939957801221%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
            <motion.div
              style={{ maxWidth: "92.43807527393105%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
            <motion.div
              style={{ maxWidth: "71.4611700211174%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
            <motion.div
              style={{ maxWidth: "58.95346190827949%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
            <motion.div
              style={{ maxWidth: "66.35878789916815%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
            <motion.div
              style={{ maxWidth: "58.29192470679222%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
          </motion.div>
          <div className="transition duration-200 group-hover:translate-x-2">
            <Rabbit size={24} className="text-primary" />
            <h3 className="my-2 font-sans font-bold text-foreground text-lg sm:text-2xl">
              Make content on the Product
            </h3>
            <p className="font-sans font-normal text-muted-foreground text-md">
              We Analyze your content and then give you own link.
            </p>
          </div>
        </Card>
        <Card className="row-span-1 flex flex-col space-y-4 p-4 transition shadow-md duration-200 hover:shadow-xl h-full md:col-span-2">
          <motion.div
            style={{
              background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
              backgroundSize: "400% 400%",
            }}
            animate="animate"
            initial="initial"
            variants={{
              animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
              initial: { backgroundPosition: "0 50%" },
            }}
            transition={{ duration: 5, repeatType: "reverse" }}
            className="bg-dot-black/[0.2] flex size-full min-h-24 flex-1 flex-col space-y-2 rounded-lg"
          >
            <motion.div className="size-full rounded-lg" />
          </motion.div>
          <div className="transition duration-200 group-hover:translate-x-2">
            <Download size={24} className="text-primary" />
            <h3 className="my-2 font-sans font-bold text-foreground text-lg sm:text-2xl">
              Earn as users buy.
            </h3>
            <p className="font-sans font-normal text-muted-foreground text-md">
              And all of it goes to you.
            </p>
          </div>
        </Card>
        <Card className="row-span-1 flex flex-col space-y-4 p-4 transition shadow-md duration-200 hover:shadow-xl h-full md:col-span-2 lg:col-span-1">
          <motion.div
            initial="initial"
            whileHover="animate"
            className="bg-dot-black/[0.2] flex size-full min-h-24 flex-1 flex-col space-y-2 rounded-lg"
          >
            <motion.div
              variants={{
                animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
                initial: { x: 0 },
              }}
              className="flex flex-row items-start space-x-2 rounded-2xl border border-neutral-100 bg-white p-2"
            >
              <Image
                alt="avatar"
                src="/images/user-picture.jpeg"
                width="100"
                height="100"
                className="size-10 rounded-full"
              />
              <p className="text-xs text-neutral-500">I Loved the Product, I want to buy it now.</p>
            </motion.div>
            <motion.div
              variants={{
                animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
                initial: { x: 0 },
              }}
              className="ml-auto flex w-3/4 flex-row items-center justify-end space-x-2 rounded-full border border-neutral-100 bg-white p-2"
            >
              <p className="text-xs text-neutral-500">Sure You can buy from my own link</p>
              <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
            </motion.div>
          </motion.div>
          <div className="transition duration-200 group-hover:translate-x-2">
            <Code size={24} className="text-primary" />
            <h3 className="my-2 font-sans font-bold text-foreground text-lg sm:text-2xl">
              Engage Audience
            </h3>
            <p className="font-sans font-normal text-muted-foreground text-md">
              Grow as you go viral.
            </p>
          </div>
        </Card>
      </div>
      {/* <SignUpButton /> */}
      <Button size="lg" asChild className="mt-2">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf_tfkBCsmj9hhzFDqaWVs-47gZY5TQVDXiYNKqqTiVp2oGEw/viewform" className="cursor-pointer w-auto">
                Get Started
              </Link>
            </Button>
    </section>
  );
}
