'use client'

import Accordion from "@/components/single-product/Accordion";
import AddToCart from "@/components/single-product/AddToCart";
import Gallery from "@/components/single-product/rims/Gallery";
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
import { getAvailableVariations, getParentVariations, getProductVariations, getXXX } from "@/app/actions";
import Image from "next/image";

const SingleFelgenVariation = ({product, catSlug}) => {
    
    const [parentID, setParentID] = useState(null)
    const [variationID, setVariationID] = useState(null)
    const [currVariantOb, setCurrVariantOb] = useState({})
    const [variants, setVariants] = useState([])
    const [variantsAttrs, setVariantsAttrs] = useState([])

    const [selectedSize, setSelectedSize] = useState(convertToSlug(product?.size))
    const [selectedLoch, setSelectedLoch] = useState(convertToSlug(product?.lzlk))
    const [selectedZoll, setSelectedZoll] = useState(convertToSlug(product?.zoll))
    const [selectedColor, setSelectedColor] = useState(product?.color)

    const [colors, setcolors] = useState([])
    const [lklzs, setlklzs] = useState([])
    const [rimSizes, setrimSizes] = useState([])
    const [zolls, setzolls] = useState([])
    const [colorPairs, setColorPairs] = useState([])

    const [acikColors, setAcikColors] = useState( colors || [] )
    const [acikZolls, setAcikZolls] = useState( zolls || [] )
    const [acikLochs, setAcikLochs] = useState( lklzs || [] )
    const [acikRimSizes, setAcikRimSizes] = useState( rimSizes || [] )

    // console.log('product', product)

    useEffect( ()=>{
        console.log('acikColors', acikColors)
    }, [colors])

    useEffect( ()=>{
        
        if( product?.post_parent > 0 ){
            setParentID(product?.post_parent)
            setVariationID(product?.post_id)
        }else{
            setParentID(product?.post_id)
            setVariationID(product?.post_id)
        }
   
    }, [product] )

    useEffect( ()=>{
        
        console.log('parentID', parentID)

        if( parentID !== null ){

            // const getParentVars = async () => {
            //     const response = await getAvailableVariations(parentID);
            //     setVariants(response)
            // };
            // getParentVars();

            const getX = async () => {
                const response = await getProductVariations(parentID);
                setVariants(response)
                console.log('yeni vars', response)
            };
            getX();

        }
    }, [parentID] )

    useEffect( ()=>{
        console.log('variants', variants)
        
        const currObj = variants.find(obj => obj.id == variationID)
        setCurrVariantOb(currObj)
        
        let colors = [];
        let lklzs = [];
        let rimSizes = [];
        let zolls = [];
        let colorPairs = [];

        let konsantreAttrs = []

        variants.map( variant => {

            const colorAttr = variant?.attributes.find( attr => attr.slug == "pa_color" )
            if( ! colors.includes( colorAttr?.option ) ){
                colors.push(colorAttr?.option)
                colorPairs.push( {'colorName': colorAttr?.option, 'src': variant?.image?.src } )
            }

            const zollAttr = variant?.attributes.find( attr => attr.slug == "pa_zoll" )
            if( ! zolls.includes( zollAttr?.option ) ){
                zolls.push( zollAttr?.option )
            }

            const lochAttr = variant?.attributes.find( attr => attr.slug == "pa_lklz" )
            if( ! lklzs.includes( lochAttr?.option ) ){
                lklzs.push( lochAttr?.option )
            }

            const rimSizeAttr = variant?.attributes.find( attr => attr.slug == "pa_rimsize" )
            if( ! rimSizes.includes( rimSizeAttr?.option ) ){
                rimSizes.push( rimSizeAttr?.option )
            }

            konsantreAttrs.push( {
                'varId': variant?.id,
                'color': colorAttr?.option,
                'zoll': zollAttr?.option,
                'loch': lochAttr?.option,
                'rimSize': rimSizeAttr?.option,
            } )


        })

        setcolors(colors)
        setlklzs(lklzs)
        setrimSizes(rimSizes)
        setzolls(zolls)
        setColorPairs(colorPairs)

        console.log('colors', colors)
        console.log('zolls', zolls)
        console.log('colorPairs', colorPairs)

        setVariantsAttrs(konsantreAttrs)

        console.log('konsantreAttrs', konsantreAttrs)
        console.log('variants', variants)
        
    }, [variants] )



    // const router = useRouter()
    // const pathname = usePathname()

    // const [variationID, setVariationID] = useState(product.post_id)
    // const [productData, setProductData] = useState(product)
    // const [variationList, setVariationList] = useState([])
    // const [qty, setQty] = useState(1)

    // useEffect( ()=>{

    //     if( ! isEmpty(variationList) ){
    //         setProductData( variationList.find( ({ post_id }) => post_id == variationID ) )
    //     }      
    // }, [variationID, variationList])

    // // const [metas, setMetas] = useState({})

    // useEffect( ()=>{
    //     if( product.post_id !== variationID ){
    //         const url = `/product/${convertToSlug(productData?.brand + ' ' + productData?.model + '-'+ productData?.sizeTires + ' ' + productData?.post_id)}`
    //         // router.replace(url, { scroll: true });
    //         window.history.replaceState({}, '', url);
    //     }

    //     if (typeof window !== 'undefined') {
    //         if( localStorage.getItem('clickedProduct') ){
    //             localStorage.removeItem('clickedProduct')
    //         }
    //     }

    // })



    useEffect( ()=>{

        if( ! isEmpty(currVariantOb) ){
            console.log('currVariantOb', currVariantOb)

            const colorAttr = currVariantOb?.attributes.find( attr => attr.slug == "pa_color" )
            setSelectedColor(colorAttr?.option)
            
            const zollAttr = currVariantOb?.attributes.find( attr => attr.slug == "pa_zoll" )
            setSelectedZoll(zollAttr?.option)

            const lochAttr = currVariantOb?.attributes.find( attr => attr.slug == "pa_lklz" )
            setSelectedLoch(lochAttr?.option)

            const rimSizeAttr = currVariantOb?.attributes.find( attr => attr.slug == "pa_rimsize" )
            setSelectedSize(rimSizeAttr?.option)
        }

        


    }, [currVariantOb])


    function convertToSlug(inputString) {
        let cleanedString = inputString.replace(/[\/\s]+/g, '-');
        cleanedString = cleanedString.toLowerCase();
        return cleanedString;
    }

    function handleChangeSize(e){
        setSelectedSize(e.target.value)
    }
    function handleChangeLoch(e){
        setSelectedLoch(e.target.value)
    }

    // burayi yap 

    // useEffect( ()=>{

    //     const all = {
    //         selectedColor, selectedLoch, selectedSize, selectedZoll
    //     }
    //     console.log('selecteds', all)

    //     let openZolls = []

    //     variants.map( variant => {
    //         openZolls = variant?.attributes.find( obj => obj.slug == "pa_zoll" && obj.option == selectedZoll )
    //     })
        

    // }, [selectedColor, selectedLoch, selectedSize, selectedZoll])

    return (
        <div className="w-full mt-6 flex flex-col gap-y-10">

            <div className="container mx-auto lg:max-w-6xl single-product-top flex flex-col lg:flex-row gap-x-8 justify-between px-4 lg:px-0">

                <div className="single-product-gallery w-full lg:w-[36%] lg:max-w-[34%]">
                    <Gallery media={currVariantOb?.image?.src} />
                </div>

                <div className="product-metas lg:max-w-[64%] flex-1 mt-4">

                    <h1 className="font-openSansCondensed text-[1rem]  font-bold   lg:text-[2rem]  tracking-[.02em] text-slate-900 leading-8 mt-2 px-2 lg:px-0">{product?.brand +' '+product?.model}</h1>
                    <h4 className="font-openSansCondensed text-[1rem]  lg:text-[1.6rem]  tracking-[.02em] text-slate-900 leading-8  font-medium px-2 lg:px-0 mt-2">{product?.color}</h4>
                    
                    <div className="lg:mt-2">

                        {/* <Meta productData={productData} /> */}

                        {/* {
                            catSlug == 'Reifen' && <ReifenMeta attrs={product.attributes} catSlug={catSlug} />
                        }
                        {
                            catSlug == 'Felgen' && <FelgenMeta product={product} setProduct={setProduct} catSlug={catSlug} />
                        } */}

                        <ul className="flex flex-col gap-y-8 text-[18px] px-2 pt-4 pb-6 lg:pt-6 border-b border-b-alfa-gray-2 mb-4">
                            
                                <li 
                                    className="flex flex-col"
                                >
                                    <span className="font-normal">Color</span>
                                    <ul className="flex flex-row gap-1 flex-wrap">
                                       
                                        {    
                                            ! isEmpty(colorPairs) &&
                                            colorPairs.map( item => (
                                                <li 
                                                    key={item.colorName}
                                                    className={` ${selectedColor == item.colorName ? '  border-slate-800' : 'border-white-100' } p-1 border rounded-full cursor-pointer`}
                                                    onClick={ ()=> setSelectedColor(item.colorName) }
                                                >
                                                    <Image
                                                        src={item?.src}
                                                        alt={item.colorName}
                                                        title={item.colorName}
                                                        width={30}
                                                        height={30}
                                                        className="rounded-full"
                                                    />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>

                                <li 
                                    className="flex flex-col"
                                >
                                    <span className="font-normal">Zoll</span>
                                    <ul className="flex flex-row gap-x-1">
                                        {
                                            ! isEmpty(zolls) &&
                                            zolls.sort().map( item => (
                                                <li 
                                                    key={item}
                                                    className={` ${selectedZoll == item && 'bg-slate-800 text-white' } bg-gray-200 w-[30px] h-[30px] flex items-center justify-center rounded-full text-sm`}
                                                    onClick={ ()=> setSelectedZoll(item) }
                                                >
                                                    {item}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                              
                                <li 
                                    className="flex flex-col"
                                >
                                    <span className="font-normal">Lochkreis</span>
                                    <select 
                                        value={selectedLoch}
                                        onChange={ (e)=>{ handleChangeLoch(e) } }
                                        >
                                       
                                        {    
                                            ! isEmpty(lklzs) &&
                                            lklzs.map( item => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </li>
                              
                              
                                <li 
                                    className="flex flex-col"
                                >
                                    <span className="font-normal">Felgengröße</span>
                                    <select
                                        value={selectedSize}
                                        onChange={(e) => handleChangeSize(e)}
                                        >
                                       
                                        {    
                                            ! isEmpty(rimSizes) &&
                                            rimSizes.map( item => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </li>
                              
                              
                              
                            
                        </ul>

                    </div>
                </div>

                <div className="product-right w-full lg:w-[320px] min-w-[320px] self-start mt-4">
                    <div className="bg-alfa-gray-1 rounded-lg p-6">

                        <div className="mt-6 hidden lg:flex flex-col items-end">
                             <span className="text-sm text-green-700">Auf Lager</span>
                            <span className="text-xs text-alfa-gray-600">Lieferzeit  2-5  Werktage</span>
                        </div>


                        <div className="mt-6 lg:mt-3 flex justify-between items-center ">
                            quantity
                            {/* <Quantity qty={qty} setQty={setQty} />

                            <Price pid={variationID} catSlug={catSlug} productData={productData} />
                             */}
                            price
                        </div>

                        <div className="mt-6">
                            ad to cart
                            {/* <AddToCart qty={qty}/> */}
                            {/* <AddToCart product={ product } miniCart={miniCart} setMiniCart={setMiniCart} /> */}
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
    )
}

export default SingleFelgenVariation