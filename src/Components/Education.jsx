import React from 'react'

const Education = () => {
    const data=[
        {
            college:"IIT Kharagpur",
            logo:"/iitkgp.png",
            course:"BS-MS Exploration Geophysics",
            duration:"2022 - 2027",
            link:"https://www.iitkgp.ac.in/"
        },{
            college:"Sikkim Manipal Institute of Technology",
            logo:"/smit.jpeg",
            course:"BTech Computer Science & Engineering",
            duration:"2021 - 2022",
            link:"https://smu.edu.in/smit/"
        }
    ]
    return (
        <div className='w-full flex flex-col mt-5'>
            <h1 className='font-mono font-bold text-xl md:text-3xl'>Education</h1>
            {data.map((item)=>{
                return (
                    <> 
                        <div className='flex flex-row gap-4 items-center my-2'>
                            <a href={item.link}><img src={item.logo} alt="Logo :)" className='rounded-full cursor-pointer border-gray-300 border h-8 w-10 md:h-10 md:w-12'/></a>
                            <div className=' w-full flex justify-between cursor-pointer'>
                                <div className='w-full justify-center flex flex-col'>
                                    <h1 className='font-mono font-bold text-sm md:text'>{item.college}</h1>
                                    <h2 className='font-mono text-xs md:text-sm'>{item.course}</h2>
                                </div>
                                <div className='w-[50%] flex justify-end'>
                                    <h1 className=' font-mono text-xs md:text-sm dark:text-gray-400 pt-1'>{item.duration}</h1>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Education