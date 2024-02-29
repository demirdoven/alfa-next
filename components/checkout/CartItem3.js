'use client'

import Link from 'next/link';
import { useState } from 'react';
import { isEmpty } from 'lodash';

import Image from 'next/image';

const CartItem3 = ({item, products, setColor, setUpdatingProduct, setRemovingProduct }) => {

    const [productCount, setProductCount] = useState( item.quantity );

	const productImg = item?.data?.images?.[0] ?? '';



    return (

    <div key={item.key} className="cart-item w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 mb-2 pl-6 pr-2 py-5 rounded-md">
        
        
        
        test
       
    
    </div>

  )
}

export default CartItem3