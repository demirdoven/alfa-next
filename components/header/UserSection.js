'use client'

import { PiHandbagBold } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
import { useEffect, useState } from "react";
import MiniCartMobile from "./MiniCartMobile";
import MiniCartDesktop from "./MiniCartDesktop";
import { isEmpty, isNull } from "lodash";

const UserSection = ( {className, color, setColor, mCart, setMcart, tempCart } ) => {

  const [tempCartUrunSayisi, setTempCartUrunSayisi ] = useState(0)

  useEffect( ()=>{

    if( tempCart && ! isEmpty(tempCart) ){
      setTempCartUrunSayisi( tempCart.length )
    }

  }, [tempCart] )

  console.log('tempCart', tempCart)

  return (
    <div className={`${className} flex gap-x-4 items-center flex-row-reverse lg:flex-row`}>
         {
          process.env.NODE_ENV == "development" && (
          <div>{tempCartUrunSayisi} farkli urun</div>
          )
         }
            
        

        <div onClick={() => setMcart(!mCart)} className="hidden lg:flex gap-x-3 items-center cursor-pointer" >
            <div className="relative ">
                <PiHandbagBold size='1.5em' />
                { 
                color?.totalQty ? 
                  <span className="absolute w-[16px] h-[16px] flex items-center justify-center text-[10px] bg-alfa-red-1 text-white top-[-4px] right-[-6px] rounded-full ">{ color?.totalQty }</span>
                : null 
                }
            </div>
            { color?.totalPrice && <span className="text-sm"> {color?.totalPrice.toFixed(2)} €</span> } 
        </div>

       
        <div>
            <BiUser size='1.5em' />
        </div>
        
        <MiniCartDesktop cart={color} mCart={mCart} setMcart={setMcart} />

        { color?.totalQty ? <MiniCartMobile cart={color} mCart={mCart} setMcart={setMcart} /> : null }


    </div>
  )
}

export default UserSection