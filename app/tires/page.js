import Main from "@/components/products/Main";
import { isEmpty } from "lodash";

export default async function catSlug( {params, searchParams} ){

    const catSlug = 'tires';

    
    return (
        <div className="w-full xs:px-4 lg:container mx-auto lg:max-w-6xl mt-6">
            <Main catSlug={catSlug} searchParams={searchParams} />
        </div>
    )
}