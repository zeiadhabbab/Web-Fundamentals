import TaskItem from "./TaskItem";

function Tasks() {


    const tasks = [
        {
            task: "Send project brief",
            isCompleted: false,
            group: "class A",
            note: "Due: 14:00",
        },
        {
            task: "Shop for groceries",
            isCompleted: true,
            group: "class A",
            note: "Due: 14:00",
        },
        {
            task: "Review React homework",
            isCompleted: false,
            group: "class A",
            note: "Due: 14:00",
        },
        {
            task: "Review ....",
            isCompleted: true,
            group: "class D",
            note: "Due: 12:00",
        }
    ];

    return (

        <>
            <div className="panel-header">
                <h2 className="panel-title">Today’s Tasks</h2>
                <span className="panel-meta">{tasks.length} items</span>
            </div>

            <ul className="task-list">

                {tasks.map((taskItem, index) => (
                    <TaskItem
                        key={index}
                        task={taskItem.task}
                        isCompleted={taskItem.isCompleted}
                        group={taskItem.group}
                        note={taskItem.note}
                    />
                ))}
            </ul>

        </>
    )
}

export default Tasks;