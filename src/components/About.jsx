import React from 'react'
import logo from '../images/logo.png'

const About = () => {
  return (
    <div className='  w-full h-screen mx-auto text-center flex flex-col justify-center' >
        <div className='w-full h-auto bg-white py-16 px-4'>
            
            <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'> About </h1>
            {/* <img src={logo} alt="logo" className='w-1/4 mx-auto object-fit' /> */}

            <br />

            <div className='flex flex-col justify-center'>
            <section className=''>
            <h3 className='text-xl font-semibold text-[#32CD32]'>About us</h3>
                <p className=''>Welcome to our innovative project that's shaping the future of drone technology. As a <br />
                group of 3rd year BSc Computing students at Belgium campus, we are driven by our <br />
                collective passion for exploration and technological advancement</p>
            </section>

            <br />

            <section className=''>
            <h3 className='text-xl font-semibold text-[#32CD32]'>The Project</h3>
                <p>Our project is a culmination of extensive research, creative problem-solving, and hands-on <br />
                 experimentation. With a solid foundation in computing and an unyielding commitment to <br />
                 innovation, we're on a mission to push the boundaries of what drones can achieve.</p>
            </section>

            <br />

            <section className=''>             
                <p>From secure and efficient monitoring solutions to cutting-edge object detection capabilities,<br />
                 our project covers a wide spectrum of applications. By leveraging the power of drone <br /> 
                 technology, we're addressing real-world challenges and uncovering new possibilities <br />
                  in diverse industries.</p>
            </section>
            <br />
            <section className=''>             
                <p>Join us on this exciting journey as we reshape the landscape of technology. Our project isn't <br />
                 just about the present; it's a glimpse into the potential of tomorrow. We're excited to share <br />
                  our insights, discoveries, and passion with you as we continue to innovate and redefine <br />
                   what is possible.</p>
            </section>

            </div>
        </div>
    </div>
  )
}

export default About