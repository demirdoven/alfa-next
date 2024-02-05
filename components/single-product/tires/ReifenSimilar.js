'use client'

import { getParentVariations, getProductVariations, getProducts } from "@/app/actions";
import { isEmpty } from "lodash";
import { useEffect } from "react";


const ReifenSimilar = ({initialSize, variationList, setVariationList, variationID, setVariationID, parentID }) => {

    useEffect( ()=>{
        
        const getParentVars = async () => {
            const response = await getParentVariations('tires', parentID);
            // console.log(response)
            setVariationList(response)
        };
        getParentVars();

    }, [parentID, setVariationList] )



    return (
        <div className="relative">
            <h4 className="text-sm font-bold">Tire Size</h4>
            <div className="relative">

                <select 
                    className="w-full p-2 rounded-md focus:outline-0 border-2 text-sm mt-1"
                    value={variationID}
                    onChange={(e) => {
                        setVariationID(e.target.value)
                    }}
                >
                    {!isEmpty(variationList) ?  (
                        variationList.map(tek => (
                            <option key={tek.post_id} className="px-4" value={tek.post_id}>
                                { tek?.sizeTires }
                            </option>
                        ))
                    ) : (
                        <>
                            <option key="init">{initialSize}</option>
                            <option key="loading">Loading</option>
                        </>
                    )
                    }
                </select>

            </div>
        </div>
    )
}

export default ReifenSimilar