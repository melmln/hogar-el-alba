import './Contacto.css'
import locationMap from '../../assets/img/contacto/mapa-de-ubicacion.png'

const Contacto = () => {
  return (
    <main className='contact'>
      <section className='contact-title'>
        <h1>Contactanos</h1>
        <h2>Escribinos para más información y visitanos en el hogar</h2>
      </section>
      <section>
        <img src={locationMap} alt='Mapa de locación de Hogar El Alba' />
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
          <textarea name='mensaje' id='mensaje' cols='30' rows='10' placeholder='Mensaje'></textarea>
          <input type='submit' value='Enviar' />
        </form>
      </section>
    </main>
  )
}

export default Contacto
