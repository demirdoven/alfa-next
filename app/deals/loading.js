import React from 'react'

const loading = () => {

    const list = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="w-full xs:px-4 lg:container mx-auto lg:max-w-6xl mt-6 px-4">
        <ul className="mt-4 mb-24">
            {
                list.map( item => (
                    <li 
                        key={item}
                        className="flex flex-col lg:flex-row justify-between gap-x-4 mb-4 p-4 pb-8 lg:p-8 shadow-lg rounded-lg">
        
                        <div className="w-full lg:w-6/12 animate-pulse bg-gray-200 h-[200px] rounded-lg"></div>
        
                        <div className="w-full lg:w-6/12 pt-4 lg:pl-4">
                            <h1 className="w-full animate-pulse bg-gray-200 h-6 rounded-md mb-2"></h1>
                            <h1 className="w-full animate-pulse bg-gray-200 h-6 rounded-md mb-2"></h1>
                            <h1 className="w-full animate-pulse bg-gray-200 h-6 rounded-md mb-4 lg:mb-8"></h1>
                            <div className="w-32 animate-pulse bg-gray-200 h-10 rounded-md "></div>
                            
                        </div>
                    </li>
                ))
            }
           
        </ul>
    </div>
  )
}

export default loading