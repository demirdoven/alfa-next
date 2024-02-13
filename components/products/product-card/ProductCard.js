import React from 'react'
import CardTire from './CardTire'
import CardRim from './CardRim'

const ProductCard = ({catSlug, prodsLoading, product, loading, setIsAddedToCart, isAddedToCart}) => {
    
    return (
        <>
            { catSlug == 'tires' && <CardTire prodsLoading={prodsLoading} product={product} loading={loading} setIsAddedToCart={setIsAddedToCart} isAddedToCart={isAddedToCart} /> }
            { catSlug == 'rims' && <CardRim product={product} loading={loading} /> }
            { catSlug == 'accessories' && <CardTire prodsLoading={prodsLoading} product={product} loading={loading} setIsAddedToCart={setIsAddedToCart} isAddedToCart={isAddedToCart} /> }

        </>
    )
}

export default ProductCard


// her card icinden tek tek fetch dene hiz testi yap. 
// filtreden kac id donuyorsa o kadar placeholder koy
// multiyi yavas yavas kaldirabiliriz