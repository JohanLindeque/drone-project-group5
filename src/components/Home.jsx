import React from 'react'
import drone from'../images/telloDrone.png'
import laptop from'../images/laptop.jpg'

const Hero = () => {
  return (
    //  Home page
    <div>
      {/*  Hero section */}
      <div className='text-white '>

          <div className='  max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
              <img className=' max-w-[750px] max-h-[600px] object-none ' src={drone} alt='tello drone' />

              <p className=' text-[#EB1402] font-bold p-2'>  Securing.......</p>
              <h1 className='md:text-8xl sm:text-6xl text-4xl font-bold md:py-6' >Drone Project</h1>
              <p className='text-xl font-semibold'>A project by <span className='text-[#32CD32]'>Group 5</span></p>

          </div> 
      </div>

      {/* Project section */}
      <div className='w-full bg-white py-16 px-4'> 
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

          <div>
            <img className=' max-w-[750px] max-h-[600px] object-fill ' src={laptop} alt='tello drone' />
          </div>

          <div>
            <h1 className='text-3xl font-bold text-[#32CD32]'>Project</h1>
            <p className='text-xl font-semibold'><span>A project ...  kort text highlight features kom hier</span></p>  
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolorum animi quis atque corporis maxime earum aliquid, velit consequatur delectus ullam iste repellat porro sint! Quis ab quisquam ipsum quibusdam.</p>
          </div>
          
        </div>
      </div>



    </div>

  )
}

export default Hero