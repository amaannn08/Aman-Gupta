import React from 'react'

const Skills = () => {
    const skills = ["C++", "JavaScript", "TypeScript","Node.js" ,"React", "HTML", "CSS","REST Api" , "Express.js", "Tailwind CSS" ,"MongoDB", "Python", "C" ,"Git & Github" , "Zod", "Figma","JWT" ,"Bcrypt"];

    return (
        <div>
            <h1 className='mt-4 font-mono font-bold text-xl md:text-3xl'>Skills</h1>
            <div className='w-full mt-2 flex flex-row flex-wrap items-center gap-2'>
            {skills.map((item)=>{
                return(
                    <div className='bg-purple-600 rounded-md px-2 py-1'>
                        <h1 className='text-white dark:text-gray-100 font-mono text-sm md:text cursor-pointer'>{item}</h1>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Skills