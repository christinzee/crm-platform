"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { stage: "Lead", count: 4 },
  { stage: "Qualified", count: 3 },
  { stage: "Proposal", count: 2 },
  { stage: "Closed Won", count: 1 },
  { stage: "Closed Lost", count: 1 },
];

const chartConfig = {
  count: {
    label: "Deals",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function DealsByStageChart() {
  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Deals by Stage</CardTitle>
        <CardDescription>Overview of your deal distribution.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-64 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              type="category"
              dataKey="stage"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <YAxis type="number" dataKey="count" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="count" fill="var(--primary)" radius={8} />
          </BarChart>
        </ChartContainer>

        <div className="mt-6 text-xs text-muted-foreground italic">
          Total active pipeline: 11 deals across 5 stages.
        </div>
      </CardContent>
    </Card>
  );
}
