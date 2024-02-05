import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useThemeContext } from '@/components/context/theme';
import { useRouter, usePathname } from 'next/navigation'
import { getApiCartConfig } from '@/lib/functions';
import { sepeteEkle } from '@/lib/functions';

const BuyNowButton = ({pid, setIsAddedToCart, isAddedToCart}) => {

    const router = useRouter()
    const pathname = usePathname()

    const { color, setColor} = useThemeContext();
    const [ loading, setLoading ] = useState( false );

    function handlerBuyNow(){
        
        // sepete ekle ve checkouta git


        
        sepeteEkle( 312315, 1, setColor, setIsAddedToCart, setLoading )

        router.push('/checkout', { scroll: true })

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }


    return (
        <button 
            onClick={ ()=>{ handlerBuyNow() } }
            className="self-end uppercase bg-red-600 text-white hover:bg-red-700 border border-red-600 text-red-600 text-xl font-bold py-2 px-8 rounded-md" 
            alt="btn"
        >
            Buy Now
        </button>
  )
}

export default BuyNowButton