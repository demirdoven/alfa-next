import { NextResponse } from "next/server";
import { isEmpty } from 'lodash';

const WooCommerceRestApi = require( '@woocommerce/woocommerce-rest-api' ).default;

const api = new WooCommerceRestApi( {
	url: process.env.ALFA_LIVE_URL,
	consumerKey: process.env.ALFA_LIVE_WC_CONSUMER_KEY,
	consumerSecret: process.env.ALFA_LIVE_WC_CONSUMER_SECRET,
	version: "wc/v3"
} );


export async function POST(request) {

    const responseData = {
      success: false,
      orderId: '',
      total: '',
      currency: '',
      error: '',
    };

	  const reqBody = await request.json()

    if ( isEmpty( reqBody ) ) {
      responseData.error = 'Required data not sent';
      return responseData;
    }

    const data = reqBody;
    data.status = 'pending';
    data.set_paid = false;

    try {
      
        const { data } = await api.post( 'orders', reqBody );
    
        responseData.success = true;
        responseData.orderId = data.number;
        responseData.total = data.total;
        responseData.currency = data.currency;
        responseData.paymentUrl = data.payment_url;
        
        return NextResponse.json( responseData )


    } catch (error) {
      
    }


    

}