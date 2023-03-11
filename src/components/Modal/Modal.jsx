import './Modal.css';
import campamento from '../../assets/img/servicios/campamento.png'

const Modal = ({estado, cambiarEstado}) => { /* paso como props el estado y su actualización */
  return (
    <>  
    { estado &&  /* si hay un estado true me renderiza el modal */

        <div className="overlay">
            <div className="modal-container">
                <button 
                className="close-modal"
                onClick={() => cambiarEstado(false)} /* Cambia el estado a falso para cerrar el modal */
                >X</button>
                <div className="modal-img-container">
                    <img src={campamento} alt="" className="img-modal" />
                </div>
            </div>
        </div>

    }
    </>
  )
}

export default Modal;