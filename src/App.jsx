import './App.css'
/* Components */
import Header from '../src/components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Proyectos from './pages/Proyectos/Proyectos'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
