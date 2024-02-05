'use client'

import { isEmpty, isArray } from 'lodash';
import { useThemeContext } from '../context/theme';
import { sepeteEkle } from '@/lib/functions';
import { FaPlus } from "react-icons/fa6";

const AddToCart = ( { qty, pid } ) => {
	
	const { color, setColor} = useThemeContext();
	
	// console.log('sepetimiz', color);

	// if ( isEmpty( product ) ) {
	// 	return null;
	// }
	
	return (
		<>
			<button
                className={`w-full uppercase flex items-center justify-center gap-x-2 bg-red-600 text-white hover:bg-red-700 border border-red-600 text-red-600 text-xl font-bold py-2 px-8 rounded-md`}
				onClick={ () => sepeteEkle( pid, qty, setColor ) }
			>
				<FaPlus size={20}/> Add to cart
			</button>

		</>
	);
};

export default AddToCart;