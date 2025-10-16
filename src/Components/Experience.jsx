import React from 'react'

const Experience = () => {
    const data=[
        {
            company:"Zafo Technologies",
            logo:"/zafo.jpeg",
            role:"Full Stack Engineer",
            duration:"May 2025 - Jun 2025",
            link:"https://zafo.ai/"
        },{
            company:"Bhaasha.in",
            logo:"/bhaasha.jpeg",
            role:"Frontend Engineer",
            duration:"Mar 2025 - Apr 2025",
            link:"https://www.bhaasha.in/"
        }
    ]
    return (
        <div className='w-full flex flex-col mt-5'>
            <h1 className='font-mono font-bold text-xl md:text-3xl'>Work Experience</h1>
            {data.map((item)=>{
                return (
                    <> 
                        <div className='flex flex-row gap-4 items-center my-2'>
                            <a href={item.link}><img src={item.logo} alt="Logo :)" className='rounded-full cursor-pointer h-8 w-10 md:h-10 md:w-12'/></a>
                            <div className=' w-full flex justify-between cursor-pointer'>
                                <div className='flex flex-col'>
                                    <h1 className='font-mono font-bold text-sm md:text'>{item.company}</h1>
                                    <h2 className='font-mono text-xs md:text-sm'>{item.role}</h2>
                                </div>
                                <div>
                                    <h1 className='font-mono text-xs md:text-sm dark:text-gray-400 pt-1'>{item.duration}</h1>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Experience