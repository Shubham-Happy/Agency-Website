import { cn } from "@/lib/utils";

interface ToggleButtonProps {
  className?: string;
}

export function ToggleButton({ className }: ToggleButtonProps) {
  return <div className={cn("flex", className)} />;
}
