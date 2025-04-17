import { SidebarGroupLabel } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface CategorynameProps {
  className?: string;
}

export function Categoryname({ className }: CategorynameProps) {
  return <SidebarGroupLabel className={className}>Meditation</SidebarGroupLabel>;
}
