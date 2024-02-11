'use client';

import { createContext, useContext, useState, useEffect } from "react";

const MiniCartContext = createContext({})

export const MiniCartContextProvider = ({ children }) => {
    const [mCart, setMcart] = useState(false);

    

    return (
        <MiniCartContext.Provider value={{ mCart, setMcart }}>
            {children}
        </MiniCartContext.Provider>
    )
};

export const useMiniCartContext = () => useContext(MiniCartContext);

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