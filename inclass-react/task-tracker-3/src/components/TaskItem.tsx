import type { ChangeEvent } from "react";
import type { TaskItemType } from "../types";


const TaskItem = ({task, notes, isCompleted, id, tasks, setTasksList, allTasks, setAllTasks}: TaskItemType) => {

    const toggleCheck = (e:ChangeEvent<HTMLInputElement> ) => {
        const taskId = e.target.id;
        console.log(taskId);
        
        // Update allTasks (source of truth)
        const updatedAllTasks = allTasks.map((item) => {
            if(item.id === Number(taskId)) {
                return { ...item, isCompleted: e.target.checked };
            }
            return item;
        });
        setAllTasks(updatedAllTasks);
        
        // Update tasksList (displayed tasks)
        const updatedTasks = tasks.map((item) => {
            if(item.id === Number(taskId)) {
                return { ...item, isCompleted: e.target.checked };
            }
            return item;
        });
        setTasksList(updatedTasks);
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