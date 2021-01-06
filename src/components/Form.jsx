import React from "react";

      export default function Form({inputValue, setInputValue,taskList, setTaskList}) {
  // function to get input value
  const handleInputOnChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
    
  };

  // function to prevent from Reload
  const handleSubmit = (e) => {
    setTaskList([...taskList,
      { 
      text: inputValue, 
      id: Math.floor(Math.random() * 10000), 
      done: false, 
    }
  
  ]
      );
      setInputValue("");

    e.preventDefault();


  };

  return (
    // JSX-content of our component
    // to render it, import Form + add <Form /> to App.js
    // Funktionen werden hier nur aufgerufen 
    <form>
      <input
        onChange={handleInputOnChange}
        type="text"
        className="frm-input"
        value={inputValue}
      />
      <button onClick={handleSubmit} type="submit" className="frm-btn">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}



