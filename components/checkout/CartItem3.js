import Link from 'next/link';
import { useState } from 'react';

const CartItem3 = ({item }) => {


    return (

    <div key={item.key} className="cart-item w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 mb-2 pl-6 pr-2 py-5 rounded-md">
        <div className="flex w-5/12">
           
            <div className="flex flex-col justify-between ml-4 flex-grow">
                {item.data.name}
            </div>
        </div>

    </div>

  )
}

export default CartItem3