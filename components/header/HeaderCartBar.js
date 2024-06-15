import React, { useEffect } from 'react'
import { PiHandbagBold } from 'react-icons/pi'
import { useStore } from '@/lib/zustandStore'


const HeaderCartBar = ( { geciciSep, openMiniCart } ) => {


    useEffect( ()=>{

        console.log('geciciSep degisti headerbar', geciciSep);

    }, [geciciSep])


    return (
        <div 
            onClick={ openMiniCart } 
            className="hidden lg:flex gap-x-3 items-center cursor-pointer"
        >
            <div className="relative ">
                <PiHandbagBold size='1.5em' />
                {/* { 
                color?.totalQty ?  */}
                    <span className="absolute w-[16px] h-[16px] flex items-center justify-center text-[10px] bg-alfa-red-1 text-white top-[-4px] right-[-6px] rounded-full ">
                        { geciciSep?.totalQty }
                    </span>
                {/* : null 
                } */}
            </div>
            <span className="text-sm"> {parseFloat(geciciSep?.totalPrice).toFixed(2)} €</span>
        
        </div>
    )
}

export default HeaderCartBar