function AddTodo() {
  return (
    <div className="row kg-row kg-button">
      <div className="col-6">
        <input type="text" placeholder="Enter Todo here"></input>
      </div>
      <div className="col-4">
        <input type="date"></input>
      </div>
      <div className="col-2">
        <button className="btn btn-success">Add</button>
      </div>
    </div>
  );
}
export default AddTodo;
