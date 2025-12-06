import type { Task } from "../types"
import TaskItem from "./TaskItem"


type TaskListProps = {
  tasks: Task[]
}

const TasksList = ({tasks}: TaskListProps) => {

  return (
    <section className="panel">
      <div className="panel-header">
        <h2 className="panel-title">Today’s Tasks</h2>
        <span className="panel-meta">{tasks.filter((task) => task.isCompleted).length} items completed / {tasks.length} total</span>
      </div>

      <ul className="task-list">

        {tasks.map((task) => (
          <TaskItem key={task.task} task={task.task} notes={task.notes} isCompleted={task.isCompleted} />
        ))}

      </ul>
    </section>
  )
}

export default TasksList