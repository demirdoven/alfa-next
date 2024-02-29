import Link from 'next/link';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { isEmpty } from 'lodash';
import { sepetiGuncelle, sepetUrunSil } from '@/lib/functions';
import Image from 'next/image';

const CartItem3 = ({item, products, setColor, setUpdatingProduct, setRemovingProduct }) => {

    const [productCount, setProductCount] = useState( item.quantity );

	const productImg = item?.data?.images?.[0] ?? '';


    


    return (

    <div key={item.key} className="cart-item w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 mb-2 pl-6 pr-2 py-5 rounded-md">
        <div className="flex w-5/12">
            {/* <Link href={`/product/${item?.data?.slug}`} className="w-20"> */}
                <Image
                    className="max-h-24 w-auto object-contain object-top"
                    src={item.data?.images[0].src}
                    alt={'asdsa'}
                    width={30}
                    height={30}
                />
            {/* </Link> */}
            <div className="flex flex-col justify-between ml-4 flex-grow">
            {/* <Link href={`http://localhost:3000/product/${item?.data?.slug}`} className="font-semibold text-sm"> */}
                {item.data.name}
            {/* </Link> */}
            {/* <span className="text-red-500 text-xs">Apple</span> */}
            </div>
        </div>
       
        <div className="flex flex-col  justify-center">
            <span className="text-center w-2/12 font-normal text-md whitespace-nowrap">{item?.line_subtotal.toFixed(2)} €</span>
            { item.quantity > 1 && <span className="text-center w-full font-normal text-slate-900 opacity-40 text-xs whitespace-nowrap">{item.quantity} x {item?.data?.price} €</span> }
        </div>
        

        <input type="text" name="" value=""/>
    
    </div>

  )
}

export default CartItem3