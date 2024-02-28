'use client'

import MainMenu from "./MainMenu"
// import Search from "./Search"
import UserSection from "./UserSection"
import { BiMenu } from "react-icons/bi";
import TopBar from "./TopBar"
import Logo from "./Logo"
import StickyBar from "./StickyBar"
import MobilSideMenu from "./MobilSideMenu";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useThemeContext } from "@/components/context/theme";
import { useMiniCartContext } from "@/components/context/miniCart";
import { usePathname, useParams } from 'next/navigation';

export default function Header( {className} ){
    

    const pathname = usePathname();
    const searchParams = useParams();


    const { color, setColor} = useThemeContext();
    const { mCart, setMcart} = useMiniCartContext();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        setMcart( false )
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

      }, [pathname, searchParams]);

    useEffect( ()=>{
        console.log(mobileMenuOpen)
    }, [mobileMenuOpen] )

    return (
        <header className={`relative w-full z-20`}>
            <TopBar className="hidden lg:block"/>
            <div className="lg:container mx-auto lg:max-w-6xl  px-4 lg:px-0">
                <div className="flex items-center justify-between gap-x-4">
                    <BiMenu 
                        className="lg:hidden block" 
                        size="2em"
                        onClick={ ()=>{ setMobileMenuOpen( ! mobileMenuOpen ) } } 
                    />
                     <Logo className=""/>
                    <SearchBar className="hidden lg:block w-2/4"/>

                    <UserSection 
                        className="client-section block lg:min-w-[200px]"
                        mCart={mCart} 
                        setMcart={setMcart}
                        color={color}
                        setColor={setColor}
                    />
                </div>
            </div>
            <MainMenu className="hidden lg:block bg-alfa-gray-1 relative z-100"/>
            <StickyBar />
            <MobilSideMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
    )
}