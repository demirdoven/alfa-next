'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";
import { Button } from '../general/Button';
import CartItemMiniCart from './CartItemMiniCart';
import LoadingLastik from '../general/LoadingLastik';
import { useThemeContext } from "@/components/context/theme";

const MiniCartMobile = ({mCart, setMcart }) => {

  const { color, setColor} = useThemeContext();


  // useEffect( ()=>{
  //   console.log(color)
  // }, [color])

  const windowHeight = ( window.innerHeight ) * 0.8 ;

  return (
    <div className="block lg:hidden fixed left-0 bottom-0 w-screen bg-white">
        
        <div 
          className="w-full h-[60px] bg-white border-t border-t-slate-100 shadow-[0_0_10px_rgba(0,0,0,0.1)] flex justify-between items-center px-8 font-semibold cursor-pointer"
          onClick={ () => { setMcart( ! mCart ) } }
        >
            <div className="flex gap-x-3 items-center">
                <span >Order summary</span>

                <motion.div
                  animate={{
                    rotate: mCart ? 180 : 0
                  }}
                >
                  <FaAngleUp />
                </motion.div>

            </div>

           <div className="flex gap-x-4">
            <div className="relative">
                <PiHandbagBold size='1.5em' />
                { 
                color?.totalQty ? 
                  <span className="absolute w-[16px] h-[16px] flex items-center justify-center text-[10px] bg-alfa-red-1 text-white top-[-4px] right-[-6px] rounded-full ">{ color?.totalQty }</span>
                : null 
                }
                
            </div>
            <div className="">{ color?.totalPrice && <span className="text-sm"> {color?.totalPrice.toFixed(2)} €</span> } </div>
            </div>
          

        </div>

      

        <AnimatePresence initial={false}>
          {mCart && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: windowHeight }}
              exit={{ height: 0 }}
              transition={{ type: "spring", duration: 0.2, bounce: 0 }}
            >
              <div className="bg-white p-8 border-t border-t-slate-100">

                <div className="relative flex-1 flex-shrink-1 flex-grow-1 flex-basis-full mt-8">
                    <div className="flex flex-1 flex-col h-full">
                        
                        <div className="relative flex-1">
                            <div className="absolute inset-0 max-h-full overflow-hidden overflow-y-auto">
                            
                                {
                                    color && color !== null && color.cartItems.length ? (
                                        color.cartItems.map( item => (
                                            <CartItemMiniCart
                                                // key={ item.product_id }
                                                key={ Math.random() }
                                                item={ item }
                                                products={ color?.cartItems }
                                                setColor={setColor}
                                                // setUpdatingProduct={setUpdatingProduct}
                                                // setRemovingProduct={setRemovingProduct}
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
                                        <p className="text-gray-700">{color?.totalPrice?.toFixed(2)} €</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-gray-700">Shipping</p>
                                        <p className="text-gray-700">{'0'} €</p>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between">
                                        <p className="text-lg font-bold">Total</p>
                                        <div className="">
                                            <p className="mb-1 text-lg text-right font-bold">{color?.totalPrice?.toFixed(2)} €</p>
                                            <p className="text-xs text-right text-gray-700">(incl. {(color?.totalPrice * 0.19 / 1.19).toFixed(2)} € VAT)</p>
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
                                // setMcart={setMcart}
                                onClick={ ()=>{ setMcart(false) } }
                            />

                        </div>

                    </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>


        
    </div>
  )
}

export default MiniCartMobile