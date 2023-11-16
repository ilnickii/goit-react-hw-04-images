import CSS from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({images}) => {
    return (
        <ul className={CSS.ImageGallery}>
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    image={image}
                />
            ))}
        </ul>
    );
};