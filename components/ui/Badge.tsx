import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-[var(--bg-tertiary)] text-text-muted",
        variant === "accent" &&
          "bg-cyan-950 text-cyan-400",
        className
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
