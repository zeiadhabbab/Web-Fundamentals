import { useState, type Dispatch, type SetStateAction } from "react";
import type { Task } from "../types";

type ToggleBtnProps = {
  allTasks: Task[],
  setTasksList: Dispatch<SetStateAction<Task[]>>
}


const ToggleBtn = ({ allTasks, setTasksList }: ToggleBtnProps) => {

  const [allBtnClass, setAllBtnClass] = useState('filter-btn--active');
  const [activeBtnClass, setActiveBtnClass] = useState('');
  const [completedBtnClass, setCompletedBtnClass] = useState('');


  const filterTasks = (event: React.MouseEvent<HTMLButtonElement>, filter: string) => {
    event.preventDefault();
    let filteredTasks;

    if (filter === "all") {
      filteredTasks = allTasks;
      setAllBtnClass('filter-btn--active')
      setActiveBtnClass('');
      setCompletedBtnClass('');
    } else if (filter === "active") {
      setAllBtnClass('')
      setActiveBtnClass('filter-btn--active');
      setCompletedBtnClass('');
      filteredTasks = allTasks.filter(task => !task.isCompleted);
    } else if (filter === "completed") {
      setAllBtnClass('')
      setActiveBtnClass('');
      setCompletedBtnClass('filter-btn--active');
      filteredTasks = allTasks.filter(task => task.isCompleted);
    } else {
      filteredTasks = allTasks;
      setAllBtnClass('filter-btn--active')
      setActiveBtnClass('');
      setCompletedBtnClass('');
    }
    setTasksList(filteredTasks);
  };



    return (
        <div className="filters">
          <button onClick={e => filterTasks(e, 'all')} className={'filter-btn ' + allBtnClass}>All</button>
          <button onClick={e => filterTasks(e, 'active')} className={'filter-btn ' + activeBtnClass}>Active</button>
          <button onClick={e => filterTasks(e, 'completed')} className={'filter-btn ' + completedBtnClass}>Completed</button>
        </div>
    )
}

export default ToggleBtn