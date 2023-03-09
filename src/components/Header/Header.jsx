import './Header.css'
import { Link} from 'react-router-dom'
import { useState } from 'react';
/* Assets */
import logo from '../../../src/logo.png'
import bm from '../../assets/img/bm.png'
import headerBackground from '../../assets/img/background-header.png'


const Header = () => {

  const [bmOpen, setBmOpen] = useState(false)

  const bmChange = () => {
    setBmOpen(!bmOpen)
  }
   const [catgActive, setCatActive] = useState('')

  const categoryActive = (category) => {
    setCatActive(category)
  }
 
  return (
        <header>
            <nav>
                                {/* Logo */}

                  <div className="logo-container">
                    <Link to="/">
                      <img src={logo} alt="logo" className="logo" />
                    </Link>
                  </div>

                                {/* Categorías */}

                    <div className={`categories-container ${bmOpen && 'open'}`}>
                          <ul className="categories">
                              <li 
                                className={`category ${catgActive === 'nosotros-category' ? 'active' : ''}` }
                                onClick={() => categoryActive('nosotros-category')}>
                                <Link to='/nosotros' >Nosotros</Link>
                              </li>
                                  
                              <li 
                                className={`category ${catgActive === 'proyectos-category' ? 'active' : ''}` }
                                onClick={() => categoryActive('proyectos-category')}>
                                <Link to='/proyectos'>Proyectos</Link>
                              </li>
                                  
                              <li 
                               className={`category ${catgActive === 'servicios-category' ? 'active' : ''}` }
                               onClick={() => categoryActive('servicios-category')}>
                                <Link to='/servicios'>Servicios</Link>
                              </li>
                              
                              <li  className={`category ${catgActive === 'contacto-category' ? 'active' : ''}` }
                                onClick={() => categoryActive('contacto-category')}>
                                <Link to='/contacto'>Contacto</Link>
                              </li>
                          </ul>
                          
                          <Link to='/quiero-ayudar' className="donate-btn">QUIERO AYUDAR</Link>
                   </div>

                                 {/* Burguer Menu */}

                    <div className={`bm-container ${bmOpen && 'open'}`} onClick={bmChange}>
                       <img src={bm} alt="burguer-menu" />
                    </div>
            </nav>
                                {/* Fondo Header */}
                                
            <div className="background-header-container">
              <img src={headerBackground} alt="background-header" />
            </div>
        </header>
  )
}

export default Header