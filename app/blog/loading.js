import React from 'react'
import { Button } from '@/components/general/Button'


const loading = () => {

    const posts = [1,2,3,4,5,6,7,8,9]
    return (
        <div className="container mx-auto lg:max-w-6xl mt-6">
            <h1 className="text-center text-3xl m-4">BLOG</h1>
            
            <ul className="flex flex-wrap">
            {
                posts.map( post => (
                    <li key={post} className="basis-1/1 lg:basis-1/3 p-4 ">
                        <div className="h-full border-2 border-gray-200 bg-white hover:shadow-lg rounded-xl">
                            <div className="w-full animate-pulse bg-gray-200  post-image aspect-video">

                            </div>
                        
                            <div className="p-4 mt-2 pb-8 flex flex-col justify-between ">
                                <div>
                                    <h1 className="h-4 animate-pulse bg-gray-200 mb-2 rounded-md"></h1>
                                    <h1 className="h-4 animate-pulse bg-gray-200 mb-2 rounded-md"></h1>
                                    <h1 className="h-4 animate-pulse bg-gray-200 mb-2 rounded-md"></h1>
                                    <h1 className="h-4 animate-pulse bg-gray-200 mb-2 rounded-md"></h1>
                                </div>
                                <div className="mt-8 w-32 animate-pulse h-10 bg-gray-200 self-center rounded-md"></div>
                            </div>
                            
                        </div>
                    </li>
                ))
                
            }
            </ul>
        </div>
    )
}

export default loading