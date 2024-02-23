import { useEffect } from "react";
import Error from "./Error";
import Image from "next/image";

const PaymentModes = ( { input, handleOnChange } ) => {
	
	const { errors, paymentMethod } = input || {}
	
	useEffect( ()=>{
		console.log(paymentMethod)

	}, [paymentMethod])
	
	return (
		<div className="mt-3">
			<Error errors={ errors } fieldName={ 'paymentMethod' }/>
			{/*Direct bank transfers*/}
			<h4 className="text-md">Select a payment method</h4>
			<div className="flex flex-wrap">

				<div className={`form-check woo-next-payment-input-container w-1/3 p-1 ${ paymentMethod == 'bacs' ? 'selected_payment_method' : '' }`}>
					<label className="form-check-label flex flex-col items-center justify-between gap-2 w-auto h-full bg-gray-200 p-3 border-2 border-gray-200 hover:border-slate-400 rounded-md cursor-pointer">
						<input onChange={ handleOnChange } value="bacs" className="form-check-input hidden w-full absolute mr-3" name="paymentMethod" type="radio" checked={'bacs' === paymentMethod}/>
						<Image src="https://svgur.com/i/10y8.svg" width="40" height="20" alt="asdsa" />
						<span className="form-check woo-next-payment-input-container w-full block text-xs text-center text-slate-600 opacity-70 whitespace-nowrap">Credit Card</span>
					</label>
				</div>

				<div className={`form-check woo-next-payment-input-container w-1/3 p-1 ${ paymentMethod == 'paypal' ? 'selected_payment_method' : '' }`}>
					<label className="form-check-label flex flex-col items-center justify-between gap-2 w-auto h-full bg-gray-200 p-3 border-2 border-gray-200 hover:border-slate-400 rounded-md cursor-pointer">
						<input onChange={ handleOnChange } value="paypal" className="form-check-input hidden w-full absolute mr-3" name="paymentMethod" type="radio" checked={'paypal' === paymentMethod}/>
						<Image src="https://svgur.com/i/10yc.svg" width="30" height="20" alt="asdsa" />
						<span className="form-check woo-next-payment-input-container w-full block text-xs text-center text-slate-600 opacity-70 whitespace-nowrap">Pay with Paypal</span>
					</label>
				</div>


				<div className={`form-check woo-next-payment-input-container w-1/3 p-1 ${ paymentMethod == 'cod' ? 'selected_payment_method' : '' }`}>
					<label className="form-check-label flex flex-col items-center justify-between gap-2 w-auto h-full bg-gray-200 p-3 border-2 border-gray-200 hover:border-slate-400 rounded-md cursor-pointer">
						<input onChange={ handleOnChange } value="cod" className="form-check-input hidden w-full absolute mr-3" name="paymentMethod" type="radio" checked={'cod' === paymentMethod}/>
						<Image src="https://svgur.com/i/10yH.svg" width="30" height="20" alt="asdsa" />
						<span className="form-check woo-next-payment-input-container w-full block text-xs text-center text-slate-600 opacity-70 whitespace-nowrap">Cash on Delivery</span>
					</label>
				</div>
				
				<div className={`form-check woo-next-payment-input-container w-1/3 p-1 ${ paymentMethod == 'apple_pay' ? 'selected_payment_method' : '' }`}>
					<label className="form-check-label flex flex-col items-center justify-between gap-2 w-auto h-full bg-gray-200 p-3 border-2 border-gray-200 hover:border-slate-400 rounded-md cursor-pointer">
						<input onChange={ handleOnChange } value="apple_pay" className="form-check-input hidden w-full absolute mr-3" name="paymentMethod" type="radio" checked={'apple_pay' === paymentMethod}/>
						<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1280px-Apple_Pay_logo.svg.png" width="60" height="20" alt="asdsa" />
						<span className="form-check woo-next-payment-input-container w-full block text-xs text-center text-slate-600 opacity-70 whitespace-nowrap">Pay with ApplePay</span>
					</label>
				</div>

				<div className={`form-check woo-next-payment-input-container w-1/3 p-1 ${ paymentMethod == 'google_pay' ? 'selected_payment_method' : '' }`}>
					<label className="form-check-label flex flex-col items-center justify-between gap-2 w-auto h-full bg-gray-200 p-3 border-2 border-gray-200 hover:border-slate-400 rounded-md cursor-pointer">
						<input onChange={ handleOnChange } value="google_pay" className="form-check-input hidden w-full absolute mr-3" name="paymentMethod" type="radio" checked={'google_pay' === paymentMethod}/>
						<Image src="https://svgur.com/i/10x8.svg" width="60" height="20" alt="asdsa" />
						<span className="form-check woo-next-payment-input-container w-full block text-xs text-center text-slate-600 opacity-70 whitespace-nowrap	">Pay with GooglePay</span>
					</label>
				</div>

				<div className={`form-check woo-next-payment-input-container w-1/3 p-1 ${ paymentMethod == 'amazon_pay' ? 'selected_payment_method' : '' }`}>
					<label className="form-check-label flex flex-col items-center justify-between gap-2 w-auto h-full bg-gray-200 p-3 border-2 border-gray-200 hover:border-slate-400 rounded-md cursor-pointer">
						<input onChange={ handleOnChange } value="amazon_pay" className="form-check-input hidden w-full absolute mr-3" name="paymentMethod" type="radio" checked={'amazon_pay' === paymentMethod}/>
						<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_Pay_logo.svg/2560px-Amazon_Pay_logo.svg.png" width="90" height="20" alt="asdsa" />
						<span className="form-check woo-next-payment-input-container w-full block text-xs text-center text-slate-600 opacity-70 whitespace-nowrap	">Pay with GooglePay</span>
					</label>
				</div>
				
				{/* 				
				<div className={`form-check woo-next-payment-input-container w-1/3 p-1 ${ paymentMethod == 'stripe' ? 'selected_payment_method' : '' }`}>
					<label className="form-check-label flex items-center justify-center w-auto h-full bg-gray-200 p-4 border-2 border-gray-200 hover:border-slate-400 rounded-md cursor-pointer">
						<input onChange={ handleOnChange } value="stripe" className="form-check-input hidden w-full absolute mr-3" name="paymentMethod" type="radio" checked={'stripe' === paymentMethod}/>
						<span className="form-check woo-next-payment-input-container w-full block text-sm text-center">Stripe</span>
					</label>
				</div> */}
			</div>
			
		</div>
	);
};

export default PaymentModes;