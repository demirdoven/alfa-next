import React, { useEffect, useState } from 'react'
import CardTire from './CardTire'
import CardRim from './CardRim'
import { getSingleProduct } from '@/app/actions'
import { isEmpty } from 'lodash'
import arMA from 'date-fns/locale/ar-MA'

const ProductCard2 = ({id, catSlug, product, loading, setIsAddedToCart, isAddedToCart}) => {

    const [productData, setProductData] = useState({})

    useEffect(() => {

        const getPrd = async () => {
        
            const product = await getSingleProduct(catSlug, id );
            setProductData(product)
            // setProdsLoading(false)
     
        };
        getPrd();

    }, [id, catSlug]);

    return (
        <>
           <div>
                {
                    isEmpty(productData) ? (
                        <div data-pid={'.'} className="w-full mb-4 pl-5 pr-7 pt-5 pb-7 overflow-hidden rounded-lg border-2 border-gray-200 bg-white hover:shadow-lg">
                            <div className="relative animate-pulse flex space-x-4 relative flex flex-row ">
                            
                                <div className="w-3/12 relative mx-3 mt-3 flex flex-col gap-y-2">
                                    <div className="bg-gray-200 h-36 w-full rounded-lg"></div>
                                    { catSlug == 'tires' && <div className="bg-gray-200 h-10 w-full rounded-xl"></div> }
                                </div>
                                
                                <div className="relative w-8/12 mt-4 px-5 ">
                                    <div className="bg-gray-200 h-5 w-full mb-6 rounded-lg"></div>
                                    <div className=' w-full '>
                                        <div className="bg-gray-200 h-3 w-4/12 mb-2  rounded-lg"></div>
                                        <div className="bg-gray-200 h-3 w-4/12 mb-2  rounded-lg"></div>
                                        <div className="bg-gray-200 h-3 w-4/12 mb-2  rounded-lg"></div>
                                    </div>
                                </div>
        
                                <div className="w-3/12 pb-1 pr-1 flex flex-col align-center justify-end	">
                                    
                                    
                                    <span className="bg-gray-200 h-10 w-full rounded-lg"></span>
        
        
        
                                </div>
                            </div>
                        </div>
                    ) : (
                        'bbb'
                    )

                }
           </div>
        </>
    )
}

export default ProductCard2


// her card icinden tek tek fetch dene hiz testi yap. 
// filtreden kac id donuyorsa o kadar placeholder koy
// multiyi yavas yavas kaldirabiliriz