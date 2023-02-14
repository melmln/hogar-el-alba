import './Header.css'
import { Link } from 'react-router-dom'
/* Logo */
import logo from '../../assets/img/logo.png'

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
                                <li className="category">Nosotros</li>
                                <li className="category"><Link to={'/proyectos'}>Proyectos</Link></li>
                                <li className="category">Servicios</li>
                                <li className="category">Contacto</li>
                        </ul>
                        <button className="donate-btn">QUIERO AYUDAR</button>
                   </div>

            </nav>
        </header>
    </>
  )
}

export default Header