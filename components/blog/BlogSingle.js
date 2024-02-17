import Link from "next/link";

async function postuGetir(postId){

    // let url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?_embed`;
    let url = `https://alfatires.com/wp-json/wp/v2/posts/${postId}?_embed=1`;

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


async function BlogSinglePost({slug}){

    const postId = slug.split('-')[(slug.split('-').length-1)];

    const post = await postuGetir(postId);

    console.log(post);

  return (
    <div className="container mx-auto lg:max-w-6xl mt-16">
        <div className="text-center">
            <Link className="mx-auto text-center  bg-alfa-red-1 text-white text-xs font-semibold uppercase py-1 px-2" href={`/blog/${post._embedded['wp:term'][0][0].slug}`}>
                {post._embedded['wp:term'][0][0].name}
            </Link>
        </div>
        <h1 className="text-center text-3xl m-6">{post.title.rendered}</h1>
        <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt="" />
        <div 
            className="alfa-gray-5 mt-6"
            dangerouslySetInnerHTML={{__html: post.content.rendered}} 
        />

    </div>
   
  )
}

export default BlogSinglePost