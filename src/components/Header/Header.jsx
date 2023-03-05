import './Header.css'
import { Link } from 'react-router-dom'
/* Assets */
import logo from '../../../src/logo.png'
import bm from '../../assets/img/bm.png'
import { useState } from 'react';


const Header = () => {

  const [bmOpen, setBmOpen] = useState(false)

  const bmChange = () => {
    setBmOpen(!bmOpen)
  }

  return (
        <header>
            <nav>
                  <div className="logo-container">
                    <Link to="/">
                      <img src={logo} alt="logo" className="logo" />
                    </Link>
                  </div>
                    <div className={`categories-container ${bmOpen && 'open'}`}>
                          <ul className="categories">
                                  <li className="category"><Link to='/nosotros' >Nosotros</Link></li>
                                  <li className="category"><Link to='/proyectos'>Proyectos</Link></li>
                                  <li className="category"><Link to='/servicios'>Servicios</Link></li>
                                  <li className="category"><Link to='/contacto'>Contacto</Link></li>
                          </ul>
                          
                          <Link to='/quiero-ayudar' className="donate-btn">QUIERO AYUDAR</Link>
                   </div>

                    <div className={`bm-container ${bmOpen && 'open'}`} onClick={bmChange}>
                       <img src={bm} alt="burguer-menu" />
                    </div>
            </nav>
        </header>
  )
}

export default Header