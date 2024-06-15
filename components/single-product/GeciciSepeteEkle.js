import React, { useEffect } from 'react'
import { useStore } from '@/lib/zustandStore'

const GeciciSepeteEkle = ({ pid, salePrice, media, title, qty = 1 }) => {

    const geciciSep = useStore((state) => state.geciciSep)
    const updateGeciciSep = useStore((state) => state.updateGeciciSep)
    const openMiniCart = useStore((state) => state.openMiniCart)

    const guncelleCB = () => {
        
        let clonnedSepet = geciciSep

        if( geciciSep?.totalQty < 1 && geciciSep?.cartItems.length < 1 ){  //sepet bossa

            let yeniOb = {
                cartItems: [
                    {
                        product_id: 'xx',
                        variation_id: pid,
                        quantity: qty,
                        line_subtotal: parseFloat(salePrice).toFixed(2),
                        line_total: parseFloat(salePrice).toFixed(2),
                        line_subtotal: parseFloat(salePrice).toFixed(2),
                        data: {
                            price: salePrice,
                            name: title,
                            images: [
                                {
                                    id: 111,
                                    src: media,
                                    name: 'test',
                                    alt: 'test'
                                }
                            ]
                        }
                    }
                ],
                totalPrice: salePrice,
                totalQty: qty,
            }

            updateGeciciSep( yeniOb )

        }else{  //sepet doluysa

            let eklenenUrunObj = false;

            eklenenUrunObj = geciciSep.cartItems.find( urun => urun.variation_id == pid )

            if( eklenenUrunObj ){  // sepette bu urun varsa
                
                const eklenenUrunIndex = geciciSep.cartItems.findIndex( urun => urun.variation_id == pid )

                const yeniAdet = eklenenUrunObj?.quantity + qty;

                const newCartItem = {
                    product_id: 'xx',
                    variation_id: pid,
                    quantity: yeniAdet,
                    line_subtotal: parseFloat(yeniAdet * salePrice).toFixed(2),
                    line_total: parseFloat(yeniAdet * salePrice).toFixed(2),
                    line_subtotal: parseFloat(yeniAdet * salePrice).toFixed(2),
                    data: {
                        price: salePrice,
                        name: title,
                        images: [
                            {
                                id: 111,
                                src: media,
                                name: 'test',
                                alt: 'test'
                            }
                        ]
                    }
                }

                geciciSep.cartItems[eklenenUrunIndex] = newCartItem;

            }else{  // sepette bu urun yoksa

                const newCartItem = {
                    product_id: 'xx',
                    variation_id: pid,
                    quantity: qty,
                    line_subtotal: parseFloat(qty * salePrice).toFixed(2),
                    line_total: parseFloat(qty * salePrice).toFixed(2),
                    line_subtotal: parseFloat(qty * salePrice).toFixed(2),
                    data: {
                        price: salePrice,
                        name: title,
                        images: [
                            {
                                id: 111,
                                src: media,
                                name: 'test',
                                alt: 'test'
                            }
                        ]
                    }
                }
                geciciSep.cartItems.push(newCartItem);
            }

            let cartTotal = 0;
            let cartQuantity = 0;

            geciciSep.cartItems.forEach( item => {
                
                cartTotal += parseFloat(item?.line_total)
                cartQuantity += item?.quantity

            });

            geciciSep.totalPrice = cartTotal.toFixed(2);
            geciciSep.totalQty = cartQuantity;
            
            console.log( 'clonnedSepet', geciciSep)
            // console.log('geciciSep degisti singledan', geciciSep)
        }

        openMiniCart()
    }


    return (
        <button
            onClick={ guncelleCB }
            className='w-full uppercase flex items-center justify-center gap-x-2 bg-red-600 text-white hover:bg-red-700 border border-red-600 text-red-600 text-xl font-bold my-2 py-2 px-8 rounded-md'
        >
            Gecici Sepete Ekle
        </button>
    )
}

export default GeciciSepeteEkle