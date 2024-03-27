
import { getMultiProducts, getProductPrice } from "@/app/actions";
import SingleLid from "@/components/single-product/lids/SingleLid";
import SingleFelgen from "@/components/single-product/rims/SingleFelgen";
import SingleFelgenVariation from "@/components/single-product/rims/SingleFelgenVariation";
import SingleProductReifen from "@/components/single-product/tires/SingleProductReifen";

export default async function productSlug( {params} ){

    const productSlug = params.productSlug;

    const parts = productSlug.split('-');
    const productID = parts[parts.length - 1];
    // const varID = parts[parts.length - 2];

    let catSlug = 'tires';

    if( productSlug.includes('keskin') || productSlug.includes('mam-felgen') ){
        catSlug = 'rims'
    }
    if( productSlug.includes('keskin-wheels') || productSlug.includes('mam-wheels') ){
        catSlug = 'lids'
    }
   

    // async function xxx(){
    //     await new Promise(resolve => setTimeout(resolve, 14000));
    //     const yyy = await getMultiProducts('tires', [productID])
    //     return yyy
    // }
    // const product = await xxx()

    const product = await getMultiProducts(catSlug, [productID])
    // console.log(product)

    return (
        catSlug == 'tires' ? ( <SingleProductReifen product={product[0]} catSlug={catSlug} /> ) :
            catSlug == 'rims' ? 
                // product[0]?.post_parent > 0 ? 
                //     <SingleFelgenVariation product={product[0]} catSlug={catSlug} /> 
                // : 
                    <SingleFelgen product={product[0]} /> :

            catSlug == 'lids' ? <SingleLid  product={product[0]} />

            : ''

        
    )
}