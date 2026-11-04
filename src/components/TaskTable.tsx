import { Task } from "@/types/task";
import TaskCard from "./TaskCard";
import StatusColumn from "./StatusColumn";

type TaskTableProps = {
  tasks: Task[];
  onDeleteClick: (id: string) => void;
  onEditClick: (id: string) => void;
  onStatusChange: (id: string, status: Task["status"]) => void;
};

export default function TaskTable({
  tasks,
  onDeleteClick,
  onEditClick,
  onStatusChange,
}: TaskTableProps) {
  const statuses: Task["status"][] = [
    "Pending",
    "In Progress",
    "Completed",
    "Hold",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-[97%]">
      {statuses.map((status) => {
        const filteredTasks = tasks.filter((task) => task.status === status);

        return (
          <StatusColumn key={status} status={status} onDrop={onStatusChange}>
            {filteredTasks.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-8">
                No tasks here.
              </p>
            ) : (
              filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDeleteClick={onDeleteClick}
                  onEditClick={onEditClick}
                />
              ))
            )}
          </StatusColumn>
        );
      })}
    </div>
  );
}
