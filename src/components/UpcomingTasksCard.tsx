import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Task type for upcoming tasks.
 */
export interface Task {
  id: string;
  name: string;
  dueDate: string;
  done: boolean;
  related?: string;
}

/**
 * UpcomingTasks component displays a list of upcoming tasks.
 * @param tasks - Array of Task objects to display
 */
export function UpcomingTasksCard({ tasks }: { tasks: Task[] }) {
  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
        <CardDescription>Review and complete your next action items.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex items-center px-2 text-xs font-semibold text-muted-foreground">
          <span style={{ marginLeft: 34 }} className="uppercase flex-1">
            Task
          </span>
          <span className="whitespace-nowrap uppercase">Due Date</span>
        </div>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-3 p-2 rounded hover:bg-muted/40"
            >
              <Checkbox
                checked={task.done}
                aria-label="Mark as done"
                className="mr-2 cursor-pointer"
                disabled
              />
              <div className="flex-1">
                <div className="font-medium text-sm">{task.name}</div>
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">
                {new Date(task.dueDate).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
