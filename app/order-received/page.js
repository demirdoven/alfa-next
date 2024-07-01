import Image from 'next/image'
import React from 'react'

export default async function OrderReceived( {searchParams} ){

    console.log(searchParams.order_id)

    return (
        <div className="w-full xs:px-4 lg:container mx-auto lg:max-w-6xl mt-6 py-4 px-4 flex gap-12">

            <div className='w-2/3 shadow-xl p-8 rounded-xl'>

                <div className='flex justify-start gap-8 mt-4'>
                    <Image
                        src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/success-green-check-mark-icon.png"
                        width={80}
                        height={80}
                        alt={'dasda'}
                    />
                    <div className='flex flex-col items-start'>
                        <h1 className='text-2xl font-bold'>Thank you for your order!</h1>
                        <div>Order No: 33333</div>
                        <span>We have sent you order details email.</span>
                    </div>
                   
                </div>

                <div className='flex gap-8 mt-12'>
                    
                    <div className='flex flex-1 flex-col gap-1'>
                        <h4 className='font-bold'>Shipping Address</h4>
                        <p>
                            Selman Demirdoven< br />
                            Hurriyet Meydani No: 7 Dikili Izmir< br />
                            05333227336
                        </p>
                    </div>

                    <div className='flex flex-1 flex-col gap-1'>
                        <h4 className='font-bold'>Shipping Method</h4>
                        <p>
                            Standart Delivery
                        </p>
                    </div>

                    <div className='flex flex-1 flex-col gap-1'>
                        <h4 className='font-bold'>Delivery Time</h4>
                        <p>
                            2-3 business days
                        </p>
                    </div>

                </div>


                <div className='flex gap-8 mt-8'>
                    
                    <div className='flex flex-1 flex-col gap-1'>
                        <h4 className='font-bold'>Billing Address</h4>
                        <p>
                            Selman Demirdoven< br />
                            Hurriyet Meydani No: 7 Dikili Izmir< br />
                            05333227336
                        </p>
                    </div>

                    <div className='flex flex-1 flex-col gap-1'>
                        <h4 className='font-bold'>Payment Info</h4>
                        <p>
                            PayPal (Credit Card)
                        </p>
                    </div>
                    <div className='flex flex-1 flex-col gap-1'>
                        
                    </div>

                </div>

            </div>
            <div className='w-1/3 shadow-xl p-8 rounded-xl'>

            dasdsa

            </div>

            

           
                {/* <div className='flex justify-center'> 
                    <Image
                        src="https://media.gq.com/photos/5643734c3cc8fcfe0e1a05e3/master/w_1600,c_limit/Gbxx90A.gif"
                        width={1400}
                        height={100}
                        alt={'dasda'}
                        className='rounded-3xl mt-8'
                    />
                </div> */}

            

            

        </div>
    )
}