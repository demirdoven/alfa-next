'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { isEmpty } from "lodash";
// import { getProductById, getProductsByIds } from '@/lib/EuWoocommerce';
import Link from 'next/link';
import { getMultiProducts, getProducts } from '@/app/actions'
import Filter from './filter/Filter';
import ListingBanner from './ListingBanner';
import ProductList2 from './ProductList2';
import { Tags } from './filter/Tags';
import { BsFilterLeft } from "react-icons/bs";
import ReifenTop from './filter/FilterReifenTop';


const Main2 = ({products, catSlug, searchParams, filterData}) => {
    
    const [queryProdData, setQueryProdData] = useState([])
    const [prodsLoading, setProdsLoading] = useState(true)
    const [ isAddedToCart, setIsAddedToCart ] = useState( false );

    

  
    return (

    <div className="w-full flex justify-between">
        
        <div className="w-3/12">
            <div className="side-filter bg-alfa-gray-1 rounded-lg p-4">
                
                {/* { catSlug == 'tires' &&  <ReifenTop filterData={filterData} /> } */}

                <div className="bg-white py-4 mt-6 rounded-lg">
                    <h1 className={`px-4 font-semibold text-2xl flex gap-x-2`}><BsFilterLeft size={32}/> FILTER</h1>
                    <Filter catSlug={catSlug} filterData={filterData} searchParams={searchParams} setProdsLoading={setProdsLoading} />
                </div>

            </div>
        </div>

        <div className='w-9/12 pl-6'>

            <ListingBanner catSlug={catSlug} />

            <div className="flex items-start justify-between my-4 ">
                <Tags searchParams={searchParams} filterData={filterData} />
                {/* <Sort searchParams={searchParams} /> */}

                

            </div>

            <ProductList2 ids={filterData?.IDs} setQueryProdData={setQueryProdData} catSlug={catSlug} queryProdData={queryProdData} prodsLoading={prodsLoading} setProdsLoading={setProdsLoading} setIsAddedToCart={setIsAddedToCart} isAddedToCart={isAddedToCart} />
        </div>
    </div>

  )
}

export default Main2