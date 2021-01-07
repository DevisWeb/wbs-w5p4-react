// component: Form
// create a unique id https://www.npmjs.com/package/uuid
export default function Form({
  inputValue,
  setInputValue,
  taskList,
  setTaskList,
}) {
  // function to get input value 'onChange' of our input-field
  // will run everytime the input changes
  const handleInputOnChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };
  // function to handle what happens 'onClick' of submit button
  const handleSubmit = (e) => {
    setTaskList([
      ...taskList, // spread-operator (preserve/pass existing data of array)
      // here we create an object:
      {
        text: inputValue,
        id: Math.floor(Math.random() * 10000),
        done: false,
      },
    ]);
    // then (re)set input value to empty string
    setInputValue("");
    // function to prevent from Reload
    e.preventDefault();
  };

  return (
    // JSX-content of our component
    // To render our form, ' import Form '  and add  ' <Form /> ' to our App.js
    // In the following input-form we only CALL our functions from ABOVE
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
