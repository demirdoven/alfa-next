'use client'

import Link from "next/link"
import { useEffect, useState } from "react";

import {motion, AnimatePresence} from 'framer-motion'

const Hero = () => {

    const [heroFilterAtts, setHeroFilterAtts] = useState(null)

    const [selectedValues, setSelectedValues] = useState({breite: '205', hoehe: '55', zoll: '16'});
    const [reifenTypeValue, setReifenTypeValue] = useState('winterreifen');
    const [btnUrl, setBtnUrl] = useState( `/products/tires?season=Winter&width=205&height=55&zoll=16&` );


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

        let url = new URL(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/products/tires/`);

        breite && breite.value && url.searchParams.append('width', breite.value);
        hoehe && hoehe.value && url.searchParams.append('height', hoehe.value);
        zoll && zoll.value && url.searchParams.append('zoll', zoll.value);
        reifentyp && reifentyp.value && url.searchParams.append('season', reifentyp.value);
        
        // alert(url.href);
        // return false;
        window.location.href = (url.href)

        // window.history.pushState({}, '', url.href);

    }

    useEffect( ()=>{

        if ( process.browser ) {

            let homeHeroAttrsData = localStorage.getItem( 'homeHeroAttrs' );

            if( homeHeroAttrsData ){

                homeHeroAttrsData = null !== homeHeroAttrsData ? JSON.parse( homeHeroAttrsData ) : '';
                setHeroFilterAtts(homeHeroAttrsData);

            }else{
                let url = 'https://alfatires.com/wp-json/custom/v1/attr/?attributes=reifentyp,breite,hoehe,zoll';

                fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setHeroFilterAtts(data)
                    localStorage.setItem('homeHeroAttrs', JSON.stringify(data));
                })
            }
        }

    }, [])

    useEffect( () => {
        setUrl();
    }, [selectedValues])

    useEffect( () => {
        setUrl();
    }, [reifenTypeValue])

    function setUrl(){
        let url = new URL(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/products/tires/`);

        Object.keys(selectedValues).forEach(function(key) {
            url.searchParams.append(key, selectedValues[key]);
        });

        reifenTypeValue && url.searchParams.append('season', reifenTypeValue);

        // console.log(url.href);

        setBtnUrl(url.href.replace('breite', 'width').replace('hoehe', 'height').replace('winterreifen', 'Winter').replace('sommerreifen', 'Summer').replace('allwetterreifen', 'All%20Season') )
    }

    const taxes = [
        {
            name: 'Breite',
            slug: 'breite',
            defaultTermSlug: '205',
        },
        {
            name: 'Hoehe',
            slug: 'hoehe',
            defaultTermSlug: '55',
        },
        {
            name: 'Zoll',
            slug: 'zoll',
            defaultTermSlug: '16',
        }
    ];
    
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exist={{ opacity: 0, y: 15 }}
                    transition={{ delay: 0.15 }}
                >
                    <div className="w-full bg-[url(/hero/Hero-Background-1.png)] bg-top bg-no-repeat bg-cover pb-4 lg:pb-0">
                        <div className="container mx-auto lg:max-w-6xl">
                            
                            <div className="w-full flex flex-col lg:flex-row justify-between align-center ">
                                <div className="w-full lg:w-[50%] flex flex-col items-center justify-end pt-8 lg:pt-0">
                                    <motion.div
                                        initial={{ opacity: 0, x: -1200 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exist={{ opacity: 0, x: -1200 }}
                                        transition={{ delay: 0.35 }}
                                    >
                                        <img className="" src="/hero/DE-Title-x2.png.webp" alt="" />
                                        <img className="" src="/hero/DE-Subtext-x2.png.webp" alt="" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 85 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exist={{ opacity: 0, y: 85 }}
                                        transition={{ delay: 0.35 }}
                                    >
                                        <img className="hidden lg:block lg:mt-24" src="/hero/Tires.png.webp" alt="" />
                                    </motion.div>
                                </div>


                               
                                    <div className="custom-filter w-full lg:w-[50%] relative max-w-fit pt-2 pb-6">
                                        
                                    <motion.div
                                        animate={{
                                            scale: [0.5, 1.4, 1.4, 1, 1],
                                            rotate: [0, 0, 720, 720, 720],
                                            // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                        }}
                                    >
                                        <img 
                                        className="lg:h-[32rem] "
                                        src="/hero/homepage-filter-png_optimized.png.webp" alt="" />

                                        <form action="/products/tires?season=Winter&width=205&height=55&zoll=16&" className="absolute top-[40%] lg:top-[43%] left-0 w-full">

                                            <div className="px-12 w-full flex gap-x-[6%] lg:gap-x-[2%] justify-between text-left">
                                                
                                                    {taxes.map((tax) => (
                                                        <div key={tax.slug} className="w-[31%] xs:text-center">
                                                        <label className="text-xs lg:text-lg">{tax.name}</label>
                                                        <select
                                                            id={tax.slug}
                                                            value={selectedValues[tax.slug] || tax.defaultTermSlug}
                                                            onChange={(e) => handleSelectChange(e, tax.slug)}
                                                            className="w-full text-sm lg:text-xl font-semibold py-1 lg:py-2.5 lg:px-4 bg-alfa-gray-10 rounded text-center focus:outline-0"
                                                        >
                                                            {
                                                            heroFilterAtts && heroFilterAtts[tax.slug] ? heroFilterAtts[tax.slug].map((option) => (
                                                            <option key={option.term_id} value={option.slug}>
                                                                {option.name}
                                                            </option>
                                                            )) : <option>Alle</option>
                                                        }
                                                        </select>
                                                        </div>
                                                    ))}
                                                
                                            </div>

                                        

                                            <div className="mt-3 px-24 w-full flex gap-x-4em justify-center text-center">
                                                <div className="flex-1 p-2 text-left flex lg:block items-center gap-x-2">
                                                    <label htmlFor="" className="xs:text-xs lg:text-sm font-normal mb-1 block">Reifentyp</label>
                                                    <select 
                                                    value={reifenTypeValue}
                                                    onChange={(e) => handleReifenTypChange(e)}
                                                    id="reifentyp" 
                                                    className="w-auto lg:w-full text-sm font-semibold py-1 lg:py-2.5 pl-4 lg:px-4 bg-alfa-gray-10 rounded focus:outline-0">

                                                        <option key={"winterreifen"} value={"winterreifen"}>Winter</option>
                                                        <option key={"sommerreifen"} value={"sommerreifen"}>Sommer</option>
                                                        <option key={"allwetterreifen"} value={"allwetterreifen"}>Allwetter</option>

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

                                                    <Link 
                                                        className="bg-alfa-red-1 text-white lg:text-2xl font-semibold rounded-md px-3 lg:px-4 py-2"
                                                        href={ btnUrl ? btnUrl : '' }>
                                                        SEARCH TIRES
                                                    </Link>

                                            </div>

                                        </form>

                                    </motion.div>
                                    </div>
                               

                            </div>

                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
        
    )
}

export default Hero