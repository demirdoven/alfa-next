import { isArray, isEmpty } from 'lodash';
import { CART_ENDPOINT } from '../constants';

export const storeSession = ( session ) => {
	
	if ( isEmpty( session ) ) {
		return null;
	}
	
	localStorage.setItem( 'x-wc-session', session );
}

export const getSession = () => {
	return localStorage.getItem( 'x-wc-session' );
}

export const getApiCartConfig = () => {
	
	const config = {
		headers: {
			'X-Headless-CMS': true,
		},
	}
	
	const storedSession = getSession();
	
	if ( !isEmpty( storedSession ) ) {
		config.headers['x-wc-session'] = storedSession;
	}
	
	return config;
}

export function sepeteEkle( productId, qty = 1, setColor, setIsAddedToCart = ()=>{}, setLoading = ()=>{} ){
    
	const storedSession = getSession();
	const addOrViewCartConfig = getApiCartConfig();
	setLoading(true);

	// devreden

	// axios.post( `${ process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL }/wp-json/rae/v1/cart/items/`, {
	// 		product_id: productId,
	// 		quantity: qty,
	// 	},
	// 	addOrViewCartConfig,
	// )
	// .then( ( res ) => {
		
	// 	// console.log('res', res);
	// 	// console.log('storedSession', storedSession);
	// 	if ( isEmpty( storedSession ) ) {
	// 		storeSession( res?.headers?.[ 'x-wc-session' ] );
	// 	}
	// 	sepetiGoster( setColor );
	// 	console.log('res', res);
	// 	setMiniCart(true)

		
	// } )
	// .catch( err => {
	// 	console.log( 'err', err );
	// } );

	// / devreden


	fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/cart/items/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			...addOrViewCartConfig.headers,
		},
		body: JSON.stringify({
			product_id: productId,
			quantity: qty,
		}),
	})
	.then((res) => {
		if (!res.ok) {
			throw new Error(`Request failed with status: ${res.status}`);
		}

		if (isEmpty(storedSession)) {
			const sessionHeader = res.headers.get('x-wc-session');
			storeSession(sessionHeader);
		}

        

	    sepetiGoster(setColor, setIsAddedToCart, setLoading);
	    setMiniCart(true);
        
	})
	.catch((err) => {
		console.error('Error:', err);
	});


};

export function sepetiGoster( setColor, setIsAddedToCart, setLoading, setProcessing = () => {} ){
	
	const addOrViewCartConfig = getApiCartConfig();
	
	// axios.get( `${ process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL }/wp-json/rae/v1/cart/items/`, addOrViewCartConfig )
	// 	.then( ( res ) => {
	// 		const formattedCartData = getFormattedCartData( res?.data ?? [] )

	// 		console.log('formattedCartData', formattedCartData);
	// 		setColor( formattedCartData );
    //         setProcessing(false);
	// 		// console.log('color', color);
	// 	} )
	// 	.catch( err => {
	// 		console.log( 'err', err );
    //         setProcessing(false);
	// 	} );


    fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/cart/items/`, {
        method: 'GET',
        headers: addOrViewCartConfig.headers,
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        const formattedCartData = getFormattedCartData(data ?? []);
        setColor(formattedCartData);
        console.log('sepet', formattedCartData)
        setIsAddedToCart(true);
		setLoading(false);
        // setProcessing(false);
    })
    .catch((err) => {
        console.error('Error:', err);
        // setProcessing(false);
    });


};

export function getFormattedCartData( cartData ){
	if ( ! cartData.length ) {
		return null;
	}
	const cartTotal = calculateCartQtyAndPrice( cartData || [] );
	return {
		cartItems: cartData || [],
		...cartTotal,
	};
};

export function calculateCartQtyAndPrice( cartItems ){
	const qtyAndPrice = {
		totalQty: 0,
		totalPrice: 0,
	}
	
	if ( !isArray(cartItems) || !cartItems?.length ) {
		return qtyAndPrice;
	}
	
	cartItems.forEach( (item, index) => {
		qtyAndPrice.totalQty += item?.quantity ?? 0;
		qtyAndPrice.totalPrice += item?.line_total ?? 0;
	} )
	
	return qtyAndPrice;
}

export const sepetiGuncelle = ( cartKey, qty = 1, setColor, setUpdatingProduct ) => {
	
	const addOrViewCartConfig = getApiCartConfig();
		
	axios.put( `${CART_ENDPOINT}${cartKey}`, {
		quantity: qty,
	}, addOrViewCartConfig )
		.then( ( res ) => {
			sepetiGoster( setColor, setUpdatingProduct );
		} )
		.catch( err => {
			console.log( 'err', err );
		} );
};

export const sepetUrunSil = ( cartKey, setColor, setRemovingProduct ) => {
	
	const addOrViewCartConfig = getApiCartConfig();
	
	setRemovingProduct(true);
	
	axios.delete( `${CART_ENDPOINT}${cartKey}`, addOrViewCartConfig )
		.then( ( res ) => {
			sepetiGoster( setColor, setRemovingProduct );
		} )
		.catch( err => {
			console.log( 'err', err );
			setRemovingProduct(false);
		} );
};