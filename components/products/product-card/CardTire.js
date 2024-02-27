import Image from "next/image"
import Link from "next/link";
import Price from "./Price";
import { useEffect, useState } from "react";
import BuyNowButton from "./BuyNowButton";
import { Button } from "@/components/general/Button";
// import { Button } from "../Button";
// import PriceBox from "../PriceBox";


function convertToSlug( str ) {
    str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
    str = str.replace(/^\s+|\s+$/gm,'');
    str = str.replace(/\s+/g, '-');   
    return str;
}

export default function CardTire({product, setIsAddedToCart, isAddedToCart }){

    const catSlug = 'tires';

    // console.log(product)
    let brand = product?.brand;
	if(brand == ""){
		brand = "no-brand-logo";
	}else{
		brand = product?.brand.replace(" ", "-").toLowerCase();
	}

    useEffect( ()=>{
        console.log('isAddedToCart', isAddedToCart)
    }, [isAddedToCart])

    const brandLogo  = "https://cdn.alfatires.eu/logos/brands/"+brand+".webp";
    let productImage = "https://cdn.alfatires.eu/products/tires/"+product?.media+".webp";
	
	if(product.media == "" || product.media == null){
		productImage = "https://cdn.alfatires.eu/theme/no-image-white.webp";
	}
	const seasonIcons = {
		"Summer" : "https://cdn.alfatires.eu/icons/season/summer.webp",
		"Winter" : "https://cdn.alfatires.eu/icons/season/winter.webp",
		"All Season" : "https://cdn.alfatires.eu/icons/season/all-season.webp",
		"default" : "https://cdn.alfatires.eu/icons/season/all-season.webp",
    }
	const season = product.season || "default";
	const seasonIconUrl = seasonIcons[season];
  
    function handleClickTitle() {

        localStorage.setItem('clickedProduct', JSON.stringify(product))
        
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth'
        // });
    }
      
    return (

        <div 
            data-pid={product.id} 
            className="product-card relative w-full mb-2 lg:mb-6 pt-4 pr-4 lg:pr-6 pb-4 pl-5 overflow-hidden rounded-lg border-2 border-gray-200 bg-white hover:shadow-lg"
            // data-title={product?.brand + ' ' + product?.model}
            // data-price={product?.details?.price}
            // data-tiresize={product?.details?.sizeTires}
            // data-thumb-src={productImage || ''}
        >
            {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}

            <div className="flex flex-row ">

                <div className="w-3/12 lg:w-3/12 relative lg:mx-3 lg:mt-3 lg:py-1 flex self-start">
                
                    <div className="flex flex-col gap-y-2 ">
                        
                        {/* { brandLogo && 
                            <div className="absolute top-0 left-0 border border-slate-600 bg-[#FFC107] rounded-md">
                                <Image src={brandLogo} alt={brand} className="max-h-[30px] max-w-full w-auto mx-auto " width="200" height="40"/> 
                            </div>
                                // : <div className="bg-slate-200 h-10 w-full  rounded-md"></div>
                        } */}

                        {
                            productImage && (
                                <Image
                                    className={`object-cover overflow-hidden relative ${ ['berlin-tires', 'syron', 'bf-goodrich', 'giti'].includes(brand) && 'lg:mt-[-10px]'  }`}
                                    src={productImage}
                                    alt="product image"
                                    width="200"
                                    height="200"
                                />
                            )
                        }
                        
                        { brandLogo && 
                            <div className="relative lg:absolute bottom-0 left-0 bg-white">
                                <Image 
                                    src={
                                        brand === 'continental'
                                          ? '/conti-logo.png'
                                          : brand === 'debica'
                                          ? '/debica-logo.jpeg'
                                          : brand === 'pirelli'
                                          ? '/pirelli-logo.png'
                                          : brand === 'kormoran'
                                          ? '/kormoran.png'
                                          : brandLogo
                                      }
                                    alt={brand} 
                                    className=" max-w-full w-auto mx-auto " 
                                    width="200" 
                                    height="100"
                                /> 
                            </div>
                                // : <div className="bg-slate-200 h-10 w-full  rounded-md"></div>
                        }
                       
                    
                    </div>

                </div>

                <div className="w-9/12 lg:w-9/12 flex justify-center flex-col lg:pl-8">
                    
                    <div className="w-full flex flex-row lg:pt-5 pl-6 lg:pl-0">

                        <div className=" w-9/12 lg:w-9/12  ">
                        
                            <Link 
                                href={`/product/${convertToSlug(product?.brand + ' ' + product?.model + '-'+ product?.sizeTires + ' ' + product?.post_id)}`}
                                className="my-2"
                                // scroll={false}
                            >
                                <h5 onClick={handleClickTitle} className="product-card-title leading-tight	">
                                    {product?.brand + ' ' + product?.model}
                                </h5>
                                <span onClick={handleClickTitle} className="block lg:my-2 font-light text-sm ">{product?.sizeTires}</span>
                            </Link>

                            {/* <span className="block mt-3 text-[.75rem] lg:text-[1rem]">{product.title}</span> */}

                            <ul className="flex gap-2 lg:gap-5 mt-1 lg:mt-4 text-[.75rem] lg:text-[1rem]">
                                {
                                    product?.fuel && (
                                    <li className="flex items-center gap-1 ">
                                        <Image 
                                            src="https://alfatires.eu/wp-content/themes/alfatires/img/fuel-icon.webp" 
                                            alt="" 
                                            width="20" 
                                            height="20"
                                            className="w-[14px] lg:w-[20px]"
                                        />
                                        {product?.fuel}
                                    </li>
                                    )
                                }
                                {
                                    product?.wet && (
                                    <li className="flex items-center gap-1 ">
                                        <Image src="https://alfatires.eu/wp-content/themes/alfatires/img/rain-icon.webp" 
                                            alt=""
                                            width="20" 
                                            height="20"
                                            className="w-[14px] lg:w-[20px]"
                                        />
                                        {product?.wet}
                                    </li>
                                    )
                                }
                                {
                                    product?.noise && (
                                    <li className="flex items-center gap-1 ">
                                        <Image src="https://alfatires.eu/wp-content/themes/alfatires/img/volume-icon.webp"
                                            alt=""
                                            width="20" 
                                            height="20"
                                            className="w-[14px] lg:w-[20px]"
                                        />
                                        {product?.noise}
                                    </li>
                                    )
                                }
                                
                                
                            </ul>

                            <div className="block lg:hidden mt-1">
                                { 
                                    season && seasonIconUrl ? 
                                        <div className="flex items-center gap-x-1 text-[.75rem] lg:text-[1rem]">
                                            <Image src={seasonIconUrl} alt={season} width="16" height="16"/>
                                            <span className="font-light	text-md">{season}</span>
                                        </div>
                                    
                                    : null 
                                }
                            </div>

                        </div>
                        
                        <div className="w-3/12 lg:w-3/12 pb-1 pr-1 flex flex-col align-center justify-center lg:justify-end">
                            
                            <span className="hidden lg:block text-[0.8rem] text-right text-green-600">In stock</span>
                            <span className="hidden lg:block text-[0.7rem] text-right text-alfa-gray-9">Delivery: 1-4 Days</span>

                        
                            {/* <p 
                                className="mt-3 flex flex-col items-end mr-1 mb-2 gap-0"
                                dangerouslySetInnerHTML={{__html: product.final_price+' eur' } }  
                            /> */}
                            {/* <PriceBox product={product} classList="" /> */}


                            <div className={`price-box lg:mt-8 lg:mb-2 flex flex-col lg:items-end gap-0 `}>
                                
                                <div className="">
                                    
                                    {/* <div className="">
                                        <del>
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi>45.63<span className="woocommerce-Price-currencySymbol">€</span></bdi>
                                            </span>
                                        </del> 
                                        <ins>
                                            <span className="woocommerce-Price-amount amount text-[24px] font-semibold">
                                                <bdi>32.88<span className="woocommerce-Price-currencySymbol">€</span></bdi>
                                            </span>
                                        </ins>
                                    </div> */}

                                    <div className="">
                                        <Price pid={product?.post_id} catSlug={catSlug} oldPrice={product?.price} />
                                    </div>

                                    
                                   
                                </div>

                            </div>


                            
                            {/* <Button
                                type="light"
                                classList={'hidden lg:block mt-2 mb-2 relative text-right cursor-pointer'} 
                                text="DETAILS"
                                url={`http://localhost:3000/product/${product.post_name}`}
                            /> */}


                        </div>

                    </div>

                    <hr className="hidden lg:block w-full my-4 opacity-50"/>


                    <div className="hidden lg:flex py-1 w-full justify-between items-start">
                        { 
                            season && seasonIconUrl ? 
                                <div className="flex gap-x-2 text-[.75rem] lg:text-[1rem]">
                                    <Image src={seasonIconUrl} alt={season} width="24" height="19"/>
                                    <span className="font-light	text-md">{season}</span>
                                </div>
                            
                            : null 
                        }

                        <div className="flex items-center">
                            <Button 
                                href={`/product/${convertToSlug(product?.brand + ' ' + product?.model + ' ' + product?.sizeTires + '-'+product?.post_id)}`}
                                text={'Details'} 
                                type="light"
                                classList="mr-2 uppercase"
                                onClick={handleClickTitle} 
                            />
                            <BuyNowButton 
                                pid={product.id} 
                                setIsAddedToCart={setIsAddedToCart} 
                                isAddedToCart={isAddedToCart} 
                            />

                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}