import './App.css'
import AddForm from './components/AddForm'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Tasks from './components/Tasks'
import ToggleBtn from './components/ToggleBtn'

function App() {

  return (
    <>
      <div className="app">
        <Header />


        <div className="toolbar">
          <ToggleBtn />
          <SearchForm />
        </div>

        <div className="content">
          <section className="panel">
            

            <Tasks />
          </section>

          <aside className="panel">
            <div className="panel-header">
              <h2 className="panel-title">Add New Task</h2>
              <span className="panel-meta">Form only UI, no logic</span>
            </div>

            <AddForm />
          </aside>
        </div>
      </div>
    </>
  )
}

export default App
