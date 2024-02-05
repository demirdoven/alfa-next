'use client'
import React, { useState } from 'react'

const Accordion = ({classList=''}) => {

    const [openIndex, setOpenIndex] = useState(0)

    const data = [
        {
            title: 'Description',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, molestias distinctio. Iste veniam molestias expedita repellendus adipisci eos, consequatur aperiam, eius temporibus eum corrupti sapiente molestiae ipsam dolor ipsum quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, molestias distinctio. Iste veniam molestias expedita repellendus adipisci eos, consequatur aperiam, eius temporibus eum corrupti sapiente molestiae ipsam dolor ipsum quibusdam.'
        },
        {
            title: 'Shipping & Delivery',
            content: 'Doloremque, molestias distinctio. Iste veniam molestias expedita repellendus adipisci eos, consequatur aperiam, eius temporibus eum corrupti sapiente molestiae ipsam dolor ipsum quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, molestias distinctio. Iste veniam molestias expedita repellendus adipisci eos, consequatur aperiam, eius temporibus eum corrupti sapiente molestiae ipsam dolor ipsum quibusdam.'
        },
        {
            title: 'Additional Information',
            content: 'Iste veniam molestias expedita repellendus adipisci eos, consequatur aperiam, eius temporibus eum corrupti sapiente molestiae ipsam dolor ipsum quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, molestias distinctio. Iste veniam molestias expedita repellendus adipisci eos, consequatur aperiam, eius temporibus eum corrupti sapiente molestiae ipsam dolor ipsum quibusdam.'
        },
        {
            title: 'Reviews (0)',
            content: 'Teum corrupti sapiente molestiae ipsam dolor ipsum quibusdam. Iste veniam molestias expedita repellendus adipisci eos, consequatur aperiam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, molestias distinctio. Iste veniam molestias expedita repellendus adipisci eos, consequatur aperiam, eius temporibus eum corrupti sapiente molestiae ipsam dolor ipsum quibusdam.'
        }
    ]

    return (
        <div className={`${classList} hidden lg:block`}>

            <ul className="tab-titles-wrap flex lg:gap-x-6 border-b">
                {
                    data.map( (item, index) => (
                        <li 
                            key={index}
                            data-index={index}
                            className={`${ openIndex == index ? 'active border-b-4 border-b-alfa-red-1' : '' } lg:px-4 py-2 text-sm lg:text-lg font-semibold cursor-pointer select-none`}
                            onClick={() => setOpenIndex(index)}
                        >
                            {item.title}
                        </li>
                    ))
                }
                
            </ul>

            <ul className="tab-contents-wrap py-4">
                {
                    data.map( (item, index) => (
                        <li
                            key={index}
                            data-index={index}
                            className={`${ openIndex != index && 'hidden'} h-36 overflow-y-scroll pr-4`}
                        >
                            {item.content}
                        </li>
                    ))
                }
            </ul>
        </div>
  )
}

export default Accordion