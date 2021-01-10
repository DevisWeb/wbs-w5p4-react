import Todo from "./Todo";

// TodoList component
export default function TodoList({ taskList, setTaskList }) {
  return (
    // inside the ul we want to render our Todo component
    // * notice: https://reactjs.org/docs/lists-and-keys.html

    <ul className="TodoList__ul App-main__vertical">
      {taskList.map((taskObject) => (
        <Todo
          taskObject={taskObject}
          setTaskList={setTaskList}
          taskList={taskList}
          text={taskObject.text}
          key={taskObject.id}
        />
      ))}
    </ul>
  );
}
