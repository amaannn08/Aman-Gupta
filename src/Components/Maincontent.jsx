import React, { useState, useEffect ,useRef } from "react";
import { House, Briefcase, CircleUserRound, Notebook, Code, Github, Linkedin, Twitter, Sun, MoonStar, Contact, Loader } from 'lucide-react';
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import { motion, useScroll } from "motion/react";

const Maincontent = () => {
  const scrollProgress = useScroll().scrollYProgress;
  const [selected, setSelected] = useState("home");
  const [profile, setProfile] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  
  const icons = [
    { id: "home", Icon: House, ref: homeRef },
    { id: "briefcase", Icon: Briefcase, ref: experienceRef },
    { id: "code", Icon: Code, ref: projectsRef },
    { id: "circleUser", Icon: Contact, ref: aboutRef },
  ];
  
  const profiles = [
    { id: "github", Icon: Github, link: "https://github.com/amaannn08" },
    { id: "linkedin", Icon: Linkedin, link: "https://www.linkedin.com/in/aman-gupta-134ab4230/" },
    { id: "twitter", Icon: Twitter, link: "https://x.com/Amaannn08" },
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
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white min-h-screen font-sans selection:bg-purple-500/30">
        <motion.div 
            style={{ scaleX: scrollProgress }}
            className="origin-left w-full h-1 md:h-1.5 top-0 left-0 fixed z-50 bg-gradient-to-r from-purple-600 to-blue-500 shadow-md"
        ></motion.div>
        
        <div className="w-full flex justify-center">
            <div className="w-full min-h-screen px-6 md:px-20 lg:px-32 max-w-5xl flex flex-col items-center pb-24 md:pb-10 pt-4">
                <div ref={homeRef} className="w-full"><Header /></div>
                <div className="w-full"><About /></div>
                <div ref={experienceRef} className="w-full"><Experience /></div>
                <div className="w-full"><Education /></div>
                <div className="w-full"><Skills /></div>
                <div ref={projectsRef} className="w-full"><Projects /></div>
                <div ref={aboutRef} className="w-full"><ContactMe/></div>
            </div>
            
            {/* Navigation: Bottom Bar on Mobile, Left Sidebar on Desktop */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto z-50 md:left-6 lg:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:bottom-auto">
              <div className='flex flex-row md:flex-col items-center justify-between md:justify-center px-4 py-3 md:py-6 md:px-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-2xl'>
                
                {/* Page Navigation */}
                <div className='flex flex-row md:flex-col items-center gap-1 md:gap-3'>
                  {icons.map(({ id, Icon, ref }) => (
                      <button key={id} 
                        className={`p-2.5 lg:p-3 cursor-pointer transition-all duration-300 flex items-center justify-center group ${
                          selected === id
                            ? "bg-purple-100 text-purple-600 dark:bg-purple-600/20 dark:text-purple-400 rounded-full shadow-inner"
                            : "hover:bg-gray-100 text-gray-500 dark:text-gray-400 dark:hover:bg-gray-800 rounded-full hover:shadow-sm"
                        }`} onClick={() => handleScroll(id, ref)}>
                        <Icon className="h-5 w-5 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform" />
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className='block md:hidden w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1'></div>
                <div className='hidden md:block w-6 h-px bg-gray-300 dark:bg-gray-700 my-4'></div>

                {/* Social Profiles */}
                <div className='flex flex-row md:flex-col items-center gap-1 md:gap-3'>
                  {profiles.map(({id, Icon, link})=>(
                    <a key={id} href={link} target="_blank" rel="noreferrer">
                      <button onClick={() => setProfile(id)}
                        className={`p-2.5 lg:p-3 cursor-pointer transition-all duration-300 flex items-center justify-center group ${
                          profile === id
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 rounded-full shadow-inner"
                            : "hover:bg-gray-100 text-gray-500 dark:text-gray-400 dark:hover:bg-gray-800 rounded-full hover:shadow-sm"
                        }`}>
                          <Icon className="h-5 w-5 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform" />
                      </button>
                    </a>
                  ))}
                </div>

                {/* Divider */}
                <div className='block md:hidden w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1'></div>
                <div className='hidden md:block w-6 h-px bg-gray-300 dark:bg-gray-700 my-4'></div>

                {/* Theme Toggle */}
                <button
                  className="p-2.5 lg:p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 text-yellow-500 dark:text-blue-400 flex items-center justify-center hover:rotate-12 group"
                  onClick={() => setDarkMode(!darkMode)}
                >
                    <Sun className="h-5 w-5 lg:h-5 lg:w-5 block dark:hidden group-hover:scale-110 transition-transform"/>
                    <MoonStar className="h-5 w-5 lg:h-5 lg:w-5 hidden dark:block group-hover:scale-110 transition-transform"/>   
                </button>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default Maincontent;