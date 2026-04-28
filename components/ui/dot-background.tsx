import { cn } from "@/lib/utils";
import React from "react";

/**
 * Reusable wrapper that applies the dot pattern as a full-bleed background.
 * Drop children inside to render content on top of the dots.
 */
export function DotBackground({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={cn("relative w-full bg-background", className)}>
      {/* Dot grid */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Top fade — blends seamlessly out of the Hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent" />
      {/* Bottom fade — blends into the Footer */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}
