'use client'

import React, { useEffect, useState } from 'react'
import TypingLayout from '../typing/TypingLayout'
import { searchTextInTires } from '@/app/actions'

const SearchBar = ( {className} ) => {

    const [typingActive, setTypingActive] = useState(true)
    const [aranacak, setAranacak] = useState('')
    const [aramaSonuclari, setAramaSonuclari] = useState([])

    function stopTyping(){
        setTypingActive(false) 
    }
    function startTyping(){
        setTypingActive(true) 
        document.getElementById('s').value = ''
    }
    function handleKeyUp(e){
        if( e.target.value == '' ){
            e.target.blur()
        }else{
            const str = e.target.value;
            // console.log(str)
            setAranacak(str)
        }

    }


    // useEffect(() => {

    //     if( aranacak == '' ) return;

    //     const arasana = async () => {
    //         const sonuclar = await searchTextInTires( aranacak );
    //         setAramaSonuclari(sonuclar)
    //         console.log('sonuclar', sonuclar)
    //     };
        
    //     const delayDebounceFn = setTimeout(() => {
        
    //         console.log('aranacak', aranacak)
          
    //         arasana();

    //     }, 1000)
    
    //     return () => clearTimeout(delayDebounceFn)



    // }, [aranacak])


    return (
        <div 
            className={`w-[50%] m-auto relative bg-gray-100 border-[1px] border-slate-600 rounded-lg ${className}`}
        >
            <input 
                id="s"
                name=""
                // value=""
                className={` h-[40px] relative z-10 bg-transparent ${ typingActive ? 'opacity-0' : 'opacity-100' } text-gray-900 text-md border border-gray-300 rounded-lg block w-full p-2.5 pl-[10px] outline-0`}
                onFocus={ ()=>{ stopTyping() } }
                onBlur={ ()=>{ startTyping() } }
                onKeyUp={ (e)=>{ handleKeyUp(e) } }
            />
            { typingActive ? 
            <TypingLayout stopTyping={stopTyping} /> 
             : '' }

            <button className="absolute z-[200] w-auto h-full top-1/2 transform -translate-y-1/2 right-0 bg-slate-600 text-white hover:bg-slate-800 text-red-600 text-xl font-bold py-2 px-4 border border-slate-600 hover:border-slate-800 rounded-r-md uppercase flex items-center cursor-pointer">
            SEARCH
            </button>

        </div>
    )
}

export default SearchBar