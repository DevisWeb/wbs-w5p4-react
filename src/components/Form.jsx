import React from "react";

export default function Form({}) {
  // function to get input value
  const handleInputOnChange = (e) => {
    console.log(e.target.value);
  };

  // function to prevent from Reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // JSX-content of our component
    // to render it, import Form + add <Form /> to App.js
    <form>
      <input
        onChange={handleInputOnChange}
        ontype="text"
        className="frm-input"
      />
      <button onClick={handleSubmit} type="submit" className="frm-btn">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}
