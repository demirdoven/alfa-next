'use client'

import Accordion from "@/components/single-product/Accordion";
import AddToCart from "@/components/single-product/AddToCart";
import Gallery from "@/components/single-product/Gallery";
import OrtaStrip from "@/components/single-product/OrtaStrip";
import PaymentMethods from "@/components/single-product/PaymentMethods";
import Price from "@/components/single-product/tires/Price";
import Quantity from "@/components/single-product/Quantity";
import ReifenSimilar from "@/components/single-product/tires/ReifenSimilar";
import Title from "@/components/single-product/Title";
import Meta from "@/components/single-product/tires/Meta";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation'
import AddToTempCart from "@/components/general/AddToTempCart";
import { getProductPrice } from "@/app/actions";
// import AddToTempCart from "@/components/general/AddToTempCart";

const SingleProductReifen = ({product, catSlug}) => {
    
    const router = useRouter()
    const pathname = usePathname()

    const [variationID, setVariationID] = useState(product.post_id)
    const [productData, setProductData] = useState(product)
    const [variationList, setVariationList] = useState([])
    const [qty, setQty] = useState(1)
    const [salePrice, setSalePrice] = useState(product?.price)

    useEffect( ()=>{

        console.log('productData', productData)

    }, [productData])
    
    useEffect( ()=>{
        if( ! isEmpty(variationList) ){
            setProductData( variationList.find( ({ post_id }) => post_id == variationID ) )
        }

        console.log('variationID', variationID)
    }, [variationID, variationList])

    // const [metas, setMetas] = useState({})

    useEffect( ()=>{
        if( product.post_id !== variationID ){
            const url = `/product/${convertToSlug(productData?.brand + ' ' + productData?.model + '-'+ productData?.sizeTires + ' ' + productData?.post_id)}`
            // router.replace(url, { scroll: true });
            window.history.replaceState({}, '', url);
        }

        if (typeof window !== 'undefined') {
            if( localStorage.getItem('clickedProduct') ){
                // localStorage.removeItem('clickedProduct')
            }
        }

    })

    function convertToSlug( str ) {
        str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
        str = str.replace(/^\s+|\s+$/gm,'');
        str = str.replace(/\s+/g, '-');   
        return str;
    }
    
    
    useEffect( ()=>{

        const getPriceInfo = async () => {
            const price = await getProductPrice('tires', variationID);
            setSalePrice(price)
        }
        getPriceInfo();
    }, [variationID])
    
    useEffect( ()=>{

        console.log('salePrice', salePrice)
       
    }, [salePrice])
    

    return (
        <div className="w-full mt-6 flex flex-col gap-y-10">

            <div className="container mx-auto lg:max-w-6xl single-product-top flex flex-col lg:flex-row gap-x-8 justify-between px-4 lg:px-0">

                <div className="single-product-gallery w-full lg:w-[36%] lg:max-w-[34%]">
                    
                    <Gallery media={productData?.media} />

                </div>

                <div className="product-metas lg:max-w-[64%] flex-1 mt-4">
                    <Title productData={productData} />

                    <div className="lg:mt-2">

                        <Meta productData={productData} />

                        {/* {
                            catSlug == 'Reifen' && <ReifenMeta attrs={product.attributes} catSlug={catSlug} />
                        }
                        {
                            catSlug == 'Felgen' && <FelgenMeta product={product} setProduct={setProduct} catSlug={catSlug} />
                        } */}
                    </div>
                </div>

                <div className="product-right w-full lg:w-[320px] min-w-[320px] self-start mt-4">
                    <div className="bg-alfa-gray-1 rounded-lg p-6">

                        {/* <ReifenSimilar product={product} setProduct={setProduct} /> */}
                        
                        <ReifenSimilar
                            parentID={productData?.post_parent}
                            variationList={variationList}
                            setVariationList={setVariationList}
                            variationID={variationID} 
                            setVariationID={setVariationID}
                            initialSize={productData?.sizeTires}
                        />

                        <div className="mt-6 hidden lg:flex flex-col items-end">
                             <span className="text-sm text-green-700">Auf Lager</span>
                            <span className="text-xs text-alfa-gray-600">Lieferzeit  2-5  Werktage</span>
                        </div>


                        <div className="mt-6 lg:mt-3 flex justify-between items-center ">
                            
                            <Quantity qty={qty} setQty={setQty} />

                            <Price price={salePrice} />

                        </div>

                        <div className="mt-6">
                            <AddToCart qty={qty} pid={variationID} />
                            {/* <AddToCart product={ product } miniCart={miniCart} setMiniCart={setMiniCart} /> */}
                        </div>


                        <AddToTempCart 
                            pid={parseInt(variationID)} 
                            salePrice={salePrice} 
                            media={productData?.media}
                            title={productData?.brand +' '+productData?.model}
                        />

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
    )
}

export default SingleProductReifen