'use client'

import { isEmpty, isArray, isNull } from 'lodash';
import { useThemeContext } from '../context/theme';
// import { useMiniCartContext } from "@/components/context/miniCart";
import { sepeteEkle } from '@/lib/functions';
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import LoadingLastik from '../general/LoadingLastik';
import { ImSpinner6 } from "react-icons/im";

const AddToCart = ( { qty, pid } ) => {
	
	const { color, setColor} = useThemeContext();
	// const { mCart, setMcart} = useMiniCartContext();

	const [ isAddedToCart, setAddedToCart ] = useState(false);
	
	// console.log('sepetimiz', color);

	// if ( isEmpty( product ) ) {
	// 	return null;
	// }


	// useEffect( ()=>{
		
	// 	if( isAddedToCart ){
	// 		setMcart(true)
	// 	}

	// }, [isAddedToCart, setMcart])
	
	return (
		<>
			<button
                className={`w-full uppercase flex items-center justify-center gap-x-2 bg-red-600 text-white hover:bg-red-700 border border-red-600 text-red-600 text-xl font-bold py-2 px-8 rounded-md`}
				onClick={ () => sepeteEkle( pid, qty, setColor, setAddedToCart ) }
			>
					{
						// ! isAddedToCart ? (
							<><FaPlus size={20}/> <span>Add to cart</span></>
						// ) :
						// (
						// 	<><ImSpinner6 className="animate-spin" size={20}/> <span>Please wait</span></>
						// )

					}
				
			</button>

		</>
	);
};

export default AddToCart;