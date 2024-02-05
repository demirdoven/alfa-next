import { WOOCOMMERCE_COUNTRIES_ENDPOINT } from "@/lib/constants";
// import axios from "axios";
import CartDetails from "@/components/checkout/CartDetails";



// async function getCountries(){
//     const countries = await axios.get( WOOCOMMERCE_COUNTRIES_ENDPOINT );
//     return countries?.data;
// }

// const requestxx = await fetch( 'http://localhost:3000/api/example');

// const resultx = await requestxx.json();
// console.log(resultx);



export default async function Checkout(){

    // const countries = await getCountries();

	return (
		<div className="container mx-auto lg:max-w-6xl mt-6 flex flex-col ">
            <h1>Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

                <div></div>
                <div className="your-orders">
                    {/* <YourOrder cart={ color }/> */}
                    <CartDetails />
				</div>

            </div>
        </div>
	);
}