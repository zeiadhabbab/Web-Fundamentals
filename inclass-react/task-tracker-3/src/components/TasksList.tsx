import TaskItem from "./TaskItem"
import { TasksData } from "../data"


const TasksList = () => {
  let tasksData = TasksData;

  return (
    <section className="panel">
      <div className="panel-header">
        <h2 className="panel-title">Today’s Tasks</h2>
        <span className="panel-meta">{tasksData.filter((task) => task.isCompleted).length} items completed / {tasksData.length} total</span>
      </div>

      <ul className="task-list">
        {tasksData.map((task) => (
          <TaskItem key={task.task} task={task.task} notes={task.notes} isCompleted={task.isCompleted} />
        ))}

      </ul>
    </section>
  )
}

export default TasksList