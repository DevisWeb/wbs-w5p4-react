import {useState} from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

export default function App() {
  // first data holds the actuell value, second data is a fubction to change the value 
  let [inputValue, setInputValue] = useState(""); // Walde-quest
  let [taskList, setTaskList] = useState ([]); // In die geschweifte Klammer kommt der Datentyp
  return (
    <div className="App">
      <h1>ReactTodo </h1>
      <Form setInputValue = {setInputValue} inputValue = {inputValue} taskList = {taskList} setTaskList = {setTaskList}/>
      <Todolist/>

    </div>
  );
}
