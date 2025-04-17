import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, MailOpen, ArrowRight } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "container mt-10 flex flex-wrap justify-between pb-16 pt-10 border-t-2",
        className,
      )}
    >
      <div className="flex basis-full justify-between gap-8 md:basis-auto md:flex-col md:justify-start">
        <Link href="#" className="flex items-center gap-3">
          <Image alt="Image" src="/images/LOGO--21.png" width={50} height={500} />
          <span className="font-heading text-xl font-bold">PROMORT-IT</span>
        </Link>
        <div className="flex items-center gap-5">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Link href="https://instagram.com/@promort_it">
              <Instagram size={26} />
            </Link>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Link href="https://www.linkedin.com/company/promort-it/">
              <Linkedin size={26} />
            </Link>
          </a>
        </div>
      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <h3 className="font-semibold">Product</h3>
        <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
          Pricing
        </Link>
      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <h3 className="font-semibold">Company</h3>
        <Link
          href="app\src\app\about-us-final\page.tsx"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          About us
        </Link>
        <Link href="/blogs" className="text-sm text-muted-foreground hover:text-foreground">
          Blog
        </Link>
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          Customers
        </Link>
        <Link href="/brand" className="text-sm text-muted-foreground hover:text-foreground">
          Brand
        </Link>
      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <h3 className="font-semibold">Resources</h3>
        <Link href="/blogs" className="text-sm text-muted-foreground hover:text-foreground">
          Community
        </Link>
        <Link
          href="app\src\app\about-us-final\page.tsx"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Contact
        </Link>
        <Link
          href="/privacy-policy"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Privacy Policy
        </Link>
        <Link href="/tnc" className="text-sm text-muted-foreground hover:text-foreground">
          Terms of service
        </Link>
      </div>
      <div className="mt-10 flex basis-1/2 flex-col gap-5 md:mt-0 md:basis-auto">
        <Alert>
          <MailOpen />
          <AlertTitle>Join Our Mailing List.</AlertTitle>
          <AlertDescription>Get Updates really fast.</AlertDescription>
        </Alert>
        <div className="flex">
          <Input placeholder="Your email address." />
          <ArrowRight size={16} className="float-right mt-3" />
        </div>
      </div>
    </footer>
  );
}
