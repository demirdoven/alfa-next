'use client'
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const Gallery = ( { media } ) => {
	
	let productImage = "https://cdn.alfatires.eu/products/tires/"+media+".webp";
    if( media == "" || media == null ){
		productImage = "https://cdn.alfatires.eu/theme/no-image-white.webp";
	}

    const galleryImages = [
        {
            original: productImage,
            thumbnail: productImage,
        }
    ];

	return <ImageGallery items={galleryImages} />;
};

export default Gallery;