type TaskProps = {
    key: number;
    task: string;
    isCompleted?: boolean;
    group: string;
    note?: string;
};


function TaskItem({ task, isCompleted = false, group, note, key }: TaskProps) {


    return (

        <li className="task-item" key={key}>
            <input type="checkbox" className="task-checkbox" checked={isCompleted} />
            <div className="task-main">
                <div className="task-title">{task}</div>
                {note && <div className="task-note">{note}</div>}
                <div className="task-meta">
                    {isCompleted && <span className="task-tag task-badge--success">Completed</span>}
                    <span className="task-tag">{group}</span>
                </div>
            </div>
        </li>);
}

export default TaskItem;