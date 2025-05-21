import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * ProgressBar component for displaying progress visually.
 * @param value - Progress percentage (0-100)
 * @param label - Optional label to display inside the bar
 * @param className - Additional class names
 */
export interface ProgressBarProps {
  value: number;
  label?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  className,
}) => {
  const clampedValue = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "relative h-3 w-full overflow-hidden rounded-full bg-muted",
        className
      )}
    >
      <div
        className="h-full bg-primary transition-all duration-500 ease-in-out"
        style={{ width: `${clampedValue}%` }}
      >
        {label && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-primary-foreground">
            {label}
          </span>
        )}
      </div>
    </div>
  );
};
