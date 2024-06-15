import { Button } from '@/components/general/Button';
import { getCampaigns } from '../actions';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import Image from 'next/image';

export default async function Deals( {searchParams} ){

    const campaigns = await getCampaigns();


    return (
        <div className="w-full xs:px-4 lg:container mx-auto lg:max-w-6xl mt-6 px-4">

            {/* <DealsMain /> */}

            <ul className="mt-4 mb-24">
                {
                        campaigns && ! isEmpty(campaigns) && campaigns.map( item => (
                            <li 
                                key={item.id}
                                className="flex flex-col lg:flex-row justify-between gap-x-4 mb-6 lg:mb-4 p-0 lg:p-8 pb-8 lg:p-8 lg:shadow-lg rounded-lg">

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

                                <div className="w-full lg:w-6/12 mt-2 lg:pt-4 pl-4">
                                    <h1 className="text-xl lg:text-3xl font-semibold lg:font-medium mt-1 lg:mt-0">{ JSON.parse(item?.de).title }</h1>
                                    <div 
                                        className="block text-md lg:text-lg mt-2 lg:mt-4 mb-5 lg:mb-8 leading-[20px]"
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