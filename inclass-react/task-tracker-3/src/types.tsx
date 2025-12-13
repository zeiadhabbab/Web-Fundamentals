import type { Dispatch, SetStateAction } from "react"

export type TaskItemType = {
    task: string
    notes: string
    isCompleted: boolean
    id: number,
    tasks: Task[]
    setTasksList: Dispatch<SetStateAction<Task[]>>
    allTasks: Task[]
    setAllTasks: Dispatch<SetStateAction<Task[]>>
}


export type Task = {
    id: number;
    task?: string;
    notes?: string;
    isCompleted?: boolean;
    group?: string;
}