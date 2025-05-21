import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/badge";

export interface QuotaProgressCardProps {
  current: number; // e.g. 27000
  quota: number; // e.g. 50000
  daysRemaining: number; // e.g. 12
  behindBy?: number; // e.g. 6200 (optional, show alert if present and > 0)
}

/**
 * QuotaProgressCard displays sales quota progress, countdown, and alerts.
 */
export const QuotaProgressCard: React.FC<QuotaProgressCardProps> = ({
  current,
  quota,
  daysRemaining,
  behindBy,
}) => {
  const percent =
    quota > 0 ? Math.min(100, Math.round((current / quota) * 100)) : 0;
  const formattedCurrent = `$${current.toLocaleString()}`;
  const formattedQuota = `$${quota.toLocaleString()}`;
  const formattedBehind =
    behindBy && behindBy > 0 ? `$${(behindBy / 1000).toFixed(1)}K` : null;

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Monthly Quota Progress</CardTitle>
        <CardDescription>Track your progress and stay on pace to hit quota.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-sm font-medium">
          <span className="text-muted-foreground">
            {formattedCurrent} / {formattedQuota}
          </span>
          <span className="tabular-nums text-primary font-semibold">
            {percent}%
          </span>
        </div>
        <ProgressBar value={percent} />
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
          <span>{daysRemaining} days remaining</span>
          {formattedBehind && (
            <Badge variant="destructive" className="opacity-90">
              Behind pace by {formattedBehind}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
