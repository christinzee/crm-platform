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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DealsByStageChart from "../../components/DealsByStageChart";

/**
 * Dummy data types
 */
type DealStage =
  | "Lead"
  | "Qualified"
  | "Proposal"
  | "Closed Won"
  | "Closed Lost";

interface Deal {
  id: string;
  name: string;
  company: string;
  stage: DealStage;
  value: number;
  closeDate: string;
}

interface Task {
  id: string;
  name: string;
  related: string;
  dueDate: string;
  done: boolean;
}

/**
 * Pipeline Summary Cards
 */
function PipelineSummaryCards() {
  // Dummy data
  const totalPipelineValue = 125000;
  const openDeals = 18;
  const closedWonThisMonth = 5;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Pipeline Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${totalPipelineValue.toLocaleString()}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Open Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{openDeals}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Closed Won (This Month)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{closedWonThisMonth}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Button variant="outline" size="sm">
              + New Deal
            </Button>
            <Button variant="outline" size="sm">
              + New Contact
            </Button>
            <Button variant="outline" size="sm">
              + New Task
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * Deals Table Preview
 */
function DealsTablePreview() {
  // Dummy deals
  const deals: Deal[] = [
    {
      id: "1",
      name: "Website Redesign",
      company: "Acme Corp",
      stage: "Proposal",
      value: 25000,
      closeDate: "2024-06-15",
    },
    {
      id: "2",
      name: "CRM Migration",
      company: "Beta LLC",
      stage: "Qualified",
      value: 18000,
      closeDate: "2024-06-20",
    },
    {
      id: "3",
      name: "SEO Retainer",
      company: "Gamma Inc",
      stage: "Lead",
      value: 12000,
      closeDate: "2024-07-01",
    },
    {
      id: "4",
      name: "Annual License",
      company: "Delta Ltd",
      stage: "Closed Won",
      value: 30000,
      closeDate: "2024-05-30",
    },
  ];
  const stageColors: Record<DealStage, string> = {
    Lead: "bg-blue-100 text-blue-800",
    Qualified: "bg-yellow-100 text-yellow-800",
    Proposal: "bg-purple-100 text-purple-800",
    "Closed Won": "bg-green-100 text-green-800",
    "Closed Lost": "bg-red-100 text-red-800",
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Deals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deal Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Close Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deals.map((deal) => (
                <TableRow key={deal.id}>
                  <TableCell>{deal.name}</TableCell>
                  <TableCell>{deal.company}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        stageColors[deal.stage]
                      }`}
                    >
                      {deal.stage}
                    </span>
                  </TableCell>
                  <TableCell>${deal.value.toLocaleString()}</TableCell>
                  <TableCell>{deal.closeDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Tasks Panel
 */
function TasksPanel() {
  // Dummy tasks
  const tasks: Task[] = [
    {
      id: "t1",
      name: "Follow up with Acme Corp",
      related: "Website Redesign",
      dueDate: "2024-06-10",
      done: false,
    },
    {
      id: "t2",
      name: "Send proposal to Beta LLC",
      related: "CRM Migration",
      dueDate: "2024-06-09",
      done: false,
    },
    {
      id: "t3",
      name: "Call Gamma Inc",
      related: "SEO Retainer",
      dueDate: "2024-06-08",
      done: true,
    },
  ];
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-3 p-2 rounded hover:bg-muted/40"
            >
              <Checkbox
                checked={task.done}
                aria-label="Mark as done"
                className="mr-2"
                disabled
              />
              <div className="flex-1">
                <div className="font-medium text-sm">{task.name}</div>
                <div className="text-xs text-muted-foreground">
                  {task.related}
                </div>
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">
                {task.dueDate}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

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
        <main className="flex flex-1 flex-col gap-6 p-4 pt-0">
          {/* Pipeline Summary Cards */}
          <PipelineSummaryCards />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
            {/* Deals Table Preview */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <DealsByStageChart />
            </div>
            {/* Tasks Panel */}
            <div className="flex flex-col gap-4">
              <TasksPanel />
            </div>
          </div>
          {/* Recent Deals Table */}
          <DealsTablePreview />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
