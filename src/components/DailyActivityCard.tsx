import React from "react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { PhoneIcon, MailIcon, CalendarIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

/**
 * Props for DailyActivityCard.
 */
export interface DailyActivityCardProps {
  callsMade: number;
  callsGoal: number;
  emailsSent: number;
  emailsGoal: number;
  meetingsBooked: number;
  meetingsGoal: number;
}

/**
 * DailyActivityCard displays today's activity metrics with progress indicators and a streak CTA.
 */
export const DailyActivityCard: React.FC<DailyActivityCardProps> = ({
  callsMade,
  callsGoal,
  emailsSent,
  emailsGoal,
  meetingsBooked,
  meetingsGoal,
}) => {
  const callsComplete = callsMade >= callsGoal;
  const meetingsComplete = meetingsBooked >= meetingsGoal;

  return (
    <Card className="w-full lg:w-sm mx-auto">
      <CardHeader>
        <CardTitle>Today&apos;s Activity</CardTitle>
        <CardDescription>
          Stay on top of your daily sales efforts.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/* Calls */}
        <MetricItem
          icon={<PhoneIcon className="text-primary size-5" />}
          label="Calls"
          value={`${callsMade} / ${callsGoal}`}
          progress={Math.min((callsMade / callsGoal) * 100, 100)}
          complete={callsComplete}
        />
        {/* Meetings */}
        <MetricItem
          icon={<CalendarIcon className="text-primary size-5" />}
          label="Meetings"
          value={`${meetingsBooked} / ${meetingsGoal}`}
          progress={Math.min((meetingsBooked / meetingsGoal) * 100, 100)}
          complete={meetingsComplete}
        />
        {/* Emails */}
        <MetricItem
          icon={<MailIcon className="text-primary size-5" />}
          label="Emails"
          value={`${emailsSent} / ${emailsGoal}`}
          progress={Math.min((emailsSent / emailsGoal) * 100, 100)}
          complete={emailsSent >= emailsGoal}
        />
      </CardContent>
    </Card>
  );
};

/**
 * MetricItem displays a single metric with icon, label, value, progress, and completion indicator.
 */
const MetricItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  progress: number;
  complete: boolean;
}> = ({ icon, label, value, progress, complete }) => (
  <div className="flex items-center gap-3">
    <span>{icon}</span>
    <span className="flex-1 text-sm font-medium">{label}</span>
    <span className="text-sm tabular-nums w-12 text-right">{value}</span>
    <div className="w-24">
      <ProgressBar value={progress} />
    </div>
  </div>
);

export default DailyActivityCard;
