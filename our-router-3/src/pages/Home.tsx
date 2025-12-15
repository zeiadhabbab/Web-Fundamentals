function Home(){


    return (
      <div className="page dashboard">
        <div className="card hero">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h1 className="title">Welcome back</h1>
            <p className="subtitle">Here is a quick snapshot of your account.</p>
          </div>
          <button className="btn primary">Create new</button>
        </div>

        <div className="grid">
          <div className="card stat">
            <p className="eyebrow">Active Projects</p>
            <h2 className="stat-value">12</h2>
            <p className="muted">+2 since last week</p>
          </div>
          <div className="card stat">
            <p className="eyebrow">Tasks</p>
            <h2 className="stat-value">48</h2>
            <p className="muted">12 due today</p>
          </div>
          <div className="card stat">
            <p className="eyebrow">Messages</p>
            <h2 className="stat-value">5</h2>
            <p className="muted">2 unread</p>
          </div>
        </div>

        <div className="card list">
          <div className="list-header">
            <h3 className="title small">Recent activity</h3>
            <span className="muted">Updated just now</span>
          </div>
          <div className="list-items">
            <div className="list-item">
              <div>
                <p className="label strong">Design system refresh</p>
                <p className="muted">Updated components and tokens</p>
              </div>
              <span className="chip success">On track</span>
            </div>
            <div className="list-item">
              <div>
                <p className="label strong">API performance</p>
                <p className="muted">Investigating latency spikes</p>
              </div>
              <span className="chip warning">Review</span>
            </div>
            <div className="list-item">
              <div>
                <p className="label strong">Onboarding flow</p>
                <p className="muted">Copy and validation tweaks</p>
              </div>
              <span className="chip neutral">Planned</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;