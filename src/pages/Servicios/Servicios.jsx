import './Servicios.css'
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

const Servicios = () => {

  return (
    <main className="servicios">
            <h1 className='servicios-title'>Servicios que ofrecemos</h1>
          
          <div className="gallery-container">
                 <div className="gallery-images">

                    <div className="card-image-container">
                        <div className="image-container">
                          <img src={zonaCarpas} alt="zona-de-carpas" 
                          
                          />
                        </div>
                        <div className="caption">Zona de carpas</div>
                    </div>

                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={eventosRecreativos} alt="eventos-recreativos" />
                        </div>
                        <div className="caption">Eventos recreativos</div>
                    </div>
                  
                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={eventosDeportivos} alt="eventos-deportivos" />
                        </div>
                        <div className="caption">Eventos deportivos</div>
                    </div>
                  
                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={eventosEmpresariales} alt="eventos-empresariales" />               
                        </div>
                        <div className="caption">Eventos empresariales</div>
                    </div>
                  
                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={eventosSociales} alt="eventos-sociales" />                
                        </div>
                        <div className="caption">Eventos sociales</div>
                    </div>
                  
                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={gimnasio} alt="gimnasio" />                 
                        </div>
                        <div className="caption">Gimnasio</div>
                    </div>
                  
                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={zonaPicnic} alt="zona-de-picnic" />
                        </div>
                        <div className="caption">Zona de picnic</div>
                    </div>
                  
                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={quincho} alt="quincho" />                
                        </div>
                        <div className="caption">Quincho</div>
                    </div>
                  
                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={plaza} alt="plaza" />                  
                        </div>
                        <div className="caption">Plaza de juegos</div>
                    </div>
                  
                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={pileta} alt="pileta" />                   
                        </div>
                        <div className="caption">Pileta</div>
                    </div>

                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={aireLibre} alt="eventos-al-aire-libre" />                 
                        </div>
                        <div className="caption">Eventos al aire libre</div>
                    </div>

                    <div className="card-image-container">
                        <div className="image-container">
                        <img src={campamento} alt="campamento-holanda" />  
                        </div>
                        <div className="caption">Campamento Holanda</div>
                    </div>
                  
                </div>
              </div>     

    </main>
  )
}

export default Servicios
