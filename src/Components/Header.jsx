import React from 'react'
import { ReactTyped } from "react-typed";
const Header = () => {
  return (
    <div className='mt-10 flex items-center '>
        <div className="flex flex-col items-start px-4 py-6 md:px-12 md:py-12">
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hey, I'm Aman
          </h1>

            <ReactTyped
              className="font-mono text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-2"
              strings={[
                "Software Engineer",
                "CP Enthusiast",
                "Problem Solver",
                "Full Stack Dev",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
            <hr className="border-t border-gray-900 dark:border-white mt-3 mb-3 w-full md:w-full" />
            <h1 className="font-mono text-xs sm:text-sm md:text-xl text-gray-600 dark:text-gray-300 mx-0" >
              BS-MS - IIT Kharagpur
            </h1>
        </div>

        <div>
            <img src="./images/aman.jpeg" className='h-24 p md:h-40 rounded-full ' alt="" />
        </div>
    </div>
  )
}

export default Header