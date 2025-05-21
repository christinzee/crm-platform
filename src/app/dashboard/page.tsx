import { NavSidebar } from "@/components/NavSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { QuotaProgressCard } from "@/components/QuotaProgressCard";
import { TopOpportunities } from "@/components/TopOpps";
import { FollowUpFireCard } from "@/components/FollowUpFireCard";
import { DailyActivityCard } from "@/components/DailyActivityCard";
import { LeaderboardCard } from "@/components/LeaderboardCard";
import { UpcomingTasksCard } from "@/components/UpcomingTasksCard";
import DealsByStageChart from "@/components/DealsByStageChart";
import NewLeads from "@/components/NewLeads";

const mockTasks = [
  {
    id: "t1",
    name: "Follow up with Acme Corp",
    dueDate: "2025-05-10",
    done: false,
  },
  {
    id: "t2",
    name: "Send proposal to Beta LLC",
    dueDate: "2025-05-13",
    done: false,
  },
  {
    id: "t3",
    name: "Call Gamma Inc",
    dueDate: "2025-05-15",
    done: true,
  },
  {
    id: "t4",
    name: "Review contract for Delta Ltd",
    dueDate: "2025-05-18",
    done: false,
  },
  {
    id: "t5",
    name: "Schedule meeting with Epsilon GmbH",
    dueDate: "2025-05-22",
    done: false,
  },
];

export default function Page() {
  return (
    <SidebarProvider>
      <NavSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Acme Co</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_max-content]">
            <QuotaProgressCard
              current={27000}
              quota={50000}
              daysRemaining={12}
              behindBy={6200}
            />
            <DailyActivityCard
              callsMade={12}
              callsGoal={25}
              emailsSent={8}
              emailsGoal={10}
              meetingsBooked={1}
              meetingsGoal={3}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
            <NewLeads />
            <TopOpportunities />
            <UpcomingTasksCard tasks={mockTasks} />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
            <FollowUpFireCard />
            <LeaderboardCard
              members={[
                { name: "Alice Smith", dealTotal: 42000 },
                { name: "Bob Lee", dealTotal: 35000 },
                { name: "Christin (You)", dealTotal: 27000 },
                { name: "Jane Doe", dealTotal: 23000 },
                { name: "Chris Evans", dealTotal: 22000 },
                { name: "Sam Lee", dealTotal: 18000 },
                { name: "Pat Kim", dealTotal: 15000 },
                { name: "Morgan Yu", dealTotal: 12000 },
              ]}
              currentRank={3}
              totalReps={10}
              gapToNext="$8,000 behind #2"
            />
            <DealsByStageChart />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
