// component: Todo

// function will run everytime the input changes: to get input value 'onChange' of our input-field

// const newList = list.filter((item) => item.id !== id);

// create a Todo component
// this is our list-element that will be rendered in the TodoList <ul>
export default function Todo({ text, setTaskList, taskList, inputValue }) {
  const handleCheck = () => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === inputValue.id) {
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
      <li className="Todo__li-element">{text}</li>
      <button onClick={handleCheck} className="Todo__btn Todo__btn-check">
        <i className="fas fa-check"></i>
      </button>
      <button className="Todo__btn Todo__btn-trash">
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
}
