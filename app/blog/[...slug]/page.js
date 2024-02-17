import BlogCat from "@/components/blog/BlogCat";
import BlogSinglePost from "@/components/blog/BlogSingle";


const page = (props) => {

    const slugs = props.params.slug;
    
    return (
        <>
            {slugs.length == 1 &&
                <BlogCat cat={slugs[0]} />
            }
            {slugs.length == 2 &&
                <BlogSinglePost slug={slugs[1]} />
            }
        </>
    )
}

export default page