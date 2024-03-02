import React from 'react'
import Link from 'next/link'
import { getBlogPosts } from '../actions'
import { Button } from '@/components/general/Button'
import Image from 'next/image';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export  default async function Blog(){

  // await delay(30000);

  const posts = await getBlogPosts()

  return (
    <div className="container mx-auto lg:max-w-6xl mt-6 mb-24">
        <h1 className="text-center text-3xl m-4">BLOG</h1>
        
        <ul className="flex flex-wrap">
        {
            // loadingPosts ?
                // <LoadingBlog /> :
                posts.map( post => (
                    <li key={post.id} className="basis-1/1 lg:basis-1/3 p-4 ">
                        <div className="h-full border-2 border-gray-200 bg-white hover:shadow-lg rounded-xl">
                            <Link 
                                href={`/blog/${post._embedded['wp:term'][0][0].slug}/${post.slug}-${post.id}`} 
                                className="post-image aspect-video"
                            >
                                <Image
                                    className="aspect-video object-cover rounded-t-lg"
                                    src={post._embedded['wp:featuredmedia']['0'].source_url}
                                    alt={`Blog`}
                                    width={400}
                                    height={200}
                                />
                            </Link>

                            <div className="relative">
                                {/* <Link href={`blog/${post._embedded['wp:term'][0][0].slug}`}> */}
                                    <span
                                        className="absolute top-[-12px] left-[50%] -translate-x-1/2 bg-alfa-red-1 text-white text-xs font-semibold uppercase py-1 px-2"
                                    >
                                        {post._embedded['wp:term'][0][0].name}
                                    </span>
                                {/* </Link> */}
                            </div>

                            <div className="p-4 mt-2 pb-8 flex flex-col justify-between lg:min-h-[240px]">
                                <div>
                                    <Link href={`/blog/${post._embedded['wp:term'][0][0].slug}/${post.slug}-${post.id}`}>
                                        <h1 
                                        className="line-clamp-2 alfa-black-2 text-center text-2xl font-medium mb-2"
                                        title={post.title.rendered}
                                        alt={post.title.rendered}
                                        >
                                            {post.title.rendered}
                                        </h1>
                                    </Link>
                                    <div 
                                        className="line-clamp-2 text-center text-sm alfa-gray-5"
                                        dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} 
                                    />
                                </div>
                                <Button 
                                    classList="block text-center mt-6 lg:mt-0" 
                                    type="light" 
                                    text="Read More" 
                                    href={`/blog/${post._embedded['wp:term'][0][0].slug}/${post.slug}-${post.id}`} 
                                />
                            </div>
                            
                        </div>
                    </li>
                ))
            
        }
        </ul>
    </div>
  )
}
