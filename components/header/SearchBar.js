'use client'

import React, { useState } from 'react'
import TypingLayout from '../typing/TypingLayout'

const SearchBar = ( {className} ) => {

    const [typingActive, setTypingActive] = useState(true)

    function stopTyping(){
        setTypingActive(false) 
    }
    function startTyping(){
        setTypingActive(true) 
        document.getElementById('s').value = ''
    }

    return (
        <div 
            className={`w-[50%] m-auto relative bg-gray-100 border-[1px] border-slate-600 rounded-lg ${className}`}
        >
            <input 
                id="s"
                name=""
                // value=""
                className={` h-[40px] relative z-10 bg-transparent ${ typingActive ? 'opacity-0' : 'opacity-100' } text-gray-900 text-xl border border-gray-300 rounded-lg block w-full p-2.5 pl-[10px] outline-0`}
                onFocus={ ()=>{ stopTyping() } }
                onBlur={ ()=>{ startTyping() } }
            />
            { typingActive ? 
            <TypingLayout stopTyping={stopTyping} /> 
             : '' }

<button class="absolute z-[200] w-auto h-full top-1/2 transform -translate-y-1/2 right-0 bg-slate-600 text-white hover:bg-slate-800 text-red-600 text-xl font-bold py-2 px-4 border border-slate-600 hover:border-slate-800 rounded-r-md uppercase flex items-center cursor-pointer">
  SEARCH
</button>

        </div>
    )
}

export default SearchBar