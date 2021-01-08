import { v4 as uuid } from "uuid"; // unique id, see https://www.npmjs.com/package/uuid

// component: Form
export default function Form({
  inputValue,
  setInputValue,
  taskList,
  setTaskList,
}) {
  // function will run everytime the input changes: to get input value 'onChange' of our input-field
  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  // function to handle what happens 'onClick' of submit button
  const handleSubmit = (e) => {
    setTaskList([
      // spread-operator (preserve/pass existing data of array)
      ...taskList,

      // CREATE an OBJECT - each object will be added to our array []:
      {
        text: inputValue,
        id: uuid(),
        done: false,
      },
    ]);
    setInputValue(""); // on submit, after object is created, (re)set input value to empty string
    e.preventDefault(); // function to prevent from Reload
  };

  return (
    // JSX-section of our component
    // To render our form, ' import Form '  and add  ' <Form /> ' to our App.js
    // In the following input-form we only CALL our functions from ABOVE

    <form className="Form__input-form App-main__vertical">
      <input
        onChange={handleInputOnChange}
        type="text"
        className="Form__input"
        value={inputValue}
      />
      <button onClick={handleSubmit} type="submit" className="Form__btn">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
}
