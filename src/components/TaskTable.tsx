import { Task } from "@/types/task";
import React from "react";

type TaskTableProps = {
  tasks: Task[];
  onDeleteClick: (id: string) => void;
  onEditClick: (id: string) => void;
};

export default function TaskTable({
  tasks,
  onDeleteClick,
  onEditClick,
}: TaskTableProps) {
  //     const tasks = [
  //   {
  //     id: "1",
  //     title: "Learn JavaScript",
  //     description: "Practice array and object",
  //     priority: "High",
  //     status: "Pending",
  //     dueDate: "2026-11-05",
  //   },
  //   {
  //     id: "2",
  //     title: "Learn React",
  //     description: "Understand React Hooks",
  //     priority: "Medium",
  //     status: "In Progress",
  //     dueDate: "2026-11-07",
  //   },
  // ];

  return (
    <div className="w-[97%] overflow-x-auto rounded-lg border">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3">Task</th>
            <th className="px-4 py-3">Priority</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Due Date</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {tasks.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-8 text-gray-500">
                No tasks found.
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td className="px-4 py-3">
                  <p className="font-medium">{task.title}</p>
                  <p className="text-gray-500 text-xs">{task.description}</p>
                </td>

                <td className="px-4 py-3">{task.priority}</td>
                <td className="px-4 py-3">{task.status}</td>
                <td className="px-4 py-3">{task.dueDate}</td>

                <td className="px-4 py-3">
                  <button
                    onClick={() => onEditClick(task.id)}
                    className="text-blue-600 mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteClick(task.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
