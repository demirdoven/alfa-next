'use client'

import Link from 'next/link';
// import { Button } from '@/components/Button';
// import CartItem2 from '@/components/cart/CartItem2';
import { useThemeContext } from "@/components/context/theme";
// import LoadingLastik from '@/components/LoadingLastik';
import { useState } from 'react';
import CartItem from './CartItem';
import { Button } from '../general/Button';
// import PaymentModes from './payment-modes';

export default function CartDetails() {

    const { color, setColor} = useThemeContext();
    const { cartItems, totalPrice, totalQty } = color || {};

	return (
        <>

            <div className="container mx-auto lg:max-w-6xl mb-6 flex flex-col ">
                <div className="flex flex-col w-full">
                        <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 w-full">                       
                            <h2 className="text-xl font-medium mb-4">Your Order</h2>

                            <div className="w-full bg-white">
                                {
                                    color !== null && color?.cartItems.length ? (
                                        color.cartItems.map( item => (
                                            <CartItem
                                                key={ item.product_id }
                                                item={ item }
                                                products={ cartItems }
                                                setColor={setColor}
                                                // setUpdatingProduct={setUpdatingProduct}
                                                // setRemovingProduct={setRemovingProduct}
                                            />
                                        ))
                                    ) : 'bos' 
                                }
                            </div>


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

                            {/* <h2 className="text-xl font-medium mb-4">Select your payment method</h2> */}
							{/* <PaymentModes input={input} handleOnChange={handleOnChange} /> */}

                            <div className="woo-next-place-order-btn-wrap mt-5">
									
                                <Button 
                                    className={`w-full bg-alfa-red-1 text-white px-5 py-3 rounded-md w-auto xl:w-full `}
                                    innerClassList="block w-full text-center"
                                    text="Place Order"
                                    href={'/'}
                                />
							</div>

							{/* { isOrderProcessing && <p>Processing Order...</p> }
							{ requestError && <p>Error : { requestError } - Please try again</p> } */}

                        </div>

                </div>
            </div>
        </>
	);
}

