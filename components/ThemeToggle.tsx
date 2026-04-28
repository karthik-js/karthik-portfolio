"use client";

import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

type Mode = "system" | "light" | "dark";

const MODES: ReadonlyArray<{
  value: Mode;
  label: string;
  Icon: typeof Sun;
}> = [
  { value: "system", label: "Auto theme", Icon: Monitor },
  { value: "dark", label: "Dark theme", Icon: Moon },
];

const subscribeNoop = () => () => {};
const getMounted = () => true;
const getMountedServer = () => false;

export function ThemeToggle({ className }: Readonly<{ className?: string }>) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeNoop,
    getMounted,
    getMountedServer,
  );

  // Until mounted, render a stable empty shell to avoid hydration flicker —
  // the resolved theme isn't known on the server.
  const current: Mode = mounted ? ((theme as Mode) ?? "system") : "system";

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-lg border border-border bg-card p-0.5",
        className,
      )}
    >
      {MODES.map(({ value, label, Icon }) => {
        const active = current === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "flex items-center justify-center w-7 h-7 rounded-md transition-colors duration-150",
              active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon size={14} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
