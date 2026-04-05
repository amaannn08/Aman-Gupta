import React from 'react';
import { motion } from 'motion/react';
import { TerminalSquare } from 'lucide-react';

const Skills = () => {
    // Structured array based on new priorities but including exhaustive list
    const skills = [
        "C++", "Python", "JavaScript", "TypeScript", "C",
        "FastAPI", "Node.js", "Express", "REST API",
        "RAG", "LLM Integrations", "Vector Search", "Agentic AI", 
        "Langchain", "Mastra", "N8N",
        "PostgreSQL", "pgvector", "MongoDB", "Vector Databases",
        "React", "HTML", "CSS", "Tailwind CSS",
        "AWS", "CI/CD", "Git & GitHub",
        "JWT", "Bcrypt", "Zod", "Figma"
    ];

    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className='w-full flex flex-col mb-12'
        >
            <div className='flex items-center gap-3 mb-6'>
                <TerminalSquare className="text-gray-800 dark:text-gray-200" size={28} />
                <h2 className='font-sans font-bold text-2xl md:text-3xl text-gray-900 dark:text-white'>Technical Skills</h2>
            </div>
            
            <div className='w-full flex flex-row flex-wrap items-center gap-3'>
                {skills.map((item, index) => {
                    return(
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            whileHover={{ y: -2, scale: 1.05 }}
                            className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-xl px-3 py-1.5 md:px-4 md:py-2 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md transition-all cursor-default'
                        >
                            <h1 className='text-gray-800 dark:text-gray-200 font-sans text-xs md:text-sm font-semibold'>{item}</h1>
                        </motion.div>
                    )
                })}
            </div>
        </motion.section>
    )
}

export default Skills;