import React, { useState } from 'react'
import { isEmpty, isNull } from 'lodash';
import { useTempCartContext } from '../context/tempCart';


const AddToTempCart = ({ pid, salePrice, media, title }) => {

    // const [tempCart, setTempCart] = useState({urunler: [{ pid: 333, salePrice: 44.44, media: '', title: 'deneme urun', qty: 1 }], toplamPrice: 0, toplamQty: 0})
    // const [tempCartUrunler, setTempCartUrunler] = useState( [] )

    const { tempCart, setTempCart} = useTempCartContext()
    
    function handleTempCartEkle( ekleData ){

        // console.log(tempCart)
        // return false

        const eklenecek = { pid, salePrice, media, title, qty: 1 }

        let tempCartClonned = tempCart;

        let seciliUrun = false

        if( ! isNull(tempCartClonned) ){
            seciliUrun = tempCartClonned.find( urun => urun.pid == eklenecek.pid )
        }else{
            tempCartClonned = []
        }

        if( seciliUrun ){

            // console.log('sepette var')

            const adet = seciliUrun.qty

            seciliUrun.qty = ( adet + eklenecek.qty )
      
            tempCartClonned = tempCartClonned.filter( urun => urun['pid'] != eklenecek.pid )


            // console.log('yeni urun list: ', tempCartClonned )
            // return false

            tempCartClonned.push(seciliUrun)

        }else{
            // tempCartClonned.urunler.push(eklenecek)
            // console.log('sepette yok')

            tempCartClonned.push(eklenecek)

        }



        // tempCart.urunler.push(eklenecek)


        setTempCart(tempCartClonned)
        console.log('tempcart', tempCart)

        return false 

        

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
            onClick={ ()=>{ handleTempCartEkle( { pid: pid } ) } }
        >
            gecici carta ekle
        </div>
    )
}

export default AddToTempCart