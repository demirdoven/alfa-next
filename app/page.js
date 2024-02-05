import React from 'react'
import Hero from '@/components/home/Hero'
import BrandSlider from '@/components/home/BrandSlider'
import SchnellAndEinfach from '@/components/home/SchnellAndEinfach'
import UnsereReifenempfehlung from '@/components/home/UnsereReifenempfehlung'
import Vorteilsaktionen from '@/components/home/Vorteilsaktionen'
import Entdecke from '@/components/home/Entdecke'
import Newsletter from '@/components/home/Newsletter'


const HomePage = () => {

  return (
    <div className='w-full'>

      <Hero />
      <BrandSlider />
      <SchnellAndEinfach />
      <UnsereReifenempfehlung />
      <Vorteilsaktionen />
      <Entdecke />
      <Newsletter />


    </div>
  )
}

export default HomePage