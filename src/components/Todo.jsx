// component: Todo

// create a Todo component
// this is our list-element that will be rendered in the TodoList <ul>
export default function Todo({ text }) {
  return (
    <div className="Todo__div">
      <li className="Todo__li-element">{text}</li>
      <button className="Todo__btn Todo__btn-check">
        <i className="fas fa-check"></i>
      </button>
      <button className="Todo__btn Todo__btn-trash">
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
}
