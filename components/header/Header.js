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

export default function Header( {className} ){

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

                    <UserSection className="client-section block lg:min-w-[200px]"/>
                </div>
            </div>
            <MainMenu className="hidden lg:block bg-alfa-gray-1"/>
            <StickyBar />
            <MobilSideMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
    )
}