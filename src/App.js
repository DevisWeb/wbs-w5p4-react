import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/TodoList";

export default function App() {
  // In [ ] of our useState contain the following state-variables:
  // first: holds the actual value, second: is a function/method to change the actual value
  // In ( ) of our useState we pass the initial state/value, that can be any Javascript data type
  let [inputValue, setInputValue] = useState(""); // initial state is an empty string
  let [taskList, setTaskList] = useState([]); // initial state is an empty array
  return (
    <div className="App">
      <h1>ReactTodo </h1>
      <Form
        setInputValue={setInputValue}
        inputValue={inputValue}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Todolist />
    </div>
  );
}
