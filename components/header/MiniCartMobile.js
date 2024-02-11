'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";

const MiniCartMobile = ({cart}) => {

  const [miniCartOpen, setMiniCartOpen] = useState(false)

  useEffect( ()=>{
    console.log(cart)
  }, [cart])

  const windowHeight = ( window.innerHeight ) / 2;

  return (
    <div className="block lg:hidden fixed left-0 bottom-0 w-screen bg-white">
        
        <div 
          className="w-full h-[60px] bg-white border-t border-t-slate-100 shadow-[0_0_10px_rgba(0,0,0,0.1)] flex justify-between items-center px-8 font-semibold cursor-pointer"
          onClick={ () => { setMiniCartOpen( ! miniCartOpen ) } }
        >
            <div className="flex gap-x-3 items-center">
                <span >Order summary</span>

                <motion.div
                  animate={{
                    rotate: miniCartOpen ? 180 : 0
                  }}
                >
                  <FaAngleUp />
                </motion.div>

            </div>

           <div className="flex gap-x-4">
            <div className="relative">
                <PiHandbagBold size='1.5em' />
                { 
                cart?.totalQty ? 
                  <span className="absolute w-[16px] h-[16px] flex items-center justify-center text-[10px] bg-alfa-red-1 text-white top-[-4px] right-[-6px] rounded-full ">{ cart?.totalQty }</span>
                : null 
                }
                
            </div>
            <div className="">{ cart?.totalPrice && <span className="text-sm"> {cart?.totalPrice.toFixed(2)} €</span> } </div>
            </div>
          

        </div>

      

        <AnimatePresence initial={false}>
          {miniCartOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: windowHeight }}
              exit={{ height: 0 }}
              transition={{ type: "spring", duration: 0.2, bounce: 0 }}
            >
              <div className="bg-white p-8 border-t border-t-slate-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur perspiciatis, dolor distinctio aliquam nostrum cupiditate quam eum, delectus tempore, laboriosam illum tenetur. Accusamus dolore illum commodi, aspernatur corporis repellat!
            </div>
            </motion.div>
          )}
        </AnimatePresence>


        
    </div>
  )
}

export default MiniCartMobile