import Page from "./components/page";
import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

function App() {
  const [darktheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={[darktheme, setDarkTheme]}>
      <Page />
    </ThemeContext.Provider>
  );
}

export default App;
