import Modal from 'react-modal';


Modal.setAppElement('#root');


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ImageModal = ({isOpen, onClose,image}) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel=" ImageModal"
      >
        <img src={image.webformatURL} alt={image.user} />
        <button onClick={onClose}>close</button>
      </Modal>
    );
};

