import { useState } from 'react';
import { ImageModal } from '../Modal/Modal'
import CSS from './ImageGalleryItem.module.css';


export const ImageGalleryItem = ({ image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false)
    }

      return (
            <div>
                <li className={CSS.ImageGalleryItem} onClick={openModal}>
                    <img
                        src={image.webformatURL}
                        alt={image.user}
                        className={CSS.ImageGalleryItemImage}
                    
                    />
                </li>
                <ImageModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    image={image}
                />
            </div>
        )
};
