'use client'

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


const Vorteilsaktionen = () => {

    const products = [
        {
            id: 1,
            thumb: 'https://alfatires.com/wp-content/uploads/DE-Flashsale-home-1.png.webp',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
        {
            id: 2,
            thumb: 'https://alfatires.com/wp-content/uploads/DE-Homepage-everest2-40-min.webp',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
        {
            id: 3,
            thumb: 'https://alfatires.com/wp-content/uploads/DE-Homepage-MegaDeals.png-1-1.webp',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
        {
            id: 4,
            thumb: 'https://alfatires.com/wp-content/uploads/DE-homepage-P4S.png-2-1.webp',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
        {
            id: 5,
            thumb: 'https://alfatires.com/wp-content/uploads/DE-Homepage-AllSeason1-1-1.png-2-1.webp',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
        {
            id: 6,
            thumb: 'https://alfatires.com/wp-content/uploads/DE-dot-home.png.webp',
            title: 'MAM Felgen W4',
            priceText: 'ab 43,80 €',
            buttonText: 'Check product',
            url: 'https://alfatires.eu/produkt/mam-felgen-w4/'
        },
    ]

  return (
    <div className="w-full py-4">
        <div className=" container mx-auto lg:max-w-6xl mt-6">
            <h1 className="text-2xl text-center font-semibold">Vorteilsaktionen</h1>
            <div className="mt-6">
                <div className="relative">
                    <Swiper 
                        loop={false}
                        modules={[Navigation]} 
                        className="mySwiper3"
                        breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        }}
                        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        >

                    {
                        products.map( item => (
                        <SwiperSlide key={item.id} >

                            <Link href={'/'}>
                                <Image 
                                    src={item.thumb}
                                    alt={item.title}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    className="rounded-lg"
                                />
                            </Link>
                            
                        </SwiperSlide>
                        ))
                    }
                    
                    </Swiper>

                    <div className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
                    <button className="arrow-left arrow absolute left-[-50px] top-0"><MdArrowBackIos size={30}/></button>
                    <button className="arrow-right arrow absolute right-[-50px] top-0"><MdArrowForwardIos size={30}/></button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vorteilsaktionen