import React from 'react'
import { useThemeContext } from "@/components/context/theme";
import { isEmpty, isNull } from 'lodash';



const AddToTempCart = ({ productData }) => {

    const { color, setColor} = useThemeContext();

    
    function handleTempCartEkle( ekleData ){

        console.log('ekleData', ekleData)

        // console.log('productData', productData)


        // lazim olanlar
        // parent id - var. id - name - 

        // let tempCart = {
        //     urunler : color?.cartItems,
        //     topAdet : color?.totalQty,
        //     topTutar : color?.totalPrice
        // }

        // console.log('tempCart', tempCart)


        if( ! isNull(color) && ! isEmpty(color) ){


            // const desiredObject = color?.cartItems.find(item => item.variation_id === 313 );
            // console.log(desiredObject)

            let urunler = [];
            
            color?.cartItems.map( item => {

                urunler.push({
                    product_id: item?.product_id,
                    variation_id: item?.variation_id,
                    quantity: item?.quantity,
                    title: item?.name,
                    img: item?.data?.images[0].src
                })
               
            })

            console.log('urunler', urunler)

        }else{



        }

    }

    

    return (
        <div
            className="p-4 bg-slate-200 cursor-pointer mt-4"
            onClick={ ()=>{ handleTempCartEkle( { pid: productData?.post_parent, vid: productData?.post_id, qty: 1, price: productData?.price } ) } }
        >
            gecici carta ekle
        </div>
    )
}

export default AddToTempCart