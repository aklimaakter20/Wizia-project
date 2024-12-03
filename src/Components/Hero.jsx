import React from 'react'
import { Button } from '@nextui-org/react'
// import { FaSquareArrowUpRight } from "react-icons/fa6";

function Hero() {
  return (
    <>
   
 <section className='bg-[url(Hero.png)] bg-no-repeat bg-cover bg-right-bottom p-10 lg:p-20 sm:flex-row gap-10'>
    <div className='w-1/2 text-center sm:text-start sm:mx-10 mx-auto'>
        <span className='text-primary'>AI SDRs (aiDRs)</span>
        <h1 className='font-bold sm:leading-loose text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground my-2 sm:my-6'>More <span className='italic font-semibold'>leads, <br /></span> less <span className='italic font-semibold'>people.</span></h1>
        <p className='sm:text-start sm:w-[400px] text-center text-foreground py-3 font-thin sm:mb-6 '>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
        <Button variant='solid' radius='full' className='bg-primary px-16 sm:px-8 mx-auto '>Sign Up for the Beta</Button>
        {/* <FaSquareArrowUpRight/> */}
    </div>
   
      </section>

     
    </>
  )
}

export default Hero
