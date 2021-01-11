// component: Todo
// This component is our list-element that will be rendered in the TodoList <ul>
// Each Todo can be edited, deleted, marked as done

export default function Todo({ text, setTaskList, taskList, taskObject }) {
  const handleEditingTask = (e) => {
    setTaskList(
      // 'loop' through
      taskList.map((item) => {
        if (item.id === taskObject.id) {
          return {
            ...item,
            text: e.target.value,
          };
        }
        return item; // in case, condition doesn't match, return item as it is
      })
    );
  };

  const handleCheckBtn = () => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === taskObject.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };

  const handleDelete = () => {
    setTaskList(taskList.filter((item) => item.id !== taskObject.id));
  };

  return (
    <div className="Todo__div">
      <li className={`Todo__li-element `}>
        <input
          // based on value of done, add class to existing class or do nothing
          className={`Todo__input ${
            taskObject.done ? "Todo__line-through" : ""
          }`}
          type="text"
          maxLength="80"
          value={text}
          onChange={handleEditingTask}
        />
      </li>
      <button onClick={handleCheckBtn} className="Todo__btn Todo__btn-check">
        <i // based on value of done, change class for corresponding icon
          className={` ${taskObject.done ? "fas fa-plus" : "fas fa-check"}`}
        ></i>
      </button>
      <button onClick={handleDelete} className="Todo__btn Todo__btn-trash">
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
}
