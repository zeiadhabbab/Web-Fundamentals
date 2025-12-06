import type { Dispatch, SetStateAction } from "react"
import type { Task } from "../types"
import TaskItem from "./TaskItem"


type TaskListProps = {
  tasks: Task[],
  setTasksList: Dispatch<SetStateAction<Task[]>>
}

const TasksList = ({tasks, setTasksList}: TaskListProps) => {

  return (
    <section className="panel">
      <div className="panel-header">
        <h2 className="panel-title">Today’s Tasks</h2>
        <span className="panel-meta">{tasks.filter((task) => task.isCompleted).length} items completed / {tasks.length} total</span>
      </div>

      <ul className="task-list">



        {tasks.map((task) => (
          <TaskItem  task={task.task} notes={task.notes} isCompleted={task.isCompleted} id={task.id} tasks={tasks} setTasksList={setTasksList} />
        ))}

      </ul>
    </section>
  )
}

export default TasksList