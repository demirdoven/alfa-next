'use client'

import Link from "next/link"
import { useEffect, useState } from "react";

import { isEmpty } from "lodash";
import { Button } from "../general/Button";
import Image from "next/image";

const HeroMobile = ( {device} ) => {


    // const [heroFilterAtts, setHeroFilterAtts] = useState(null)

    const [selectedValues, setSelectedValues] = useState({width: '205', height: '55', zoll: '16'});
    const [reifenTypeValue, setReifenTypeValue] = useState('Winter');
    const [btnUrl, setBtnUrl] = useState( `/products/tires?season=Winter&width=205&height=55&zoll=16&` );

    const heroFilterAtts = {
        'width' : {
            'title' : 'Width',
            'terms' : [65, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315],
            'default' : 205
            
        },
        'height' : {
            'title' : 'Height',
            'terms' : [40, 45, 50, 55, 60, 65, 70, 75, 80],
            'default' : 55
        },
        'zoll' : {
            'title' : 'Zoll',
            'terms' : [14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            'default' : 16
        },
        // 'season' : {
        //     'title' : 'Season',
        //     'terms' : ['Winter', 'Summer', 'All Season']
        // }
    }

    const handleSelectChange = (e, slug) => {
        setSelectedValues({
          ...selectedValues,
          [slug]: e.target.value,
        });
      };
  
    const handleReifenTypChange = (e) => {
        setReifenTypeValue(e.target.value);
      };
  
    function handleHeroFilterButton(e){
        e.preventDefault();

        const breite = document.getElementById('breite');
        const hoehe = document.getElementById('hoehe');
        const zoll = document.getElementById('zoll');
        const reifentyp = document.getElementById('reifentyp');

        let url = new URL(`${pathname}`);

        breite && breite.value && url.searchParams.append('width', breite.value);
        hoehe && hoehe.value && url.searchParams.append('height', hoehe.value);
        zoll && zoll.value && url.searchParams.append('zoll', zoll.value);
        reifentyp && reifentyp.value && url.searchParams.append('season', reifentyp.value);
        
        // alert(url.href);
        // return false;
        window.location.href = (url.href)

        // window.history.pushState({}, '', url.href);

    }

    useEffect( () => {
        setUrl();
    }, [selectedValues])

    useEffect( () => {
        setUrl();
    }, [reifenTypeValue])

    function setUrl(){
        let url = new URL(`https://alfatires.dev/products/tires/`);

        
        Object.keys(selectedValues).forEach(function(key) {
            url.searchParams.append(key, selectedValues[key]);
        });

        reifenTypeValue && url.searchParams.append('season', reifenTypeValue);

        // console.log(url.href);

        // setBtnUrl(url.href.replace('breite', 'width').replace('hoehe', 'height').replace('winterreifen', 'Winter').replace('sommerreifen', 'Summer').replace('allwetterreifen', 'All%20Season') )
        setBtnUrl(url.href)
    }

    let lastikAttrs = {}

    // if( device == 'desktop' ){

        lastikAttrs = {
            animate : {
                scale: [0.5, 1.2, 1.2, 1, 1],
                rotate: [0, 0, 720, 720, 720],
                // transition: { type: "spring", duration: 0.75 }
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }
        }

    // }

    return (
        <>
            <div className="w-full relative pb-2 px-8 lg:px-0 lg:pb-0">
                <div className="relative mx-auto lg:max-w-6xl z-50">
                    
                    <div className="w-full flex flex-col lg:flex-row justify-between align-center leading-1 ">
                        <div className="w-full lg:w-[50%] flex flex-col items-start justify-end leading-[20px] pt-6 pb-[174px] ">
                            
                                {/* <Image 
                                    src={'/hero/DE-Title-x2.png.webp'}
                                    alt={`aa`}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    priority={true}
                                />
                                <Image 
                                    src={'/hero/DE-Subtext-x2.png.webp'}
                                    alt="bb"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    priority={true}
                                /> */}
                                
                                <h1 className="text-2xl font-bold mt-2">Best shop for tires, rims & wheels</h1>
                                <h2 className="text-lg leading-[22px]  mt-2">Large selection of quality and premium brand tires, <br/>Aluminum rims and complete wheels.</h2>

                                <Link
                                    href="/deals"
                                    className="see-deals-btn relative left-[-20px] top-[9px] flex items-center gap-x-3 mt-4 text-xl text-white drop-shadow-lg font-semibold uppercase self-end"
                                >
                                    <span>See Deals</span>
                                    <span className="animate-to-right relative top-[-2px] ">&#8594;</span>

                                </Link>

                                

                            
                                <Image 
                                    className="hidden lg:block lg:mt-12"
                                    src={'/hero/Tires.png.webp'}
                                    alt="bb"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                        </div>
                        <div className="custom-filter w-full lg:w-[50%] relative lg:max-w-fit pt-2 pb-6">
                            
                            <Image 
                                className="w-[400px] h-auto lg:block lg:w-[100%] lg:h-[32rem]"
                                src={'/hero/homepage-filter-png_optimized.png.webp'}
                                alt="bb"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority={true}
                                // style={{ width: '100%', height: '30rem' }}
                            />
                            <form action="/products/tires?season=Winter&width=205&height=55&zoll=16&" className="absolute top-[40%] lg:top-[43%] left-0 w-full">

                                <div className="px-12 pt-2 lg:pt-0 w-full flex gap-x-[6%] lg:gap-x-[2%] justify-between text-left">
                                    
                                { 
                                    heroFilterAtts && ! isEmpty(heroFilterAtts) &&

                                        Object.keys(heroFilterAtts).map((taxSlug) => (
                                            <div key={taxSlug} className="w-[31%] xs:text-center">
                                            <label className="text-xs lg:text-lg" htmlFor={taxSlug}>{heroFilterAtts[taxSlug].title}</label>
                                            <select
                                                id={taxSlug}
                                                value={selectedValues[taxSlug] || heroFilterAtts[taxSlug].default}
                                                onChange={(e) => handleSelectChange(e, taxSlug)}
                                                className="w-full text-sm lg:text-xl font-semibold py-1 lg:py-2.5 lg:px-4 bg-alfa-gray-11 rounded text-center focus:outline-0"
                                            >
                                                {
                                                    heroFilterAtts[taxSlug].terms.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                    ))
                                                }
                                            </select>
                                            </div>
                                        )
                                    )
                                
                                }
                                    
                                </div>

                                <div className="mt-3 px-24 w-full flex gap-x-4em justify-center text-center">
                                    <div className="flex-1 p-2 text-left flex lg:block items-center gap-x-2">
                                        <label htmlFor="reifentyp" className="xs:text-xs lg:text-sm font-normal mb-1 block">Season</label>
                                        <select 
                                        value={reifenTypeValue}
                                        onChange={(e) => handleReifenTypChange(e)}
                                        id="reifentyp" 
                                        className="w-auto lg:w-full text-sm font-semibold py-1 lg:py-2.5 pl-4 lg:px-4 bg-alfa-gray-11 rounded focus:outline-0">

                                            <option key={"Winter"} value={"Winter"}>Winter</option>
                                            <option key={"Summer"} value={"Summer"}>Summer</option>
                                            <option key={"All Season"} value={"All Season"}>All Season</option>

                                        </select>
                                    </div>
                                   
                                </div>
                                <div className="mt-2 lg:mt-4 w-full flex justify-center text-center">
                                    {/* <Button url={'/products/tires'} innerClassList="text-md" text="REIFEN FINDEN" /> */}
                                    {/* <button
                                        // onClick={(event)=>handleHeroFilterButton(event)}
                                        
                                        >REIFEN FINDEN</button> */}

                                        <Button 
                                            href={ btnUrl ? btnUrl : '' }
                                            type="dark" 
                                            innerClassList="block w-full text-center pr-4 pl-4"
                                            text="SEARCH TIRES" 
                                            // setMcart={setMcart}
                                            // onClick={ ()=>{ setMcart(false) } }
                                        />

                                </div>

                            </form>
                        </div>
                    </div>

                </div>
                <div className="herobanner-mobil-bg-wrapper">
                    <Image 
                        src="/hero/0224-herobanner-mobile.webp"
                        alt="bg"
                        sizes="400px"
                        layout='fill'
                        objectFit='cover'
                        placeholder='empty'
                        priority={true}
                    />
                </div>  
            </div>  
        </>
        
    )
}

export default HeroMobile