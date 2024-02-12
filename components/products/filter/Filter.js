import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'


const Filter = ({catSlug, filterData, searchParams, setProdsLoading}) => {

    const router = useRouter()
    const pathname = usePathname()

    useEffect( ()=>{
        console.log('filterData', filterData)
    }, [filterData])

    const handleClick = (e) => {

        setProdsLoading(true)

        const tax = e.target.getAttribute('data-tax');
        // const termid = e.target.getAttribute('data-termid');
        const termSlug = e.target.getAttribute('data-slug');
       
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

        // console.log('cloneSearchParams', cloneSearchParams);

        const updatedUrl = `${pathname}?${new URLSearchParams(cloneSearchParams)}`;
        router.push(updatedUrl, { scroll: true });

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }

    return (
        <>
            {
                filterData.filters.filter( item => ! ['car', 'season'].includes(item) ).map( (tax) => (

                        <div key={tax} className={`mt-5 mb-3 px-4 pt-1 pb-2 border-b`}>
                            <h2 className="font-semibold text-md mb-2 text-alfa-black-1">{ tax.charAt(0).toUpperCase() + tax.slice(1) } </h2>

                            <input 
                            // onKeyUp={(event)=>searchTerm(event.target)}
                            className="w-full py-[0.6em] px-3 text-sm text-alfa-gray-5 font-normal border-2 border-black border-opacity-10 rounded-[5px] focus:outline-0"
                            type="text" 
                            data-taxonomy={tax}
                            placeholder="Search..."
                            />
                            <ul className="tax-terms my-4 max-h-[9em] overflow-y-scroll	" data-tax={tax}>                  
                                {
                                    filterData[tax]['f'] && Object.keys(filterData[tax]['f']).map( term => (
                                        
                                        <li 
                                            key={term} 
                                            className={`term-item py-[2px] flex gap-2 cursor-pointer`}
                                            data-tax={tax}
                                            data-slug={term}
                                            onClick={ handleClick }
                                            >
                                               
                                                {
                                      
                                                    filterData[tax]['d'] && Object.values(filterData[tax]['d']).length && Object.values(filterData[tax]['d']).includes(term) 
                                                    ?   (
                                                        <Image 
                                                            src={`/filter-icons/checked.svg`} 
                                                            alt="dsa" 
                                                            width="20" 
                                                            height="20" 
                                                            className="pointer-events-none"
                                                        /> 
                                                        )
                                                    :   (
                                                
                                                        <Image 
                                                            src={`/filter-icons/unchecked.svg`} 
                                                            alt="dsa" 
                                                            width="20" 
                                                            height="20" 
                                                            className="pointer-events-none"
                                                        /> 
                                                    
                                                    )
                                                    
                                                }
                                            <span className="pointer-events-none text-md text-alfa-gray-5 font-medium">{term}</span>
                                            
                                        </li>

                                    ))
                                }

                            </ul> 

                        </div>
                    
                ))
            }
        </>
    )
}

export default Filter