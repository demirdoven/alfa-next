import Image from 'next/image'
import React from 'react'

const OrtaStrip = ({classList=''}) => {
  return (
    <div className={`w-full ${classList}` } >
{/* 
        <div className="bg-[url('/aaa.png')]">
            Deneme metinnn xassdsa asdsa
        </div> */}


        {/* <div className="flex justify-center text-4xl font-semibold opacity-5 mt-4 mb-6">
            Why buy from alfatires.com?
        </div> */}
        
        <div className="lg:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div className="flex items-center gap-x-4 text-lg">
                <Image src={`/single-product/orta-strip/free-shipping-icon-red.svg`} alt="sadsa" width="31" height="31" />
                Free shipping within DE*
            </div>
            <div className="flex items-center lg:justify-center gap-x-4 text-lg">
                <Image src={`/single-product/orta-strip/return-icon-red.svg`} alt="sadsa" width="31" height="31" />
                30 day right of withdrawal
            </div>
            <div className="flex items-center lg:justify-center gap-x-4 text-lg">
                <Image src={`/single-product/orta-strip/return-icon-red.svg`} alt="sadsa" width="31" height="31" />
                Secure Payments
            </div>
            <div className="flex items-center lg:justify-end gap-x-4 text-lg">
                <Image src={`/single-product/orta-strip/help-icon-red.svg`} alt="sadsa" width="31" height="31" />
                Service-Hotline: 06221-31554
            </div>
        </div>
    </div>
  )
}

export default OrtaStrip