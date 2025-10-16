import React from 'react'

const Experience = () => {
    
    return (
        <div className='w-full flex flex-col mt-5'>
            <h1 className='font-mono font-bold text-3xl mb-2'>Work Experience</h1>
            <div className='flex flex-row gap-4 items-center'>
                <img src="./images/zafo.jpeg" alt="Logo :)" className='rounded-full h-10'/>
                <div className=' w-full flex justify-between '>
                    <div className='flex flex-col'>
                        <h1 className='font-mono font-bold text'>Zafo Technologies</h1>
                        <h2 className='font-mono text-sm'>Full Stack Engineer</h2>
                    </div>
                    <div>
                        <h1 className='font-mono text-sm dark:text-gray-400 pt-1'>May 2025 - June 2025</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience