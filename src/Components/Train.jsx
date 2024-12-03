import React from 'react'
import Check from '../assets/check.png'
function Train() {
  return (
    <section>
    <div className="bg-[url(Banner2.png)] container mx-auto p-10 lg:p-20  gap-10 rounded-lg">
    <div className='sm:text-center'>
    <h2 className='text-foreground text-2xl sm:text-3xl lg:text-4xl'>Train your aiDR on your...</h2>
    <h4 className='text-primary italic text-2xl py-2'>prefered email st|</h4>
    <p className='text-foreground text-sm font-thin lg:text-xl w-2/3 lg:w-1/2 py-4 sm:py-6 lg:mx-auto '>You’re in control. Train your aiDR on elements of your Marketing strategy on elements of .</p>
    </div>

   <div className='py-10 text-start lg:w-1/2 mx-auto '>
   <div className='flex flex-col sm:flex-row gap-5 sm:gap-20 pb-3'>
      <div className='flex items-center gap-3'>
       <img className='text-primary' src={Check} alt="" />
        <p className='text-primary text-lg'>Quick to ramp</p>
      </div>
      <div className='flex items-center gap-3'>
       <img className='text-primary' src={Check} alt="" />
        <p className='text-primary text-lg'>Easy to optimize</p>
      </div>
    </div>
    <div className='flex flex-col sm:flex-row gap-5 sm:gap-20'>
      <div className='flex items-center gap-3'>
       <img className='text-primary' src={Check} alt="" />
        <p className='text-primary text-lg'>Quick to scale up</p>
      </div>
      <div className='flex items-center gap-3'>
       <img className='text-primary' src={Check} alt="" />
       <p className='text-primary text-lg'>Works with all your existing tools</p>
       </div>
    </div> 
   </div>
      </div>
    </section>
  )
}

export default Train
