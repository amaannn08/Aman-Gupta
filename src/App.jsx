import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Toggle from "./Components/Toggle";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";

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
    <div className="min-h-full w-full bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-300 flex justify-center">
      <div className="w-[90%] md:w-[60%] lg:w-[50%] flex flex-col items-center">
        <Header />
        <About />
        <Experience />
        <Education/>
        <Skills/>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 mt-6 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          Toggle Theme
        </button>
        <div className="fixed bottom-6">
          {/* <Toggle /> */}
        </div>
      </div>
</div>

  );
};

export default App;
