import Link from 'next/link';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { isEmpty } from 'lodash';
import Image from 'next/image';
// import { sepetiGuncelle, sepetUrunSil } from '@/lib/foksiyonlar/cart_func';

const CartItem = ({item, products, setColor }) => {

    const [productCount, setProductCount] = useState( item.quantity );

	const productImg = item?.data?.images?.[0] ?? '';


    const handleQtyChange = ( event, cartKey, type ) => {
		
		if ( process.browser ) {
			
			event.stopPropagation();

            // setUpdatingProduct(true);

			let newQty;
			
			// If the previous cart request is still updatingProduct or removingProduct, then return.
			// if ( updatingProduct || removingProduct || ( 'decrement' === type && 1 === productCount ) ) {
			// 	return;
			// }
			
			if ( !isEmpty( type ) ) {
				newQty = 'increment' === type ? productCount + 1 : productCount - 1;
			} else {
				// If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
				newQty = ( event.target.value ) ? parseInt( event.target.value ) : 1;
			}
			
            
			// Set the new qty in state.
			setProductCount( newQty );
			

			if ( products.length ) {
				// updateCart(item?.key, newQty, setCart, setUpdatingProduct);
				sepetiGuncelle(item?.key, newQty, setColor, setUpdatingProduct );
			}
			
		}
	};
	
    const handleRemoveProductClick = ( event, cartKey ) => {
		event.stopPropagation();
		
		// // If the component is unmounted, or still previous item update request is in process, then return.
		// if ( !isMounted || updatingProduct ) {
		// 	return;
		// }
		
        // console.log(event);

        // return false;
		sepetUrunSil( cartKey, setColor, setRemovingProduct );

        

        // var wrapDiv = event.target.closest('.cart-itemm');
        // if (wrapDiv) {
        //   // Remove the parent "wrap" div if it exists
        //   wrapDiv.parentNode.removeChild(wrapDiv);
        // }

        event.target.closest('.cart-item').classList.add('zero-height');
        

      
	};


    return (

    <div key={item.key} className="cart-item w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 mb-2 pl-6 pr-2 py-5 rounded-md">
        <div className="flex w-5/12">
            <Link href={`http://localhost:3000/product/${item?.data?.slug}`} className="w-20">
                <Image 
                    className="max-h-24 w-auto object-contain object-top" 
                    src={item.data?.images[0].src.replace('http://alfatires.local', 'https://alfatires.com')} 
                    alt="dasda" 
                    width={50} 
                    height={50}
                />
            
            </Link>
            <div className="flex flex-col justify-between ml-4 flex-grow">
            <Link href={`http://localhost:3000/product/${item?.data?.slug}`} className="font-semibold text-sm">{item.data.name}</Link>
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
            <span className="text-center w-2/12 font-normal text-md whitespace-nowrap">{item?.line_subtotal.toFixed(2)} €</span>
            { item.quantity > 1 && <span className="text-center w-full font-normal text-slate-900 opacity-40 text-xs whitespace-nowrap">{item.quantity} x {item?.data?.price} €</span> }
        </div>
        <button 
            // onClick={ ( event ) => handleRemoveProductClick( event, item?.key ) }
            data-key={item?.key}
            className="text-center w-1/12 font-normal text-sm hover:text-alfa-red-1" title="Remove">{<RiDeleteBin6Line />}</button>


        
    
    </div>

  )
}

export default CartItem