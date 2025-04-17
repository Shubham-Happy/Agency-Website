import Link from "next/link";
import Image from "next/image";

import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { cn } from "@/lib/utils";


interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("container flex items-center justify-between gap-10 py-4", className)}>
      <Link href="/" className="flex items-center gap-3 flex-1">
        <Image alt="Image" src="/images/LOGO--21.png" width={50} height={50} />
        <span className="font-heading text-xl font-bold">PROMORT-IT</span>
      </Link>
      <nav className="hidden items-center gap-10 md:flex flex-1 justify-center">
        <NavItem href="/" label="Creator" />
        <NavItem href="app\src\app\brand\page.tsx" label="Brands" />
        <NavItem href="app\src\app\blogs\page.tsx" label="Customer" />
        <NavItem href="app\src\app\about-us-final\page.tsx" label="About Us" />
      </nav>
      <div className="hidden items-center gap-2 md:flex flex-1 justify-end">
        <Button asChild>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf_tfkBCsmj9hhzFDqaWVs-47gZY5TQVDXiYNKqqTiVp2oGEw/viewform" className="cursor-pointer">
            Get Started
          </Link>
        </Button>
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="gap-1 pt-2 grid grid-cols-1">
            <NavItem href="/" label="Creator" className="text-xl text-black" />
            <NavItem href="app\src\app\brand\page.tsx" label="Brands" className="text-xl text-black" />
            <NavItem href="app\src\app\blogs\page.tsx" label="Customer" className="text-xl text-black" />
            <NavItem href="app\src\app\about-us-final\page.tsx" label="About Us" className="text-xl text-black" />
            <Button size="lg" asChild className="mt-2">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf_tfkBCsmj9hhzFDqaWVs-47gZY5TQVDXiYNKqqTiVp2oGEw/viewform" className="cursor-pointer w-auto">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
