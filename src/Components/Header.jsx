import React from 'react'
import { ReactTyped } from "react-typed";
const Header = () => {
  return (
    <div className='flex items-center gap-5'>
        <div className='flex flex-col'>
            <h1 className='font-mono text-2xl font-bold'>Hey, I'm Aman</h1>
            <ReactTyped
              className='font-mono text'
              strings={[
                "Software Engineer",
                "CP Enthusiast",
                "Problem Solver",
                "Full Stack",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              >
            </ReactTyped>
            <hr className=' border-t border-black dark:border-white mt-1 mb-1'/>
        <h1 className='font-mono text-xs mx-2'>BS-MS - IIT Kharagpur</h1>
        </div>
        <div>
            <img src="./images/aman.jpeg" className='h-16 rounded-full ' alt="" />
        </div>
    </div>
  )
}

export default Header