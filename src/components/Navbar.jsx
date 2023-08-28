import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav);
  }

  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#32CD32]'>Group 5</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'> <a href="/">HOME</a> </li>
            <li className='p-4'> <a href="/about">ABOUT</a> </li>
            <li className='p-4'> <a href="/login">LOGIN</a> </li>
            <li className='p-4'> <a href="/signup">SIGNUP</a> </li>

        </ul>

        {/* Burger menu */}

        {/* <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose  size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#0e327a] ease-in-out-500' : ' fixed left-[-1000%] '}>
        <h1 className='w-full text-3xl font-bold text-[#32CD32] m-4'>Group 5</h1>
        <ul className='uppercase p-4 '>
            <li className='p-4 border-b  border-gray-600'>About</li>
            <li className='p-4 border-b  border-gray-600'>Home</li>
            <li className='p-4 border-b  border-gray-600'>LogIn</li>
            <li className='p-4'>SignUp</li>

        </ul>

        </div> */}

    </div>
  )
}

export default Navbar

