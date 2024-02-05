import { getProductPrice } from '@/app/actions';
import React, { useEffect, useState } from 'react'

const Price = ({pid, catSlug, productData}) => {

  const [price, setPrice] = useState(productData?.price);
  const [priceLoading, setPriceLoading] = useState(true);


  /*** daha sonra deploy ederken aktif ederim simdilik cache price */

  useEffect( ()=>{

      setPriceLoading(true)

      const getPriceInfo = async () => {
          const price = await getProductPrice(catSlug, pid);
          setPrice(price)
          setPriceLoading(false)
          // console.log('price', price[0])
      }
      getPriceInfo();
  }, [pid, catSlug])



  return (
    <span className={`${priceLoading ? 'opacity-40' : 'opacity-100' } woocommerce-Price-amount amount relative ${ 'before:absolute before:top-0 before:left-0 before:animate-spin before:w-[30px] before:h-[30px]' } `}>

        <div className='flex gap-x-1 items-end'>
            <bdi className={`mt-1 text-3xl font-semibold leading-none `}> { price }
                <span className="woocommerce-Price-currencySymbol "> €</span>
            </bdi>
        </div>
        
    </span>
  )
}

export default Price