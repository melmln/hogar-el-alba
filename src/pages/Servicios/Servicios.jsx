import './Servicios.css';
import { useContext, useState} from 'react';
import { CategoryContext } from '../../context/CategoryContext';
/* componentes */
import Modal from '../../components/Modal/Modal';
/* json */
import galería from '../../utils/galería.json';

const Servicios = () => {
  const { changeCategory } = useContext(CategoryContext)

  /* Modal */
  const [modalState, setModalState] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Estado de la imagen seleccionada

  return (
    <main className='servicios' onLoad={() => changeCategory('servicios')}>
     
      <div className="modal-servicios-container">
        {selectedImage &&
              <Modal 
              estado = {modalState}
              cambiarEstado = {setModalState}
              images = {selectedImage} // Imágen seleccionada actual
              />
          }
       </div>

      <h1 className='servicios-title'>Servicios que ofrecemos</h1>
  
      <div className='gallery-container'>
        <div className='gallery-images'>
            {
              galería.map((images) => {
                return (
                  <div 
                  className='card-image-container'
                  key={images.id} 
                  onClick={
                    () => { setModalState(!modalState); setSelectedImage(images);} // Se actualiza el estado de la imagen seleccionad porque recibe el parametro del mapeo de cada img
                  }>
                      <div className='image-container'>
                        <img src={require(`../../assets/img/servicios/${images.img}`)} alt={images.title} />
                      </div>
                      <div className='caption'>{images.title}</div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </main>
  )
}

export default Servicios;
