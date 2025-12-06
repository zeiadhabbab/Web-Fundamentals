

type SearchFormProps = {
    tasks: Task[],
    oldTasks: Task[],
    setTasksList: Dispatch<SetStateAction<Task[]>>
}



const SearchForm = ({ tasks, oldTasks, setTasksList }: SearchFormProps) => {
    const handleSearchForm = (e: ChangeEvent<HTMLInputElement>) => {
       
       const keyword = e.target.value.toLowerCase();
       let newTasks = tasks.filter((item) => {
            return item.task.toLowerCase().includes(keyword);
        })
        if(keyword === "") {
            newTasks = oldTasks;
        }
        setTasksList([... newTasks]);


    }

    return (
        <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search tasks…" onChange={handleSearchForm}/>
        </div>
    )
}

export default SearchForm