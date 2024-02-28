'use client'

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";


const BrandSlider = () => {

  const brands = [
		{
			'name' : 'Pirelli',
			'url' : '/products/tires/?brand=Pirelli',
			'logo_src' : '/brands-slider/logos-black/pirelli.webp'
    },
		{
			'name' : 'Goodyear',
			'url' : '/products/tires/?brand=Goodyear',
			'logo_src' : '/brands-slider/logos-black/good-year.webp'
		},
		{
			'name' : 'Dunlop',
			'url' : '/products/tires/?brand=Dunlop',
			'logo_src' : '/brands-slider/logos-black/dunlop.webp'
		},
		{
			'name' : 'Syron',
			'url' : '/products/tires/?brand=Syron',
			'logo_src' : '/brands-slider/logos-black/syron.webp'
		},
		{
			'name' : 'Hankook',
			'url' : '/products/tires/?brand=Hankook',
			'logo_src' : '/brands-slider/logos-black/hankook.webp'
		},
		{
			'name' : 'Bridgestone',
			'url' : '/products/tires/?brand=Bridgestone',
			'logo_src' : '/brands-slider/logos-black/bridgestone.webp'
		},
		{
			'name' : 'Kumho',
			'url' : '/products/tires/?brand=Kumho',
			'logo_src' : '/brands-slider/logos-black/kumho.webp'
		},
		{
			'name' : 'Barum',
			'url' : '/products/tires/?brand=Barum',
			'logo_src' : '/brands-slider/logos-black/barum.webp'
		},
		{
			'name' : 'Nexen',
			'url' : '/products/tires/?brand=Nexen',
			'logo_src' : '/brands-slider/logos-black/nexen.webp'
		},
		{
			'name' : 'Michelin',
			'url' : '/products/tires/?brand=Michelin',
			'logo_src' : '/brands-slider/logos-black/michelin.webp'
		},
		{
			'name' : 'Continental',
			'url' : '/products/tires/?brand=Continental',
			'logo_src' : '/brands-slider/logos-black/continental.webp'
    }
	];

  return (
      <div className="w-full group my-8">
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ delay: 0.10 }}
			>
				<div className=" container mx-auto lg:max-w-6xl ">
				<div className="relative">
					<Swiper 
						loop={true}
						modules={[Navigation]} 
						className="mySwiper"
						breakpoints={{
						0: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
						450: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
						700: {
							slidesPerView: 9,
							spaceBetween: 15,
						},
						}}
						navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
						pagination={{ clickable: true, dynamicBullets: true }}
						>

					{
						brands.map( item => (
						<SwiperSlide key={item.name} >
							<div className="w-full">
							<Link href={item.url}>
								<Image 
									src={item.logo_src}
									alt={item.name}
									width={0}
									height={0}
									sizes="100vw"
									style={{ width: '100%', height: 'auto' }}
								/>
							</Link>
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
				</div>
			</motion.div>
		</AnimatePresence>
      </div>
  );
};

export default BrandSlider;