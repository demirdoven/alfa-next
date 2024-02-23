'use client'

import React, { useState } from 'react'
import TypingLayout from '../typing/TypingLayout'

const SearchBar = () => {

    const [typingActive, setTypingActive] = useState(true)

    function stopTyping(){
        setTypingActive(false) 
    }
    function startTyping(){
        setTypingActive(true) 
    }

    return (
        <div 
            className="w-[50%] m-auto relative bg-gray-50 border border-gray-300 rounded-lg "
        >
            <input 
                name=""
                // value=""
                className={` h-[50px] relative z-10 bg-transparent ${ typingActive ? 'opacity-0' : 'opacity-100' } text-gray-900 text-xl border border-gray-300 rounded-lg focus:ring-alfa-red-1 focus:border-alfa-red-1 block w-full p-2.5 pl-4`}
                onFocus={ ()=>{ stopTyping() } }
                onBlur={ ()=>{ startTyping() } }
            />
            { typingActive ? 
            <TypingLayout stopTyping={stopTyping} /> 
             : '' }
        </div>
    )
}

export default SearchBar