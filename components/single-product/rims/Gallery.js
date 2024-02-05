'use client'
import ImageGallery from 'react-image-gallery';

const Gallery = ( { variants, variationID } ) => {

    let galleryImages = []
    let galleryImagesPairs = []

    variants.map( (variant, index) => {
        
        if( ! galleryImages.includes(variant?.image?.src) ){
            galleryImages.push(variant?.image?.src)
            galleryImagesPairs.push({
                original: variant?.image?.src,
                thumbnail: variant?.image?.src,
            })
        }

            
        
        
    })
    
    // console.log(galleryImagesPairs)
    
    // galleryImages = [
    //     {
    //         original: variants[0]?.image?.src,
    //         thumbnail: variants[0]?.image?.src,
    //     },
    //     {
    //         original: variants[1]?.image?.src,
    //         thumbnail: variants[1]?.image?.src,
    //     }
    // ]

	return <ImageGallery items={galleryImagesPairs} disableThumbnailScroll={true} />;
};

export default Gallery;