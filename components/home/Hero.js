'use client'

import Link from "next/link"
import { useEffect, useState } from "react";

import {motion, AnimatePresence} from 'framer-motion'
import { isEmpty } from "lodash";
import { Button } from "../general/Button";
import Image from "next/image";



const Hero = () => {

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

        let url = new URL(`https://alfatires-headless.vercel.app/products/tires/`);

        breite && breite.value && url.searchParams.append('width', breite.value);
        hoehe && hoehe.value && url.searchParams.append('height', hoehe.value);
        zoll && zoll.value && url.searchParams.append('zoll', zoll.value);
        reifentyp && reifentyp.value && url.searchParams.append('season', reifentyp.value);
        
        // alert(url.href);
        // return false;
        window.location.href = (url.href)

        // window.history.pushState({}, '', url.href);

    }

    // useEffect( ()=>{

        // if ( process.browser ) {

        //     let homeHeroAttrsData = localStorage.getItem( 'homeHeroAttrs' );

        //     if( homeHeroAttrsData ){

        //         homeHeroAttrsData = null !== homeHeroAttrsData ? JSON.parse( homeHeroAttrsData ) : '';
        //         setHeroFilterAtts(homeHeroAttrsData);

        //     }else{
        //         let url = 'https://alfatires.com/wp-json/custom/v1/attr/?attributes=reifentyp,breite,hoehe,zoll';

        //         fetch(url)
        //         .then((res) => res.json())
        //         .then((data) => {
        //             setHeroFilterAtts(data)
        //             localStorage.setItem('homeHeroAttrs', JSON.stringify(data));
        //         })
        //     }
        // }

        
    // }, [] )

    useEffect( () => {
        setUrl();
    }, [selectedValues])

    useEffect( () => {
        setUrl();
    }, [reifenTypeValue])

    function setUrl(){
        let url = new URL(`https://alfatires-headless.vercel.app/products/tires/`);

        
        Object.keys(selectedValues).forEach(function(key) {
            url.searchParams.append(key, selectedValues[key]);
        });

        reifenTypeValue && url.searchParams.append('season', reifenTypeValue);

        // console.log(url.href);

        // setBtnUrl(url.href.replace('breite', 'width').replace('hoehe', 'height').replace('winterreifen', 'Winter').replace('sommerreifen', 'Summer').replace('allwetterreifen', 'All%20Season') )
        setBtnUrl(url.href)
    }



    return (
        <>
            <AnimatePresence>
                {/* <motion.div
                    exit={{
                        y: -20,
                        opacity: 0,
                        filter: "blur(5px)",
                        transition: { ease: "easeIn", duration: 0.22 }
                      }}
                      initial={{ opacity: 0, y: -15 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { type: "spring", duration: 0.7 }
                      }}
                > */}
                    <div className="w-full relative pb-4 px-8 lg:px-0 lg:pb-0">
                        <div className="relative mx-auto lg:max-w-6xl z-50">
                            
                            <div className="w-full flex flex-col lg:flex-row justify-between align-center ">
                                <div className="w-full lg:w-[50%] flex flex-col items-start justify-end pt-8 lg:pt-0">
                                    <motion.div
                                        className="w-full"
                                        initial={{ opacity: 0, x: -1200 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exist={{ opacity: 0, x: -1200 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Image 
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
                                        />

                                        <Button 
                                            href="/checkout" 
                                            type="dark" 
                                            classList="inline-block mt-6" 
                                            innerClassList="uppercase text-center"
                                            text="See Deals" 
                                        />

                                    </motion.div>
                                    <motion.div
                                        className="w-full"
                                        initial={{ opacity: 0, y: 85 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exist={{ opacity: 0, y: 85 }}
                                        transition={{ delay: 0.35 }}
                                    >

                                        <Image 
                                            className="hidden lg:block lg:mt-12"
                                            src={'/hero/Tires.png.webp'}
                                            alt="bb"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: 'auto' }}
                                        />

                                    </motion.div>
                                </div>



                               
                                    <div className="custom-filter w-full lg:w-[50%] relative lg:max-w-fit pt-2 pb-6">
                                        
                                    <motion.div
                                        animate={{
                                            scale: [0.5, 1.2, 1.2, 1, 1],
                                            rotate: [0, 0, 720, 720, 720],
                                            // transition: { type: "spring", duration: 0.75 }
                                            // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                        }}
                                    >
                                         <Image 
                                            className="w-[400px] h-auto lg:block lg:w-[100%] lg:h-[32rem]"
                                            src={'/hero/homepage-filter-png_optimized.png.webp'}
                                            alt="bb"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            // style={{ width: '100%', height: '30rem' }}
                                        />
                                         {/* <Image 
                                            className="mobile-hero-bg block lg:hidden"
                                            src={'/hero/homepage-filter-png_optimized.png.webp'}
                                            alt="bb"
                                            width={400}
                                            height={400}
                                        /> */}
                                        
                                       
                                        <form action="/products/tires?season=Winter&width=205&height=55&zoll=16&" className="absolute top-[40%] lg:top-[43%] left-0 w-full">

                                            <div className="px-12 pt-2 lg:pt-0 w-full flex gap-x-[6%] lg:gap-x-[2%] justify-between text-left">
                                                
                                            { 
                                                heroFilterAtts && ! isEmpty(heroFilterAtts) &&

                                                    Object.keys(heroFilterAtts).map((taxSlug) => (
                                                        <div key={taxSlug} className="w-[31%] xs:text-center">
                                                        <label className="text-xs lg:text-lg">{heroFilterAtts[taxSlug].title}</label>
                                                        <select
                                                            id={taxSlug}
                                                            value={selectedValues[taxSlug] || heroFilterAtts[taxSlug].default}
                                                            onChange={(e) => handleSelectChange(e, taxSlug)}
                                                            className="w-full text-sm lg:text-xl font-semibold py-1 lg:py-2.5 lg:px-4 bg-alfa-gray-10 rounded text-center focus:outline-0"
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
                                                    <label htmlFor="" className="xs:text-xs lg:text-sm font-normal mb-1 block">Season</label>
                                                    <select 
                                                    value={reifenTypeValue}
                                                    onChange={(e) => handleReifenTypChange(e)}
                                                    id="reifentyp" 
                                                    className="w-auto lg:w-full text-sm font-semibold py-1 lg:py-2.5 pl-4 lg:px-4 bg-alfa-gray-10 rounded focus:outline-0">

                                                        <option key={"Winter"} value={"Winter"}>Winter</option>
                                                        <option key={"Summer"} value={"Summer"}>Summer</option>
                                                        <option key={"All Season"} value={"All Season"}>All Season</option>

                                                    </select>
                                                </div>
                                                <div className="hidden lg:flex flex-1 p-2 justify-center items-end text-center">
                                                    <label htmlFor=""></label>
                                                    <Link href={'/products/tires'} className="py-[0.68em] text-sm font-semibold text-alfa-gray-3 px-4 w-full bg-alfa-gray-10 rounded " >Advanced</Link>
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
                                                        innerClassList="block w-full text-center"
                                                        text="SEARCH TIRES" 
                                                        // setMcart={setMcart}
                                                        // onClick={ ()=>{ setMcart(false) } }
                                                    />

                                            </div>

                                        </form>

                                    </motion.div>
                                    </div>
                               

                            </div>

                        </div>
                        <Image 
                            src="/hero/hero-bg.webp"
                            alt="bg"
                            sizes="1400px"
                            fill
                            style={{
                                objectFit: 'cover',
                                zIndex: 1
                            }}
                            priority={true}
                        />
                    </div>
                {/* </motion.div> */}
            </AnimatePresence>
        </>
        
    )
}

export default Hero