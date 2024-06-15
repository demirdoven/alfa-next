import CheckoutMain from "@/components/checkout/CheckoutMain";
import { getCountries } from "../actions";


// async function getCountries(){
//     const countries = await axios.get( WOOCOMMERCE_COUNTRIES_ENDPOINT );
//     return countries?.data;
// }

// const requestxx = await fetch( 'http://localhost:3000/api/example');

// const resultx = await requestxx.json();
// console.log(resultx);



export default async function Checkout(){

    const countries = await getCountries();
    // console.log(countries)
	return (
		<div className="container mx-auto lg:max-w-6xl mt-6 flex flex-col ">
            <h1 className="text-center text-3xl mb-4">Checkout</h1>
            <CheckoutMain countriesData={countries} />
            zamazingo
        </div>

	);
}