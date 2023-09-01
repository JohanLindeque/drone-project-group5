import React from 'react'
import drone from'../images/telloDrone.png'

const Hero = () => {
  return (
    <div className='text-white '>

        {/* float-left */}

            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' style={{marginTop: '10px'}}>
            <h1 className='md:text-8xl sm:text-6xl text-4xl font-bold md:py-6' >Drone Project</h1>
            <p className='text-xl font-semibold'>A project by <span className='text-[#32CD32]'>Group 5</span></p>
            <img className=' max-w-[750px] max-h-[600px] object-none ' src={drone} alt='tello drone' />
{/*
            <p className=' text-[#EB1402] font-bold p-2'>  Securing.......</p>
*/}

        </div>
        {/* <div className=' mx-auto flex flex-col justify-center'>
            <img className=' m-w-[100px] m-h-[100px] object-none ' src={drone} alt='tello drone' />
        </div> */}
    </div>
  )
}

export default Hero