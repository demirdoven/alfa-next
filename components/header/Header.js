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
import { usePathname, useParams } from 'next/navigation';
import { useStore } from "@/lib/zustandStore";

export default function Header( {className} ){
    
    const pathname = usePathname();
    const searchParams = useParams();

    const { color, setColor} = useThemeContext();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const geciciSep = useStore((state) => state.geciciSep)
    const miniCartOpen = useStore((state) => state.miniCartOpen)
    const closeMiniCart = useStore((state) => state.closeMiniCart)
    const updateGeciciSep = useStore((state) => state.updateGeciciSep)
    const openMiniCart = useStore((state) => state.openMiniCart)


    useEffect( ()=>{

        console.log('color degisti', color)
        // buradan gercek cart'i da guncelle
    }, [color])

    
 
    useEffect( ()=>{

        const lastSetSession = localStorage.getItem( 'x-wc-session_last-set' );

        const exists = lastSetSession !== null;

        if( exists ) {

            const now = new Date().getTime();
            const expiryTime = 1 * 24 * 60 * 60 * 1000;

            if(now - lastSetSession > expiryTime) {
                localStorage.removeItem('x-wc-session');
                localStorage.removeItem('next-cart');
                localStorage.removeItem('x-wc-session_last-set');
            }

        }else{

            localStorage.removeItem('x-wc-session');
            localStorage.removeItem('next-cart');
            localStorage.removeItem('x-wc-session_last-set');

        }

    } )

    
 

    useEffect(() => {
        // setMcart( false )
        setMobileMenuOpen( false )
        closeMiniCart()

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
                        color={color}
                        setColor={setColor}
                        geciciSep={geciciSep}
                        miniCartOpen={miniCartOpen}
                        closeMiniCart={closeMiniCart}
                        updateGeciciSep={updateGeciciSep}
                        openMiniCart={openMiniCart}
                    />
                </div>
            </div>
            <MainMenu className="hidden lg:block bg-alfa-gray-1 relative z-100"/>
            <StickyBar />
            <MobilSideMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
    )
}