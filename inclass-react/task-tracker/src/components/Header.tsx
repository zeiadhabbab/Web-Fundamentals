function Header() {
  return (
        <header className="app-header">
          <div>
            <h1 className="app-title">Task Tracker</h1>
            <p className="app-subtitle">
              Simple UI for practicing converting HTML to React components.
            </p>
          </div>
          <div className="summary-chip">
            3 tasks today • 1 completed
          </div>
        </header>
  )
}
export default Header;