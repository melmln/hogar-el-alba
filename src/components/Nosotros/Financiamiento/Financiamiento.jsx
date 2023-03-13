import './Financiamiento.css';
import { Link } from 'react-router-dom';
/* imágenes */
import waveFinanciamiento from '../../../assets/img/nosotros/wave-financiamiento.png';

const Financiamiento = () => {
  return (
    <main className="financiamiento">
        <div className="info-financiamiento-container">

                    {/* Subcategorías */}

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

                      {/* Informacion */}
  
            <div className='info-text-financiamiento-container'>
                <div className='info-text-financiamiento'>
                  <p>El Hogar El Alba se sostiene con diversos recursos financieros. Desde hace más de 20 años, a través de convenios realizados con el Gobierno de la Provincia de Buenos Aires, el hogar recibe becas para el sostenimiento de los niños. Por otra parte, se llevan adelante microemprendimientos relacionados con actividades rurales y de campo, como producción y venta de quesos, miel y productos de panadería.</p>
                  <p>Se realizan articulaciones con entidades que colaboran solidariamente con el hogar. Algunas de ellas nacionales, como el banco de alimentos, entidades religiosas, escuelas y organizaciones de la comunidad; otras extranjeras como escuelas e iglesias.</p>
                </div>
            </div>
         </div>
                       {/* Wave */}

          <div className="financiamiento-wave-container">
            <img src={waveFinanciamiento} alt="wave-financiamiento" className="financiamiento-wave" />
          </div>
    </main>
  )
}

export default Financiamiento;