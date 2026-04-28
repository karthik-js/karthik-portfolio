import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  children,
  className,
  variant = "default",
}: Readonly<BadgeProps>) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
        {
          "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary":
            variant === "default",
          "bg-primary/10 border border-primary/30 text-primary":
            variant === "accent",
          "border border-border text-foreground": variant === "outline",
        },
        className,
      )}
    >
      {children}
    </span>
  );
}
