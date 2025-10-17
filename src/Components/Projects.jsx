import React from 'react'
import { SmilePlus } from 'lucide-react'
const Projects = () => {
    const info = [
  {
    heading: "Second Brain App",
    duration: "May 2025 - Jun 2025",
    info: "A smart note management system that speeds up retrieval, secures data, and links notes dynamically.",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript", "REST APIs", "CSS", "Tailwind", "JWT Authentication", "Dynamic Linking", "Search & Filtering"],
    link: ""
  },
  {
    heading: "LIC Agent Management",
    duration: "Mar 2025 - Apr 2025",
    info: "A full-stack portal that streamlines policy management and secures agent data.",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "REST APIs", "Frontend & Backend Integration", "Admin Dashboard", "CRUD Operations"],
    link: ""
  },
  {
    heading: "Employee Management System",
    duration: "Feb 2025 - Mar 2025",
    info: "A role-based EMS dashboard improving task assignment and code modularity.",
    skills: ["React.js", "Context API", "Frontend Development", "Modular Architecture", "State Management", "Dashboard Development", "Code Reusability"],
    link: ""
  },
  {
    heading: "2048 Game",
    duration: "Nov 2024 - Dec 2024",
    info: "A C++ implementation of 2048 with dynamic memory management and intelligent tile placement.",
    skills: ["C++", "OOP", "Data Structures", "Algorithms", "Game Development", "Dynamic Memory Management", "Random Number Generation"],
    link: ""
  }
];

    return (
        <div className='w-full gap-1 flex flex-col items-center mt-6'>
            <h1 className='bg-gray-700 text-white dark:bg-white dark:text-black px-2 rounded-md font-sans font-bold'>My Projects</h1>
            <h1 className='font-sans text-2xl font-bold text-center'>Check out my latest Work</h1>
            <h1 className='font-sans text-md text-center text-gray-400'>I have worked on a variety of projects, from simple websites to complex web applications. And here are some of my favourite ones.</h1>
            {/* This Div Contains the code for the projects */}
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-2 mt-4'>
                {info.map((input)=>(
                    <div className='p-2 border rounded-t-xl rounded-b-md border-gray-600 cursor-pointer'>
                        <img src="" alt="" />
                        <h1 className='font-sans font-bold text-md md:text-xl'>{input.heading}</h1>
                        <h1 className='mb-1 mt-1 font-mono text-xs md:text-sm dark:text-gray-200 pt-1'>{input.duration}</h1>
                        <h1 className='text-gray-400 font-mono text-xs md:text-sm'>{input.info}</h1>
                        <div className='w-full my-2 flex flex-row flex-wrap items-center gap-1'>
                            {input.skills.map((item,index)=>(
                                <div className='bg-gray-200 dark:bg-gray-600 rounded-md px-2 py-1 transition-all duration-300'>
                                <h1 key={index} className='text-gray-800 dark:text-white font-mono text-sm md:text cursor-pointer'>{item}</h1>
                                </div>
                            ))}        
                        </div>
                        <div className='flex'>
                            <div className='flex flex-row bg-purple-600 justify-start    items-center gap-1 p-1 rounded-md cursor-pointer'>
                                <SmilePlus className='h-5 w-5 text-white'/>
                                <h1 className='font-sans text-white font-bold'>Website</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects