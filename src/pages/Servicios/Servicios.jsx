import './Servicios.css'
/* imágenes */
import zonaCarpas from '../../assets/img/servicios/zona-carpas.png'
import eventosRecreativos from '../../assets/img/servicios/eventos-recreativos.png'
import niños from '../../assets/img/servicios/niños.png'
import sillas from '../../assets/img/servicios/sillas.png'
import reunión from '../../assets/img/servicios/reunión.png'
import gimnasio from '../../assets/img/servicios/gimnasio.png'
import zonaPicnic from '../../assets/img/servicios/zona-picnic.png'
import quincho from '../../assets/img/servicios/quincho.png'
import plaza from '../../assets/img/servicios/plaza.png'
import pileta from '../../assets/img/servicios/pileta.png'
import misa from '../../assets/img/servicios/misa.png'
import campamento from '../../assets/img/servicios/campamento-2.png'

const Servicios = () => {
  return (
    <main className="servicios">
          <div className="servicios-title-container">
            <h2 className='servicios-title'>Servicios que ofrecemos</h2>
            <div className="line-servicios-title"></div>
          </div>
          <div className="row-container">
              <div className="first-row">
                <img src={zonaCarpas} alt="zona-de-carpas" />
                <img src={eventosRecreativos} alt="eventos-recreativos" />
                <img src={niños} alt="niños" />
                <img src={sillas} alt="silla" />
            </div>

            <div className="second-row">
                <img src={reunión} alt="reunión" />
                <img src={gimnasio} alt="" />
                <img src={zonaPicnic} alt="" />
                <img src={quincho} alt="" />
            </div>

            <div className="third-row">
                <img src={plaza} alt="" />
                <img src={pileta} alt="" />
                <img src={misa} alt="" />
                <img src={campamento} alt="" />
            </div>
          </div>
    </main>
  )
}

export default Servicios
