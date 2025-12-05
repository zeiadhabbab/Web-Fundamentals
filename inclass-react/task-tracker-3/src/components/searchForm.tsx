import { TasksData } from "../data";

function handleSearch(event: React.KeyboardEvent<HTMLInputElement>) {
    console.log(event.currentTarget.value);

    let filteredTasks = TasksData.filter((task) => task.task.toLowerCase().includes(event.currentTarget.value.toLowerCase()));

    console.log(filteredTasks);
 }

const SearchForm = () => {
    return (
        <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search tasks…" onKeyUp={handleSearch} />
        </div>
    )
}

export default SearchForm