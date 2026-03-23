import React from 'react'

const Skills = () => {
    const skills = [
        // Core Programming
        "C++", "JavaScript", "TypeScript", "Python", "C",
      
        // Backend & APIs
        "Node.js", "Express.js", "FastAPI", "REST API",
      
        // Databases
        "PostgreSQL", "MongoDB", "Vector Databases",
      
        // Frontend
        "React", "HTML", "CSS", "Tailwind CSS",
      
        // DevOps & Deployment
        "AWS", "CI/CD", "Git & GitHub",
      
        // Auth & Validation
        "JWT", "Bcrypt", "Zod",
      
        // AI / Advanced
        "RAG Pipelines" ,"N8N" ,"Agentic AI" ,
        "Figma"
      ];
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