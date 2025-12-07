import { useState } from 'react'
import './App.css'
import AddForm from './components/AddForm'
import Header from './components/Header'
import SearchForm from './components/searchForm'
import TasksList from './components/TasksList'
import ToggleBtn from './components/ToggleBtn'
import { tasksData } from './data'
import type { Task } from './types'

function App() {

  const [allTasks, setAllTasks] = useState<Task[]>(tasksData);
  const [tasksList, setTasksList] = useState<Task[]>(tasksData);
  const title = "Task Tracker";
  return (
    <div className="app">
      <Header>
        <div>
          <h1 className="app-title">{title}</h1>
           <p className="app-subtitle">Simple UI for practicing converting HTML to React components.</p>
        </div>
        <div className="summary-chip">
            {tasksList.length} tasks today • {tasksList.filter((item) => item.isCompleted).length} completed
        </div>
      </Header>

      <div className="toolbar">
        <ToggleBtn allTasks={allTasks} setTasksList={setTasksList} />

        <SearchForm allTasks={allTasks} setTasksList={setTasksList} />
      </div>

      <div className="content">
        <TasksList tasks={tasksList} setTasksList={setTasksList} allTasks={allTasks} setAllTasks={setAllTasks} />

        <aside className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Add New Task</h2>
            <span className="panel-meta">Form only UI, no logic</span>
          </div>

          <AddForm allTasks={allTasks} setAllTasks={setAllTasks} setTasksList={setTasksList} />
        </aside>
      </div>
    </div>
  )
}

export default App
