import Link from 'next/link';

import { Button } from '../general/Button';

import {motion, AnimatePresence} from 'framer-motion'
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from 'react';


const MobilSideMenu = ({mobileMenuOpen, setMobileMenuOpen}) => {

    const [openSubMenus, setOpenSubMenus] = useState({});

    const menuItems = [
        {
            title: 'Tires',
            url: '/products/tires',
            sub: [
                {
                    title: 'Winter',
                    url: '/products/tires?season=Winter&width=205&height=55&zoll=16',
                },
                {
                    title: 'Summer',
                    url: '/products/tires?season=Summer&width=205&height=55&zoll=16',
                },
                {
                    title: 'All Season',
                    url: '/products/tires?season=All%20Season&width=205&height=55&zoll=16',
                },
                {
                    title: 'Offroad',
                    url: '/products/tires/?car=Offroad%20/%20SUV%20/%204x4&width=235&height=60&zoll=18',
                },
            ]
        },
        {
            title: 'Rims',
            url: '/products/rims',
        },
        {
            title: 'Configurator',
            url: '/configurator',
        },
        {
            title: 'Accessories',
            url: '/products/accessories',
            sub: [
                {
                    title: 'Deckel',
                    url: '/',
                }
            ]
        },
        {
            title: 'Blog',
            url: '/blog',
        },
        {
            title: 'Deals',
            url: '/deals',
            sub: [
                {
                    title: 'Mega Deal',
                    url: '/',
                },
                {
                    title: 'Flash Sale',
                    url: '/',
                }
            ]
        }
    ]

    useEffect( ()=>{
        setOpenSubMenus({})
    }, [mobileMenuOpen])

    const toggleSubMenu = (title) => {
        setOpenSubMenus(prevState => ({
            ...prevState,
            [title]: !prevState[title]
        }));
    };

    return (
        <div className="block lg:hidden">
        { /* <div className='fixed top-0 left-0 w-screen h-screen z-100'> */ }
                
            {
                mobileMenuOpen && (
                    <div 
                        onClick={ ()=>{ setMobileMenuOpen() } } 
                        className='fixed top-0 left-0 w-screen h-screen bg-[#0000006e] z-[999999998]'
                    >
                    
                    </div>
                )
            }
            
            <AnimatePresence>
                <motion.div
                    initial={{ translateX: -1000, opacity: 0 }}
                    className='fixed top-0 left-[0] w-64 min-w-[300px] h-screen overflow-hidden overflow-y-auto z-[999999999]'
                    animate={{
                        translateX: mobileMenuOpen ? 0 : -300,
                        opacity: 1
                    }}
                    transition={{ type: "spring", duration: 0.2, bounce: 0 }}
                >
                    <aside className="h-full bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">               
                        
                        <ul className=''>
                            {menuItems.map(item => (
                                <li
                                    key={item.title}
                                    className="w-full flex flex-col justify-between items-center border-b"
                                >
                                    <div className="flex w-full">
                                        <Link
                                            className="w-full block h-[60px] uppercase flex items-center pl-2 border-r"
                                            href={item.url}
                                        >
                                            <span className="pl-2">{item.title}</span>
                                        </Link>
                                        
                                        {
                                            item.sub && (
                                                <i
                                                    className="block w-[60px] h-[60px] px-2 flex items-center justify-center cursor-pointer"
                                                    onClick={() => toggleSubMenu(item.title)}
                                                >
                                                    <FaChevronRight 
                                                        className={` ${ openSubMenus[item.title] && 'rotate-90 transition-transform	' } `}
                                                    />
                                                </i>
                                            )
                                        }
                                    </div>

                                    {item.sub && (
                                        <ul className={`sub-menu bg-slate-200 w-full ${ openSubMenus[item.title] ? 'visible' : 'hidden' } `}>
                                            {item.sub.map(subItem => (
                                                <li key={subItem.title}>
                                                     <Link
                                                        className="w-full block h-[60px] uppercase flex items-center pl-2 border-r"
                                                        href={subItem.url}
                                                    >
                                                        <span className="pl-2">{subItem.title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    
                    </aside>

                </motion.div>
            </AnimatePresence>

        {/* </div> */}
        </div>
    )
}

export default MobilSideMenu