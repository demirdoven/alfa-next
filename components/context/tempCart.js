'use client';

import { createContext, useContext, useState, useEffect } from "react";

const TempCartContext = createContext({})

export const TempCartContextProvider = ({ children }) => {

    const [tempCart, setTempCart] = useState(null);

 
    useEffect( () => {
		
		if (typeof window !== "undefined") {
			let cartData = localStorage.getItem('tcrt');
			// cartData = null !== cartData ? JSON.parse( cartData ) : '';
			setTempCart( JSON.parse( cartData ) );
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

		if (typeof window !== "undefined") {
			if( tempCart != null ){
				localStorage.setItem('tcrt', JSON.stringify(tempCart));
			}
		}

	}, [ tempCart ] );


    return (
        <TempCartContext.Provider value={{ tempCart, setTempCart }}>
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