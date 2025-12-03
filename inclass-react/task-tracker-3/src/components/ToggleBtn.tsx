const ToggleBtn = () => {
    return (
        <div className="filters">
          <button className="filter-btn filter-btn--active">All</button>
          <button className="filter-btn">Active</button>
          <button className="filter-btn">Completed</button>
        </div>
    )
}

export default ToggleBtn