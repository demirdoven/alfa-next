import Link from 'next/link';
// import { Button } from '@/components/Button';
import { useThemeContext } from "@/components/context/theme";
import LoadingLastik from '../general/LoadingLastik';
import { useState } from 'react';
import CartItemMiniCart from './CartItemMiniCart';
import { Button } from '../general/Button';

import {motion, AnimatePresence} from 'framer-motion'


const Sidebar = ({miniCart, setMiniCart}) => {

    const { color, setColor} = useThemeContext();
    const { cartItems, totalPrice, totalQty } = color || {};
    const [updatingProduct, setUpdatingProduct] = useState( false );
    const [removingProduct, setRemovingProduct] = useState( false );


    const handleParentClick = event => {
        event.preventDefault();
    
        if (event.target === event.currentTarget) {
            setMiniCart(!miniCart)
        }
    };

    return (
        <div className='fixed top-0 left-0 w-screen h-screen z-100'>
                <div onClick={handleParentClick} className='fixed top-0 left-0 w-screen h-screen bg-[#0000006e] z-100'>
                
                </div>
                <AnimatePresence>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exist={{ opacity: 1 }}
                    transition={{ delay: 0.10 }}
                >
                <aside className="px-8 py-6 fixed top-0 right-0 w-64 min-w-[400px] h-screen overflow-hidden overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">               
                    
                   <div className="flex flex-col w-full h-full">               
                                        
                            <div className="flex items-center justify-between">
                                <h1 className="font-semibold text-xl">Cart</h1>
                                <button 
                                    onClick={ () => setMiniCart(!miniCart) }
                                    className="flex items-center justify-center w-[30px] h-[30px] bg-slate-900 text-white text-xs rounded-full">
                                    x
                                </button>
                            </div>

                            <div className="relative flex-1 flex-shrink-1 flex-grow-1 flex-basis-full mt-8">
                                <div className="flex flex-1 flex-col h-full">
                                    
                                    <div className="relative flex-1">
                                        <div className="absolute inset-0 max-h-full overflow-hidden overflow-y-auto">
                                        
                                            {
                                                color && color !== null && color.cartItems.length ? (
                                                    color.cartItems.map( item => (
                                                        <CartItemMiniCart
                                                            key={ item.product_id }
                                                            item={ item }
                                                            products={ cartItems }
                                                            setColor={setColor}
                                                            setUpdatingProduct={setUpdatingProduct}
                                                            setRemovingProduct={setRemovingProduct}
                                                        />
                                                    ))
                                                ) : <LoadingLastik classList="mt-24"/> 
                                            }

                                        </div>
                                    </div>

                                    <div id="summary" className="w-full mt-6">
                                        <div className="mt-6  rounded-lg border bg-white p-6 shadow-md md:mt-0 w-full">
                                            <div className="p-4">
                                                <div className="mb-2 flex justify-between">
                                                    <p className="text-gray-700">Subtotal</p>
                                                    <p className="text-gray-700">{totalPrice?.toFixed(2)} €</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-gray-700">Shipping</p>
                                                    <p className="text-gray-700">{'0'} €</p>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="flex justify-between">
                                                    <p className="text-lg font-bold">Total</p>
                                                    <div className="">
                                                        <p className="mb-1 text-lg text-right font-bold">{totalPrice?.toFixed(2)} €</p>
                                                        <p className="text-xs text-right text-gray-700">(incl. {(totalPrice * 0.19 / 1.19).toFixed(2)} € VAT)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <Button 
                                            href="/checkout" 
                                            type="dark" 
                                            classList="block w-full mt-8 text-center" 
                                            innerClassList="block w-full text-center"
                                            text="PROCEED TO CHECKOUT" 
                                            setMiniCart={setMiniCart}
                                        />

                                    </div>

                                </div>
                            </div>
                            
                        </div>
                  
                </aside>
                </motion.div>
            </AnimatePresence>
            
        </div>
    )
}

export default Sidebar