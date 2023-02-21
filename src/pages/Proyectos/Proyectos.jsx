import './Proyectos.css'
import background from '../../assets/img/proyectos/pies-y-manos-de-bebe.png'
import proyects from '../../utils/proyectos.json'

const Proyectos = () => {
  return (
    <main className='proyectos'>
      <section>
        <img src={background} alt='Proyecto Amparo - Hogar El Alba' />
      </section>
      <section>
        <h1>Nuestros Proyectos</h1>
        <div className='card-container'>
          {proyects.map((proyect) => {
            const { id, title, description, img, bgColor } = proyect
            return (
              <div
                key={id}
                style={{ background: bgColor }}
                className='proyect-card'
              >
                <div className='title'>
                  <img
                    src={require(`../../assets/icons/proyectos/${img}`)}
                    alt={title}
                  />
                  <h2>
                    Proyecto <span>{title}</span>
                  </h2>
                </div>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Proyectos
