import React, { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import ProductCard from './product-card/ProductCard';
import Placeholder from './Placeholder';
import { getMultiProducts } from '@/app/actions';

const ProductList = ({ids, setQueryProdData, catSlug, queryProdData, setProdsLoading, prodsLoading, setIsAddedToCart, isAddedToCart }) => {

    const [queryPids, setQueryPids] = useState(ids)


    let loading = false;

    useEffect( ()=>{
        // console.log('fff', queryProdData)
    }, [queryProdData])



    useEffect(() => {

        if( ! isEmpty(queryPids) ){

            const getPrd = async () => {
            
                let cat = catSlug;
                if( catSlug == 'accessories' ){
                    cat = 'lids'
                }

                const products = await getMultiProducts(cat, queryPids );
                setQueryProdData(products)
                setProdsLoading(false)
                
            };
            getPrd();

        }

    }, [queryPids, catSlug]);

    
    return (
        <div className={`product-list-wrap ${ prodsLoading && 'loading' } `}>
            { 
                isEmpty(queryProdData) ? <Placeholder /> :

                    queryProdData.map( product => (
                        <ProductCard key={product.id} prodsLoading={prodsLoading} catSlug={catSlug} product={product} loading={loading} setIsAddedToCart={setIsAddedToCart} isAddedToCart={isAddedToCart} />
                    ))  
            }
        </div>
    )
}

export default ProductList