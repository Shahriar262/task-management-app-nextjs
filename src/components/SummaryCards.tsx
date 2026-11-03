import { Task } from "@/types/task";
import React from "react";

type SummaryCardsProps = {
  tasks: Task[];
};

export default function SummaryCards({ tasks }: SummaryCardsProps) {
  const pendingCount = tasks.filter((task) => task.status === "Pending");
  const inProgressCount = tasks.filter((task) => task.status === "In Progress");
  const completedCount = tasks.filter((task) => task.status === "Completed");
  const holdCount = tasks.filter((task) => task.status === "Hold");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-[97%] gap-4">
      <div className="bg-white border rounded-lg p-4">
        <p className="text-sm text-gray-500">Total Tasks</p>
        <h2 className="text-2xl font-bold mt-2">{tasks.length}</h2>
      </div>

      <div className="bg-white border rounded-lg p-4">
        <p className="text-sm text-gray-500">Pending</p>
        <h2 className="text-2xl font-bold mt-2">{pendingCount.length}</h2>
      </div>

      <div className="bg-white border rounded-lg p-4">
        <p className="text-sm text-gray-500">In Progress</p>
        <h2 className="text-2xl font-bold mt-2">{inProgressCount.length}</h2>
      </div>

      <div className="bg-white border rounded-lg p-4">
        <p className="text-sm text-gray-500">Completed</p>
        <h2 className="text-2xl font-bold mt-2">{completedCount.length}</h2>
      </div>

      <div className="bg-white border rounded-lg p-4">
        <p className="text-sm text-gray-500">Hold</p>
        <h2 className="text-2xl font-bold mt-2">{holdCount.length}</h2>
      </div>
    </div>
  );
}
