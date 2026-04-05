import React from 'react';
import { ReactTyped } from "react-typed";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='mt-8 md:mt-16 w-full flex flex-row items-center mb-10 md:mb-12 justify-between gap-4 md:gap-8'
    >
        <div className="flex flex-col items-start w-[65%] md:w-3/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className='inline-flex items-center gap-1.5 px-2 py-1 md:px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-[10px] sm:text-xs md:text-sm mb-2 md:mb-3 border border-blue-200 dark:border-blue-800'
          >
            👋 Welcome to my space
          </motion.div>
          <h1 className="font-sans text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 tracking-tight leading-tight">
            Hey, I'm Aman
          </h1>

            <ReactTyped
              className="font-mono text-xs sm:text-sm md:text-lg lg:text-xl text-purple-600 dark:text-purple-400 mt-1 md:mt-3 font-semibold"
              strings={[
                "Backend & AI Systems Engineer",
                "Building Scalable Backends",
                "RAG & LLM Integrations",
                "Tech × Finance Enthusiast",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
            
            <hr className="border-t-2 border-gray-100 dark:border-gray-800 mt-3 md:mt-5 mb-3 md:mb-5 w-[90%] md:w-full rounded-full" />
            
            <div className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium bg-gray-50 dark:bg-gray-800/50 px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl border border-gray-100 dark:border-gray-800" >
              <span className='text-sm md:text-lg'>🎓</span> BS-MS - IIT Kharagpur
            </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.1
          }}
          className='w-[35%] md:w-2/5 flex justify-end shrink-0'
        >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-xl md:blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
              <img src="/aman.png" className='relative h-[100px] w-[100px] sm:h-32 sm:w-32 md:h-48 md:w-48 rounded-full object-cover border-2 md:border-[3px] border-white dark:border-gray-800 shadow-md md:shadow-xl' alt="Aman Gupta" />
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Header;