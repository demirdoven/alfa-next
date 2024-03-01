'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../general/Button'
import Image from 'next/image'
import { getCampaigns } from '@/app/actions'
import { isEmpty } from 'lodash'

const DealsMain = () => {

    const [campaings, setCampaigns] = useState([])
    const [campaingsLoading, setCampaignsLoading] = useState(false)

    useEffect(() => {
        setCampaignsLoading(true)

        const getBanner = async () => {
            const campaigns = await getCampaigns();
            console.log('campaigns', campaigns)
            setCampaigns(campaigns)
            setCampaignsLoading(false)
        };
        getBanner();
}, [] );

  return (
    <div>
        <ul className="mb-24">
            {
                campaingsLoading ? 'loading' :

                    campaings && ! isEmpty(campaings) && campaings.map( item => (
                        <li 
                            key={item.id}
                            className="flex flex-col lg:flex-row justify-between gap-x-4 mb-4 p-4 pb-8 lg:p-8 shadow-lg rounded-lg">

                            <div className="w-full lg:w-6/12">
                                <Link href={`/`}>
                                    <Image
                                        src={JSON.parse(item?.de).banner?.mobile}
                                        width={600}
                                        height={400}
                                        alt={`dasdsa`}
                                        className="rounded-lg"
                                    />
                                </Link>
                            </div>

                            <div className="w-full lg:w-6/12 pt-4 pl-4">
                                <h1 className="text-3xl font-medium">{ JSON.parse(item?.de).title }</h1>
                                <div 
                                    className="block text-lg mt-4 mb-8"
                                    dangerouslySetInnerHTML={{__html: JSON.parse(item?.de).description}} 
                                />
                                <Button
                                    href={`/`} 
                                    text={`Check it`}
                                    classList="block"
                                />
                            </div>
                        </li>
                    ))
            }
            
        </ul>
    </div>
  )
}
export default DealsMain