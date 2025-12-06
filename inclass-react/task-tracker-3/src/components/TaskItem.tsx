import type { ChangeEvent } from "react";
import type { TaskItemType } from "../types";


const TaskItem = ({task, notes, isCompleted, id, tasks, setTasksList}: TaskItemType) => {

    const toggleCheck = (e:ChangeEvent<HTMLInputElement> ) => {
        const taskId = e.target.id;
        console.log(taskId);
        tasks.forEach((item) => {
            if(item.id === Number(taskId)) {
                item.isCompleted = e.target.checked
            }
        });

        setTasksList([...tasks]);
    }


    return (
        <li className="task-item" key={id + ''} >
            <input id={id + ''} type="checkbox" onChange={toggleCheck} className="task-checkbox" checked={isCompleted} />
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