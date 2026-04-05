import React from 'react';
import { Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

const Projects = () => {
    const info = [
        {
            heading: "ThinkVault : AI Mind Map",
            duration: "11/2025 – 12/2025",
            info: "Built an AI Mind Map using Python, PostgreSQL, and pgvector to enable semantic understanding of content. Implemented vector search by generating Gemini embeddings and querying PG-Vector directly within Postgres. Integrated the DeepSeek API to analyze content and generate explanations across a wide range of inputs. Developed a responsive user interface with real-time search suggestions and drag-drop for enhanced user experience.",
            skills: ["Python", "PostgreSQL", "pgvector", "Gemini API", "DeepSeek API", "React"],
            link: "https://github.com/amaannn08/ThinkVault",
            website: ""
        },
        {
            heading: "Money Health : AI Finance Manager",
            duration: "04/2025 – 05/2025",
            info: "Built a full-stack personal finance app with React, Node.js, and PostgreSQL to track income, expenses, and budgets. Implemented secure JWT + OAuth authentication with email OTP flows. Designed scalable backend with REST APIs and optimized Postgres Schema with budget tracking and automated alerts. Integrated AI-driven insights using Gemini to analyze spending patterns and generate personalized financial advice.",
            skills: ["React", "Node.js", "PostgreSQL", "JWT", "OAuth", "Gemini AI", "RESTful API"],
            link: "https://github.com/amaannn08/AI-Finance-Tracker",
            website: ""
        },
        {
            heading: "StudyBuddy Live : Study Together",
            duration: "03/2025 – 04/2025",
            info: "Built a Real-Time collaborative platform with MERN and Socket.IO for study session synchronization across users. Implemented a responsive React SPA with Context API, JWT featuring Pomodoro timer and dashboard. Designed secure REST API architecture with bcrypt, automated email verification system, and proper error logging. Developed Real-Time friend system with unique invite codes, live study broadcasting notifications via fast WebSockets.",
            skills: ["MERN Stack", "Socket.IO", "React", "Context API", "WebSockets", "JWT"],
            link: "https://github.com/amaannn08/StudyWithMe",
            website: "https://study-with-me-tau.vercel.app/"
        },
        {
            heading: "LIC Agent Management Portal",
            duration: "01/2025 – 02/2025",
            info: "Developed a full-stack portal for agents, reducing policy management time by 40% and improving data accessibility. Engineered secure JWT authentication for agents, safeguarding client policy data and ensuring controlled user access. Designed an admin dashboard for CRUD operations, reducing data entry errors by 50% and improving record accuracy.",
            skills: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "CRUD", "Admin Dashboard"],
            link: "https://github.com/amaannn08/LIC-APP",
            website: "https://lic-app-eight.vercel.app/login"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
    };

    return (
        <section className='w-full pt-6 pb-16 flex flex-col items-center justify-center mx-auto'>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className='flex flex-col items-center gap-3 mb-10 w-full'
            >
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium text-xs mb-2 shadow-sm'>
                    <Code2 size={16} />
                    <span>Portfolio</span>
                </div>
                <h2 className='text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 dark:text-white text-center tracking-tight'>
                    Featured Projects
                </h2>
                <p className='text-gray-600 dark:text-gray-400 text-center max-w-2xl text-sm px-4 mt-2'>
                    A selection of my recent work, showcasing full-stack development, AI integrations, and real-time systems.
                </p>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full'
            >
                {info.map((project, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className='group flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300'
                    >
                        <div className='p-5 flex flex-col flex-grow md:p-6'>
                            <div className='flex justify-between items-start mb-3 gap-4'>
                                <h3 className='text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors'>
                                    {project.heading}
                                </h3>
                            </div>
                            
                            <div className='flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium'>
                                <Calendar size={14} className="text-purple-500 dark:text-purple-400" />
                                <span>{project.duration}</span>
                            </div>
                            
                            <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 flex-grow'>
                                {project.info}
                            </p>
                            
                            <div className='flex flex-wrap gap-2 mb-6'>
                                {project.skills.map((skill, skillIndex) => (
                                    <span 
                                        key={skillIndex} 
                                        className='text-xs font-semibold px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 group-hover:border-purple-200 dark:group-hover:border-purple-800 transition-colors'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            
                            <div className='flex flex-wrap items-center gap-3 mt-auto pt-5 border-t border-gray-100 dark:border-gray-800'>
                                {project.website && (
                                    <a 
                                        href={project.website} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className='flex items-center gap-2 text-xs md:text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5'
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                )}
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className='flex items-center gap-2 text-xs md:text-sm font-bold text-gray-700 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5'
                                    >
                                        <Github size={16} />
                                        Repository
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;