import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import tLogo from '../images/transparentLogo.png'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav);
  }

  return (
    <div >
        <div className=' flex justify-between content-center h-[2px] mt-[20px]  max-w-[auto] mx-auto px-20 text-white border-bottom-width: 5px border-color: #F3F4F6'>
          <h1 className=' text-3xl font-bold text-[white]'>Group 5</h1>
         
          {/* <img src={tLogo} alt="logo" className='w-1/4 mx-auto object-fit' /> */}
          <ul className='hidden md:flex space-x-4 font-medium  '>
              <li className='p-2 hover:text-[#ff8c00] hover:font-bold'> <a href="/">HOME</a> </li>
              <li className='p-2 hover:text-[#ff8c00] hover:font-bold'> <a href="/about">ABOUT</a> </li>
              <li className='p-2 hover:text-[#ff8c00] hover:font-bold'> <a href="/login">LOGIN</a> </li>
              <li className='p-2 hover:text-[#ff8c00] hover:font-bold'> <a href="/signup">SIGNUP</a> </li>

          </ul>
          
        </div>

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

