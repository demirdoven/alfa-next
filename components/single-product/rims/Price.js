import React, { useEffect, useState } from 'react'

const Price = ({currVariantOb}) => {

  const [price, setPrice] = useState(currVariantOb?.price);

    useEffect( ()=>{
        setPrice(currVariantOb?.price)
    }, [currVariantOb])

  return (
    <span className={` woocommerce-Price-amount amount relative ${ 'before:absolute before:top-0 before:left-0 before:animate-spin before:w-[30px] before:h-[30px]' } `}>

        <div className='flex gap-x-1 items-end'>
            <bdi className={`mt-1 text-3xl font-semibold leading-none `}> { price }
                <span className="woocommerce-Price-currencySymbol "> €</span>
            </bdi>
        </div>
        
    </span>
  )
}

export default Price