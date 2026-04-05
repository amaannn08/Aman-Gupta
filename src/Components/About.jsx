import React from 'react';
import { motion } from 'motion/react';
import { UserCircle } from 'lucide-react';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className='w-full flex flex-col mb-12'
    >
        <div className='flex items-center gap-3 mb-5'>
          <UserCircle className="text-purple-600 dark:text-purple-400" size={28} />
          <h2 className='font-sans font-bold text-2xl md:text-3xl text-gray-900 dark:text-white'>About Me</h2>
        </div>
        
        <div className='bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-5 md:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow'>
          <p className='font-sans text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed'>
            I’m Aman, a <span className='font-semibold text-purple-600 dark:text-purple-400'>Backend & AI Systems Engineer</span> from IIT Kharagpur. I build AI-powered products and scalable backend systems, mostly working with RAG pipelines, vector databases, and APIs that actually ship.<br/><br/>
            I'm deeply into <span className='font-semibold text-gray-900 dark:text-white'>AI-native products</span> (not just wrappers), <span className='font-semibold text-gray-900 dark:text-white'>backend systems that scale</span>, and the intersection of <span className='font-semibold text-gray-900 dark:text-white'>Tech × Finance</span>. Currently, my focus is wrapped around building production-ready AI systems and exploring robust, deeper backend architecture.
          </p>
        </div>
    </motion.section>
  )
}

export default About;