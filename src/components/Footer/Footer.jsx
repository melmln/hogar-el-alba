import './Footer.css'
import { Link } from 'react-router-dom'
/* icons */
import wspIcon from '../../assets/icons/whatsapp-icon.png'
import emailIcon from '../../assets/icons/email-icon.png'
import mapIcon from '../../assets/icons/map-icon.png'
import fbIcon from '../../assets/icons/facebook-icon.png'
import igIcon from '../../assets/icons/instagram-icon.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__child'>
        <ul>
          <li>
            <Link
              to={
                'https://api.whatsapp.com/send?phone=+5491133103145&text=%C2%A1Hola%20Hogar%20El%20Alba!%20Quiero%20comunicarme%20con%20ustedes%20por%20el%20siguiente%20motivo:'
              }
              target='_blank'
            >
              <img src={wspIcon} alt='Whatsapp Icon' />
              <p>+54 9 11 3310-3145</p>
            </Link>
          </li>
          <li>
            <Link to={'mailto:hogarelalba1925@gmail.com'}>
              <img src={emailIcon} alt='Email Icon' />
              <p>hogarelalba1925@gmail.com</p>
            </Link>
          </li>
          <li>
            <Link>
              {/* TODO: Link a la sección del mapa cuando esté implementada la PAGE */}
              <img src={mapIcon} alt='Map Icon' />
              <p>Juan B. Justo 803, Longchamps, Buenos Aires, Argentina.</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer__child'>
        <ul>
          <li>
            <Link to={'https://www.instagram.com/hogarelalba/'} target='_blank'>
              <img
                src={igIcon}
                alt='Instagram Icon'
              />
              <p>@hogarelalba</p>
            </Link>
          </li>
          <li>
            <Link
              to={
                'https://www.facebook.com/people/Hogar-El-Alba/100047750509164/'
              }
              target='_blank'
            >
              <img src={fbIcon} alt='Facebook Icon' />
              <p>Hogar El Alba</p>
            </Link>
          </li>
          <li>
            <Link
              to={'https://www.google.com/search?q=hogar+el+alba'}
              target='_blank'
            >
              <p className='google-comments'>82 comentarios de google</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
