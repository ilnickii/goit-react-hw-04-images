import { Component } from 'react';
import { ImageModal } from '../Modal/Modal'
import CSS from './ImageGalleryItem.module.css';


export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    openModal = () => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen,
        }));
    };
    
  

    closeModal = () => {
      this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen,
        }));
    };


    render() {
        const { isModalOpen } = this.state;
        const { image } = this.props;

        return (
            <div>
                <li className={CSS.ImageGalleryItem} onClick={this.openModal}>
                    <img
                        src={image.webformatURL}
                        alt={image.user}
                        className={CSS.ImageGalleryItemImage}
                    
                    />
                </li>
                <ImageModal
                    isOpen={isModalOpen}
                    onClose={this.closeModal}
                    image={image}
                />
            </div>
        )
    }
}









// export const ImageGalleryItem = ({image}) => {
//     return (
//         <li className={CSS.ImageGalleryItem}>
//            <img
//               src={image.webformatURL}
//               alt={image.user}
//                 className={CSS.ImageGalleryItemImage}
                
//             />
//             <ImageModal/>
//     </li>
//     )
// }