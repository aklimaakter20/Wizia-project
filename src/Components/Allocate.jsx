import React from 'react'

function Allocate() {
  return (
    <section>
    <div className="bg-[url(Banner3.png)] bg-right-bottom lg:bg-left-bottom container mx-auto p-10 lg:p-20 gap-10 rounded-lg">
    <div className=''>
    <h2 className='text-foreground text-2xl sm:text-3xl lg:text-4xl'>Allocate effort where your reps <br /> make an inpact.</h2>
    <h4 className='text-primary italic text-2xl py-2'>Let us handle the rest.</h4>
    <p className='text-foreground text-sm font-thin lg:text-xl w-2/3 lg:w-1/2 py-4 sm:py-6  '>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
    </div>
    <div>
        <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 lg:gap-20'>
            <div>
                <h4 className='text-primary text-xl sm:text-3xl font-bold '>32%</h4>
                <p className='text-xs text-foreground w-[100px] py-2'>Improvement in Open Rates</p>
            </div>
            <div>
                <h4 className='text-primary text-xl sm:text-3xl font-bold '>75%</h4>
                <p className='text-xs text-foreground w-[100px] py-2'>Improvement in Ramp Time</p>
            </div>
            <div>
                <h4 className='text-primary text-xl sm:text-3xl font-bold '>35%</h4>
                <p className='text-xs text-foreground w-[100px] py-2'>Improvement in Meetings Booked</p>
            </div>
        </div>
    </div>
  
      </div>
    </section>
  )
}

export default Allocate
