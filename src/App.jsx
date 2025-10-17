import React, { useState, useEffect ,useRef } from "react";
import { House ,Briefcase,CircleUserRound, Notebook , Code , Github, Linkedin, Twitter, Sun, MoonStar ,} from 'lucide-react';
import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Achievements from "./Components/Achievements";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";


const App = () => {
  const [selected,setSelected]=useState("");
  const [profile,setProfile]=useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const icons = [
    { id: "home", Icon: House, ref: homeRef },
    { id: "briefcase", Icon: Briefcase, ref: experienceRef },
    { id: "code", Icon: Code, ref: projectsRef },
    { id: "circleUser", Icon: CircleUserRound, ref: aboutRef },
  ];
  const profiles=[
    {id:"github",Icon:Github,link:"https://github.com/amaannn08"},
    {id:"linkedin",Icon:Linkedin,link:"https://www.linkedin.com/in/aman-gupta-134ab4230/"},
    {id:"twitter",Icon:Twitter,link:"https://x.com/Amaannn08"},
  ];
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  
  const handleScroll = (id, ref) => {
    setSelected(id);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <BrowserRouter>
        <div className=" w-full  transition-all duration-300 flex justify-center">
          <div className="w-full min-h-screen px-[5%] bg-white text-black dark:bg-gray-900 dark:text-white md:px-[20%] lg:px-[25%] flex flex-col items-center">
            <div ref={homeRef} className="w-full"><Header /></div>
            <div ref={aboutRef} className="w-full"><About /></div>
            <div ref={experienceRef} className="w-full"><Experience /></div>
            <div className="w-full"><Education /></div>
            <div className="w-full"><Skills /></div>

            <div className="fixed bottom-3">
              <div className='flex flex-row items-center justify-center px-4 py-3 my-3 rounded-full bg-white dark:bg-gray-800 border-gray-600 border'>
                <div className='flex flex-row items-center justify-center '>
                  {icons.map(({ id, Icon ,ref }) => (
                      <button key={id} 
                    className={`px-2 py-2 cursor-pointer transition-all ${
                          selected === id
                            ? "bg-gray-300 dark:bg-gray-700  rounded-full"
                            : "hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
                        }`} onClick={() => handleScroll(id, ref)}>
                      <Icon
                        className={`h-5 `}
                      />
                    </button>
                  ))}
                </div>

                <h1 className='font-mono text-black dark:text-white mx-2'>|</h1>

                <div className='flex flex-row items-center justify-center gap-3'>
                  {profiles.map(({id,Icon,link})=>(
                    <a href={link}>
                      <button key={id} onClick={()=>{
                        setProfile(id)
                      }}
                      className={`p-1 cursor-pointer transition-all ${
                          profile === id
                            ? "bg-gray-300 dark:bg-gray-700  rounded-full"
                            : "hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
                        }`}>
                          <Icon className="h-5"/>
                      </button>
                    </a>
                  ))}
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
    </BrowserRouter>
  );
};

export default App;
