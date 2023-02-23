import './App.css'
/* Components */
import Header from '../src/components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Proyectos from './pages/Proyectos/Proyectos'
import Nosotros from './pages/Nosotros/Nosotros'
import Servicios from './pages/Servicios/Servicios'
import Contacto from './pages/Contacto/Contacto'
import QuieroAyudar from './pages/QuieroAyudar/QuieroAyudar'

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/quiero-ayudar' element={<QuieroAyudar/>} />
        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
