import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#32CD32]'>Group 5</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Team</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Account</li>


        </ul>
    </div>
  )
}

export default Navbar

