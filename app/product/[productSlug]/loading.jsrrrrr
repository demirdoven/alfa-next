'use client'

import Accordion from "@/components/single-product/Accordion";
import Gallery from "@/components/single-product/Gallery";
import OrtaStrip from "@/components/single-product/OrtaStrip";
import PaymentMethods from "@/components/single-product/PaymentMethods";
import Quantity from "@/components/single-product/Quantity";
import Title from "@/components/single-product/Title";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
// import LoadingSimilar from "@/components/single-product/loading-parts/loadingSimilar";
// import { getProductById } from "@/lib/woocommerce";


export default function LoadingProductSlug(){

    console.log( localStorage.getItem('clickedProduct') )
 
    // const productSlug = window.location.href;
    // const parts = productSlug.split('-');
    // const productID = parts[parts.length - 1];
 
    let tempProd = {}

    if (typeof window !== 'undefined') {

        tempProd = localStorage.getItem('clickedProduct')
        tempProd = JSON.parse(tempProd)
    }

    console.log('tempProd', tempProd)
    
    const galleryImages = [
        {
            original: tempProd?.media,
            thumbnail: tempProd?.media,
        }
    ];

    return (
        <>
        
        <div className="w-full mt-6 flex flex-col gap-y-10">

            <div className="container mx-auto lg:max-w-6xl single-product-top flex flex-col lg:flex-row gap-x-8 justify-between px-4 lg:px-0">

                <div className="single-product-gallery w-full lg:w-[36%] lg:max-w-[34%]">
                    
                    <Gallery media={tempProd?.media} />

                </div>

                <div className="product-metas lg:max-w-[64%] flex-1 mt-4">
                    <Title productData={tempProd} />

                    <div className="lg:mt-2">

                        {/* <Meta productData={productData} /> */}
                        meta buraya

                    </div>
                </div>

                <div className="product-right w-full lg:w-[320px] min-w-[320px] self-start mt-4">
                    <div className="bg-alfa-gray-1 rounded-lg p-6">

                        
                        {/* <ReifenSimilar
                            parentID={productData?.post_parent}
                            variationList={variationList}
                            setVariationList={setVariationList}
                            variationID={variationID} 
                            setVariationID={setVariationID}
                            initialSize={productData?.sizeTires}
                        /> */}

                        <div className="relative">
                            <h4 className="text-sm font-bold">Tire Size</h4>
                            <div className="relative">
                                <select 
                                    className="w-full p-2 rounded-md focus:outline-0 border-2 text-sm mt-1"
                                >
                                    <option key="loading">Loading</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 hidden lg:flex flex-col items-end">
                            <span className="text-sm text-green-700">Auf Lager</span>
                            <span className="text-xs text-alfa-gray-600">Lieferzeit  2-5  Werktage</span>
                        </div>


                        <div className="mt-6 lg:mt-3 flex justify-between items-center ">
                            
                            <Quantity qty={1}/>

                            {/* <Price pid={variationID} catSlug={catSlug} productData={productData} /> */}

                            <span className={`woocommerce-Price-amount amount relative ${ 'before:absolute before:top-0 before:left-0 before:animate-spin before:w-[30px] before:h-[30px]' } `}>
                                <div className='flex gap-x-1 items-end'>
                                    <bdi className={`mt-1 text-3xl font-semibold leading-none opacity-20`}> { '00.00' }
                                        <span className="woocommerce-Price-currencySymbol "> €</span>
                                    </bdi>
                                </div>
                            </span>

                        </div>

                        <div className="mt-6">
                            {/* <AddToCart qty={qty} pid={312315} /> */}
                            
                            <button
                                className={`w-full uppercase flex items-center justify-center gap-x-2 bg-red-600 text-white hover:bg-red-700 border border-red-600 text-red-600 text-xl font-bold py-2 px-8 rounded-md`}
                            >
                                <FaPlus size={20}/> Add to cart
                            </button>
                            
                        </div>

                    </div>
                    <PaymentMethods classList="mt-6 px-8"/>
                </div>


            </div>

            <div className="single-product-bottom bg-alfa-gray-1 lg:pt-8 lg:pb-16 lg:mt-6 py-4 px-8">
                <OrtaStrip classList="container mx-auto lg:max-w-6xl"/>
            </div>

            <div className="container mx-auto lg:max-w-6xl mt-2 my-36">
                
                {/* <ProductReviews variationID={product.id} */}

                <Accordion classList=""/>

                {/* <SingleAccordion product={product}/> */}

            </div>

        </div>

        </>
                
    )
}



