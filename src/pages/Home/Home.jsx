import './Home.css'
/* assets */
import whiteLine from '../../assets/img/home/white-line.png'
import whiteLineLoop from '../../assets/img/home/white-line-loop.png'
import whiteWave from '../../assets/img/home/white-wave.png'
import irregularHome from '../../assets/img/home/irregular-home.png'
import whiteWaveMobile from '../../assets/img/home/white-wave-mobile.png'
import yellowCard from '../../assets/img/home/yellow-card.png'
import redCard from '../../assets/img/home/red-card.png'
import blueCard from '../../assets/img/home/blue-card.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='home'>

        <div className="banner-container">
          <div className="white-wave-container">
            <img className="white-wave" src={whiteWave} alt='white-wave'/>
             <img className='white-wave-mb' src={whiteWaveMobile} alt='white-wave-mb'/>
          </div>
        </div>
        
                      {/* Cards */}
        <div className="home-cards-container">

             <div className="home-card proyectos">
                  <img src={yellowCard} alt="yellow-card" className="img-proyectos" />
                  <div className="home-card-content">
                      <p>¿Sabías que el hogar cuenta con 5 proyectos?</p>
                      <Link to="/proyectos">
                        <button className='home-card-btn proyectos-btn'>CONOCELOS</button>
                      </Link>
                  </div>
              </div>

              <div className="home-card donar">
                  <img src={redCard} alt="red-card" className="img-proyectos" />
                  <div className="home-card-content">
                        <p>Tu aporte es muy valioso para el hogar</p>
                        <Link to='/quiero-ayudar'>
                          <button className='home-card-btn donar-btn'>SUMATE</button>
                        </Link>
                  </div>
              </div>

                <div className="home-card adoptar">
                    <img src={blueCard} alt="blue-card" className="img-proyectos" />
                    <div className="home-card-content">
                        <p>¿Querés conocer los requisitos para adoptar?</p>
                        <Link to='/contacto'>
                          <button className='home-card-btn adoptar-btn'>CONTACTATE</button>
                        </Link>
                    </div>
                </div>  

        </div>
                 {/* Frase William Morris */}
          <div className="quote-container">
{/*           <img className='irregular-home' src={irregularHome} alt='irregular-home'/>
 */}
            <div className="quote-line-container">
                <img className='line'
                src={whiteLine} alt="line" />
                <h1>Frase Lema WILLIAM CASE MORRIS</h1>
                <img className='line-loop'
                src={whiteLineLoop} alt="line-loop" />
            </div>
            <span className='fundador-hogar'>-Fundador Hogar-</span>
            <p className='quote-william-morris'>
            "Pasaré por este mundo una sola vez. Si hay alguna palabra bondadosa que yo pueda pronunciar alguna noble acción
            que yo pueda efectuar diga yo esa palabra, haga yo esa acción ahora,  pues no pasaré más por aquí..."
            </p>
        </div>
    </main>
  )
}

export default Home
