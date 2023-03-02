import './Nosotros.css'
/* assets */
import waveNosotros from '../../assets/img/nosotros/wave-acerca-nosotros.png'
const Nosotros = () => {
  return (
    <main className="nosotros">
        <div className="info-nosotros-container">
            
            <div className="subcategories-nosotros-container">
                <button className="acerca-nosotros nosotros-btn">Acerca de nosotros</button>
                <button className="wcm-nosotros nosotros-btn">William C. Morris</button>
                <button className="historia-nosotros nosotros-btn">Historia del hogar</button>
                <button className="financiación-nosotros nosotros-btn">Cómo nos financiamos</button>
            </div>
            
            <div className='info-text-nosotros-container'>
                <div className='info-text-nosotros'>
                  <p>El Hogar El Alba es una Asociación Civil fundada por William Case Morris y dedicada, desde 1925, a brindar un espacio de contención, crecimiento, abrigo y protección a niños, niñas y adolescentes con derechos vulnerados. </p>
                  <p>A lo largo de su trayectoria, el hogar ha llevado adelante diferentes programas y proyectos en pos de la niñez desprotegida.</p>
                  <p>Se realizaron alianzas y articulaciones con distintas instituciones como la fundación CDI (capacitación digital), fundación Banco de Alimentos, Universidad Nacional de Lomas de Zamora, Canford School, Sams y Latin Link. También participó en concursos y foros sobre temáticas relacionadas con la niñez y adolescencia.</p>
                  <p>En el año 2008 fue reconocido con el premio “Juntos educar” otorgado por la vicaria episcopal de educación.</p>
                </div>
            </div>

{/*         <img src={waveNosotros} alt="" className="acerca-nosotros-wave" />
 */}        </div>
    </main>
  )
}

export default Nosotros
