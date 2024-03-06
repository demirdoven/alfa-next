import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Entdecke = () => {

    const data = [
        {
            title: 'Felgen entdecken',
            image: '/home-sections/rim-cardimg.jpeg'
        },
        {
            title: 'Zubehör entdecken',
            image: '/home-sections/accessories-cardimg.jpeg'
        },
        {
            title: 'Pflegeprodukte entdecken',
            image: '/home-sections/careproducts-cardimg.jpeg'
        },
    ]

    return (
        <div className="w-full py-2.5 lg:py-5 px-4 lg:px-0 mb-12">
            <div className=" container mx-auto lg:max-w-6xl mt-6">
                <div className="mt-6">
                    <h1 className="text-2xl text-center font-semibold">Entdecke</h1>
                    <ul className="w-full mt-6 flex flex-col sm:flex-row gap-4">
                        {
                            data.map( (item, index) => (
                                <li key={index}>
                                    <Link href={'/'}>
                                        <Image 
                                            src={item.image}
                                            alt={item.title.split(' ')[0]}
                                            width={400}
                                            height={400}
                                            style={{ width: '100%', height: 'auto' }}
                                            className="rounded-tl-xl rounded-tr-xl"
                                        />
                                        <span className="block py-4 bg-alfa-red-1 text-white text-center text-xl rounded-bl-xl rounded-br-xl">{item.title}</span>
                                    </Link>
                                </li>
                            ))
                        }
                        

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Entdecke