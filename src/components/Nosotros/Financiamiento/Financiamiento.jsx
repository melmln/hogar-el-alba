import './Financiamiento.css'
import { Link } from 'react-router-dom'
/* assets */
import waveFinanciamiento from '../../../assets/img/nosotros/wave-financiamiento.png'

const Financiamiento = () => {
  return (
    <main className="financiamiento">
        <div className="info-financiamiento-container">
            
            <div className="subcategories-financiamiento-container">
                <Link to='/nosotros'>
                  <button className="nosotros-btn">Acerca de nosotros</button>
                </Link>
                <Link to='/william-morris'>
                  <button className="nosotros-btn">William C. Morris</button>
                </Link>
                <Link to='/historia'>
                  <button className="nosotros-btn">Historia del hogar</button>
                </Link>
                <Link to='/financiamiento'>
                  <button className="nosotros-btn financiamiento-btn">Cómo nos financiamos</button>
                </Link>
            </div>
            
            <div className='info-text-financiamiento-container'>
                <div className='info-text-financiamiento'>
                  <p>El Hogar El Alba es una Asociación Civil fundada por William Case Morris y dedicada, desde 1925, a brindar un espacio de contención, crecimiento, abrigo y protección a niños, niñas y adolescentes con derechos vulnerados. </p>
                  <p>A lo largo de su trayectoria, el hogar ha llevado adelante diferentes programas y proyectos en pos de la niñez desprotegida.</p>
                  <p>Se realizaron alianzas y articulaciones con distintas instituciones como la fundación CDI (capacitación digital), fundación Banco de Alimentos, Universidad Nacional de Lomas de Zamora, Canford School, Sams y Latin Link. También participó en concursos y foros sobre temáticas relacionadas con la niñez y adolescencia.</p>
                  <p>En el año 2008 fue reconocido con el premio “Juntos educar” otorgado por la vicaria episcopal de educación.</p>
                </div>
            </div>

         </div>
          <div className="financiamiento-wave-container">
            <img src={waveFinanciamiento} alt="wave-financiamiento" className="financiamiento-wave" />
          </div>
    </main>
  )
}

export default Financiamiento