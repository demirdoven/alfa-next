import Image from "next/image"
import { getCampaign } from "@/app/actions";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ListingBannerDesktop({catSlug}){

    // const [campaignData, setCampaignData] = useState({})
    const [bannerDesktop, setBannerDesktop] = useState(null)

    useEffect(() => {
            const getBanner = async () => {
                const campaign = await getCampaign(catSlug);
                setBannerDesktop(campaign?.banner?.desktop)
            };
            getBanner();

            console.log(catSlug)
            
    }, [catSlug] );

    return (
        bannerDesktop ?
            <Link href={'/'}>
                <Image 
                    src={bannerDesktop} 
                    className="rounded-lg aspect-[3/1] object-cover" 
                    alt="das" 
                    width="1000" 
                    height="400" 
                />
                {/* <Image 
                    src={bannerDesktop}
                    className="rounded-lg h-[400px] aspect-[3/1] " 
                    alt="bg"
                    sizes="100vw"
                    fill
                    style={{
                        objectFit: 'cover',
                        zIndex: 1
                    }}
                    priority={true}
                /> */}
            </Link> :
        
            <div className="w-full rounded-lg aspect-[3/1] bg-gray-200 animate-pulse"></div>
    )
}