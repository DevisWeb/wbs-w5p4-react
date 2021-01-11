import { useEffect, useState } from "react";
import "./App.css";
import ButtonMainTheme from "./components/Controls/Buttonmaintheme";
import Form from "./components/Form";
import Todo from "./components/Todo";
import TodoList from "./components/Todolist";

export default function App() {
  // In [ ] of our useState contain the following state-variables:
  // first: holds the actual value, second: is a function/method to change the actual value
  // In ( ) of our useState we pass the initial state/value, that can be any Javascript data type
  let [inputValue, setInputValue] = useState(""); // initial state is an empty string
  let [taskList, setTaskList] = useState([]); // initial state is an empty array
  let [theme, setTheme] = useState("App-main_theme-light");

  useEffect(() => {
    let localTaskList = JSON.parse(
      localStorage.getItem("localStorage-TaskList") || []
    );
    setTaskList(localTaskList);
  }, []); // dependencyArray, remember:
  // if empty --> only runs ONCE, when component is rendered initially

  useEffect(() => {
    localStorage.setItem("localStorage-TaskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <main className={`App-main ${theme}`}>
        <h1>ReactTodo </h1>
        <ButtonMainTheme
          buttonText={`Change to ${
            theme === "App-main_theme-light" ? "dark-" : "light-"
          }Theme`}
          theme={theme}
          setTheme={setTheme}
        />
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TodoList taskList={taskList} setTaskList={setTaskList} />
      </main>
    </div>
  );
}
