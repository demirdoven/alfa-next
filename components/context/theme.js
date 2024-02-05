'use client';

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [color, setColor] = useState(null);

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
			setColor( JSON.parse( cartData ) );
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
        <ThemeContext.Provider value={{ color, setColor }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);

/**
 * Kullanacagin componentte
 * import { useThemeContext } from "./context/theme";
seklinde import et
sonra ana fonksiyonun icinde degiskene ata: const { color, setColor} = useThemeContext();
 -- Degeri almak icin
h1 style={{'color': color}}>Main page </h1>
 -- Degeri degistirmek icin
<button onClick={()=> setColor('green')}>Set color to blue</button>
 */