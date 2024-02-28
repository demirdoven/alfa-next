'use server'

import { WOOCOMMERCE_COUNTRIES_ENDPOINT } from "@/lib/constants";

 
export async function getProducts(catSlug, queryPids) {

    const url = `https://alfatires.com/wp-json/rl_js/v1/rl_js_get_products?cat=${catSlug}&pids=${queryPids.join(",")}`;

    const headers   = { 'Content-Type': 'application/json' };
    
    const res = await fetch( url, {
        headers,
        method: 'GET',
        next: { revalidate: 1800 },
        // cache: 'no-store',
        
    });
    const resJson = await res.json();
    return resJson;
}

export async function getProductPrice(catSlug, pid) {

    const url = `https://alfatires.com/wp-json/rl_js/v1/rl_js_get_product_price?cat=${catSlug}&pid=${pid}`;
    // const url = `https://alfatires.com/wp-json/rl_js/v1/rl_js_get_product_price?pid=2802`;

    const headers   = { 'Content-Type': 'application/json' };
    
    const res = await fetch( url, {
        headers,
        method: 'GET',
        // next: { revalidate: 0 },
        cache: 'no-store',
        
    });
    const resJson = await res.json();
    return resJson;
}

export async function getCampaign(catSlug) {

    const url = `https://alfatires.com/wp-json/rl_js/v1/rl_js_campaign?catSlug=${catSlug}`;

    const headers   = { 'Content-Type': 'application/json' };
    
    const res = await fetch( url, {
        headers,
        method: 'GET',
        next: { revalidate: 1800 },
        // cache: 'no-store',
        
    });
    const resJson = await res.json();
    return resJson;
}

export async function getBlogPosts(){

    // await new Promise( resolve => setTimeout(resolve, 3000) )

    // let url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?_embed`;
    let url = `https://alfatires.com/wp-json/wp/v2/posts?_embed=1&per_page=100`;

    const headers   = { 'Content-Type': 'application/json' };
  
    const res = await fetch(url, {
        headers,
        method: 'GET',
        next: { revalidate: 3600 },
        // cache: 'no-store',
        
    });
  
    const resJson = await res.json();
    // const allPosts = resJson.data.posts;
  
    return resJson;
  
}

export async function getProductVariations(productId) {

    // const productId = 3609;
    const url = `https://alfatires.com/wp-json/wc/v3/products/${productId}/variations?per_page=100&stock_status=instock`;
    const base64Credentials = Buffer.from(`${process.env.ALFA_EU_WC_CONSUMER_KEY}:${process.env.ALFA_EU_WC_CONSUMER_SECRET}`).toString('base64');
    const headers = new Headers({
      'Authorization': `Basic ${base64Credentials}`,
      'Content-Type': 'application/json',
    });
  
    try {
      const response = await fetch(
        url, 
        { 
            headers,
            method: 'GET',
            next: { revalidate: 1800 },
        },
        
    );
      const product = await response.json();
  
      return product
      
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
      
    }

}

export async function getParentVariations(cat, parentID) {

    const url = `https://alfatires.com/wp-json/rl_js/v1/rl_js_get_variations?cat=${cat}&parent_id=${parentID}`;

    const headers   = { 'Content-Type': 'application/json' };
    
    const res = await fetch( url, {
        headers,
        method: 'GET',
        next: { revalidate: 1800 },
        // cache: 'no-store',
        
    });
    const resJson = await res.json();
    return resJson;
}

export async function getAvailableVariations(parentID) {

    const url = `https://alfatires.com/wp-json/rl_js/v1/rl_js_get_available_variations?parent_id=${parentID}`;

    const headers   = { 'Content-Type': 'application/json' };
    
    const res = await fetch( url, {
        headers,
        method: 'GET',
        next: { revalidate: 1800 },
        // cache: 'no-store',
        
    });
    const resJson = await res.json();
    return resJson;
}

export async function getMultiProducts(catSlug, queryPids) {

    const url = `https://alfatires.com/wp-json/rl_js/v1/rl_js_get_multi_products_data?cat=${catSlug}&pids=${queryPids.join(",")}`;

    const headers   = { 'Content-Type': 'application/json' };
    
    const res = await fetch( url, {
        headers,
        method: 'GET',
        next: { revalidate: 1800 },
        // cache: 'no-store',
        
    });
    const resJson = await res.json();
    return resJson;
}

export async function getSingleProduct(catSlug, pid) {

    const url = `https://alfatires.com/wp-json/rl_js/v1/rl_js_get_single_product_data?cat=${catSlug}&pid=${pid}`;

    const headers   = { 'Content-Type': 'application/json' };
    
    const res = await fetch( url, {
        headers,
        method: 'GET',
        next: { revalidate: 1800 },
        // cache: 'no-store',
        
    });
    const resJson = await res.json();
    return resJson;
}

export async function getFilterData(gidecek) {

    const res = await fetch("https://alfatires.com/wp-content/themes/alfatires/inc/ajax/filterProduct.php", {
        headers: {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9,tr;q=0.8,ar;q=0.7,ca;q=0.6,eo;q=0.5,pt;q=0.4",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: gidecek,
        method: "POST",
        next: { revalidate: 0 },
    });

    const data = await res.json()
    // console.log('filter data', data)
    return data;
}

export async function getCountries() {

    const url = WOOCOMMERCE_COUNTRIES_ENDPOINT;

    const headers   = { 'Content-Type': 'application/json' };
    
    const res = await fetch( WOOCOMMERCE_COUNTRIES_ENDPOINT, {
        headers,
        method: 'GET',
        next: { revalidate: 1800 },
        // cache: 'no-store',
        
    });
    const resJson = await res.json();
    return resJson;
}