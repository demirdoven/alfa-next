'use client'

import Link from 'next/link';
import { useState } from 'react';
import { isEmpty } from 'lodash';

import Image from 'next/image';

const CartItem3 = ({item, products, setColor, setUpdatingProduct, setRemovingProduct }) => {

    return (

    <div key={item.key} className="cart-item w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 mb-2 pl-6 pr-2 py-5 rounded-md">
        <div className="flex w-5/12">
                <Image
                    className="max-h-24 w-auto object-contain object-top"
                    src={item.data?.images[0].src}
                    alt={`cscds`}
                    width={30}
                    height={30}
                />
            <div className="flex flex-col justify-between ml-4 flex-grow">
                {item.data.name}
            </div>
        </div>
        <div className="flex flex-col w-2/12">
            <span className="flex items-center justify-center text-md mx-2">
            {item.quantity} qty
            </span>     
        </div>
        <div className="flex flex-col  justify-center">
            <span className="text-center w-2/12 font-normal text-md whitespace-nowrap">{item?.line_subtotal.toFixed(2)} €</span>
            { item.quantity > 1 && <span className="text-center w-full font-normal text-slate-900 opacity-40 text-xs whitespace-nowrap">{item.quantity} x {item?.data?.price} €</span> }
        </div>
      
        
    
    </div>

  )
}

export default CartItem3