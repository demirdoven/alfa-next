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
                                className="flex flex-col lg:flex-row justify-between gap-x-4 mb-4 p-4 pb-8 lg:p-8 shadow-lg rounded-lg">

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

                                <div className="w-full lg:w-6/12 pt-4 pl-4">
                                    <h1 className="text-3xl font-medium">{ JSON.parse(item?.de).title }</h1>
                                    <div 
                                        className="block text-lg mt-4 mb-8"
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