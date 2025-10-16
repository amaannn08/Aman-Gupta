import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Toggle from "./Components/Toggle";
const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-300">
      <Header></Header>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
        Toggle Theme
      </button>
      <div className=" fixed bottom-6">
        <Toggle></Toggle>
      </div>
    </div>
  );
};

export default App;
