import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../../src/logo.png'

const Header = () => {
  return (
    <>
        <header>
            <nav>
                  <div className="logo-container">
                    <Link to="/">
                      <img src={logo} alt="logo" className="logo" />
                    </Link>
                  </div>
                   <div className="categories-container">
                        <ul className="categories">
                                <li className="category"><Link to='/nosotros' >Nosotros</Link></li>
                                <li className="category"><Link to='/proyectos'>Proyectos</Link></li>
                                <li className="category"><Link to='/servicios'>Servicios</Link></li>
                                <li className="category"><Link to='/contacto'>Contacto</Link></li>
                        </ul>
                        
                        <Link to='/quiero-ayudar' className="donate-btn">QUIERO AYUDAR</Link>
                   </div>

            </nav>
        </header>
    </>
  )
}

export default Header