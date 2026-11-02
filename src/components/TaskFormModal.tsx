import { Task } from '@/types/task';
import React, { useState } from 'react'

type TaskFormModalProps = {
    onClose : ()=> void
     onSave: (task: Task) => void;
}


export default function TaskFormModal({onClose, onSave} : TaskFormModalProps) {
 
 const [title, setTitle] = useState("")
 const [description, setDescription] = useState("")
 const [priority, setPriority] = useState<Task["priority"]>("Medium")
 const [status, setStatus] = useState<Task["status"]>("Pending")
 const [dueDate, setDueDate] = useState("")

 function handleSave() {
  if (!title.trim() || !dueDate) {
    alert("Title and Due Date are required");
    return;
  }

  const newTask: Task = {
    id: crypto.randomUUID(),
    title: title.trim(),
    description: description.trim() || undefined,
    priority,
    status,
    dueDate,
    createdAt: new Date().toISOString(),
  };

  onSave(newTask);
  onClose();
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-6">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">

        <h2 className="text-xl font-semibold mb-5">
          Add New Task
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              placeholder="Enter task title"
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Description</label>
            <textarea
              value={description}
              rows={3}
              placeholder="Enter description"
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e)=>setDescription(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Priority</label>
              <select className="w-full border rounded-md p-2" value={priority} onChange={(e)=>setPriority(e.target.value as Task["priority"])}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Status</label>
              <select className="w-full border rounded-md p-2" value={status} onChange={(e)=>setStatus(e.target.value as Task["status"])}>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Hold</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Due Date</label>
            <input
              type="date"
              className="w-full border rounded-md p-2"
              value={dueDate}
              onChange={(e)=>{setDueDate(e.target.value)}}
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
            <button onClick={onClose} className="border rounded-md px-4 py-2">
              Cancel
            </button>
            <button onClick={handleSave} className="bg-blue-600 text-white rounded-md px-4 py-2">
              Save Task
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}