export type Task = {
    id: string;
    title: string;
    description?: string;
    priority: "Low" | "Medium" | "High" ;
    status: "Pending" | "In Progress" | "Completed" | "Hold" ;
    createdAt: string;
    updatedAt?: string;
    dueDate: string;
}