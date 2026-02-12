

import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import UnderConstruction from './components/UnderConstruction'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>

      <Navbar />


      <main className="main-content">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects/" element={<UnderConstruction/>} />
        <Route path="/contact/" element={<Contact/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>

      <Footer/>

      <WhatsAppButton/>

    </>
    
  )
}

export default App
