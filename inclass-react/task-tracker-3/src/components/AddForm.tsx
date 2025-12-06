import { useRef, type Dispatch, type SetStateAction } from "react";
import type { Task } from "../types";

type AddFormProps = {
    allTasks: Task[],
    setAllTasks: Dispatch<SetStateAction<Task[]>>,
    setTasksList: Dispatch<SetStateAction<Task[]>>
}

const AddForm = ({ allTasks, setAllTasks, setTasksList }: AddFormProps) => {

    const inputTitleRef = useRef<HTMLInputElement>(null);
    const inputNotesRef = useRef<HTMLTextAreaElement>(null);
    const inputCourseRef = useRef<HTMLSelectElement>(null);

    const clearForm = () => {
        if (inputTitleRef.current) {
            inputTitleRef.current.value = "";
        }

        if (inputNotesRef.current) {
            inputNotesRef.current.value = "";
        }

        if (inputCourseRef.current) {
            inputCourseRef.current.value = "";
        }
    }

    const handleAddNew = () => {

        const newTask: Task = {
            id: Date.now(),
            task: inputTitleRef.current?.value || "",
            notes: inputNotesRef.current?.value || "",
            isCompleted: false,
            group: inputCourseRef.current?.value || ""
        };

        const updatedAllTasks = [...allTasks, newTask];
        setAllTasks(updatedAllTasks);
        setTasksList(updatedAllTasks);
        clearForm();
        console.log(allTasks.length);
    }


    return (
        <form className="form">
            <div className="form-row">
                <label className="form-label" htmlFor="title">Task title</label>
                <input ref={inputTitleRef} className="form-input" id="title" type="text" placeholder="e.g. Explain JSX vs HTML" />
            </div>

            <div className="form-row">
                <label className="form-label" htmlFor="course">Course / group</label>
                <select ref={inputCourseRef} className="form-select" id="course">
                    <option value="">Select group</option>
                    <option>Web 1 - Group A</option>
                    <option>Web 1 - Group B</option>
                    <option>React Bootcamp</option>
                </select>
            </div>

            <div className="form-row">
                <label className="form-label" htmlFor="notes">Notes</label>
                <textarea ref={inputNotesRef} className="form-textarea" id="notes" placeholder="Optional details for the task..."></textarea>
            </div>

            <div className="form-footer">
                <button type="button" className="btn btn-secondary"
                    onClick={clearForm}
                >Clear</button>
                <button type="button" className="btn btn-primary"
                    onClick={handleAddNew} >Save task</button>
            </div>
        </form>
    )
}

export default AddForm