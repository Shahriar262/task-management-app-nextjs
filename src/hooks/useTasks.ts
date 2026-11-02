import { Task } from "@/types/task";
import { getTasks, saveTasks } from "@/utils/localstorage";
import { useEffect, useState } from "react";


export function useTasks(){
 const [tasks, setTasks] = useState<Task[]>([])
 useEffect(()=>{
     const savedTasks= getTasks()
     setTasks(savedTasks)
   },[])

   const addTask = (newTask: Task) => {
  const updatedTasks = [...tasks, newTask];

  setTasks(updatedTasks);
  saveTasks(updatedTasks);
};

const deleteTask = (id: string)=>{
    const deletedTasks = tasks.filter((task)=> task.id !== id)
    setTasks(deletedTasks)
    saveTasks(deletedTasks)
}

    return {
    tasks,
    addTask,
    deleteTask
  };
}