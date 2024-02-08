'use client'

import { useThemeContext } from "@/components/context/theme";
import { useEffect, useState } from "react";
import UserAddress from "./UserAddress";
import CheckboxField from "./form-elements/CheckboxField";
import { 
  handleBillingDifferentThanShipping, 
  handleCreateAccount, 
  handleOtherPaymentMethodCheckout, 
  setStatesForCountry 
} from "@/lib/functions/checkout.js";

// import YourOrder from "./your-order";

import validateAndSanitizeCheckoutForm from "@/lib/validator/checkout";
// import CartDetails from "./CartDetails";
import CartDetails from "./CartDetails_Old";

// const defaultCustomerInfo = {
// 	firstName: 'Imran',
// 	lastName: 'Sayed',
// 	address1: '123 Abc farm',
// 	address2: 'Hill Road',
// 	city: 'Mumbai',
// 	country: 'IN',
// 	state: 'Maharastra',
// 	postcode: '221029',
// 	email: 'codeytek.academy@gmail.com',
// 	phone: '9883778278',
// 	company: 'The Company',
// 	errors: null,
// };

const defaultCustomerInfo = {
	firstName: '',
	lastName: '',
	address1: '',
	address2: '',
	city: '',
	country: '',
	state: '',
	postcode: '',
	email: '',
	phone: '',
	company: '',
	errors: null
}


const CheckoutMain = ( { countriesData } ) => {

    const initialState = {
      billing: {
        ...defaultCustomerInfo,
      },
      shipping: {
        ...defaultCustomerInfo,
      },
      createAccount: false,
      orderNotes: '',
      billingDifferentThanShipping: false,
      paymentMethod: 'cod',
    };

    const { color, setColor} = useThemeContext();
    const [ input, setInput ] = useState( initialState );
    const [ requestError, setRequestError ] = useState( null );
    const [ theShippingStates, setTheShippingStates ] = useState( [] );
    const [ isFetchingShippingStates, setIsFetchingShippingStates ] = useState( false );
    const [ theBillingStates, setTheBillingStates ] = useState( [] );
    const [ isFetchingBillingStates, setIsFetchingBillingStates ] = useState( false );
    const [ isOrderProcessing, setIsOrderProcessing ] = useState( false );
    const [ createdOrderData, setCreatedOrderData ] = useState( {} );

    // console.log('cart', color)
    // console.log('countriesData', countriesData)

    const {billingCountries, shippingCountries} = countriesData || {}

	
    const handleFormSubmit = async ( event ) => {
      event.preventDefault();

      /**
       * Validate Billing and Shipping Details
       *
       * Note:
       * 1. If billing is different than shipping address, only then validate billing.
       * 2. We are passing theBillingStates?.length and theShippingStates?.length, so that
       * the respective states should only be mandatory, if a country has states.
       */
      const billingValidationResult = input?.billingDifferentThanShipping ? validateAndSanitizeCheckoutForm( input?.billing, theBillingStates?.length ) : {
        errors: null,
        isValid: true,
      };
      const shippingValidationResult = validateAndSanitizeCheckoutForm( input?.shipping, theShippingStates?.length );

      setInput( {
        ...input,
        billing: { ...input.billing, errors: billingValidationResult.errors },
        shipping: { ...input.shipping, errors: shippingValidationResult.errors },
      } );

      // If there are any errors, return. 
      if ( ! shippingValidationResult.isValid || ! billingValidationResult.isValid ) {
        return null;
      }

		

      // For stripe payment mode, handle the strip payment and thank you. 
      if ( 'stripe' === input.paymentMethod ) {
        const createdOrderData = await handleStripeCheckout( input, color?.cartItems, setRequestError, setColor, setIsOrderProcessing, setCreatedOrderData );
        return null;
      }
		
      // For Any other payment mode, create the order and redirect the user to payment url.
      const createdOrderData = await handleOtherPaymentMethodCheckout( input, color?.cartItems, setRequestError, setColor, setIsOrderProcessing, setCreatedOrderData );
      
      if ( createdOrderData.paymentUrl ) {
        // window.location.href = createdOrderData.paymentUrl;
        console.log('createdOrderData', createdOrderData);
      }

      setRequestError( null );


    };
 

    const handleOnChange = async ( event, isShipping = false, isBillingOrShipping = false ) => {
      
      const {target} = event || {}

      if( 'createAccount' === target.name ){
        handleCreateAccount( input, setInput, target )
      }else if( 'billingDifferentThanShipping' === target.name ){
        handleBillingDifferentThanShipping( input, setInput, target )
      }else if( isBillingOrShipping ){

        if( isShipping ){
          await handleShippingChange( target )
        }else{
          await handleBillingChange( target )
        }

      }else{

        const newState = { ...input, [target.name]: target.value }
        setInput( newState )
      }
    }

    const handleShippingChange = async ( target ) => {
      const newState = { ...input, shipping: { ...input?.shipping, [ target.name ]: target.value } };
      setInput( newState );
      await setStatesForCountry( target, setTheShippingStates, setIsFetchingShippingStates );
    };

    const handleBillingChange = async ( target ) => {
      const newState = { ...input, billing: { ...input?.billing, [ target.name ]: target.value } };
      setInput( newState );
      await setStatesForCountry( target, setTheBillingStates, setIsFetchingBillingStates );
    };

    useEffect( () => {
      console.log(input)
    }, [input])

	return (
		<>
			{/* { color ? ( */}
				<form onSubmit={ handleFormSubmit } className="woo-next-checkout-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        
						<div className="shipping-details">
                            <h2 className="text-xl font-medium mb-4">Shipping Details</h2>
							<UserAddress
									states={ theShippingStates }
									countries={ shippingCountries }
									input={ input?.shipping }
									handleOnChange={ ( event ) => handleOnChange( event, true, true ) }
									isFetchingStates={ isFetchingShippingStates }
									isShipping
									isBillingOrShipping
								/>
								
							<CheckboxField
								name="billingDifferentThanShipping"
								type="checkbox"
								checked={ input?.billingDifferentThanShipping }
								handleOnChange={ handleOnChange }
								label="Billing different than shipping"
								containerClassNames="mb-4 pt-4"
							/>

							{
								input?.billingDifferentThanShipping ? (
									
									<div className="billing-details">
										<h2 className="text-xl font-medium mb-4">Billing Details</h2>
										<UserAddress
											states={ theBillingStates }
											countries={ billingCountries.length ? billingCountries: shippingCountries }
											input={ input?.billing }
											handleOnChange={ ( event ) => handleOnChange( event, false, true ) }
											isFetchingStates={ isFetchingBillingStates }
											isShipping={ false }
											isBillingOrShipping
										/>
									</div>

								) : null
							}

                        </div>

						<div className="your-orders">
							
							{/* <YourOrder cart={ color }/> */}
							<CartDetails input={ input } handleOnChange={ handleOnChange } isOrderProcessing={isOrderProcessing} requestError={requestError}/>
							
						
							

							
							
						</div>


                    </div>
				</form>
			{/* ) : null } */}
		</>
	);
};

export default CheckoutMain;