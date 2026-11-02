'use client'
import DeleteModal from "@/components/DeleteModal";
import Sidebar from "@/components/Sidebar";
import SummaryCards from "@/components/SummaryCards";
import TaskFormModal from "@/components/TaskFormModal";
import TaskTable from "@/components/TaskTable";
import { useTasks } from "@/hooks/useTasks";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {

  const {tasks, addTask, deleteTask} = useTasks()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 min-w-0 mt-6 pl-16 md:pl-6 pr-4 md:pr-6">

        <div className="flex justify-between items-center border-b pb-3 mb-5">
            <h1 className="font-bold text-2xl">Dashboard</h1>

            <button onClick={()=>{setIsFormOpen(!isFormOpen)}} className="bg-blue-600 text-white px-4 py-2 rounded-md">
              + Add Task
            </button>
        </div>

        <div className="mt-5 flex flex-col gap-5">
          <SummaryCards></SummaryCards>
          <TaskTable tasks={tasks} onDeleteClick={(id) => setSelectedTaskId(id)} />
          {isFormOpen && (
          <TaskFormModal onClose={() => setIsFormOpen(false)} onSave={(task) => {
              addTask(task);
              toast.success("Task added successfully!");
            }}></TaskFormModal>
          )}
          {selectedTaskId !== null && (
          <DeleteModal
            onCancel={() => setSelectedTaskId(null)}
            onConfirm={() => {
              deleteTask(selectedTaskId);
              toast.error("Task deleted")
              setSelectedTaskId(null);
            }}
          />
)}
        </div>

      </main>
    </div>
  );
}
