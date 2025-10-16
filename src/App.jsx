import React, { useState, useEffect } from "react";
import { House , Notebook , Code ,PenLine , Github, Linkedin, Twitch, Twitter, Sun, MoonStar ,} from 'lucide-react';
import Header from "./Components/Header";
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
        <div className=" w-full  transition-all duration-300 flex justify-center">
      <div className="w-full min-h-screen px-[5%] bg-white text-black dark:bg-gray-900 dark:text-white md:px-[20%] lg:px-[25%] flex flex-col items-center">
        <Header />
        <About />
        <Experience />
        <Education/>
        <Skills/>
        
        <div className="fixed bottom-3">
          <div className='flex flex-row items-center justify-center px-4 py-3 rounded-full bg-white dark:bg-gray-800 border-gray-600 border'>
        <div className='flex flex-row items-center justify-center gap-3'>
          <House className="h-5 cursor-pointer"/>
          <Notebook className="h-5 cursor-pointer"/>
          <Code className="h-5 cursor-pointer"/>
          <PenLine className="h-5 cursor-pointer"/>
        </div>

        <h1 className='font-mono text-black dark:text-white mx-2'>|</h1>

        <div className='flex flex-row items-center justify-center gap-3'>
          <Github className="h-5 cursor-pointer"/>
          <Linkedin className="h-5 cursor-pointer"/>
          <Twitter className="h-5 cursor-pointer"/>
        </div>
        <h1 className='font-mono text-black dark:text-white mx-2'>|</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}>
            <Sun className="h-5 cursor-pointer block dark:hidden"/>
            <MoonStar className="h-5 cursor-pointer hidden dark:block"/>   
        </button>
          
    </div>
        </div>
      </div>
</div>

  );
};

export default App;
