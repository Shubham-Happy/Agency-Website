import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoSetAboutProps {
  name: string;
  position: string;
  image: string;
  link: string;
  person: boolean;
  className?: string;
}

export function PhotoSetAbout({
  name,
  position,
  image,
  link,
  person,
  className,
}: PhotoSetAboutProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="bg-muted overflow-hidden">
        <Image alt="Team Member" src={image} width={400} height={500} />
      </div>
      <h4 className="mt-4 font-heading font-bold text-center text-black text-2xl">{name}</h4>
      <p className="text-pretty text-center text-yellow-600">{position}</p>
      <div className="flex">
        <Link href={link} className="text-xs">
          Linkedin
        </Link>
        <ArrowUpRight size={11} className="mt-0.5" />
      </div>
    </div>
  );
}
