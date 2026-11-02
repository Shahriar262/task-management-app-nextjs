import { Task } from "@/types/task"


export function getTasks() : Task[]{
  const savedTasks = localStorage.getItem("tasks")
  if(!savedTasks){
    return []
  }
   return JSON.parse(savedTasks) as Task[];
}

export function saveTasks(tasks: Task[]){
   localStorage.setItem("tasks", JSON.stringify(tasks))
}

