import { isArray, isEmpty, isNull } from 'lodash';
import { CART_ENDPOINT } from '../constants';
import axios from 'axios';


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

export function sepeteEkle( eklenecekler, setColor, setVerif ) {
    

    const storedSession = getSession();

    console.log('storedSession calisti');

    const addOrViewCartConfig = getApiCartConfig();

    console.log('addOrViewCartConfig calisti');

    console.log('data ob hazirlaniyor');

    const data = {toplu: eklenecekler};

    console.log('data', data);

    console.log('data ob hazirlandi');

    setVerif(true)

    axios.post(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/cart/items/`, data, {
        headers: {
            'Content-Type': 'application/json',
            ...addOrViewCartConfig.headers,
        },
    })
    .then((res) => {
        console.log('fetch basladi');
        console.log('res', res);

        if (!res.status === 200) {
            throw new Error(`Request failed with status: ${res.status}`);
        }

        if (isEmpty(storedSession)) {
            const sessionHeader = res.headers['x-wc-session'];
            storeSession(sessionHeader);
        }

        console.log('sonuclandi', res);

        sepetiGoster(setColor);
        // setMiniCart(true);

        setVerif(false)

    })
    .catch((err) => {
        console.error('Error:', err);
    });
}

export function sepetiGoster(setColor) {
    const addOrViewCartConfig = getApiCartConfig();

    axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/cart/items/`, {
        headers: addOrViewCartConfig.headers,
    })
    .then((res) => {
        if (!res.status === 200) {
            throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.data;
    })
    .then((data) => {
        const formattedCartData = getFormattedCartData(data ?? []);
        setColor(formattedCartData);

        if (formattedCartData == null) {
            if (typeof window !== "undefined") {
                localStorage.removeItem('next-cart');
            }
        }
    })
    .catch((err) => {
        console.error('Error:', err);
    });
}

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
		totalTax: 0,
		totalWithoutTax: 0,
	}
	
	if ( !isArray(cartItems) || !cartItems?.length ) {
		return qtyAndPrice;
	}
	
	cartItems.forEach( (item, index) => {
		qtyAndPrice.totalQty += item?.quantity ?? 0;
		qtyAndPrice.totalTax += item?.line_tax ?? 0;
		qtyAndPrice.totalWithoutTax += item?.line_total ?? 0;
		// qtyAndPrice.totalPrice += item?.line_total ?? 0;
	} )
	
    qtyAndPrice.totalPrice = qtyAndPrice.totalTax + qtyAndPrice.totalWithoutTax;

	return qtyAndPrice;
}

export const sepetiGuncelle = ( cartKey, qty = 1, setColor ) => {
    
    const addOrViewCartConfig = getApiCartConfig();
    
    fetch(`${CART_ENDPOINT}${cartKey}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // Assuming getApiCartConfig() returns necessary headers
            // You might need to adjust this part based on your actual implementation
            ...addOrViewCartConfig.headers
        },
        body: JSON.stringify({
            quantity: qty
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        sepetiGoster(setColor);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
};



export const sepetUrunSil = ( cartKey, setColor ) => {

    const addOrViewCartConfig = getApiCartConfig();
   
    fetch(`${CART_ENDPOINT}${cartKey}`, {
        method: 'DELETE',
        headers: {
            // Assuming getApiCartConfig() returns necessary headers
            // You might need to adjust this part based on your actual implementation
            ...addOrViewCartConfig.headers
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        sepetiGoster(setColor);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
};

export const clearCart = async ( setCart ) => {

	const addOrViewCartConfig = getApiCartConfig();
  
	try {
	  await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/cart/items/`, {
		...addOrViewCartConfig,
		method: 'DELETE'
	  });
	  sepetiGoster( setCart );
	} catch (err) {
	  console.log('Error:', err);
	}
};

export const gercekSepetiTemizle = async (setCart) => {
	
	const addOrViewCartConfig = getApiCartConfig();
  
	try {
	  await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/cart/items/`, {
		...addOrViewCartConfig,
		method: 'DELETE'
	  });
	  sepetiGoster(setCart);
	} catch (err) {
	  console.log('Error:', err);
	}
};

export function getThumbnailUrlBySlug( media ){

    let productImage = "https://cdn.alfatires.eu/products/tires/"+media+".webp";
    if( media == "" || media == null ){
		productImage = "https://cdn.alfatires.eu/theme/no-image-white.webp";
	}
    return productImage
}

export function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}