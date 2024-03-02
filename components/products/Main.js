'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { isEmpty, isNil } from "lodash";
// import { getProductById, getProductsByIds } from '@/lib/EuWoocommerce';
import Link from 'next/link';
import { getDynamicFilterData, getMultiProducts, getProducts } from '@/app/actions'
import Filter from './filter/Filter';
import ProductList from './ProductList';
import { Tags } from './filter/Tags';
import { BsFilterLeft } from "react-icons/bs";
import ReifenTop from './filter/FilterReifenTop';
import FilterReifenTop from './filter/FilterReifenTop';
import ListingBannerMobile from './listing-banner/ListingBannerMobile';
import ListingBannerDesktop from './listing-banner/ListingBannerDesktop';

// import ListingBanner from './ListingBanner';


const Main = ({products, catSlug, searchParams, device}) => {
    
    const [filterData, setfilterData] = useState({})
    const [queryPids, setQueryPids] = useState([])
    const [queryProdData, setQueryProdData] = useState([])
    const [prodsLoading, setProdsLoading] = useState(true)
    const [ isAddedToCart, setIsAddedToCart ] = useState( false );

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
                
                // console.log(products)


                let allLocal = {}

                products.map( item => {
                    allLocal[item.post_id] = item
                })
                localStorage.setItem('allLocal', JSON.stringify(allLocal))
 
            };
            getPrd();

        }

    }, [queryPids, catSlug]);

    useEffect( ()=>{
        setQueryPids(filterData?.IDs)
    }, [filterData])

  
    function prepareJsonData( catSlug ){

        let datas = {
            start : 0,
            urlAjax : 'https://alfatires.com/wp-content/themes/alfatires/inc/ajax/filterProduct.php',
            urlPage : 'https://alfatires.com/produkte/tires/',
            table : '_product_tires',
            cat : 'reifen',
            subCat: null,
            postType:'post_id',
            dot: 0,
            sale: 0,
            outlet: 0,
            campaign: '',
            language: 'en_EN',
            filters : ["car", "season", "width", "height", "zoll", "brand", "model", "loadindex", "speedindex", "pricecat"],	
        };
        
        if( catSlug == 'tires' ){
            datas.cat       = 'reifen';
            datas.table     = '_product_tires'
            datas.postType  = 'post_id'
            datas.filters   = ["car", "season", "width", "height", "zoll", "brand", "model", "loadindex", "speedindex", "pricecat"]
            
            for(let filter of datas.filters) {
                let urlSearchData = null;
                if(searchParams[filter]){
                    urlSearchData = searchParams[filter].split("§");
                }

                datas[filter] = {
                    d:urlSearchData,
                    i:null,
                    f:null,
                    img:false,
                    specific:null,
                    query:'IN'
                }
            }

            datas.car.img = true;
            datas.season.img = true;
            datas.loadindex.specific = 'LI';
            datas.speedindex.specific = 'SI';

            // datas.orderbyFiler = "ORDER BY `stock` DESC ";
        }

        if( catSlug == 'rims' ){ 
            datas.cat       = 'alufelgen';
            datas.table     = '_product_rims'
            datas.postType  = 'post_parent'
            datas.filters   = ["zoll", "lzlk", "colortype", "brand", "model", "season", "forwinter"]

            for(let filter of datas.filters) {
                let urlSearchData = null;
                if(searchParams[filter]){
                    urlSearchData = searchParams[filter].split("§");
                }
        
                datas[filter] = {
                    d:urlSearchData,
                    i:null,
                    f:null,
                    img:false,
                    specific:null,
                    query:'IN'
                }
            }

            
        }

    
        return { 
            'dataJSON' : {...datas},
            'orderby' : '',
            'shop_view' : '',
            'per_row' : '',
            'category' : '',
        }


	}
    


    useEffect(() => {

        const getBanner = async () => {

            const dataToGo = prepareJsonData( catSlug )
            const filterData = await getDynamicFilterData( dataToGo )
            setfilterData(filterData)

            // console.log('filterData', filterData)
        };

        getBanner();
            
    }, [catSlug, searchParams] );


    return (

    <div className="w-full flex justify-between">
        
        <div className="hidden lg:block lg:w-3/12">
            <div className="side-filter bg-alfa-gray-2 rounded-lg p-4">
                
                { catSlug == 'tires' &&  <FilterReifenTop filterData={filterData} searchParams={searchParams} setProdsLoading={setProdsLoading} /> }

                <div className="bg-white py-4 mt-6 rounded-lg">
                    <h1 className={`px-4 font-semibold text-2xl flex gap-x-2`}><BsFilterLeft size={32}/> FILTER</h1>
                    <Filter catSlug={catSlug} filterData={filterData} searchParams={searchParams} setProdsLoading={setProdsLoading} />
                </div>

            </div>
        </div>

        <div className='w-full lg:w-9/12 lg:pl-6'>

            {/* <ListingBanner catSlug={catSlug} /> */}

            {
                device == 'mobile' && <ListingBannerMobile catSlug={catSlug} />
            }
            {
                device == 'desktop' && <ListingBannerDesktop catSlug={catSlug} />
            }

            <div className="flex items-start justify-between my-4 ">
                <Tags searchParams={searchParams} filterData={filterData} />
                {/* <Sort searchParams={searchParams} /> */}

                

            </div>

            <ProductList catSlug={catSlug} queryProdData={queryProdData} prodsLoading={prodsLoading} setProdsLoading={setProdsLoading} setIsAddedToCart={setIsAddedToCart} isAddedToCart={isAddedToCart} />
        </div>
    </div>

  )
}

export default Main