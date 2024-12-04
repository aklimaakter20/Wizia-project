import React from 'react'
import Logo2 from '../assets/Logo2.png'

function Copyright() {
  return (
    <section className='bg-[#07292F]'>
      <div className="container mx-auto">
        <div>
            <div className='flex items-center justify-between px-10 py-3'>
                <img src={Logo2} alt="" />
                <p className='text-[#96ACAF] text-xs'>Copyright © 2023 Wizia. All rights reserved.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Copyright
