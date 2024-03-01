import Image from "next/image"
import Link from "next/link"

export default function MainMenu({className}){

    return (
        <nav className={`${className} `}>
            <ul className="container mx-auto lg:max-w-6xl py-3 flex gap-x-[12px] w-full items-center justify-center">
                
                <li className="main-menu-item group relative cursor-pointer">
                    <Link
                        className="menu-hover lg:mx-4 uppercase flex gap-x-1 items-center"
                        href="/products/tires"
                        >
                        <Image 
                            src="/menu-icons/tire.png" 
                            alt="tire"
                            width={0}
                            height={0}
                            sizes="50px"
                            style={{ width: 'auto', height: '26px' }} 
                        />
                        <span>Tires</span>
                    </Link>

                    <ul className="invisible absolute z-100 flex w-auto flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                        <li>
                            <Link
                                className="my-2 block border-b border-gray-100 py-1 text-md text-gray-500 hover:text-black md:mx-2 uppercase"
                                href={'/products/tires?season=Winter&width=205&height=55&zoll=16&'}
                            >
                                Winter
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="whitespace-nowrap my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase"
                                href={'/products/tires?season=All%20Season&width=205&height=55&zoll=16&'}
                            >
                                All Season
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/products/tires?season=Summer&width=205&height=55&zoll=16&'}
                                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase" 
                                >
                                Summer
                            </Link>

                        </li>
                        <li>
                            <Link
                                href={'/products/tires/?car=Offroad%20/%20SUV%20/%204x4&width=235&height=60&zoll=18&'}
                                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase" 
                                >
                                Offroad
                            </Link>

                        </li>
                        
                    </ul>

                </li>
                
                <li className="main-menu-item group relative cursor-pointer py-2">
                    <Link
                        className="menu-hover lg:mx-4 uppercase flex gap-x-2 items-center"
                        href="/products/rims"
                        >
                        <Image 
                            src="/menu-icons/zxx.png" 
                            alt="tire"
                            width={0}
                            height={0}
                            sizes="50px"
                            style={{ width: 'auto', height: '26px' }} 
                        />
                        <span>Rims</span>
                    </Link>
                    
                </li>

                <li className="main-menu-item group relative cursor-pointer py-2">
                    
                    <Link
                        className="menu-hover lg:mx-4 uppercase flex gap-x-2 items-center"
                        href="/products/accessories"
                        >
                        <Image 
                            src="/menu-icons/lid2.png" 
                            alt="tire"
                            width={0}
                            height={0}
                            sizes="50px"
                            style={{ width: 'auto', height: '26px' }} 
                        />
                        <span>Accessories</span>
                    </Link>

                    <ul
                        className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible uppercase"
                    >
                        <li>
                            <Link
                                href={'/products/tires'}
                                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase" 
                                >
                                Deckel
                            </Link>

                        </li>
                     
                    </ul>

                </li>

                
                <li className="main-menu-item group relative cursor-pointer py-2">
                    <Link
                        className="menu-hover lg:mx-4 uppercase flex gap-x-2 items-center"
                        href="/configurator"
                        >
                        <Image 
                            src="/menu-icons/settings.png" 
                            alt="tire"
                            width={0}
                            height={0}
                            sizes="50px"
                            style={{ width: 'auto', height: '26px' }} 
                        />
                        <span>Configurator</span>
                    </Link>
                    
                </li>


                
                
                <li className="main-menu-item group relative cursor-pointer py-2 uppercase">
                    <Link
                        className="menu-hover lg:mx-4 uppercase"
                        href="/blog"
                        >
                        Blog
                    </Link>
                </li>

                <li className="main-menu-item group relative cursor-pointer py-2">
                    
                    <Link
                        className="menu-hover lg:mx-4 uppercase flex gap-x-2 items-center"
                        href="/deals"
                        >
                        <span>% Deals</span>
                    </Link>

                    <ul
                        className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible uppercase"
                    >
                        <li>
                            <Link
                                href={'/products/tires'}
                                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase" 
                                >
                                Mega Deal
                            </Link>

                        </li>
                        <li>
                            <Link
                                href={'/products/tires'}
                                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase" 
                                >
                                Flash Sale
                            </Link>

                        </li>
                     
                    </ul>

                </li>


            </ul>
            
        </nav>
    )
}