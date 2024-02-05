'use client'

import Accordion from "@/components/single-product/Accordion";
import AddToCart from "@/components/single-product/AddToCart";
import Gallery from "@/components/single-product/rims/Gallery";
import OrtaStrip from "@/components/single-product/OrtaStrip";
import PaymentMethods from "@/components/single-product/PaymentMethods";
import Price from "@/components/single-product/rims/Price";
import Quantity from "@/components/single-product/Quantity";
import { isEmpty, isInteger } from "lodash";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation'
import { getProductVariations } from "@/app/actions";
import Image from "next/image";
import VariationsFilter from "./VariationsFilter";

const SingleFelgen = ({product}) => {
    
    const [qty, setQty] = useState(1)
    
    const [productObj, setProductObj] = useState(product)
    const [currVariantOb, setCurrVariantOb] = useState({})
    const [variationID, setVariationID] = useState(null)
    const [variants, setVariants] = useState([])

    const [filteredVariants, setFilteredVariants] = useState([])

    const [allZolls, setAllZolls] = useState([])
    const [allLochs, setAllLochs] = useState([])
    const [allColors, setAllColors] = useState([])
    const [allRimSizes, setAllRimSizes] = useState([])
    const [allColorPairs, setAllColorPairs] = useState({})


    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedLoch, setSelectedLoch] = useState(null)
    const [selectedZoll, setSelectedZoll] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    const [filteredAllZolls, setFilteredAllZolls] = useState([])
    const [filteredAllLochs, setFilteredAllLochs] = useState([])
    const [filteredAllColors, setFilteredAllColors] = useState([])
    const [filteredAllRimSizes, setFilteredAllRimSizes] = useState([])


    // console.log('product', productObj)

    
    useEffect( ()=>{
       
        const getParentVars = async () => {
            const response = await getProductVariations(productObj.post_id);
            setVariants(response)
            setFilteredVariants(response)
            
        };
        getParentVars();

    }, [productObj] )

    useEffect( ()=>{
       
       
        setAllZolls( Array.from(new Set(variants.map((v) => v.attributes.find((a) => a.slug === 'pa_zoll')?.option)) ) )
        setAllLochs( Array.from(new Set(variants.map((v) => v.attributes.find((a) => a.slug === 'pa_lklz')?.option)) ) )
        setAllRimSizes( Array.from(new Set(variants.map((v) => v.attributes.find((a) => a.slug === 'pa_rimsize')?.option)) ) )
        setAllColors( Array.from(new Set(variants.map((v) => v.attributes.find((a) => a.slug === 'pa_color')?.option)) ) )
  
        setAllColorPairs( Object.fromEntries(variants.map(v => [v.attributes.find(a => a.slug === 'pa_color')?.option, v?.image?.src])) )

        
        // else{
            if( ! isEmpty(variants) ){
                setCurrVariantOb(variants[0])
            }
        // }

    }, [variants] )

    useEffect( ()=>{
       
        // if( ! isEmpty(filteredVariants) ){

            setFilteredAllZolls( Array.from(new Set(filteredVariants.map((v) => v.attributes.find((a) => a.slug === 'pa_zoll')?.option)) ) )
            setFilteredAllLochs( Array.from(new Set(filteredVariants.map((v) => v.attributes.find((a) => a.slug === 'pa_lklz')?.option)) ) )
            setFilteredAllRimSizes( Array.from(new Set(filteredVariants.map((v) => v.attributes.find((a) => a.slug === 'pa_rimsize')?.option)) ) )
            setFilteredAllColors( Array.from(new Set(filteredVariants.map((v) => v.attributes.find((a) => a.slug === 'pa_color')?.option)) ) )
            
        // }

        if( isEmpty(filteredAllLochs) ){
            setSelectedLoch(null)
        }
        if( isEmpty(filteredAllRimSizes) ){
            setSelectedSize(null)
        }

    }, [filteredVariants] )

    useEffect(() => {
        
        const filteredVariants = variants.filter(variant => {
            const selectedZollMatch = selectedZoll ? variant.attributes.find(attr => attr.slug === 'pa_zoll')?.option === selectedZoll : true;
            const selectedColorMatch = selectedColor ? variant.attributes.find(attr => attr.slug === 'pa_color')?.option === selectedColor : true;
            const selectedLochMatch = selectedLoch ? variant.attributes.find(attr => attr.slug === 'pa_lklz')?.option === selectedLoch : true;
            const selectedSizeMatch = selectedSize ? variant.attributes.find(attr => attr.slug === 'pa_rimsize')?.option === selectedSize : true;
    
            return selectedZollMatch && selectedColorMatch && selectedLochMatch && selectedSizeMatch;
        });
    
        setFilteredVariants(filteredVariants);

        console.log('variants', variants)
        console.log('filtered', filteredVariants)

        if( 
            ! isEmpty(filteredVariants) && 
            filteredVariants.length == 1 &&
            selectedSize != null && 
            selectedColor != null && 
            selectedLoch != null && 
            selectedZoll != null 
        ){

            console.log('bulundu sanirim', filteredVariants)
            setCurrVariantOb(filteredVariants[0])
        }
        // else{
        //     setCurrVariantOb({})
        // }

    }, [selectedSize, selectedColor, selectedLoch, selectedZoll, variants]);

    function handleChangeSize(e){
       
        if( e.target.value == '' ){
            setSelectedSize(null)
        }else{
            setSelectedSize(e.target.value)
        }
    }
    function handleChangeLoch(e){
        if( e.target.value == '' ){
            setSelectedLoch(null)
        }else{
            setSelectedLoch(e.target.value)
        }
        
    }

    return (
        <div className="w-full mt-6 flex flex-col gap-y-10">

            <div className="container mx-auto lg:max-w-6xl single-product-top flex flex-col lg:flex-row gap-x-8 justify-between px-4 lg:px-0">

                <div className="single-product-gallery w-full lg:w-[36%] lg:max-w-[34%]">
                    <Gallery variants={variants} variationID={variationID} />
                </div>

                <div className="product-metas lg:max-w-[64%] flex-1 mt-4">

                    <h1 className="font-openSansCondensed text-[1rem]  font-bold   lg:text-[2rem]  tracking-[.02em] text-slate-900 leading-8 mt-2 px-2 lg:px-0">{product?.brand +' '+product?.model}</h1>
                    <h4 className="font-openSansCondensed text-[1rem]  lg:text-[1.6rem]  tracking-[.02em] text-slate-900 leading-8  font-medium px-2 lg:px-0 mt-2">{product?.color}</h4>
                    
                    { currVariantOb?.name }

                    <div className="lg:mt-2">

                        {/* <VariationsFilter variants={variants} /> */}


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
                                    <span className="font-normal">Zoll</span>
                                    <ul className="flex flex-row gap-x-1">
                                        {
                                            allZolls.sort().map( item => (
                                                <li 
                                                    key={item}
                                                    className={` ${selectedZoll == item ? 'bg-slate-900 text-white' : '' } ${ !isEmpty(filteredAllZolls) && ! filteredAllZolls.includes(item) ? 'opacity-20 select-none' : 'opacity-100 select-auto	' } bg-gray-200 w-[30px] h-[30px] flex items-center justify-center rounded-full text-sm cursor-pointer `}
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
                                    <span className="font-normal">Color</span>
                                    <ul className="flex flex-row gap-1 flex-wrap">
                                       
                                        {    
                                            ! isEmpty(allColors) &&
                                            allColors.map( item => (
                                                <li 
                                                    key={item}
                                                    className={` ${selectedColor == item ? '  border-slate-800' : 'border-white-100' } ${ !isEmpty(filteredAllColors) && ! filteredAllColors.includes(item) ? 'opacity-20' : 'opacity-100' } p-1 border rounded-full cursor-pointer`}
                                                    onClick={ ()=> setSelectedColor(item) }
                                                >
                                                    <Image
                                                        src={allColorPairs[item]}
                                                        alt={item}
                                                        title={item}
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
                                    <span className="font-normal">Lochkreis</span>
                                    <select 
                                        value={selectedLoch}
                                        onChange={ (e)=>{ handleChangeLoch(e) } }
                                        >
                                            <option value="">All</option>
                                            {    
                                                ! isEmpty(allLochs) &&
                                                allLochs.map( item => (
                                                    <option 
                                                        key={item} 
                                                        value={item} 
                                                        disabled={ ! filteredAllLochs.includes(item) ? true : null } 
                                                    >
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
                                            <option value="">All</option>
                                            {    
                                                ! isEmpty(allRimSizes) &&
                                                allRimSizes.map( item => (
                                                    <option 
                                                        key={item} 
                                                        value={item}
                                                        disabled={ ! filteredAllRimSizes.includes(item) ? true : null } 
                                                    >
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
                            
                            <Quantity qty={qty} setQty={setQty} />

                            {/* 

                            <Price pid={variationID} catSlug={catSlug} productData={productData} />
                             */}
                            
                            <Price currVariantOb={currVariantOb} />

                            
                        </div>

                        <div className="mt-6">

                            <AddToCart qty={qty} pid={312215} />

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

export default SingleFelgen