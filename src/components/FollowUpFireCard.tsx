import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Flame, Clock } from "lucide-react";
import React from "react";
import Link from "next/link";

// Mock data for demonstration
const overdueFollowUps = 6;
const inactiveLeads = 12;

/**
 * Type representing a lead needing follow-up.
 */
type Lead = {
  id: string;
  clientName: string;
  lastTouchDate: string; // ISO date string
  dealSize: number;
};

const topLeads: Lead[] = [
  {
    id: "1",
    clientName: "Acme Corp",
    lastTouchDate: "2024-05-10",
    dealSize: 12000,
  },
  {
    id: "2",
    clientName: "Beta LLC",
    lastTouchDate: "2024-05-03",
    dealSize: 8500,
  },
  {
    id: "3",
    clientName: "Gamma Inc",
    lastTouchDate: "2024-04-28",
    dealSize: 9500,
  },
  {
    id: "4",
    clientName: "Delta Co",
    lastTouchDate: "2024-04-20",
    dealSize: 7000,
  },
  {
    id: "5",
    clientName: "Epsilon Ltd",
    lastTouchDate: "2024-04-15",
    dealSize: 15000,
  },
];

/**
 * Card displaying urgent follow-up stats and top leads needing attention.
 */
export function FollowUpFireCard() {
  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Follow-Up</CardTitle>
        <CardDescription>Revive deals that need your attention now.</CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        {/* <div className="flex gap-4 px-6 pb-2">
          <div className="flex items-center gap-1 text-destructive font-semibold text-sm">
            <AlertTriangle className="size-4" aria-hidden />
            <span>{overdueFollowUps}</span>
            <span className="text-muted-foreground font-normal">overdue</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-sm">
            <Clock className="size-4 text-warning-600" aria-hidden />
            <span>{inactiveLeads}</span>
            <span className="text-muted-foreground font-normal">
              inactive 10+ days
            </span>
          </div>
        </div> */}
        <div className="overflow-x-auto">
          <ul className="divide-y divide-muted">
            <li className="flex items-center px-6 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider select-none cursor-default">
              <span className="flex-1 min-w-0">Client</span>
              <span className="w-28 text-right">Deal Size</span>
              <span className="w-32 text-right">Last Touch</span>
            </li>
            {topLeads.length === 0 ? (
              <li className="px-6 py-4 text-muted-foreground text-sm">
                No leads need follow-up.
              </li>
            ) : (
              topLeads.map((lead) => (
                <li key={lead.id} className="p-0 m-0">
                  <Link
                    href={`/deals/${lead.id}`}
                    className="text-sm flex items-center px-6 py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded transition-colors hover:bg-muted/40 active:bg-muted/60"
                    tabIndex={0}
                  >
                    <span className="flex-1 min-w-0 truncate font-medium group-hover:underline">
                      {lead.clientName}
                    </span>
                    <span className="w-28 text-right font-semibold text-primary">
                      ${lead.dealSize.toLocaleString()}
                    </span>
                    <span className="w-32 text-right text-xs text-muted-foreground">
                      {new Date(lead.lastTouchDate).toLocaleDateString(
                        undefined,
                        { month: "short", day: "numeric" }
                      )}
                    </span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
