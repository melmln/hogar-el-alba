import './Contacto.css'
import { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'

const Contacto = () => {
  const { changeCategory } = useContext(CategoryContext)

  return (
    <main className='contact' onLoad={() => changeCategory('contacto')}>
      <section className='contact-title'>
        <h1>Contactanos</h1>
        <h2>Escribinos para más información y visitanos en el hogar</h2>
      </section>
      <section>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.3736491407026!2d-58.360588848070016!3d-34.85813831160454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32ac2e898d52d%3A0x6f816b01b7294e71!2sHogar%20%22El%20Alba%22!5e0!3m2!1ses-419!2sar!4v1678406714914!5m2!1ses-419!2sar'
          style={{ border: 0, width: '100%', height: '550px' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Mapa de locación de Hogar El Alba'
        />
      </section>
      <section className='form-section'>
        <form action='' method=''>
          <h2>Envianos un mensaje</h2>
          <div>
            <input
              type='text'
              name='nombre'
              id='nombre'
              placeholder='Nombre'
              required
            />
            <input
              type='tel'
              name='telefono'
              id='telefono'
              placeholder='Teléfono'
              required
            />
          </div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            required
          />
          <textarea
            name='mensaje'
            id='mensaje'
            cols='30'
            rows='10'
            placeholder='Mensaje'
          ></textarea>
          <input type='submit' value='Enviar' />
        </form>
      </section>
    </main>
  )
}

export default Contacto
