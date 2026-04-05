import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

const ContactMe = () => {
  return (
    <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='mt-10 flex flex-col items-center justify-center p-8 md:p-10 mb-20 md:mb-32 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-slate-900 border border-indigo-100 dark:border-gray-800 rounded-3xl shadow-lg w-full text-center relative overflow-hidden'
    >
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
        
        <div className='z-10 flex flex-col items-center'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600 text-white font-medium text-xs md:text-sm mb-5'>
                <Mail size={16} />
                <span>Contact</span>
            </div>
            <h2 className='text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-5 tracking-tight'>
                Let's Get in Touch!
            </h2>
            <p className='text-base md:text-lg max-w-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-sans px-4'>
                Want to chat? Just drop me an email with a direct question and I will respond whenever I can. I ignore all soliciting!
            </p>
            <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:amaannn.gupta.08@gmail.com"
                className='px-6 py-3 md:px-8 md:py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all flex items-center gap-3'
            >
                <Mail size={20} />
                Say Hello
            </motion.a>
        </div>
    </motion.section>
  )
}

export default ContactMe;