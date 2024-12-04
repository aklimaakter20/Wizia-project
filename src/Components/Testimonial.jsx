import React from 'react'
import Apostofy from '../assets/apostopy.png'
import Ellipse2 from '../assets/ellipse 2.png'
import Ellipse4 from '../assets/ellipse 4.png'
import Left from '../assets/left.png'
import Right from '../assets/right.png'


function Testimonial() {
  return (
    <section>
    <div className=" container mx-auto p-10 lg:p-20  gap-10 rounded-lg">
    <div className='text-start sm:text-center'>
    <img className='mx-5 text-start sm:mx-auto pb-3 sm:pb-8' src={Apostofy} alt="" />
    <h2 className='text-foreground text-xl sm:text-2xl lg:text-3xl font-thin pb-3 sm:pb-8 w-full mx-5 sm:w-1/2 sm:mx-auto text-start sm:text-center'>Qorem ipsum dolor sit amet, consectetur   elit. Nunc vulputate  libero et velit interdum, ac aliquet odio mattis.</h2>
    <h5 className='text-primary text-xl mt-12 font-bold mx-5 sm:mx-auto text-start sm:text-center'>John Doe</h5>
    <p className='text-[#96ACAF] mx-5 mt-1 sm:mx-auto text-start sm:text-center'>Chief Strategy Officer @ Company</p>
    <div>
        <div className='flex gap-5 mx-auto w-[50px] py-8'>
            <img src={Ellipse2} alt="" />
            <img src={Ellipse4} alt="" />
            <img src={Ellipse4} alt="" />
        </div>
        <div className='sm:flex justify-between -mt-48 hidden sm:visible'>
            <img src={Left} alt="" />
            <img src={Right} alt="" />

        </div>
    </div>
    </div>

 
      </div>
    </section>
  )
}

export default Testimonial
