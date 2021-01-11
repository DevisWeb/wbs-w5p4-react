export default function ButtonMainTheme({ buttonText, theme, setTheme }) {
  const handleColorTheme = () => {
    // create ternary operator in order to have a css class
    // on App.js div that will take the value of the state variable: theme
    setTheme(
      theme === "App-main_theme-light"
        ? "App-main_theme-dark"
        : "App-main_theme-light"
    );
  };

  return (
    <button className="App-main__Btn" onClick={handleColorTheme}>
      {buttonText}
    </button>
  );
}
