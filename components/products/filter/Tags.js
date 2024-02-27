import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { isNil } from 'lodash'
import { MdOutlineClose } from "react-icons/md";

export const Tags = ({ filterData, searchParams}) => {

    const router = useRouter()
    const pathname = usePathname()

    const [tags, setTags] = useState({})

    useEffect( ()=>{

        let arr = {};

        filterData?.filters.map( filter => {
      
            if( ! isNil( filterData[filter]['d'] ) ){

                Object.values(filterData[filter]['d']).forEach( item => {
                    arr[item] = filter
                })

            }
            
        })

        setTags(arr)

    }, [filterData])

    function handleClick(e){

        // setProdsLoading(true)

        const tax       = e.target.getAttribute('data-tax');
        const termSlug  = e.target.getAttribute('data-slug');
       
        let cloneSearchParams = {...searchParams};
        if( cloneSearchParams[tax] ){

            let allValues = cloneSearchParams[tax].split('§')

            if( allValues.includes(termSlug) ){
                allValues = allValues.filter( item => item != termSlug )
            }else{
                allValues.push(termSlug)
            }

            if( allValues.length == 0 ){
                delete cloneSearchParams[tax]
            }else{
                cloneSearchParams[tax] = allValues.join('§')
            }

        }else{
            cloneSearchParams[tax] = [termSlug]
        }



        const updatedUrl = `${pathname}?${new URLSearchParams(cloneSearchParams)}`;

        console.log('cloneSearchParams', updatedUrl);


        router.push(updatedUrl, { scroll: true });

        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth'
        // });

    }

    const handleClearAll = (e) => {

        let cloneSearchParams = {...searchParams};

        Object.keys(cloneSearchParams).forEach(key => {
                    
            if( key.includes('filter_') || key == 'dot' ){
                delete cloneSearchParams[key]
            }

        });

        const updatedUrl = `${pathname}?${new URLSearchParams(cloneSearchParams)}`;
        router.replace(updatedUrl, undefined, { shallow: true, scroll: false });

    }

    
    /* clear all'a basinca sortu da kaldir */

    return (
        <ul className="flex gap-2 flex-wrap">
            {/* {
                filteredKeys.length > 0 && 
                    <li 
                        className="whitespace-nowrap font-semibold list-none bg-white border border-alfa-gray-7 py-1 px-2 text-xs rounded-md cursor-pointer hover:bg-alfa-gray-3 hover:text-white"
                        onClick={handleClearAll}
                    >
                        Clear all filters
                    </li>
            */}
            
            {
                Object.keys(tags).map( term => (
                    
                    <li 
                        key={term} 
                        className="flex items-center gap-x-1 whitespace-nowrap list-none bg-white border border-alfa-gray-7 py-1 px-2 text-sm text-alfa-gray-5 font-medium rounded-md cursor-pointer hover:bg-alfa-gray-3 hover:text-white"
                        data-tax={tags[term]}
                        data-slug={term}
                        // onClick={handleClick}
                    >
                        { term } <MdOutlineClose />

                    </li>
                ))
                    
                
            }
        </ul>
    )
}
