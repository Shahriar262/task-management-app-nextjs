import { Task } from "@/types/task";
import { useDrag } from "react-dnd";

type TaskCardProps = {
  task: Task;
  onDeleteClick: (id: string) => void;
  onEditClick: (id: string) => void;
};

export default function TaskCard({
  task,
  onDeleteClick,
  onEditClick,
}: TaskCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={(node) => {
        drag(node);
      }}
      className={`bg-white rounded-lg border p-4 shadow-sm ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <h3 className="text-sm font-semibold text-gray-800">{task.title}</h3>

      <p className="text-xs text-gray-500 mt-2">
        {task.description || "No description"}
      </p>

      <div className="flex justify-between text-[11px] mt-4">
        <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
          {task.priority}
        </span>

        <span className="text-gray-500">{task.dueDate}</span>
      </div>

      <div className="flex gap-3 mt-4 border-t pt-3">
        <button
          onClick={() => onEditClick(task.id)}
          className="text-blue-600 text-xs"
        >
          Edit
        </button>

        <button
          onClick={() => onDeleteClick(task.id)}
          className="text-red-600 text-xs"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
