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
          <div className="servicios-title-container">
            <h2 className='servicios-title'>Servicios que ofrecemos</h2>
            <div className="line-servicios-title"></div>
          </div>
          <div className="row-container">
              <div className="first-row">

                <div className='servicio-card'>
                  <img src={zonaCarpas} alt="zona-de-carpas" />
                   <div className='servicio-card-title'>Zona de carpas</div>
                </div>

                <div className="servicio-card">
                  <img src={eventosRecreativos} alt="eventos-recreativos" />
                  <div className="servicio-card-title">Eventos recreativos</div>
                </div>

                <div className="servicio-card">
                  <img src={eventosDeportivos} alt="niños" />
                  <div className="servicio-card-title">Eventos deportivos</div>
                </div>

                <div className="servicio-card">
                  <img src={eventosEmpresariales} alt="silla" />
                  <div className="servicio-card-title">Eventos empresariales</div>
                </div>
            </div>

            <div className="second-row">
                <div className="servicio-card">
                  <img src={eventosSociales} alt="reunión" />
                      <div className="servicio-card-title">Eventos sociales</div>
                </div>

                <div className="servicio-card">
                  <img src={gimnasio} alt="" />
                  <div className="servicio-card-title">Gimnasio</div>
                </div>

                <div className="servicio-card">
                  <img src={zonaPicnic} alt="" />
                  <div className="servicio-card-title">Zona de picnic</div>
                </div>

                <div className="servicio-card">
                  <img src={quincho} alt="" />
                  <div className="servicio-card-title">Quincho</div>
                </div>
            </div>

            <div className="third-row">
              <div className="servicio-card">
                  <img src={plaza} alt="" />
                  <div className="servicio-card-title">Plaza de juegos</div>
              </div>

              <div className="servicio-card">
                  <img src={pileta} alt="" />
                  <div className="servicio-card-title">Pileta</div>
              </div>

              <div className="servicio-card">
                  <img src={aireLibre} alt="" />
                  <div className="servicio-card-title">Eventos al aire libre</div>
              </div>

              <div className="servicio-card">
                  <img src={campamento} alt="" />
                  <div className="servicio-card-title">Campamento Holanda</div>
                </div>
            </div>
          </div>
    </main>
  )
}

export default Servicios
