import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { Task } from "../types";


type SearchFormProps = {
    allTasks: Task[],
    setTasksList: Dispatch<SetStateAction<Task[]>>
}



const SearchForm = ({ allTasks, setTasksList }: SearchFormProps) => {
    const handleSearchForm = (e: ChangeEvent<HTMLInputElement>) => {
       
       const keyword = e.target.value.toLowerCase();
       if (keyword === "") {
           setTasksList([...allTasks]);
       } else {
           const newTasks = allTasks.filter((item) => {
                return item.task?.toLowerCase().includes(keyword);
           });
           setTasksList([...newTasks]);
       }


    }

    return (
        <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search tasks…" onChange={handleSearchForm}/>
        </div>
    )
}

export default SearchForm