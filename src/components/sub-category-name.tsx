import { SidebarMenuButton } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface SubCategoryNameProps {
  className?: string;
}

export function SubCategoryName({ className }: SubCategoryNameProps) {
  return (
    <SidebarMenuButton asChild className={className}>
      <a href="#">Yoga Mats</a>
    </SidebarMenuButton>
  );
}
