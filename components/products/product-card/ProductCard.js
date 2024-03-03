import React from 'react'
import CardTire from './CardTire'
import CardRim from './CardRim'
import Placeholder from '../Placeholder'
import CardLid from './CardLid'

const ProductCard = ({catSlug, prodsLoading, product, loading, setIsAddedToCart, isAddedToCart}) => {
    
    return (
        <>
            { catSlug == 'tires' && <CardTire prodsLoading={prodsLoading} product={product} loading={loading} setIsAddedToCart={setIsAddedToCart} isAddedToCart={isAddedToCart} /> }
            {/* { catSlug == 'rims' && <CardRim product={product} loading={loading} /> } */}
            {/* { catSlug == 'rims' && <Placeholder /> } */}
            { catSlug == 'rims' && (
                <h5 className="text-[1rem] lg:text-[1.4rem] font-semibold tracking-tight text-slate-900">
                                    {product.brand} {product.model} 
                                </h5> 
                                )
            }
            {/* { catSlug == 'accessories' && <CardTire prodsLoading={prodsLoading} product={product} loading={loading} setIsAddedToCart={setIsAddedToCart} isAddedToCart={isAddedToCart} /> } */}
            { catSlug == 'accessories' && <CardLid prodsLoading={prodsLoading} product={product} loading={loading} setIsAddedToCart={setIsAddedToCart} isAddedToCart={isAddedToCart} /> }

        </>
    )
}

export default ProductCard


// her card icinden tek tek fetch dene hiz testi yap. 
// filtreden kac id donuyorsa o kadar placeholder koy
// multiyi yavas yavas kaldirabiliriz