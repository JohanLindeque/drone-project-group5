import React from 'react'
import drone from'../images/telloDrone.png'
import laptop from'../images/laptop.jpg'
import hand from '../images/droneHand.jpg'

const Hero = () => {
  return (
    //  Home page
    <div>
      {/*  Hero section */}
      <div className='text-white bg-[#0E327A]'>

          <div className='  max-w-[800px] mt-[10px]  w-full h-screen mx-auto text-center flex flex-col justify-center'>
            
              
              <h1 className='md:text-8xl sm:text-6xl text-4xl font-bold md:py-6' >Drone Project</h1>
              <p className='text-xl font-semibold'>A project by <span className='text-[#32CD32]'>Group 5</span></p>
              <p className=' text-[#ff9E3D] font-bold p-2'>  Secure, Monitor, Innovation </p>

              <img className=' max-w-[750px] max-h-[600px] object-none ' src={drone} alt='tello drone' />

          </div> 
      </div>

      {/* Project section */}
      <div className='w-full bg-white py-16 px-4'> 
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

          <div>
            <img className=' max-w-[600px] max-h-[550px] object-contain px-4' src={hand} alt='drone fly above hand' />
          </div>

          <div className='px-auto'>
            <h1 className='text-4xl font-bold text-[#32CD32]'>Project</h1>
            <br />
            <p className='text-2xl font-semibold'><span>A Drone Innovation Project </span></p>  
            <br />
            <p className='text-xl'> We are a group of 3rd year BSc Computing students at Belgium Campus.Through innovative <br />
              exploration and hands-on experience, we're pioneering new horizons in various industries. <br />
               Our mission?<br />
              To secure, monitor, and elevate possibilities with drones, redefining the way we <br />
              interact with technology and the world around us</p>
          </div>
          
        </div>
      </div>
      
      {/* Feautures section */}
      <div className='w-full bg-[#dde4f3] py-16 px-4'> 
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          
          <div>
            <h1 className='text-4xl font-bold text-[#ff9E3D]'>Feautures</h1>
            <br />
            <p className='text-2xl font-semibold'><span>Some of the main Feautures</span></p>  
            <br />
            <h4  className='text-xl font-weight-600' >Discover the Power of drones:</h4>
            <p  className='text-xl'> 

                -Real-time Monitoring and Surveillance <br />
                -Effortless Drone Flight Control <br />
                -Intelligent Object Detection <br />
                -Seamless User Experience</p>
          </div>

          <div>
            <img className=' max-w-[600px] max-h-[500px] object-contain  ' src={laptop} alt='laptop' />
          </div>
          
        </div>
      </div>


      {/* Get started */}
      <div className='w-full bg-white py-16 px-4 flex justify-center'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-1'>

          <div className='text-center'>
            <div>
              <h1 className='text-5xl font-bold text-[#32CD32]'>Get Started Today!</h1>
              <br />
              <p className='text-2xl font-semibold'>Exploring Drone Innovations for Tomorrow</p>
              <p className='text-xl'>Join us in shaping the future of technology and industries with our cutting-edge <br /> drone project. Experience secure solutions, advanced monitoring, <br />
              and endless possibilities.</p>
            </div>

            <br />
            <div >
              <button className='bg-[#32CD32] text-white px-4 py-2 rounded-md'><a href="/signup" className="font-medium text-white">Get Started</a></button>
            </div>
          </div>

        </div>
      </div>


       
     




    </div>

  )
}

export default Hero