"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Optionally, return a skeleton or nothing until mounted
    return null;
  }

  const isDark = theme === "dark";

  return (
    <Toggle
      variant="default"
      size="default"
      pressed={isDark}
      aria-label="Toggle theme"
      onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
    >
      <Sun
        className={
          "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" +
          (!isDark ? "" : " hidden")
        }
      />
      <Moon
        className={
          "h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" +
          (isDark ? "" : " hidden")
        }
      />
      <span className="">Toggle Theme</span>
    </Toggle>
  );
}
