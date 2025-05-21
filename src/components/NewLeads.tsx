import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Type representing a new incoming lead.
 */
export type NewLead = {
  id: string;
  name: string;
  assignedAt: string; // ISO date string
  engagement: "Email Opened" | "Form Submitted" | "No Activity";
  priority: "High" | "Medium" | "Low";
};

// TODO: Replace with API data and Zod validation
const mockLeads: NewLead[] = [
  {
    id: "1",
    name: "Jane Doe",
    assignedAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    engagement: "Email Opened",
    priority: "High",
  },
  {
    id: "2",
    name: "John Smith",
    assignedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    engagement: "Form Submitted",
    priority: "Medium",
  },
  {
    id: "3",
    name: "Alice Johnson",
    assignedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    engagement: "No Activity",
    priority: "Low",
  },
];

/**
 * Returns a badge color variant based on engagement type.
 */
function getEngagementVariant(
  engagement: NewLead["engagement"]
): "default" | "secondary" {
  switch (engagement) {
    case "Email Opened":
      return "default";
    case "Form Submitted":
      return "secondary";
    case "No Activity":
      return "secondary";
    default:
      return "default";
  }
}

/**
 * Returns the Tailwind color class for the priority circle.
 */
function getPriorityCircleColor(priority: NewLead["priority"]): string {
  switch (priority) {
    case "High":
      return "bg-red-500";
    case "Medium":
      return "bg-orange-400";
    case "Low":
      return "bg-yellow-300";
    default:
      return "bg-gray-300";
  }
}

/**
 * NewLeads component displays a compact list of new incoming leads with key info.
 */
export function NewLeads() {
  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Incoming Leads</CardTitle>
        <CardDescription>
        Monitor and prioritize your latest leads.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        {mockLeads.length === 0 ? (
          <div className="text-muted-foreground text-sm px-6 pb-4">
            No new leads.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <ul className="divide-y divide-muted">
              <li className="flex items-center px-6 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider select-none cursor-default">
                <span className="flex-[2] min-w-[10rem]">Lead Name</span>
                <span className="w-28 text-right">Engagement</span>
                <span className="w-20 text-right">Priority</span>
                <span className="w-20 text-right">Assigned</span>
              </li>
              {mockLeads.map((lead) => (
                <li key={lead.id} className="p-0 m-0">
                  <div className="text-sm flex items-center px-6 py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded transition-colors hover:bg-muted/40 active:bg-muted/60">
                    <span className="flex-[2] min-w-[10rem] truncate font-medium group-hover:underline">
                      {lead.name}
                    </span>
                    <span className="w-28 text-right flex justify-end">
                      <Badge variant={getEngagementVariant(lead.engagement)}>
                        {lead.engagement}
                      </Badge>
                    </span>
                    <span className="w-20 text-right flex justify-end">
                      <span
                        className={`inline-flex items-center justify-center w-4 h-4 rounded-full mr-1 ${getPriorityCircleColor(
                          lead.priority
                        )}`}
                        aria-label={`Priority: ${lead.priority}`}
                        title={lead.priority}
                      >
                        <span className="sr-only">
                          {lead.priority} priority
                        </span>
                      </span>
                    </span>
                    <span className="w-20 text-right text-xs text-muted-foreground">
                      {new Date(lead.assignedAt).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default NewLeads;
