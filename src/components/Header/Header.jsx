import './Header.css'
/* Logo */
import logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <>
        <header>
            <nav>
                  <div className="logo-container">
                     <img src={logo} alt="logo" className="logo" />
                  </div>
                   <div className="categories-container">
                        <ul className="categories">
                                <li className="category">Nosotros</li>
                                <li className="category">Proyectos</li>
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