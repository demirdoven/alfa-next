import { getAvailableVariations, getProductVariations } from "@/app/actions";
import { isEmpty, isNull } from "lodash";
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import ThumbRim from "./ThumbRim";
// import { Button } from "../Button";
// import PriceBox from "../PriceBox";

export default function CardRim({product}){

    const [parentID, setParentID] = useState(null);
    const [varID, setVarID] = useState(null);
    const [vars, setVars] = useState([]);
    const [thumbSrc, setThumbSrc] = useState(null);
    const [currentVarObj, setCurrVarOb] = useState(null);

    const [colors, setcolors] = useState([])
    const [lklzs, setlklzs] = useState([])
    const [rimSizes, setrimSizes] = useState([])
    const [zolls, setzolls] = useState([])
    const [colorPairs, setColorPairs] = useState([])

    const catSlug = 'felgen';

    let brand = product?.brand;
	if(brand == ""){
		brand = "no-brand-logo";
	}else{
		brand = product?.brand.replace(" ", "-").toLowerCase();
	}

    useEffect( ()=>{
        console.log('currentVarObj', currentVarObj)
    }, [currentVarObj])
    
    // console.log('product', product)

	// if(product.media == ""){
	// 	productImage = "https://cdn.alfatires.eu/theme/no-image-white.webp";
	// }
	
	// const uniqueColorsSet = new Set();
	// const uniqueColors = product?.swatches.filter(obj => {
	// 	if (!uniqueColorsSet.has(obj.attributes.attribute_pa_color)) {
	// 		uniqueColorsSet.add(obj.attributes.attribute_pa_color);
	// 		return true;
	// 	}
	// 	return false;
	// });


	// console.log('product', product)
	// console.log('variations', product.swatches)
	// console.log('unique', result)
  
    function convertToSlug( str ) {
        str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
        str = str.replace(/^\s+|\s+$/gm,'');
        str = str.replace(/\s+/g, '-');   
        return str;
    }


    useEffect(() => {

        if( product?.post_parent > 0 ){
            setParentID(product?.post_parent)
            setVarID(product?.post_id)
        }else{
            setParentID(product?.post_id)
            setVarID(null)
        }

    }, [product]);

    useEffect(() => {

        if( ! isEmpty(vars) ){
            console.log('vars', vars)


            let colors = [];
            let lklzs = [];
            let rimSizes = [];
            let zolls = [];
            let colorPairs = [];
    
    
            vars?.map( variant => {
                
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

            })
    
            setcolors(colors)
            setlklzs(lklzs)
            setrimSizes(rimSizes)
            setzolls(zolls)
            setColorPairs(colorPairs)

            if( ! isNull(varID) ){
                const currObj = vars.find(obj => obj.id == product.post_id)
                console.log(currObj)
                setCurrVarOb(currObj)
                setThumbSrc(currObj?.image?.src)
            }else{
                setThumbSrc(vars[0]?.image?.src)
            }

            

        }

    }, [vars]);


    useEffect(() => {

        if( ! isNull(parentID) ){

            const getVars = async () => {
            
                const vars = await getProductVariations(parentID );
                setVars(vars)
                
            };
            getVars();

        }

    }, [parentID]);

    function handleClickTitle() {

        localStorage.setItem('clickedProduct', JSON.stringify(product))
        
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth'
        // });
    }

    function handleChangeThumb(src) {

       setThumbSrc(src)
    }

    return (
        <div data-pid={product.id} className="relative w-full mb-4 pt-4 pr-6 pb-4 pl-5 overflow-hidden rounded-lg border-2 border-gray-200 bg-white hover:shadow-lg">
            {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}

            <div className="flex flex-row ">

                <div className="w-5/12 lg:w-3/12 relative mx-3 mt-3 py-1 flex">
                
                    <div className="flex flex-col gap-y-2">
                        
                        {
                            ! isNull(thumbSrc) &&
                                <Image 
                                    src={thumbSrc}
                                    alt={`cdas`}
                                    width={100}    
                                    height={100}    
                                />
                        }



                        {
                            // <Image
                            //     className="object-cover  overflow-hidden" 
                            //     src={productImage}
                            //     alt="product image"
                            //     width="200"
                            //     height="200"
                            // />
                            
                        }
                        
                    
                    </div>

                </div>

                <div className="w-7/12 lg:w-9/12 flex flex-col lg:pl-12">
                    
                    <div className="w-full flex flex-row pt-5">
                        <div className="w-full lg:w-8/12  ">
                            <Link 
                                href={`/product/${convertToSlug(product?.brand + ' ' + product?.model + ' ' + product?.post_id)} `}
                                >
                                <h5 
                                    onClick={handleClickTitle}
                                    className="text-[1rem] lg:text-[1.4rem] font-semibold tracking-tight text-slate-900">
                                    {product.brand} {product.model} 
                                </h5>
                            </Link>
                            {/* <span className="block mt-3 text-[.75rem] lg:text-[1rem]">{product.title}</span> */}

                            <div className="flex gap-5 mt-4  text-[.75rem] lg:text-[1rem]">
								{
                                    ! isEmpty(zolls) && (
                                        <ul className="flex gap-x-2">
                                            {
                                                zolls.sort().map( item => (
                                                    <li 
                                                        key={item}
                                                        className={` ${ currentVarObj?.attributes?.attribute_pa_zoll == item && 'bg-gray-200 w-[30px] h-[30px] rounded-full' } text-sm flex items-center justify-center`}
                                                    >
                                                        {item+'"'}
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    )
                                    
                                }
								
                        	</div>
                            {/* <div 
								className="flex gap-5 mt-4  text-[.75rem] lg:text-[1rem]"
								dangerouslySetInnerHTML={{__html: product?.swatches}}
								>
								
                        	</div> */}
                            
                            <ul className="flex flex-row gap-x-2 flex-wrap mt-4">
                                       
                                {    
                                    product?.post_parent == 0 && ! isEmpty(colorPairs) &&
                                        colorPairs.map( item => (
                                            <li key={item.color}>
                                                <Image
                                                    src={item?.src}
                                                    alt={item.color}
                                                    title={item.color}
                                                    width={30}
                                                    height={30}
                                                    onClick={ ()=>{ handleChangeThumb(item?.src) }}
                                                    className="cursor-pointer"
                                                />
                                            </li>
                                        ))
                                }
                            </ul>

                        </div>
                        
                        <div className="w-full lg:w-4/12 pb-1 pr-1 flex flex-col align-center justify-end	">
                            
                            <span className="hidden lg:block text-[0.8rem] text-right text-green-600">In stock</span>
                            <span className="hidden lg:block text-[0.7rem] text-right text-alfa-gray-9">Delivery: 1-4 Days</span>

                        
                            {/* <p 
                                className="mt-3 flex flex-col items-end mr-1 mb-2 gap-0"
                                dangerouslySetInnerHTML={{__html: product.final_price+' eur' } }  
                            /> */}
                            {/* <PriceBox product={product} classList="" /> */}


                            <div className={`price-box mt-8 lg:mt-8 mb-2 flex flex-col lg:items-end gap-0 `}>
                                
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

                                    {/* <div className="">
                                        <span className="woocommerce-Price-amount amount text-[24px] font-semibold">
                                            from <bdi>{ product?.priceMin }<span className="woocommerce-Price-currencySymbol"> €</span></bdi>
                                        </span>
                                    </div> */}

                                    
                                   
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

                    <hr className="w-full my-2"/>


                    <div className="w-full">
                        {/* { 
                            season && seasonIconUrl ? 
                                <div className="mt-4 flex gap-x-2 text-[.75rem] lg:text-[1rem]">
                                    <Image src={seasonIconUrl} alt={season} width="24" height="19"/>
                                    <span className="font-light	text-md">{season}</span>
                                </div>
                            
                            : null 
                        } */}
                    </div>

                </div>

            </div>

        </div>

    )
}