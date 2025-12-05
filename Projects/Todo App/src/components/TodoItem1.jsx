function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2025";
  return (
    <div className="row kg-row kg-button">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button className="btn btn-danger">delete</button>
      </div>
    </div>
  );
}
export default TodoItem1;
