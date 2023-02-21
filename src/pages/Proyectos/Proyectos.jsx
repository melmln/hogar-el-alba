import './Proyectos.css'
import background from '../../assets/img/proyectos/pies-y-manos-de-bebe.png'
import proyects from '../../utils/proyectos.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Proyectos = () => {
  const params = {
    modules: [Pagination, Navigation, Scrollbar, A11y],
    spaceBetween: 30,
    slidesPerView: 3,
    pagination: {
      clickable: true,
    },
    navigation: true,
    centeredSlides: true,
    scrollbar: {
      draggable: true,
    },
    // Responsive
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }


    },
    initialSlide: 2
  }

  return (
    <main className='proyectos'>
      <section>
        <img src={background} alt='Proyecto Amparo - Hogar El Alba' />
      </section>
      <section>
        <h1>Nuestros Proyectos</h1>
        {/* <div className='card-container'> */}
        <Swiper className='card-container' {...params}>
          {proyects.map((proyect) => {
            const { id, title, description, img, bgColor } = proyect
            return (
              <SwiperSlide key={id}>
                <div style={{ background: bgColor }} className='proyect-card'>
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
              </SwiperSlide>
            )
          })}
        </Swiper>
        {/* </div> */}
      </section>
    </main>
  )
}

export default Proyectos
