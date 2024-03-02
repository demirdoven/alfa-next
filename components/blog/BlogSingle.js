import { postuGetir } from "@/app/actions";
import Link from "next/link";


async function BlogSinglePost({slug}){

    const postId = slug.split('-')[(slug.split('-').length-1)];

    const post = await postuGetir(postId);

    console.log(post._embedded['wp:term'][0][0].name);

  return (
    <div className="container mx-auto lg:max-w-6xl mt-16">
        <div className="text-center">
            {/* <Link  href={`/blog/${post._embedded['wp:term'][0][0].slug}`}> */}
                <span className="mx-auto text-center  bg-alfa-red-1 text-white text-xs font-semibold uppercase py-1 px-2">
                    {post._embedded['wp:term'][0][0].name}
                </span>
            {/* </Link> */}
        </div>
        <h1 className="text-center text-3xl m-6">{post.title.rendered}</h1>
        {/* <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="" /> */}
        <div 
            className="alfa-gray-5 mt-6"
            dangerouslySetInnerHTML={{__html: post.content.rendered}} 
        />

    </div>
   
  )
}

export default BlogSinglePost