import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export type LeaderboardMember = { name: string; dealTotal: number };

export type LeaderboardCardProps = {
  members: LeaderboardMember[]; // 8+ members
  currentRank: number;
  totalReps: number;
  gapToNext: string;
};

const flameColor = (rank: number) => {
  if (rank === 1) return "text-red-500";
  if (rank === 2) return "text-orange-400";
  if (rank === 3) return "text-yellow-400";
  return "";
};

export const LeaderboardCard: React.FC<LeaderboardCardProps> = ({
  members,
  currentRank,
  totalReps,
  gapToNext,
}) => {
  return (
    <Card className="w-full mx-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Team Progress</CardTitle>
        <CardDescription>
          Rank <span className="font-bold text-primary">#{currentRank}</span> of{" "}
          {totalReps}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground">
                <th className="text-left font-normal px-1 py-1"> </th>
                <th className="text-left uppercase text-xs font-semibold  px-1 py-1">
                  #
                </th>
                <th className="uppercase text-xs font-semibold text-left px-1 py-1">
                  Name
                </th>
                <th className="text-right uppercase text-xs font-semibold  px-1 py-1">
                  Closed
                </th>
              </tr>
            </thead>
            <tbody>
              {members.slice(0, 8).map((member, idx) => (
                <tr
                  key={member.name}
                  className={
                    idx + 1 === currentRank ? "border border-primary" : ""
                  }
                >
                  <td className="px-1 py-1 w-6">
                    {idx < 3 ? (
                      <Flame
                        size={16}
                        className={flameColor(idx + 1)}
                        aria-label={`Rank ${idx + 1} flame`}
                        strokeWidth={2}
                        fill="none"
                      />
                    ) : null}
                  </td>
                  <td className="px-1 py-1 font-mono tabular-nums w-6">
                    {idx + 1}
                  </td>
                  <td className="px-1 py-1 truncate max-w-[7rem]">
                    <span className="font-medium">{member.name}</span>
                  </td>
                  <td className="px-1 py-1 text-right font-mono tabular-nums">
                    ${member.dealTotal.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-xs text-muted-foreground italic">
          {gapToNext}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
