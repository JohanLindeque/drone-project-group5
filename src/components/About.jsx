import React from 'react'
import drone from'../images/telloDrone.png'

const About = () => {
  return (
    <div className='  w-full h-screen mx-auto text-center flex flex-col justify-center' >
        <div className='w-full h-auto bg-white py-16 px-4'>
            <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'> About the Project</h1>

            <img className=' max-w-[750px] max-h-[600px] object-none ' src={drone} alt='tello drone' />

            <br />

            <div className='flex flex-col justify-center'>
            <section className=''>
                <h3 className='text-xl  font-semibold text-[#EB1402]'>Something</h3>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eum commodi dolor architecto,
                     rerum, pariatur, repellat quae ex reiciendis numquam minima iusto. Amet vitae consequuntur impedit illo aut 
                     cupiditate sapiente. Quod animi saepe veritatis libero impedit quas vel dolorum, perferendis delectus dicta, 
                     est modi, distinctio provident voluptates laboriosam sapiente natus a
                    t eius rerum quibusdam. Ducimus totam quis natus similique reprehenderit.</p>
            </section>

            <br />

            <section className=''>
                <h3 className='text-xl font-semibold text-[#EB1402]'>Something</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eum commodi dolor architecto,
                     rerum, pariatur, repellat quae ex reiciendis numquam minima iusto. Amet vitae consequuntur impedit illo aut 
                     cupiditate sapiente. Quod animi saepe veritatis libero impedit quas vel dolorum, perferendis delectus dicta, 
                     est modi, distinctio provident voluptates laboriosam sapiente natus a
                    t eius rerum quibusdam. Ducimus totam quis natus similique reprehenderit.</p>
            </section>

            <br />

            <section className=''>
                <h3 className='text-xl font-semibold text-[#EB1402]'>Something</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eum commodi dolor architecto,
                     rerum, pariatur, repellat quae ex reiciendis numquam minima iusto. Amet vitae consequuntur impedit illo aut 
                     cupiditate sapiente. Quod animi saepe veritatis libero impedit quas vel dolorum, perferendis delectus dicta, 
                     est modi, distinctio provident voluptates laboriosam sapiente natus a
                    t eius rerum quibusdam. Ducimus totam quis natus similique reprehenderit.</p>
            </section>
            </div>
        </div>
    </div>
  )
}

export default About