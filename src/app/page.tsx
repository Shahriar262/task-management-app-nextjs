"use client";
import DeleteModal from "@/components/DeleteModal";
import Sidebar from "@/components/Sidebar";
import SummaryCards from "@/components/SummaryCards";
import TaskFormModal from "@/components/TaskFormModal";
import TaskTable from "@/components/TaskTable";
import { useTasks } from "@/hooks/useTasks";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const { tasks, addTask, deleteTask, editTask } = useTasks();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [editedTaskId, setEditedTaskId] = useState<string | null>(null);
  const [searchTasks, setSearchTasks] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const editingTask = tasks.find((task) => task.id === editedTaskId);

  // Search , Status & Priority Filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTasks.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchTasks.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Sorting
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    const dateA = new Date(
      sortBy === "createdAt" ? a.createdAt : a.dueDate,
    ).getTime();

    const dateB = new Date(
      sortBy === "createdAt" ? b.createdAt : b.dueDate,
    ).getTime();

    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 min-w-0 mt-6 pl-16 md:pl-6 pr-4 md:pr-6 mb-10">
        <div className="flex justify-between items-center border-b pb-3 mb-5">
          <h1 className="font-bold text-2xl">Dashboard</h1>

          <button
            onClick={() => {
              setEditedTaskId(null);
              setIsFormOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            + Add Task
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-5">
          <SummaryCards tasks={tasks}></SummaryCards>

          {/* Search and Filter Section */}
          <div className="bg-white w-[97%] border rounded-lg p-4 flex flex-col gap-4">
            {/* Search */}
            <div className="w-full">
              <input
                value={searchTasks}
                onChange={(e) => setSearchTasks(e.target.value)}
                type="text"
                placeholder="Search by title or description..."
                className="w-full border rounded-md px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                defaultValue="All"
                className="w-full border rounded-md px-3 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>

              {/* Priority Filter */}
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full border rounded-md px-3 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              {/* Sort Field */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border rounded-md px-3 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="createdAt">Sort by Created At</option>
                <option value="dueDate">Sort by Due Date</option>
              </select>

              {/* Sort Order */}
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full border rounded-md px-3 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>

          <TaskTable
            tasks={sortedTasks}
            onDeleteClick={(id) => setSelectedTaskId(id)}
            onEditClick={(id) => {
              setEditedTaskId(id);
              setIsFormOpen(true);
            }}
          />
          {isFormOpen && (
            <TaskFormModal
              task={editingTask}
              onClose={() => {
                setIsFormOpen(false);
                setEditedTaskId(null);
              }}
              onSave={(task) => {
                if (editedTaskId !== null) {
                  editTask(task);
                  toast.success("Task updated successfully!");
                } else {
                  addTask(task);
                  toast.success("Task added successfully!");
                }
              }}
            ></TaskFormModal>
          )}
          {selectedTaskId !== null && (
            <DeleteModal
              onCancel={() => setSelectedTaskId(null)}
              onConfirm={() => {
                deleteTask(selectedTaskId);
                toast.error("Task deleted");
                setSelectedTaskId(null);
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
}
