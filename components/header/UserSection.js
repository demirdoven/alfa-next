'use client'

import { PiHandbagBold } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
import { useThemeContext } from "@/components/context/theme";
import { useEffect, useState } from "react";
import MiniCartMobile from "./MiniCartMobile";
import MiniCartDesktop from "./MiniCartDesktop";

const UserSection = ( {className} ) => {

  const { color, setColor} = useThemeContext();
  const [miniCart, setMiniCart] = useState(false);

  // useEffect( ()=>{
  //   console.log('color', color)
  // }, [color])

  return (
    <div className={`${className} flex gap-x-4 items-center flex-row-reverse lg:flex-row`}>
          
        <div onClick={() => setMiniCart(!miniCart)} className="flex gap-x-3 items-center cursor-pointer" >
            <div className="relative">
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
        
        {/* { miniCart && <MiniCartDesktop miniCart={miniCart} setMiniCart={setMiniCart}/> } */}
        <MiniCartDesktop cart={color} miniCart={miniCart} setMiniCart={setMiniCart} />

        { color?.totalQty ? <MiniCartMobile cart={color} /> : null }

    </div>
  )
}

export default UserSection