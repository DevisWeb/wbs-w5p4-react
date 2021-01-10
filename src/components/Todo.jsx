// component: Todo

// function will run everytime the input changes: to get input value 'onChange' of our input-field

// const newList = list.filter((item) => item.id !== id);

// create a Todo component
// this is our list-element that will be rendered in the TodoList <ul>
export default function Todo({ text, setTaskList, taskList, taskObject }) {
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
  return (
    <div className="Todo__div">
      <li
        className={`Todo__li-element ${
          taskObject.done ? "Todo__line-through" : ""
        }`}
      >
        {text}
      </li>
      <button onClick={handleCheckBtn} className="Todo__btn Todo__btn-check">
        <i
          className={`fas fa-check ${taskObject.done ? "fas fa-plus" : ""}`}
        ></i>
      </button>
      <button className="Todo__btn Todo__btn-trash">
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
}
