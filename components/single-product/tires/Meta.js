import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Meta = ({productData}) => {

    const [currentProductData, setCurrProductData] = useState(productData)

    useEffect( ()=>{
        setCurrProductData(productData)
    }, [productData])

    const metaFields = {
        'brand': 'Brand',
        'season': 'Season',
        'model': 'Model',
        'width': 'Width',
        'height': 'Height',
        'loadindex': 'Load Index',
        'zoll': 'Inch',
        'car': 'Vehicle Type',
        'speedindex': 'Speed Index',
        'ean': 'EAN',
        // 'eprel': 'Eprel',
        // 'fuel': 'Fuel',
        // 'wet': 'Wet',
        // 'noise': 'Noise',
    }

    return (
        <ul className="flex flex-col gap-y-1 text-[18px] px-2 pt-4 pb-6 lg:pt-6 border-b border-b-alfa-gray-2 mb-4">
            {
                Object.keys(metaFields).map( item => (
                    <li 
                        key={item}
                        className="grid grid-cols-2 "
                    >
                        <span className="font-normal">{metaFields[item]}</span>
                        <span className="font-light">{currentProductData[item]}</span>
                    </li>
                ))
            }
            <li className="grid grid-cols-2">
                <span className="font-normal">EU-Tire label</span>
                <ul className="flex items-center gap-x-6">
                    <li className="flex items-center gap-x-[7px]">
                        <Image src={'/meta-icons/fuel-icon.webp'} alt="Fuel" width="18" height="18" />
                        <span className="font-light">{currentProductData?.fuel}</span>
                    </li>
                    <li className="flex items-center gap-x-[7px]">
                        <Image src={'/meta-icons/rain-icon.webp'} alt="Wet" width="18" height="18" />
                        <span className="font-light">{currentProductData?.wet}</span>
                    </li>
                    <li className="flex items-center gap-x-[7px]">
                        <Image src={'/meta-icons/volume-icon.webp'} alt="Noise" width="18" height="18" />
                        <span className="font-light">{currentProductData?.noise}</span>
                    </li>
                </ul>
            </li>
           
        </ul>
  )
}

export default Meta