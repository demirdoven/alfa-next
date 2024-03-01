import DealsMain from '@/components/deals/DealsMain'
import React from 'react'

export default async function Deals( {searchParams} ){

    return (
        <div className="w-full xs:px-4 lg:container mx-auto lg:max-w-6xl mt-6 px-4">

            <h1 className='text-lg text-center'>DEALS</h1>
            <DealsMain />
        </div>
    )
}