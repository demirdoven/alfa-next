'use client'

import React, { useState } from 'react'

const Quantity = ({qty, setQty}) => {


    function decrement(e) {
        if( qty<2 ){
            setQty(1)
            return;
        }
        setQty(qty-1)
    }
    
    function increment(e) {
        console.log(qty)
        setQty(qty+1)
        console.log(qty)

    }

     


  return (
    <div className="custom-number-input h-10 w-32">
   
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button onClick={ decrement } className="border border-alfa-gray-2 bg-alfa-gray-2 text-gray-600 hover:text-white hover:bg-alfa-gray-5 h-full w-8 rounded-l cursor-pointer outline-none">
                <span className="m-auto text-lg">−</span>
            </button>
            <input 
                type="number" 
                className="border-t border-b border-t-alfa-gray-2 border-b-alfa-gray-2 text-center w-[40px] font-semibold text-alfa-gray-5 text-md flex items-center outline-none" 
                name="custom-input-number" 
                defaultValue={qty}
                // value={qty}
             />
            <button onClick={ increment } className="border border-alfa-gray-2 bg-alfa-gray-2 text-gray-600 hover:text-white hover:bg-alfa-gray-5 h-full w-8 rounded-r cursor-pointer">
                <span className="m-auto text-lg">+</span>
            </button>
        </div>
    </div>


  )
}

export default Quantity