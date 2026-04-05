import React from 'react';
import { motion } from 'motion/react';
import { BriefcaseBusiness } from 'lucide-react';

const Experience = () => {
    const data=[
        {
            company:"WEH Ventures",
            logo:"/weh.svg",
            role:"Software Engineering Intern",
            duration:"Mar 2026 - Present",
            link:"https://wehventures.com/"
        },
        {
            company:"RetaiLabs",
            logo:"/retailabs.png",
            role:"Software Engineering Intern (Agentic AI)",
            duration:"Jan 2026 - Feb 2026",
            link:"https://retailabs.in/"
        },
        {
            company:"Zafo Technologies",
            logo:"/zafo.jpeg",
            role:"Full Stack Engineer",
            duration:"May 2025 - Jun 2025",
            link:"https://zafo.ai/"
        },
        {
            company:"Bhaasha.in",
            logo:"/bhaasha.jpeg",
            role:"Frontend Engineer",
            duration:"Mar 2025 - Apr 2025",
            link:"https://www.bhaasha.in/"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { type: "spring" } }
    };

    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className='w-full flex flex-col mb-12'
        >
            <div className='flex items-center gap-3 mb-6'>
                <BriefcaseBusiness className="text-purple-600 dark:text-purple-400" size={28} />
                <h2 className='font-sans font-bold text-2xl md:text-3xl text-gray-900 dark:text-white'>Work Experience</h2>
            </div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className='flex flex-col gap-4'>
                {data.map((item, index)=>{
                    return (
                        <motion.div key={index} variants={itemVariants} className='group flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl hover:border-purple-300 dark:hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 gap-3'>
                            <div className='flex items-center gap-4'>
                                <a href={item.link} target="_blank" rel="noreferrer" className='flex-shrink-0'>
                                    <div className='p-2 bg-gray-50 dark:bg-white rounded-2xl border border-gray-100 dark:border-gray-200 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 shadow-sm'>
                                        <img src={item.logo} alt={item.company} className='h-10 w-10 md:h-12 md:w-12 object-contain rounded-xl'/>
                                    </div>
                                </a>
                                <div className='flex flex-col'>
                                    <a href={item.link} target="_blank" rel="noreferrer" className='hover:underline decoration-purple-500 decoration-2 underline-offset-4'>
                                        <h3 className='font-sans font-bold text-base md:text-lg text-gray-900 dark:text-white'>{item.company}</h3>
                                    </a>
                                    <h4 className='font-sans font-medium text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-0.5'>{item.role}</h4>
                                </div>
                            </div>
                            <div className='md:text-right mt-1 md:mt-0 flex-shrink-0 w-full md:w-auto flex md:justify-end'>
                                <span className='inline-flex px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl text-xs font-mono font-semibold border border-gray-200 dark:border-gray-700'>
                                    {item.duration}
                                </span>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.section>
    )
}

export default Experience;