import React from 'react'
import drone from'../images/telloDrone.png'

const Project = () => {
  return (
    <div className='w-full bg-white py-16 px-4'> 
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

            <div>
                <img className=' max-w-[750px] max-h-[600px] object-none ' src={drone} alt='tello drone' />

                <h1 className='text-3xl font-bold text-[#32CD32]'>Project</h1>
                <p className='text-xl font-semibold'><span>A project ...  kort text highlight features kom hier</span></p>  
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolorum animi quis atque corporis maxime earum aliquid, velit consequatur delectus ullam iste repellat porro sint! Quis ab quisquam ipsum quibusdam.</p>
            </div>


            
            
        </div>



    </div>
  )
}

export default Project