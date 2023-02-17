import './Home.css'
import home from '../../assets/img/home.png'

const Home = () => {
  return (
    <main className='home'>
        <div className="banner-container">
            <img src={home} alt="" className="banner" />
        </div>
    </main>
  )
}

export default Home
