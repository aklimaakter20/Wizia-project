import React from 'react'
import BacHub from '../assets/BackHub logo.png'
import Amd from '../assets/AMD logo.png'
import CableLabs from '../assets/CableLabs logo.png'
import Dbs from '../assets/DBS logo.png'
import EasyEuro from '../assets/EasyEuro logo.png'

function CompanyLogo() {
  return (
    <section className='bg-[#07292F] py-6'>
 <div className="container mx-auto ">
    <h6 className='text-primary uppercase text-center text-sm py-10'>our trusted partners</h6>
    <div className='grid grid-cols-2 sm:grid-cols-4 px-2 sm:px-5 lg:px-20'>
    <img src={BacHub} alt="" />
    <img src={Amd} alt="" />
    <img src={CableLabs} alt="" />
    <img src={Dbs} alt="" />
    <img src={EasyEuro} alt="" />
    </div>
  </div>
    </section>
 
  )
}

export default CompanyLogo
