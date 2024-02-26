'use client'

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import { getProducts } from "@/app/actions";
// import { Button } from "../Button";


const UnsereReifenempfehlung = () => {

    const [products, setProducts] = useState([]);

    const xxproducts = [
        {
            id: 1,
            thumb: 'https://staging.alfatires.eu/wp-content/uploads/2023/11/wheel-1.png',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
        {
            id: 3,
            thumb: 'https://staging.alfatires.eu/wp-content/uploads/2023/11/wheel-1.png',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
        {
            id: 4,
            thumb: 'https://staging.alfatires.eu/wp-content/uploads/2023/11/wheel-1.png',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
        {
            id: 5,
            thumb: 'https://staging.alfatires.eu/wp-content/uploads/2023/11/wheel-1.png',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
        {
            id: 6,
            thumb: 'https://staging.alfatires.eu/wp-content/uploads/2023/11/wheel-1.png',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
    ]



    useEffect(() => {
        const pids = [32790, 17659, 538, 25046, 14114];

        const getLgs = async () => {
            const response = await getProducts('tires', pids)
            setProducts(response)
        };
        getLgs();
            
        // $product_image = "https://cdn.alfatires.eu/products/tires/".$product_details->media.".webp";

    }, []);

    

    // useEffect(() => {
          
    //    console.log(products)

    // }, [products]);


 
    return (
        <div className="w-full py-4">
            <div className=" container mx-auto lg:max-w-6xl mt-6">
                <h1 className="text-2xl text-center font-semibold">Unsere Reifenempfehlung</h1>
                <div className="mt-6">
                    { products.length && (
                        <div className="relative">
                            <Swiper 
                                loop={false}
                                modules={[Navigation]} 
                                className="mySwiper2"
                                breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                450: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                700: {
                                    slidesPerView: 5,
                                    spaceBetween: 15,
                                },
                                }}
                                navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                                pagination={{ clickable: true, dynamicBullets: true }}
                                >

                            {
                                products.map( item => (
                                <SwiperSlide key={item.id} >
                                    <div className="border border-slate-300 rounded-xl p-4">

                                        <Image 
                                            src={"https://cdn.alfatires.eu/products/tires/"+item?.details?.media+".webp"}
                                            alt={item?.details?.model}
                                            width={200}
                                            height={50}
                                        />
                                        <h2 className="text-md font-semibold my-2 ml-2">{item?.details?.model}</h2>
                                        <span className="block my-2 ml-2 text-sm">from {item?.details?.priceMin} €</span>
                                        {/* <Button url={item.url} text={item.buttonText} /> */}
                                    </div>
                                </SwiperSlide>
                                ))
                            }
                            
                            </Swiper>

                            <div className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
                            <button className="arrow-left arrow absolute left-[-50px] top-0" aria-label="Previous"><MdArrowBackIos size={30}/></button>
                            <button className="arrow-right arrow absolute right-[-50px] top-0" aria-label="Next"><MdArrowForwardIos size={30}/></button>
                            </div>
                            
                        </div>
                    ) }
                </div>
            </div>
        </div>
    )
}

export default UnsereReifenempfehlung