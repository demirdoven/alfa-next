import Link from 'next/link';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { isEmpty } from 'lodash';
import { sepetiGuncelle, sepetUrunSil } from '@/lib/functions';

const CartItem3 = ({item, products, setColor, setUpdatingProduct, setRemovingProduct }) => {

    const [productCount, setProductCount] = useState( item.quantity );

	const productImg = item?.data?.images?.[0] ?? '';



    return (

    <div key={item.key} className="cart-item w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 mb-2 pl-6 pr-2 py-5 rounded-md">
        <div className="flex w-5/12">
           
            <div className="flex flex-col justify-between ml-4 flex-grow">
            <Link href={`http://localhost:3000/product/${item?.data?.slug}`} className="font-semibold text-sm">{item.data.name}</Link>
            {/* <span className="text-red-500 text-xs">Apple</span> */}
            </div>
        </div>
        
        
        
    
    </div>

  )
}

export default CartItem3