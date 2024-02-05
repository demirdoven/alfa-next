import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Newsletter = () => {

    return (
        <div className="w-full py-4 bg-alfa-gray-2 py-10">
            <div className=" container mx-auto lg:max-w-6xl mt-6">
                <div className="mt-6 flex items-center">
                    <div className="sm:w-full md:w-1/2">
                        <h1 className="text-2xl font-semibold">Newsletter Abonnieren & einen Satz Syron oder Berlin Tires Reifen gewinnen!</h1>
                        <ul className="mt-4 flex flex-col gap-2">
                            <li className="flex items-center gap-x-2">
                                <Image src="/home-sections/check-icon-red.svg" alt="cscsd" width="20" height="20" />
                                <span>Spezielle Sonderangebote exklusiv für unsere Newsletter-Abonnenten</span>
                            </li>
                            <li className="flex items-center gap-x-2">
                                <Image src="/home-sections/check-icon-red.svg" alt="cscsd" width="20" height="20" />
                                <span>Erinnerung an Reifenwechsel (Sommer, Winter)n</span>
                            </li>
                            <li className="flex items-center gap-x-2">
                                <Image src="/home-sections/check-icon-red.svg" alt="cscsd" width="20" height="20" />
                                <span>Kostenlos & jederzeit kündbar</span>
                            </li>
                        </ul>
                        <Image className="block md:hidden" src="/home-sections/mobile-newsletter-img.png" alt="asxds" width="500" height="500" />
                    </div>
                    <div className="sm:w-full md:w-1/2">
                        <Image className="hidden md:block" src="/home-sections/newsletter-img.webp" alt="asxds" width="500" height="500" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Newsletter