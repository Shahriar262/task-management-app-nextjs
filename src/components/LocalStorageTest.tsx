
import { Task } from '@/types/task';
import { getTasks, saveTasks } from '@/utils/localstorage';
import React, { useEffect } from 'react'

export default function LocalStorageTest() {
    
 const tasks : Task[] = [
 {
      id: "1",
      title: "Learn JavaScript",
      description: "Practice array and object",
      priority: "High",
      status: "Pending",
      createdAt: "2026-11-01",
      dueDate: "2026-11-05",
    },
    {
      id: "2",
      title: "Learn React",
      description: "Understand useState and useEffect",
      priority: "Medium",
      status: "In Progress",
      createdAt: "2026-11-01",
      dueDate: "2026-11-07",
    },
    {
      id: "3",
      title: "Build Dashboard",
      description: "Create task management UI",
      priority: "Low",
      status: "Completed",
      createdAt: "2026-11-01",
      dueDate: "2026-11-10",
    },
];

const handleSaveTasks = ()=>{
    saveTasks(tasks)
    console.log("Tasks saved !")
}

const handleGetTasks = () =>{
    const savedTasks = getTasks()
    console.log("Received tasks", savedTasks)
}

  
  return (
    <>
    <div className="flex gap-3">
      <button onClick={handleSaveTasks}>Save Tasks</button>
      <button onClick={handleGetTasks}>Get Tasks</button>
    </div>
    
    </>
  )
}
