'use client';

import { createContext, useContext, useState, useEffect } from "react";

const TempCartContext = createContext({})

export const TempCartContextProvider = ({ children }) => {

    const [tempCart, setTempCart] = useState(null);

    	/**
	 * This will be called once on initial load ( component mount ).
	 *
	 * Sets the cart data from localStorage to `cart` in the context.
	 */
	useEffect( () => {
		
		// if ( process.browser ) {
		if (typeof window !== "undefined") {
			let cartData = localStorage.getItem( 'next-cart' );
			// cartData = null !== cartData ? JSON.parse( cartData ) : '';
			
            let urunler = [];
            
            cartData?.cartItems.map( item => {

                urunler.push({
                    product_id: item?.product_id,
                    variation_id: item?.variation_id,
                    quantity: item?.quantity,
                    title: item?.name,
                    img: item?.data?.images[0].src
                })
               
            })

            localStorage.setItem('temp-cart', JSON.stringify(urunler));

		}
		
	}, [] );
	
	/**
	 * 1.When setCart() is called that changes the value of 'cart',
	 * this will set the new data in the localStorage.
	 *
	 * 2.The 'cart' will anyways have the new data, as setCart()
	 * would have set that.
	 */
	useEffect( () => {

		// if ( process.browser ) {
		if (typeof window !== "undefined") {
			if( color != null ){
				localStorage.setItem('next-cart', JSON.stringify(color));
			}
		}
	}, [ color ] );


    return (
        <TempCartContext.Provider value={{ color, setColor }}>
            {children}
        </TempCartContext.Provider>
    )
};

export const useTempCartContext = () => useContext(TempCartContext);

/**
 * Kullanacagin componentte
 * import { useTempCartContext } from "./context/theme";
seklinde import et
sonra ana fonksiyonun icinde degiskene ata: const { color, setColor} = useTempCartContext();
 -- Degeri almak icin
h1 style={{'color': color}}>Main page </h1>
 -- Degeri degistirmek icin
<button onClick={()=> setColor('green')}>Set color to blue</button>
 */