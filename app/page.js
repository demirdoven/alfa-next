import React from 'react'
// import Hero from '@/components/home/Hero'
import BrandSlider from '@/components/home/BrandSlider'
import SchnellAndEinfach from '@/components/home/SchnellAndEinfach'
import UnsereReifenempfehlung from '@/components/home/UnsereReifenempfehlung'
import Vorteilsaktionen from '@/components/home/Vorteilsaktionen'
import Entdecke from '@/components/home/Entdecke'
import Newsletter from '@/components/home/Newsletter'

import { headers } from 'next/headers'
import HeroMobile from '@/components/home/HeroMobile'
import HeroDesktop from '@/components/home/HeroDesktop'

const getDeviceType = () => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');

  return userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    ? 'mobile'
    : 'desktop';
}

const HomePage = () => {

  const device = getDeviceType()

  return '';
  return (
    <div className='w-full'>

      {
        device == 'mobile' ? <HeroMobile device={device} /> :
        device == 'desktop' && <HeroDesktop device={device} />
      }
      {/* <Hero device={'iptal'} /> */}
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