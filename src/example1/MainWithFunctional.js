import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";
import AppTheme from "./Colors";


const Main = () => {
  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme[0]];
  return(
      <main style = {{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        }}
      >
        <h1>Heading 1</h1>
        <p>This is a paragraph</p>
        <button> This is a button that does nothing</button>
      </main>
  );
}

export default Main;