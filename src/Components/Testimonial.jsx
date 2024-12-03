import React from 'react'
import Apostofy from '../assets/apostopy.png'
import Ellipse2 from '../assets/ellipse 2.png'
import Ellipse4 from '../assets/ellipse 4.png'

function Testimonial() {
  return (
    <section>
    <div className=" container mx-auto p-10 lg:p-20  gap-10 rounded-lg">
    <div className='sm:text-center'>
    <img className='mx-auto pb-8' src={Apostofy} alt="" />
    <h2 className='text-foreground text-2xl sm:text-3xl font-thin'>Qorem ipsum dolor sit amet, consectetur   elit. Nunc vulputate <br /> libero et velit interdum, ac aliquet odio mattis.</h2>
    <h5 className='text-primary text-xl mt-12 font-bold'>John Doe</h5>
    <p className='text-[#96ACAF] mt-1'>Chief Strategy Officer @ Company</p>
    <div>
        <div className='flex gap-5 mx-auto w-[50px] py-8'>
            <img src={Ellipse2} alt="" />
            <img src={Ellipse4} alt="" />
            <img src={Ellipse4} alt="" />
        </div>
    </div>
    </div>

 
      </div>
    </section>
  )
}

export default Testimonial
