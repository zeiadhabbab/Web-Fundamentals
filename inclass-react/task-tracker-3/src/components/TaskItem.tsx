import type { TaskItemType }  from "../types"


const TaskItem = ({task, notes, isCompleted}: TaskItemType) => {
    return (
        <li className="task-item">
            <input type="checkbox" className="task-checkbox" checked={isCompleted} />
            <div className="task-main">
                <div className="task-title">{task}</div>
                <div className="task-meta">
                    {isCompleted && <span className="task-tag task-badge--success">Completed</span>}
                    <span>{notes}</span>
                </div>
            </div>
        </li>
    )
}

export default TaskItem