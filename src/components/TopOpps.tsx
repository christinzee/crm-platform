import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

/**
 * Type representing a deal likely to close soon.
 */
type Deal = {
  id: string;
  clientName: string;
  dealSize: number;
  daysToClose: number;
};

// Mock data for demonstration. Replace with real data fetching as needed.
const hotDeals: Deal[] = [
  { id: "1", clientName: "Globex Corp", dealSize: 8500, daysToClose: 3 },
  { id: "2", clientName: "Initech", dealSize: 12000, daysToClose: 5 },
  { id: "3", clientName: "Umbrella Inc.", dealSize: 9500, daysToClose: 2 },
  { id: "4", clientName: "Hooli", dealSize: 7000, daysToClose: 4 },
  { id: "5", clientName: "Stark Industries", dealSize: 15000, daysToClose: 1 },
  { id: "6", clientName: "Wayne Enterprises", dealSize: 11000, daysToClose: 6 },
];

/**
 * Card displaying the top 5 hot deals likely to close soon in a compact list view.
 */
export function TopOpportunities() {
  const topDeals = hotDeals
    .sort((a, b) => a.daysToClose - b.daysToClose)
    .slice(0, 5);

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Top Opportunities</CardTitle>
        <CardDescription>Focus on high-value deals nearing close.</CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        {topDeals.length === 0 ? (
          <div className="text-muted-foreground text-sm px-6 pb-4">
            No hot deals at the moment.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <ul className="divide-y divide-muted">
              <li className="flex items-center px-6 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider select-none cursor-default">
                <span className="flex-1 min-w-0">Client</span>
                <span className="w-28 text-right">Deal Size</span>
                <span className="w-32 text-right">Days Left</span>
              </li>
              {topDeals.map((deal) => (
                <li key={deal.id} className="p-0 m-0">
                  <Link
                    href={`/deals/${deal.id}`}
                    className="text-sm flex items-center px-6 py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded transition-colors hover:bg-muted/40 active:bg-muted/60"
                    tabIndex={0}
                  >
                    <span className="flex-1 min-w-0 truncate font-medium group-hover:underline">
                      {deal.clientName}
                    </span>
                    <span className="w-28 text-right font-semibold text-primary">
                      ${deal.dealSize.toLocaleString()}
                    </span>
                    <span className="w-32 text-right">
                      {deal.daysToClose} day{deal.daysToClose !== 1 ? "s" : ""}{" "}
                      left
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
