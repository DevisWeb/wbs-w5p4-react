// component: Todo

// function will run everytime the input changes: to get input value 'onChange' of our input-field

// const newList = list.filter((item) => item.id !== id);

// create a Todo component
// this is our list-element that will be rendered in the TodoList <ul>
export default function Todo({ text, setTaskList, taskList, taskObject }) {
  // pass value and key value as parameters:
  const handleEditingTask = (e) => {
    console.log(e.target.value);

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
      // 'loop' through
      taskList.map((item) => {
        if (item.id === taskObject.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item; // in case, condition doesn't match, return item as it is
      })
    );
  };
  const handleDelete = () => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === taskObject.id) {
          return {};
        }
      })
    );
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
      <button className="Todo__btn Todo__btn-trash">
        conClick={ha}
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
}
