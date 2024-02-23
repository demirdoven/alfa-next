import React from 'react'
import TypingLayout from '../typing/TypingLayout'

const SearchBar = () => {
  return (
    <div className="w-[60%] m-auto relative">
        <input 
            name=""
            value=""
            className="w-full border h-[40px] rounded-md"
        />
        <TypingLayout />
    </div>
  )
}

export default SearchBar