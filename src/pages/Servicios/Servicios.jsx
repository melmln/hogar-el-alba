import './Servicios.css'
import { useContext, useState, useEffect } from 'react'
import { CategoryContext } from '../../context/CategoryContext'
/* componentes */
import Modal from '../../components/Modal/Modal'
/* imágenes */
import zonaCarpas from '../../assets/img/servicios/zona-carpas.png'
import eventosRecreativos from '../../assets/img/servicios/eventos-recreativos.png'
import eventosDeportivos from '../../assets/img/servicios/deportivos.png'
import eventosEmpresariales from '../../assets/img/servicios/empresariales.png'
import eventosSociales from '../../assets/img/servicios/sociales.png'
import gimnasio from '../../assets/img/servicios/gimnasio.png'
import zonaPicnic from '../../assets/img/servicios/zona-picnic.png'
import quincho from '../../assets/img/servicios/quincho.png'
import plaza from '../../assets/img/servicios/plaza.png'
import pileta from '../../assets/img/servicios/pileta.png'
import aireLibre from '../../assets/img/servicios/aire-libre.png'
import campamento from '../../assets/img/servicios/campamento.png'

/* json */
import galería from '../../utils/galería.json'

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

      </div>container
      <h1 className='servicios-title'>Servicios que ofrecemos</h1>

      <div className='gallery-container'>
        <div className='gallery-images'>
          {
            galería.map((images) => {
              return (
              <div 
              className='card-image-container'
              key={images.id} 
              onClick={() => 
                {
                  setModalState(!modalState);
                  setSelectedImage(images); // Se actualiza el estado de la imagen seleccionad porque recibe el parametro del mapeo de cada img
                }
            }
              >
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

export default Servicios
