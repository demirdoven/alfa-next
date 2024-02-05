'use client'

import { getParentVariations, getProductVariations } from "@/app/actions";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation'
import { isEmpty } from "lodash";

// import { getProductById } from "@/lib/woocommerce";

const ReifenSimilar_old = ({setVariationID, variationID, parentID, brandd, modell, product, setProduct}) => {

    const router = useRouter()
    const pathname = usePathname()

    const [data, setData] = useState(null)
    const [similars, setSimilars] = useState([])
    const [loading, setloading] = useState(false)
    const [defaultSubstring, setDefaultSubstring] = useState(null)
    const [brand, setBrand] = useState(brandd)
    const [model, setModel] = useState(modell)
    const [choice, setChoice] = useState(variationID)
    const [choiceName, setChoiceName] = useState('')
    // const [pid, setPid] = useState(product.id)
    const [product__ID, setProduct__ID] = useState(variationID)
    const [parent__ID, setParent__ID] = useState(parentID)



    const [vars, setVars] = useState([])
    

    useEffect( ()=>{
        
        const getParentVars = async () => {
            const response = await getParentVariations(parent__ID);
            setVars(response)
        };
        getParentVars();

    }, [] )

    // useEffect( ()=>{
        
    //     const getVary = async () => {
    //         const response = await getProductVariations(parent__ID);
    //         setSimilars(response)
    //         // console.log(response)
    //         // alert(response.length)
    //     };
    //     getVary();

    // }, [parent__ID])

            
    
            // useEffect(() => {

            //     if( product ){
            //         // console.log('product degisti', product);
            //         const url = process.env.NEXT_PUBLIC_FRONTEND_URL + '/product/' + product.slug
            //         window.history.pushState({}, '', url);
            //         // console.log(url);
            //         setloading(false);


            //         const modelOb = product.attributes.find(item => item.name === 'Modell');
            //         setModel(modelOb.options[0]);
            //         setPid(product.id)
                    
            //     }

            // }, [product])
            

    useEffect(() => {

        if( choice && choice != variationID ){

            const seciliVarData = vars.find( ({ variation_id }) => variation_id == choice );

            if( seciliVarData && ! isEmpty(seciliVarData) ){

                // seciliVarData.display_price

            }

            console.log(seciliVarData)
            // return false;
            
            // // diger kalan parti da urle ekle
            // const urlSlug = convertToSlug(brand+' '+model+' '+choiceName+' '+choice)
            // const updatedUrl = `/product/${urlSlug}`;

            // router.push(updatedUrl, { scroll: true });

            // window.scrollTo({
            //     top: 0,
            //     behavior: 'smooth'
            // });


            // // const url = 'http://alfatires.local/wp-json/prdx/v1/selocan3?pid='+choice;
            // // fetch(url)
            // // .then((res) => res.json())
            // // .then((data) => {
            // //     setProduct(data)
            // //     // console.log(data);
            // // })
        }

    }, [choice])

    function convertToSlug( str ) {
        str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
        str = str.replace(/^\s+|\s+$/gm,'');
        str = str.replace(/\s+/g, '-');   
        return str;
    }

    // useEffect(() => {

    //     if( model ){

    //         let url = new URL(`http://alfatires.local/wp-json/prdx/v1/selocan4`);

    //         url.searchParams.append('model', model);
            
    //         fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {

    //             const extractedStrings = data.map(item => {
    //                 const index = item.post_title.indexOf(model) + model.length;
    //                 return item.post_title.substring(index).trim();
    //             });
                
    //             const extractedObjects = extractedStrings.map((value, index) => ({
    //                 ID: data[index].ID,
    //                 substring: value,
    //             }));
                
    //             extractedObjects.sort((a, b) => a.substring.localeCompare(b.substring));

    //             setSimilars(extractedObjects);

    //             // console.log(extractedObjects);
    //         })
    //     }

    // }, [model])

    return (
        <div className="relative">
            <h4 className="text-sm font-bold">Tire Size</h4>
            <div className="relative">

            <select 
                className="w-full py-2 rounded-md focus:outline-0 border-2 text-sm mt-1"
                defaultValue={choice || product__ID}
                onChange={(e) => {
                    setChoice(e.target.value)
                }}
            >
                {vars &&  (
                    vars.map(tek => (
                        <option key={tek.variation_id} className="px-4" value={tek.variation_id}>
                            { tek?.attributes?.attribute_pa_tiresize }
                        </option>
                    ))
                )}
            </select>
                {/* { loading && <LoadingLastik classList="absolute right-[-45px] top-[8px] w-[30px]" width="30px" /> } */}
            </div>
        </div>
    )
}

export default ReifenSimilar_old