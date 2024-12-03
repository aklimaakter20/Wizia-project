import React from 'react'
import { Button } from '@nextui-org/react'

function Embrace() {
  return (
    <section>
    <div className=" container mx-auto p-10 lg:p-20  gap-10 rounded-lg">
    <div className='sm:text-center'>
    <h4 className='text-primary leading-8 font-thin text-xl py-2'>GET STARTED</h4>

    <h2 className='text-foreground text-2xl sm:text-3xl lg:text-4xl'>Embrace the new era of outbound.</h2>
    <p className='text-foreground text-sm font-thin lg:text-xl w-2/3 lg:w-1/2 py-4 sm:py-6 lg:mx-auto '>Wizia lets you train, activate, and optimize aiDRs. 
    Take your outbound to new levels of performance and efficiency.</p>
    <Button variant='solid' radius='full' className='bg-primary px-16 sm:px-8 mx-auto '>Sign Up for the Beta</Button>

    </div>

 
      </div>
    </section>
  )
}

export default Embrace
