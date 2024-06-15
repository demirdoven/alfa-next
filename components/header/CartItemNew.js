import { getThumbnailUrlBySlug } from '@/lib/functions'
import { useStore } from '@/lib/zustandStore'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

const CartItemNew = ({item, geciciSep, updateGeciciSep}) => {

    const sepettenSil = ( event, pid ) => {
		event.stopPropagation();
		
        // alert(pid);

        let clonnedCart = {}

        const newCartItems = geciciSep?.cartItems.filter( (el) => el.variation_id != pid )

        let cartTotal = 0;
        let cartQuantity = 0;

        newCartItems.forEach(element => {
            cartTotal += parseFloat(element?.line_total)
            cartQuantity += parseInt(element?.quantity)
        });

        clonnedCart.cartItems = newCartItems
        clonnedCart.totalPrice = cartTotal;
        clonnedCart.totalQty = cartQuantity;

        updateGeciciSep( clonnedCart )
      
	};

    return (
        <div 
        className="cart-item w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 mb-2 pl-6 pr-2 py-5 rounded-md">
            
            <div className="flex w-5/12">
                <Link href={`http://localhost:3000/product/dasdsa}`} className="w-20">
                    <Image
                        className="max-h-24 w-auto object-contain object-top" 
                        src={getThumbnailUrlBySlug( item.data?.images[0].src )} 
                        width={50}
                        height={50}
                        alt="dasda" 
                    />
                </Link>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                <Link href={`http://localhost:3000/product/dasdsa}`} className="font-semibold text-sm">{item?.data?.name}</Link>
                {/* <span className="text-red-500 text-xs">Apple</span> */}
                </div>
            </div>
            <div className="flex flex-col w-2/12">
                <div className="qty_changer w-full">
                    <div className="flex items-center border-gray-100">
                        <span 
                            // onClick={( event ) => handleQtyChange( event, item?.cartKey, 'decrement' )}
                            className="block text-center leading-[1.13rem] cursor-pointer rounded-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white border border-slate-900 w-[20px] h-[20px]"> - </span>
                        <span 
                            className="flex items-center justify-center text-md mx-2">
                            {item.quantity}
                        </span>
                        <span 
                            // onClick={( event ) => handleQtyChange( event, item?.cartKey, 'increment' )}
                            className="block text-center leading-[1.13rem] cursor-pointer rounded-full bg-white hover:bg-slate-900 text-slate-900 hover:text-white border border-slate-900 w-[20px] h-[20px]"> + </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col  justify-center">
                <span className="text-center w-2/12 font-normal text-md whitespace-nowrap">{ parseFloat(item?.line_subtotal).toFixed(2) } €</span>
                { item.quantity > 1 && <span className="text-center w-full font-normal text-slate-900 opacity-40 text-xs whitespace-nowrap">{item.quantity} x {item?.data?.price} €</span> }
            </div>
            <button 
                onClick={ ( event ) => sepettenSil( event, item?.variation_id ) }
                // data-key={item?.key}
                className="text-center w-1/12 font-normal text-sm hover:text-alfa-red-1" title="Remove">
                {<RiDeleteBin6Line />}
            </button>
        </div>
    )
}

export default CartItemNew