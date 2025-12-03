import './App.css'
import AddForm from './components/AddForm'
import Header from './components/Header'
import SearchForm from './components/searchForm'
import TasksList from './components/TasksList'
import ToggleBtn from './components/ToggleBtn'

function App() {

  const title = "Task Tracker";
  return (
    <div className="app">
      <Header>
        <div>
          <h1 className="app-title">{title}</h1>
           <p className="app-subtitle">Simple UI for practicing converting HTML to React components.</p>
        </div>
        <div className="summary-chip">
            3 tasks today • 1 completed
        </div>
      </Header>

      <div className="toolbar">
        <ToggleBtn />

        <SearchForm />
      </div>

      <div className="content">
        <TasksList />

        <aside className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Add New Task</h2>
            <span className="panel-meta">Form only UI, no logic</span>
          </div>

          <AddForm />
        </aside>
      </div>
    </div>
  )
}

export default App
