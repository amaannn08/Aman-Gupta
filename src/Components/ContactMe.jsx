import React from 'react'

const ContactMe = () => {
  return (
    <div className='mt-10 mb-10 flex flex-col items-center'>
      <h1 className='bg-gray-700 text-white dark:bg-white dark:text-black px-2 rounded-md font-sans font-bold'>Contact</h1>
      <h1 className='font-sans text-2xl font-bold text-center m-2'>Let's Get in Touch!</h1>
      <h1 className='text-center font-mono text-gray-400'>Want to Chat? just drop me a mail with <br /><a className='text-blue-500' href="mailto:amaannn.gupta.08@gmail.com">a direct question</a><br /> and I will respond whenever I can. <br /> I will ignore all soliciting!</h1>
    </div>
  )
}

export default ContactMe