import Todo from "./Todo";

// TodoList component

export default function TodoList({ taskList, setTaskList }) {
  return (
    // inside the ul we want to render our Todo component
    // notice: https://reactjs.org/docs/lists-and-keys.html
    <ul>
      {taskList.map((inputValue) => (
        <Todo
          inputValue={inputValue.text}
          setTaskList={setTaskList}
          taskList={taskList}
          key={inputValue.id}
        />
      ))}
    </ul>
  );
}
