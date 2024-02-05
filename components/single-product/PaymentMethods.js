'use client'

import Image from 'next/image';
import React from 'react'

const PaymentMethods = ({classList}) => {

  // if (typeof window !== 'undefined') {
  //   localStorage.removeItem('clickedProduct')
  // }
  const iconList = [
    'paypal.png',
    'vorkasse.png',
    'klarna.png',
    'visa-mastercard.png',
    'sofort.png',
    'amazon-pay.png'
  ];
  
  return (
    <div className={`${classList} grid grid-cols-3 gap-4 place-items-center`}>
      {
        iconList.map( item => (
          <Image 
            key={item}
            src={'/single-product/payment-methods-icons/'+item}
            alt={item}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
          />
        ))
      }

    </div>
  )
}

export default PaymentMethods