import { isArray, isEmpty } from 'lodash';
// import axios from 'axios';
import { WOOCOMMERCE_STATES_ENDPOINT } from '../constants';
import { clearCart } from '.';
import { createTheOrder, getCreateOrderData } from './order';


export const setStatesForCountry = async ( target, setTheStates, setIsFetchingStates ) => {
	if ( 'country' === target.name ) {
		setIsFetchingStates( true );
		const countryCode = target[ target.selectedIndex ].getAttribute( 'data-countrycode' );
		const states = await getStates( countryCode );
		setTheStates( states || [] );
		setIsFetchingStates( false );
	}
};

// export const getStates = async ( countryCode = '' ) => {
	
// 	if ( ! countryCode ) {
// 		return [];
// 	}
	
// 	const { data } = await axios.get( WOOCOMMERCE_STATES_ENDPOINT, { params: { countryCode } } );
	
// 	return data?.states ?? [];
// };

export const getStates = async (countryCode = '') => {
    if (!countryCode) {
      return [];
    }
  
    try {
      const response = await fetch(`${WOOCOMMERCE_STATES_ENDPOINT}?countryCode=${countryCode}`);
      const data = await response.json();
      return data.states ?? [];
    } catch (error) {
      console.error('Error fetching states:', error);
      return [];
    }
  };

export const handleBillingDifferentThanShipping = ( input, setInput, target ) => {
	const newState = { ...input, [ target.name ]: ! input.billingDifferentThanShipping };
	setInput( newState );
};

export const handleCreateAccount = ( input, setInput, target ) => {
	const newState = { ...input, [ target.name ]: ! input.createAccount };
	setInput( newState );
};

export const handleOtherPaymentMethodCheckout = async ( input, products, setRequestError, setCart, setIsOrderProcessing, setCreatedOrderData ) => {
	setIsOrderProcessing( true );
	const orderData = getCreateOrderData( input, products);
	const customerOrderData = await createTheOrder( orderData, setRequestError, '' );
	
	console.log('customerOrderData', customerOrderData);

	const cartCleared = await clearCart( setCart, () => {} );
	setIsOrderProcessing( false );
	
	if ( isEmpty( customerOrderData?.orderId ) || cartCleared?.error ) {
		setRequestError( 'Clear cart failed' );
		return null;
	}
	
	setCreatedOrderData( customerOrderData );
	

	
	// await createCheckoutSessionAndRedirect( products, input, customerOrderData?.orderId );




	window.location.href = window.location.origin + `/thank-you?order_id=${ customerOrderData?.orderId }`





	// let session = {};
	// try {
	// 	session = await createCheckoutSession( sessionData );
	// } catch ( err ) {
	// 	console.log( 'createCheckout session error', err );
	// }
	// try {
	// 	const stripe = await loadStripe( process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY );
	// 	if ( stripe ) {
	// 		stripe.redirectToCheckout( { sessionId: session.id } );
	// 	}
	// } catch ( error ) {
	// 	console.log( error );
	// }



	
	return customerOrderData;
};