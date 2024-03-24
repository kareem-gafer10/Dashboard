import { useState, createContext, useEffect } from "react";

export  const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeFromStorage = localStorage.getItem("darkMode");

    if (darkModeFromStorage) {
      setDarkMode(JSON.parse(darkModeFromStorage));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </>
  );
};

export default DarkModeProvider ;