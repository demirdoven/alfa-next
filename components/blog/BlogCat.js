import Link from "next/link";
import { Button } from "../general/Button";

async function postlariGetir(cat){

    // let url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?_embed`;
    let url = `https://alfatires.com/wp-json/wp/v2/posts?category_slug=${cat}&_embed=1&per_page=100`;

    const headers   = { 'Content-Type': 'application/json' };
  
    const res = await fetch(url, {
        headers,
        method: 'GET',
        // next: { revalidate: 2 },
        // cache: 'no-store',
        
    });
  
    const resJson = await res.json();
    // const allPosts = resJson.data.posts;
    return resJson;
  
}

export default async function BlogCat({cat}){

    const postlar = await postlariGetir(cat);
    
    return (
        <>
            <div className="container mx-auto lg:max-w-6xl mt-6">
                <h1 className="text-center text-3xl m-4 uppercase">CATEGORY: {postlar[0]._embedded['wp:term'][0][0].name}</h1>

                <ul className="flex flex-wrap">
                {
                    postlar.map( post => (
                        <li key={post.id} className="basis-1/3 p-4 ">
                            <div className="h-full border-2 border-gray-200 bg-white hover:shadow-lg rounded-sm">
                                <Link href={`/blog/${post._embedded['wp:term'][0][0].slug}/${post.slug}-${post.id}`} className="post-image aspect-video	">
                                    <img className="aspect-video object-cover" src={post._embedded['wp:featuredmedia']['0'].source_url} alt="" />
                                </Link>

                                <div className="relative">
                                    <Link className="absolute top-[-12px] left-[50%] -translate-x-1/2 bg-alfa-red-1 text-white text-xs font-semibold uppercase py-1 px-2" href={`/blog/${post._embedded['wp:term'][0][0].slug}`}>
                                        {post._embedded['wp:term'][0][0].name}
                                    </Link>
                                </div>

                                <div className="p-4 mt-2">
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
                                        className="line-clamp-3 text-center text-sm alfa-gray-5"
                                        dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} 
                                    />

                                    <Button classList="block text-center mt-7 mb-5" type="light" text="Read More" href={`/blog/${post._embedded['wp:term'][0][0].slug}/${post.slug}-${post.id}`} />
                                </div>
                                
                            </div>
                        </li>
                    ))
                }
                </ul>

            </div>
        </>
    )
}
