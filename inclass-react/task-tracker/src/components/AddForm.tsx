function AddForm() {
  return (
  <form className="form">
              <div className="form-row">
                <label className="form-label" >Task title</label>
                <input className="form-input" id="title" type="text" placeholder="e.g. Explain JSX vs HTML" />
              </div>

              <div className="form-row">
                <label className="form-label">Course / group</label>
                <select className="form-select" id="course">
                  <option value="">Select group</option>
                  <option>Web 1 - Group A</option>
                  <option>Web 1 - Group B</option>
                  <option>React Bootcamp</option>
                </select>
              </div>

              <div className="form-row">
                <label className="form-label">Notes</label>
                <textarea className="form-textarea" id="notes" placeholder="Optional details for the task..."></textarea>
              </div>

              <div className="form-footer">
                <button type="button" className="btn btn-secondary">Clear</button>
                <button type="button" className="btn btn-primary">Save task</button>
              </div>
            </form>
    );
}

export default AddForm;