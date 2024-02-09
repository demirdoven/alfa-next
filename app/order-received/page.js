import React from 'react'

export default async function OrderReceived( {searchParams} ){

    console.log(searchParams.order_id)
    return (
        <div className='w-full'>

            <h1 className='text-lg text-center'>THANK YOU</h1>

        </div>
    )
}