import './Modal.css';
import galería from '../../utils/galería.json'
import { useState } from 'react';

const Modal = ({estado, cambiarEstado, images}) => { /* paso como props el estado y su actualización */

const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>  
    { estado &&  /* si hay un estado true me renderiza el modal */

        <div className="overlay">
            <div className="modal-container">
                <button 
                className="close-modal"
                onClick={
                  () => cambiarEstado(false) /* Cambia el estado a falso para cerrar el modal */
                } 
                >X</button>
                <div className="modal-img-container">
                       <img 
                       src={require(`../../assets/img/servicios/${images.img}`)} 
                       alt="img-modal" 
                       className="img-modal"
                       key={images.id} />
                </div>
            </div>
        </div>
    }
    </>
  )
}

export default Modal;