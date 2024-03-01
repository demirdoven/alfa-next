import Main from "@/components/products/Main";
import { isEmpty } from "lodash";
import { headers } from 'next/headers'

const getDeviceType = () => {
    const headersList = headers();
    const userAgent = headersList.get('user-agent');
  
    return userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
      ? 'mobile'
      : 'desktop';
}

export default async function catSlug( {params, searchParams} ){

    const device = getDeviceType()

    const catSlug = params.catSlug;

    return (
        <div className="w-full xs:px-4 lg:container mx-auto lg:max-w-6xl mt-6 px-4">
            <Main catSlug={catSlug} searchParams={searchParams} device={device} />
        </div>
    )
}