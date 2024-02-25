import Main from "@/components/products/Main";
import { isEmpty } from "lodash";
import { headers } from 'next/headers'

const getDeviceType = () => {
    const headersList = headers();
    const userAgent = headersList.get('user-agent');
  
    return userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
      ? 'mobile'
      : 'desktop';
}

export default async function catSlug( {params, searchParams} ){

    const device = getDeviceType()

    const catSlug = params.catSlug;

    function prepareJsonData(){

        let datas = {
            start : 0,
            urlAjax : 'https://alfatires.eu/wp-content/themes/alfatires/inc/ajax/filterProduct.php',
            urlPage : 'https://alfatires.eu/produkte/tires/',
            table : '_product_tires',
            cat : 'reifen',
            subCat: null,
            postType:'post_id',
            dot: 0,
            sale: 0,
            outlet: 0,
            campaign: '',
            language: 'en_EN',
            filters : ["car", "season", "width", "height", "zoll", "brand", "model", "loadindex", "speedindex", "pricecat"],	
        };
        
        if( catSlug == 'tires' ){
            datas.cat       = 'reifen';
            datas.table     = '_product_tires'
            datas.postType  = 'post_id'
            datas.filters   = ["car", "season", "width", "height", "zoll", "brand", "model", "loadindex", "speedindex", "pricecat"]
            
            for(let filter of datas.filters) {
                let urlSearchData = null;
                if(searchParams[filter]){
                    urlSearchData = searchParams[filter].split("§");
                }

                datas[filter] = {
                    d:urlSearchData,
                    i:null,
                    f:null,
                    img:false,
                    specific:null,
                    query:'IN'
                }
            }

            datas.car.img = true;
            datas.season.img = true;
            datas.loadindex.specific = 'LI';
            datas.speedindex.specific = 'SI';

            // datas.orderbyFiler = "ORDER BY `stock` DESC ";
        }

        if( catSlug == 'rims' ){ 
            datas.cat       = 'alufelgen';
            datas.table     = '_product_rims'
            datas.postType  = 'post_parent'
            datas.filters   = ["zoll", "lzlk", "colortype", "brand", "model", "season", "forwinter"]

            for(let filter of datas.filters) {
                let urlSearchData = null;
                if(searchParams[filter]){
                    urlSearchData = searchParams[filter].split("§");
                }
        
                datas[filter] = {
                    d:urlSearchData,
                    i:null,
                    f:null,
                    img:false,
                    specific:null,
                    query:'IN'
                }
            }

            
        }
        if( catSlug == 'accessories' ){ 
            datas.cat       = 'accesories';
            datas.table     = '_product_lids'
            datas.postType  = 'post_id'
            datas.filters   = ["brand", "model", "colortype", "zoll", "lzlk"]

            for(let filter of datas.filters) {
                let urlSearchData = null;
                if(searchParams[filter]){
                    urlSearchData = searchParams[filter].split("§");
                }
        
                datas[filter] = {
                    d:urlSearchData,
                    i:null,
                    f:null,
                    img:false,
                    specific:null,
                    query:'IN'
                }
            }

            
        }

        


        
        // if( catSlug == 'rims' ){ 
        //     datas.car.img = true;
        //     datas.season.img = true;
        //     datas.loadindex.specific = 'LI';
        //     datas.speedindex.specific = 'SI';
        // }
        
        // let dataJSON = JSON.stringify(datas);

        return { 
            'dataJSON' : {...datas},
            'orderby' : '',
            'shop_view' : '',
            'per_row' : '',
            'category' : '',
        }


	}

    async function getDynamicFilterData(){

        const dataToGo = prepareJsonData();
        const gidecek = new URLSearchParams({
            'dataJSON': JSON.stringify(dataToGo.dataJSON),
            // 'orderby': dataToGo.orderby,
            'orderby': 'popularity',
            'shop_view': dataToGo.shop_view,
            'per_row': 10,
            'category': dataToGo.category,
        })

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

    const filterData = await getDynamicFilterData()

    return (
        <div className="w-full xs:px-4 lg:container mx-auto lg:max-w-6xl mt-6 px-4">
            <Main catSlug={catSlug} filterData={filterData} searchParams={searchParams} device={device} />
        </div>
    )
}