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
              <img src={zonaCarpas} alt="zona-de-carpas" />
              <img src={eventosRecreativos} alt="eventos-recreativos" />
              <img src={eventosDeportivos} alt="eventos-deportivos" />
              <img src={eventosEmpresariales} alt="eventos-empresariales" />               
              <img src={eventosSociales} alt="eventos-sociales" />                
              <img src={gimnasio} alt="gimnasio" />                 
              <img src={zonaPicnic} alt="zona-de-picnic" />
              <img src={quincho} alt="quincho" />                
              <img src={plaza} alt="plaza" />                  
              <img src={pileta} alt="pileta" />                   
              <img src={aireLibre} alt="eventos-al-aire-libre" />                 
              <img src={campamento} alt="campamento-holanda" />       
          </div>
    </main>
  )
}

export default Servicios
