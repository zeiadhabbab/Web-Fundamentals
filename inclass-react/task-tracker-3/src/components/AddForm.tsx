import type { Task } from "../types";


type AddFormProps = {
  tasks: Task[]
}


const AddForm = ({tasks}: AddFormProps) => {


    const handleAddNew = () => {
        console.log("Clear form");

        tasks.push({
            task: "New Task",
            notes: "New Task Notes",
            isCompleted: false
        });

        console.log(tasks.length);
    }


    return (
        <form className="form">
            <div className="form-row">
                <label className="form-label" for="title">Task title</label>
                <input className="form-input" id="title" type="text" placeholder="e.g. Explain JSX vs HTML" />
            </div>

            <div className="form-row">
                <label className="form-label" for="course">Course / group</label>
                <select className="form-select" id="course">
                    <option value="">Select group</option>
                    <option>Web 1 - Group A</option>
                    <option>Web 1 - Group B</option>
                    <option>React Bootcamp</option>
                </select>
            </div>

            <div className="form-row">
                <label className="form-label" for="notes">Notes</label>
                <textarea className="form-textarea" id="notes" placeholder="Optional details for the task..."></textarea>
            </div>

            <div className="form-footer">
                <button type="button" className="btn btn-secondary">Clear</button>
                <button type="button" className="btn btn-primary" onClick={handleAddNew} >Save task</button>
            </div>
        </form>
    )
}

export default AddForm