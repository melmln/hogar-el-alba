import './Home.css'
import whiteLine from '../../assets/img/home/white-line.png'
import whiteLineLoop from '../../assets/img/home/white-line-loop.png'

const Home = () => {
  return (
    <main className='home'>
        <div className="banner-container"></div>
        <div className="white-wave-container">
        <div className="black-line-container"></div>

        </div>
                      {/* Cards */}
        <div className="cards-container">
            <div className="left-card">
                  <p>¿Sabías que el hogar cuenta con 5 proyectos?</p>
                  <button className='conocelos-btn'>CONOCELOS</button>
            </div>

            <div className="central-card">
                <p>Tu aporte es muy valioso para el hogar</p>
                <button className='sumate-btn'>SUMATE</button>
            </div>

            <div className="right-card">
                <p>¿Sabés cuales son los requisitos para adoptar?</p>
                <button className='te-contamos-btn'>TE CONTAMOS</button>
            </div> 
        </div>
                 {/* Frase William Morris */}
          <div className="quote-container">
            <div className="quote-line-container">
              <img className='line'
              src={whiteLine} alt="line" />
              <h3>Frase Lema WILLIAM CASE MORRIS</h3>
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
