import { cn } from "@/lib/utils";

interface GreetUserProps {
  userName: string;
  className?: string;
}

export function GreetUser({ userName, className }: GreetUserProps) {
  return (
    <div className={className}>
      <div>
        <span className="font-semibold">Hi, </span>
        <span className="font-semibold">{userName}</span>
      </div>
    </div>
  );
}
