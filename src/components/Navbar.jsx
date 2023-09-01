import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav);
  }

  return (
    
    <div className='max-w-[auto] bg-[#051026] w-full fixed mt-[-10px]'>
    <div className='flex justify-between items-center h-24 max-w-[80%] mx-auto px-4 text-white bg-[#051026]'>
        <h1 className='w-auto pl-[30px] pr-[30px] text-3xl font-bold text-[#D3E1FF] bg-[#0A2254] square border-2 border-s-0 border-t-0 p-3' style={{borderRadius: '22.5px', borderColor: '#133F9C'}}>Home Page</h1>
        <ul className='md:flex bg-[#0A2254] w-auto h-[60px] text-[#D3E1FF] border-2 border-s-0 border-t-0' style={{borderRadius: '22.5px', borderColor: '#133F9C'}}>
            <li className='p-4 mt-[auto] mb-[auto] pt-[1%] pl-6 border-e h-8'>Home</li>
            <li className='p-4 mt-[auto] mb-[auto] pt-[1%] border-e h-8'>About</li>
            <li className='p-4 mt-[auto] mb-[auto] pt-[1%] border-e h-8'>Log In</li>
            <li className='p-4 mt-[auto] mb-[auto] pt-[1%] pr-5 h-8'>Sign Up</li>

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
    </div>
  )
}

export default Navbar

