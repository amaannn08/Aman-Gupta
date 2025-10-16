import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Toggle from "./Components/Toggle";
import About from "./Components/About";
import Experience from "./Components/Experience";

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
    <div className=" bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="h-screen w-[50%] mx-[25%] flex flex-col items-center transition-all duration-300">
        <Header></Header>
        <About></About>
        <Experience></Experience>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          Toggle Theme
        </button>
        <div className=" fixed bottom-6">
          {/* <Toggle></Toggle> */}
        </div>
      </div>
    </div>
  );
};

export default App;
