import Image from "next/image"
import { getCampaign } from "@/app/actions";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ListingBanner({catSlug}){

    // const [campaignData, setCampaignData] = useState({})
    const [bannerDesktop, setBannerDesktop] = useState(null)

    useEffect(() => {
            const getBanner = async () => {
                const campaign = await getCampaign(catSlug);
                setBannerDesktop(campaign?.banner?.desktop)
            };
            getBanner();
    }, [catSlug] );

    return (
        bannerDesktop ?
            <Link href={'/'}><Image 
                src={bannerDesktop} 
                className="rounded-lg aspect-[3/1] object-cover" 
                alt="das" 
                width="1000" 
                height="400" 
            /></Link> :
        
            <div className="w-full rounded-lg aspect-[3/1] bg-gray-200 animate-pulse"></div>
    )
}