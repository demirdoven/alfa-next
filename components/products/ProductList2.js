import React, { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import ProductCard2 from './product-card/ProductCard2';
import Placeholder from './Placeholder';
import { getMultiProducts } from '@/app/actions';

const ProductList2 = ({ids, setQueryProdData, catSlug, queryProdData, setProdsLoading, prodsLoading, setIsAddedToCart, isAddedToCart }) => {

    // const [queryPids, setQueryPids] = useState(ids)


    let loading = false;

    // useEffect( ()=>{
    //     console.log('sss', queryProdData)
    // }, [queryProdData])




    return (
        <>
            {/* { prodsLoading ? <Placeholder /> :

                ! isEmpty(queryProdData) && 
                    queryProdData.map( product => (
                        <ProductCard key={product.id} catSlug={catSlug} product={product} loading={loading} setIsAddedToCart={setIsAddedToCart} isAddedToCart={isAddedToCart} />
                    ))  
            } */}
            {
                ids.map( id => (
                    <ProductCard2 key={id} id={id} catSlug={catSlug} />
                ))
            }
        </>
    )
}

export default ProductList2